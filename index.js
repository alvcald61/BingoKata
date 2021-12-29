const express=require("express");
const app=express();
const port=3000
const CallerNumber=require("./BingoCaller");
const Card=require("./GenerateBingoCard");
let callNumber=new CallerNumber();
let card=new Card();
card.generateCard();
console.log(card.card);
for(let i=0;i<75;i++){
    let num=callNumber.getNumber();    
    card.checkNewNumber(num);
    }
console.log(card.card);
console.log(card.checkForWinner());
app.listen(port);