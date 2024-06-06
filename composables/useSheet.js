export function useSheet() {
   const getSheet = async (url) => {
      try {
         const response = await fetch(url);
         const data = await response.text();
         const rows = data.split("\n");
         const headers = rows[0].split(",");
         const sheetData = rows.slice(1).map((row) => {
            const values = row.split(",");
            const score = {};
            headers.forEach((header, index) => {
               score[header.trim()] = values[index].trim();
            });
            return score;
         });
         console.log("Sheet data:", sheetData);
         return sheetData;
      } catch (error) {
         console.error("Error fetching sheet:", error);
         return [];
      }
   };

   return {
      getSheet,
   };
}
