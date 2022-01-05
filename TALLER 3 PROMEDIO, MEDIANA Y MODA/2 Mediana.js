const lista1 = [100, 200, 500, 400000000];

//Funcion para obtener la mediana si el array es PAR

function calcularMediaAritmetica(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//=====================================================

function calcularMediana(lista1) {
  const mitadLista1 = parseInt(lista1.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(lista1.lenght)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }
}
