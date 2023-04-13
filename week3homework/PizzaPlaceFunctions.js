const pizzaToppings = ["mushrooms", "pepperoni", "ham", "pineapple"];

function greetCustomer() {
  console.log(`Welcome to Pizza Jewel. This evening our toppings are ${toppings.map (item => item)}`)
};

function getPizzaOrder(size, crust, ...toppings){
  console.log(`One ${size}, ${crust} crust pizza with ${toppings.map (item => item)} coming up!`);
  return[size, crust, toppings];
};

function preparePizza([size, crust, ...toppings]) {
  console.log("Cooking pizza.");
  return {size: any,
         crust: any,
         toppings: any}
};

function servePizza(pizzaObj){
  console.log(`Order up! Enjoy your large thick crust pizza with ${pizzaObj.toppings}`)
  return (pizzaObj);
};

getPizzaOrder();
preparePizza(getPizzaOrder);
servePizza(preparePizza);
