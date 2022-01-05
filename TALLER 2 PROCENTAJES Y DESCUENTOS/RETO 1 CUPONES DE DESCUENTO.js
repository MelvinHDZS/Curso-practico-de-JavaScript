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
//COUPONS
const verificationCupon = function () {
  const cupons = [10, 25, 50];
  const cupon = document.getElementById("cupons");
  const valueCupon = parseInt(cupon.value);
  if (valueCupon === cupons[0]) {
    return cupons[0];
  } else if (valueCupon === cupons[1]) {
    return cupons[1];
  } else if (valueCupon === cupons[2]) {
    return cupons[2];
  } else {
    return 0;
  }
};

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
