function alturaIsosceles(lado1, lado2, base) {
  if (lado1 === lado2) {
    if (lado1 > base) {
      let cateto1 = base / 2;
      let hipotenusa = lado1 * lado1;
      let cateto2 = hipotenusa - cateto1;
      let altura = Math.sqrt(cateto2);
      console.log("La altura del Triangulo Isosceles es: " + altura + " cm");
    } else {
      console.log(
        "Este no es un Triangulo Isosceles, la base es mas larga que los lados"
      );
    }
  } else if (
    lado1 + base < lado2 ||
    lado2 + base < lado1 ||
    lado1 + lado2 < base
  ) {
    console.log(
      "Esto no es un Triangulo Isosceles, un lado no puede ser mayor a la suma de los otros dos lados restantes"
    );
  } else {
    console.log(
      "Esto no es un Triangulo Isosceles, los dos lados no son iguales"
    );
  }
}
alturaIsosceles(10, 10, 4);
