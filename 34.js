let pizza = ["malai boti", "tikka", "cheese"]
/*
for (i=0;i<pizzas.length;i++){
    if(pizzas[i]=="malai boti")
        console.log("Oye hoye, Malai Boti Pizza! Yr ye bohat creamy pizza ha!")
    else if(pizzas[i]=="tikka")
        console.log("Oye hoye, Tikka Pizza! Yr ye masaly wala pizza ha!")
    else if(pizzas[i]=="cheese")
        console.log("Oye hoye, Cheese Pizza! Yr ye bohat cheesy pizza ha but masala kam ha!")
} */
for (pizzas in pizza) {
    console.log(`This is a ${pizza[pizzas]} pizza.`)
}

console.log("I love pizza yr \nI am crazy about pizza! \nAbove are my favourite pizza flavors!")