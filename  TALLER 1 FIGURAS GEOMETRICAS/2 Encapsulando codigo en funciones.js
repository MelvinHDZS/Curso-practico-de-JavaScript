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
  return lado1 + lado2 + base;
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

//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
