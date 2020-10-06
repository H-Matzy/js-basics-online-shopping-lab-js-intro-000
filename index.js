var cart = [];
var price = Math.floor((Math.random() * 100) + 1);
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100)+1);
  var product = { itemName: item, itemPrice: price}
  cart.push(product)

 return `${item} has been added to your cart.`// write your code here
}

function viewCart() {
  var tempsolution = []
  if (cart.length === 0) {return "Your shopping cart is empty."}
  for (var i=0; i < cart.length; i++)
  if (cart.length === 1) {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`}
  else{
    tempsolution.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (tempsolution.length>1) {
    var index = tempsolution.length-1
    tempsolution[index] =  " and" + tempsolution[index]}
  var solution = "In your cart, you have" + tempsolution.join() + '.'
return solution
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  delete cart.item
  if (cart.item === false) {return "That item is not in your cart."}
}

function placeOrder(cardNumber) {
  // write your code here
}
