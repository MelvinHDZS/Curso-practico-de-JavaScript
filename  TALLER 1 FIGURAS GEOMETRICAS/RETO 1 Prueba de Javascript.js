let nombre = "Melvin ";
let apellido = "Hernandez";

console.log("Mi nombre es: " + nombre + apellido);

let dineroAhorrado = 1300;
let deudas = 1100;
let total = dineroAhorrado - deudas;
console.log(total);

//===================================================================
let completeName = nombre + lastName;
function datos(nombre, lastName, nickName) {
  console.log(
    "Mi nombre es: " +
      completeName +
      ", pero prefiero que me digas " +
      nickName +
      "."
  );
}
datos("Lucas ", " Dalto", "Dalto");
//============================================

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

//===============================================

let tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solos puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === Expert) {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un annio");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tu, y alguien mas pueden tomar TODOS los cursos de Platzi durante un annio"
  );
} else "Opcion equivocada, intentelo de nuevo";
//===========================================================

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

let i = 0;
while (5 >= i) {
  console.log("El valor de i es: " + i);
  i++;
}
//==================================================================
for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

let i = 10;
while (0 < i) {
  console.log("El valor de i es: " + i);
  i--;
}
//================================================================

let frutas = ["Manzana", "Pera", "Sandia"];
let carros = ["Supra", "GTR", "ModelS"];

function tipoFrutas(fruta) {
  let primerFruta = fruta.shift();
  console.log(primerFruta);
}

tipoFrutas(frutas);
//============================================

let frutas = ["Manzana", "Pera", "Sandia"];
let carros = ["Supra", "GTR", "ModelS"];

function tipoFrutas(fruta) {
  let elementosLenght = fruta.lenght();
  let primerFruta = fruta.shift();
  console.log(primerFruta);
}

tipoFrutas(frutas);
