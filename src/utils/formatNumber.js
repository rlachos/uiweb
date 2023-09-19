export function formatNumber(contactNumber) {
    // Eliminar cualquier carácter que no sea un dígito
    const cleanedNumber = contactNumber.replace(/\D/g, '');
  
    // Asegurarse de que haya exactamente 10 dígitos
    if (cleanedNumber.length === 10) {
      return (
        cleanedNumber.slice(0, 3) +
        "-" +
        cleanedNumber.slice(3, 6) +
        "-" +
        cleanedNumber.slice(6)
      );
    } else if (cleanedNumber.length < 10) {
      // Agregar ceros a la izquierda para completar 10 dígitos
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
      // Si hay más de 10 dígitos, devolver un mensaje de error o manejarlo según tus necesidades
      return "Número de teléfono inválido";
    }
  }
  