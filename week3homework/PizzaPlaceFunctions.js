const toppinglist = ["mushrooms", "pepperoni", "ham", "pineapple"];

function greetCustomer(toppings) {
    console.log(`Welcome to Pizza Jewel. This evening our toppings are: ${toppings.map(topping => topping)}`);
}

function getPizzaOrder(size, crust, ...toppings){
  console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
  return[size, crust, toppings];
};

getPizzaOrder("large", "thick", "ham", " pineapple");

function preparePizza({size, crust, ...toppings}) {
  console.log("Cooking pizza.");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
};

function servePizza(pizza){
  console.log(`Order up! Enjoy your large thick crust ${toppinglist} pizza`)
  return (pizza);
};

 greetCustomer(toppinglist);
 let pizzaOrder = getPizzaOrder("large", "thick", "ham", "pineapple")
 preparePizza(pizzaOrder);
 let pizzaPrep=preparePizza(pizzaOrder);
 servePizza(pizzaOrder);
