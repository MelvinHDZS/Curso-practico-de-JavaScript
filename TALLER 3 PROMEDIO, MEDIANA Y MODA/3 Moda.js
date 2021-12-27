const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

//Convertir el objeto a una lista string
//A partir de un objeto convertirlo a una array
const lista1Array = Object.entries(lista1Count).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[2];
});

const moda = lista1Array[lista1Array.length - 1];
