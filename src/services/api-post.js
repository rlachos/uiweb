export async function postRequest(requestOptions) {
    try {
      const apiurl = "https://8j5baasof2.execute-api.us-west-2.amazonaws.com/production/tests/trucode/items";
      const response = await fetch(apiurl, requestOptions);
  
      if (!response.ok) {
        throw new Error(`La solicitud no fue exitosa: ${response.status}`);
      }
  
      const responseData = await response.json(); // Espera a que la promesa se resuelva
      console.log(responseData); // Imprime la respuesta JSON
      return responseData;
    } catch (error) {
      throw error;
    }
  }
  