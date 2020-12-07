const value = document.querySelector("#add-value");
const currency = document.querySelector("#choose-currency");
const button = document.querySelector("#btn-convert");
const us = document.querySelector("#us");
let total = 0;

button.addEventListener("click",(event)=>{
    if(currency == "#us")
    {
        total = value * 19196.70;
        let text = `Value in USD: ${total}`;   
    }
    else
    {
        total = value * 15860.02;
        let text = `Value in Euros: ${total}`;
    }

    event.preventDefault();
});