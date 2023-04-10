let pizzaToppings = ["mushrooms", " pepperoni", " ham", " pineapple"];
console.log("Welcome to Pizza Jewel. This evening our toppings are " + (pizzaToppings) + ".");

let order = function (order)
  {size = {s: "small",
           m: "medium",
           l: "large"
          }

    crust =  {t: "thin",
              r: "regular",
              th: "thick"
             }

  toppings = {mu: "mushrooms",
              pe: "pepperoni",
              ha: "ham",
              pi: "pineapple"
            }

console.log(`Your pizza.\$(size), pizza.\$(crust), pizza.\$(toppings) pizza is coming right up.`);
  }

order()

console.log(size)
console.log(crust)

function prepare(size, crust, toppings) {
  size = {s: "small",
           m: "medium",
           l: "large"
          }

    crust =  {t: "thin",
              r: "regular",
              th: "thick"
             }

  toppings = {mu: "mushrooms",
              pe: "pepperoni",
              ha: "ham",
              pi: "pineapple"
            }
  console.log("Cooking " + (size) + " pizza with " + (crust, toppings) +" .");
}
 prepare()

 function serve(size, crust, toppings) {
  size = {s: "small",
           m: "medium",
           l: "large"
          }

    crust =  {t: "thin",
              r: "regular",
              th: "thick"
             }

  toppings = {mu: "mushrooms",
              pe: "pepperoni",
              ha: "ham",
              pi: "pineapple"
            }
  console.log("Order up! Here's your large thick crust pizza with " + (toppings) + "Enjoy!")
 }
 serve()
