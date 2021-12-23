//Codigo del cuadrado

function perimetroCuadrdo(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//=======================================================================
//CODIGO DEL TRIANGULO

function perimetroTriangulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//==========================================================================

//Codigo de un Ciruclo

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;

//PERIMETRO CIRCULO
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//PERIMETRO CIRCULO VERSION 2
function perimetroCirculo2(radio) {
  return radio * 2 * PI;
}

//AREA DE UN CIRCULO
function areaCirculo(radio) {
  return Math.PI * radio * radio;
}

//===============================================================================
//Funciones de interactuacion con HTML
//CUADRADO PERIMETRO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrdo(value);
  alert(perimetro);
}
//CUADRADO AREA
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//TRIANGULO PERIMETRO
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = input1.value;

  const input2 = document.getElementById("InputTriangulo2");
  const value2 = input2.value;

  const input3 = document.getElementById("BaseTriangulo");
  const value3 = input3.value;

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

//TRIANGULO AREA
function calcularAreaTriangulo() {
  const input1 = document.getElementById("InputAltura");
  const value1 = input1.value;

  const input2 = document.getElementById("InputBase");
  const value2 = input2.value;

  const area = areaTriangulo(value1, value2);
  alert(area);
}

//PERIMETRO CIRCULO

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputRadio");
  const value = input.value;

  const perimetro = perimetroCirculo2(value);
  alert(perimetro);
}

//AREA CIRCULO

function calcularAreaCirculo() {
  const input = document.getElementById("InputRadio");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
