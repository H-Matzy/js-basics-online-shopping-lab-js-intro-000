var cart = [] ;
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

 return `${item} has been added to your cart.`
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
  var tempsolution = [ "In your cart, you have " ]
  if (cart.length === 0) {return "Your shopping cart is empty."}

  for (var i=0; i < cart.length; i++){
    var price = Math.floor((Math.random() * 100) + 1);
    tempsolution.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    if (i=cart.length) {tempsolution.splice(i)}
  }
return solution
}

function total() {
  var cost = []
  for (var i=0; i < cart.length; i++){
  cost.push(cart[i].itemPrice)
  }
  const sum = cost.reduce((total, amount) => total + amount);
  return sum
}
//everthing above is final

function removeFromCart(item) {
var tempcart = getCart()
  for (var i=0; i < tempcart.length; i++)
  if (tempcart[i].itemName === item){
    delete tempcart.item
  }
  else {return 'That item is not in your cart.' }
}


function placeOrder(cardNumber) {
  // write your code here
}
