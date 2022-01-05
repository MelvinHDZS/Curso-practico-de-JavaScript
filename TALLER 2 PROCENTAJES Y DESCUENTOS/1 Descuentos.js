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
//SAVING THE DIFFERENCE BETWEEN THE PRICE AND DISCOUNT
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const descuentoPrecio = (inputDiscount.value / 100) * inputPrice.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  //PRINTING THE RERSULT, PRICE AFTER THE DISCOUNT
  const discountP = document.getElementById("DiscountP");
  discountP.innerText = "El descuento es de: $" + descuentoPrecio;

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
