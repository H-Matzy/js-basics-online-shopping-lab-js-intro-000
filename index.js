var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var product = { itemName: `${item}`, itemPrice: `${price}`}
  cart.push(product)

 return `${item} has been added to your cart.`// write your code here
}

function viewCart() {
  var solution = [ "In your cart, you have " ]
  if (cart.length === 0) {return "Your shopping cart is empty."}

  for (var i=0; i < cart.length; i++){
    var price = Math.floor((Math.random() * 100) + 1);
    solution.push(`${i} at, ${price} `)

  }
return solution  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
