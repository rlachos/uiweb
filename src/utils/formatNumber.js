export function formatNumber(contactNumber) {
   
    const cleanedNumber = contactNumber.replace(/\D/g, '');
  
  
    if (cleanedNumber.length === 10) {
      return (
        cleanedNumber.slice(0, 3) +
        "-" +
        cleanedNumber.slice(3, 6) +
        "-" +
        cleanedNumber.slice(6)
      );
    } else if (cleanedNumber.length < 10) {
      
      const zerosToAdd = 10 - cleanedNumber.length;
      const paddedNumber = '0'.repeat(zerosToAdd) + cleanedNumber;
      return (
        paddedNumber.slice(0, 3) +
        "-" +
        paddedNumber.slice(3, 6) +
        "-" +
        paddedNumber.slice(6)
      );
    } else {
      
      return "Número de teléfono inválido";
    }
  }
  