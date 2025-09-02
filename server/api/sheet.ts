import { defineEventHandler, getQuery, createError } from "h3";
import { useRuntimeConfig } from "#imports";

export default defineEventHandler(async (event) => {
   const query = getQuery(event) as Record<string, string | undefined>;
   const sheetId = query.sheetId;
   const range = query.range;

   const config = useRuntimeConfig();
   const API_KEY = config.googleSheetsApiKey;

   if (!sheetId || !range) {
      throw createError({
         statusCode: 400,
         statusMessage: "Missing sheetId or range query parameter",
      });
   }

   if (!API_KEY) {
      throw createError({
         statusCode: 500,
         statusMessage: "Missing Google Sheets API key on server.",
      });
   }

   const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${API_KEY}`;

   // Fetch the sheet from Google Sheets API
   let json: unknown = null;
   try {
      const res = await fetch(url);
      if (!res.ok) {
         const text = await res.text().catch(() => "<no body>");
         console.error("Google Sheets API returned non-OK:", res.status, text);
         throw createError({
            statusCode: 502,
            statusMessage: "Error fetching Google Sheets API",
         });
      }
      json = await res.json();
   } catch (err) {
      console.error("Error fetching Google Sheets API:", err);
      throw createError({
         statusCode: 502,
         statusMessage: "Error fetching Google Sheets API",
      });
   }

   const rows = (json && (json as any).values) || [];

   if (!rows || rows.length === 0) {
      return { data: [], timestamp: null };
   }

   const headers: string[] = rows[0] as string[];

   const sheetData: Record<string, string>[] = (rows as any[])
      .slice(1)
      .map((row: any[]) => {
         const obj: Record<string, string> = {};
         headers.forEach((header, idx) => {
            obj[header.trim()] = ((row && row[idx]) || "").toString().trim();
         });
         return obj;
      });

   // Keep only newest entries per first-column id, and compute latest timestamp
   const newestEntries = new Map<string, Record<string, string>>();
   const firstColumnHeader = headers[0].trim();
   let latestTimestamp: string | null = null;

   sheetData.forEach((entry) => {
      const id = entry[firstColumnHeader];
      const updatedAt = entry["Updated_at"];
      if (!id) return;

      if (
         !newestEntries.has(id) ||
         (updatedAt &&
            updatedAt > (newestEntries.get(id)?.["Updated_at"] || ""))
      ) {
         newestEntries.set(id, entry);
         if (updatedAt && (!latestTimestamp || updatedAt > latestTimestamp)) {
            latestTimestamp = updatedAt;
         }
      }
   });

   return {
      data: Array.from(newestEntries.values()),
      timestamp: latestTimestamp,
   };
});
