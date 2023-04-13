const pizzaToppings = ["mushrooms", "pepperoni", "ham", "pineapple"];

function greetCustomer(){
  console.log(`Welcome to Pizza Jewel. This evening our toppings are ${toppings.map (item => item)}`);
};

function getPizzaOrder(size, crust, ...toppings){
  console.log(`One large thick crust pizza with ${toppings.map (item => item)} coming up!`);
  return[size, crust, toppings];
}

function preparePizza([size, crust, toppings]) {
  console.log("Cooking pizza.");
  return {
    size: size,
    crust: crust,
    toppings: toppings,
  }
}

function servePizza(pizzaObj){
  console.log(`Order up! Your largethick crust pizza with ${pizzaObj.toppings} Enjoy!`)
};

getPizzaOrder();
preparePizza();
servePizza()
