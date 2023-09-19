import Papa from 'papaparse'; // Asegúrate de importar la biblioteca Papaparse

export default async function ApiFetch() {
    try {
        const response = await fetch("https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/samples?size=20");
        const textData = await response.text(); // Obtén el texto del CSV
        const parsedData = Papa.parse(textData, { header: true }); // Analiza el CSV

        console.log(parsedData.data); // Los datos analizados estarán en parsedData.data
        return parsedData.data;
    } catch (error) {
        console.error(error);
        throw error; // Puedes manejar el error o lanzarlo nuevamente para que sea manejado por el código que llama a esta función.
    }
}