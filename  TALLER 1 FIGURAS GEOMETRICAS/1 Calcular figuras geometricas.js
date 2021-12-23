//Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrdo = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrdo + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;

console.log(
  //Hacer mas chico un cojnunto de identaciones
  "Los lados del Triangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo3 +
    "cm, "
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de : " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
console.log("El area del Triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();
//==========================================================================

//Codigo de un Ciruclo
console.group("Circulos");

//Variables Radio, diametro, PI, circunferencia, area

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es : " + PI);

//Circunferencia o PERIMETRO
const circunferenciaCirculo = diametroCirculo * PI;
console.log("El Perimetro del circulo es: " + circunferenciaCirculo + "cm");

//Area
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();
