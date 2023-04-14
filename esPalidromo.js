function esPalindromo(texto) {

  // Elimino los espacios

  texto = texto.toLowerCase().replace(/\s/g, '');

  // Compara el texto original con el texto al revez

  if (texto === texto.split('').reverse().join('')) {

    return "Si";

  } else {

    return "No";

  }

}