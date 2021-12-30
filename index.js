const express=require("express");
const app=express();
const port=3000
const CallerNumber=require("./js/CallerNumber");
const Card=require("./js/BingoCard");
 let callNumber=new CallerNumber();

 let card=new Card();
card.generateCard();
console.log(card.getCard());
for(let i=1;i<=75;i++){
    let num=callNumber.getNumber();    
    card.checkNewNumber(num);
}
console.log(card.getCard());
console.log(card.checkForWinner()); 

app.listen(port);