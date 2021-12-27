function calcularPrecioConDescuento(precio, descuento) {
  let porcentajedelPrecioConDescuento = 100 - descuento;
  let precioConDescuento = (precio * porcentajedelPrecioConDescuento) / 100;
  return precioConDescuento;
}

/*console.log({
  precioOriginal,
  descuento,
  porcentajedelPrecioConDescuento,
  precioConDescuento,
  precioOriginal,
});
*/
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
