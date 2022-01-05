const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
  salaryA - salaryB;
});

function esPar(numerito) {
  return numerito % 2 === 0;
}

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.lenght)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}
