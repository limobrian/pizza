function update() {
  var size = document.getElementById("size");
  var topping = document.getElementById("topping");
  var delivery = document.getElementById("delivery");
  var priceSize = size.options[size.selectedIndex].value;
  var itemSize = size.options[size.selectedIndex].text;
  var priceTopping = topping.options[topping.selectedIndex].value;
  var itemTopping = topping.options[topping.selectedIndex].text;
  var priceDelivery = delivery.options[delivery.selectedIndex].value;
  var itemDelivery = delivery.options[delivery.selectedIndex].text;
  var total = parseInt(priceSize) + parseInt(priceDelivery) + parseInt(priceTopping);
  $(".size1").html(itemSize);
  $(".size2").html(priceSize);
  $(".topping1").html(itemTopping);
  $(".topping2").html(priceTopping);
  $(".delivery1").html(itemDelivery);
  $(".delivery2").html(priceDelivery);
  $(".total1").html("Total");
  $(".total2").html(total);
}