export function useSheet() {
   const getSheet = async (url) => {
      try {
         // For Google Sheets published CSVs, DO NOT add cache-busting parameters.
         // They are strict about the URL format and will return a 400 error.

         // Use the 'cache: no-store' option to instruct the browser
         // to always fetch the latest version from the network.
         const response = await fetch(url, { cache: "no-store" });

         // Check if the response was successful (status code 200-299)
         if (!response.ok) {
            // Log the full URL for debugging purposes
            console.error(`Error fetching sheet from URL: ${url}`);
            throw new Error(
               `HTTP error! status: ${response.status} for URL: ${url}`,
            );
         }

         const data = await response.text();
         const rows = data.split("\n").filter((row) => row.trim() !== "");

         if (rows.length === 0) {
            console.warn("Sheet data is empty or malformed.");
            return { data: [], timestamp: null };
         }

         const headers = rows[0].split(",");
         const sheetData = rows.slice(1).map((row) => {
            const values = row.split(",");
            const score = {};
            headers.forEach((header, index) => {
               score[header.trim()] = (values[index] || "").trim();
            });
            return score;
         });

         // Filter to keep only the newest entries based on Updated_at
         const newestEntries = new Map();
         const firstColumnHeader = headers[0].trim();
         let latestTimestamp = null;

         sheetData.forEach((entry) => {
            const id = entry[firstColumnHeader];
            const updatedAt = entry["Updated_at"];

            if (
               !newestEntries.has(id) ||
               (updatedAt && updatedAt > newestEntries.get(id)["Updated_at"])
            ) {
               newestEntries.set(id, entry);
               if (
                  updatedAt &&
                  (!latestTimestamp || updatedAt > latestTimestamp)
               ) {
                  latestTimestamp = updatedAt;
               }
            }
         });

         return {
            data: Array.from(newestEntries.values()),
            timestamp: latestTimestamp,
         };
      } catch (error) {
         console.error("Error fetching sheet:", error);
         return { data: [], timestamp: null };
      }
   };

   return {
      getSheet,
   };
}
