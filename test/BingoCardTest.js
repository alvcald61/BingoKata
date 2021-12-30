const chai = require("chai");
const assert=chai.assert;
const BingoCard=require("../js/BingoCard");

describe("Assert Test for BingoCard",()=>{
    describe("Validating generateCard()",()=>{
        it("The generated card has 25 unique spaces",()=>{
            let bingoCard=new BingoCard();
            let numberBuffer=[];
            bingoCard.generateCard();
            result = bingoCard.getCard()
            assert.exists(result,"Returning null or undefined");
            for(let i=0;i<5;i++)
                for(let j=0;j<5;j++){
                    assert.notInclude(numberBuffer,result[i][j],"The numbers in the card are not unique")
                    numberBuffer.push(result[i][j]);
                }

            
        })
    })
    describe("Validating checkForWinner(), invoke when a player calls Bingo",()=>{
        it("After all the numbers on their card has been called, then the Player is the Winner",()=>{
            let bingoCard=new BingoCard();
            bingoCard.generateCard();
            result = bingoCard.getCard()
            //nos aseguramos que todos los numeros este marcados
            for(let i=1;i<=75;i++)
                bingoCard.checkNewNumber(i);
            assert.isTrue(bingoCard.checkForWinner());
        })
        it("Before all the numbers on their card has been called, then the Player is not the Winner",()=>{
            let bingoCard=new BingoCard();
            bingoCard.generateCard();
            result = bingoCard.getCard()
            //No todos los casilleros han sido llenados, como maximo a podido llenar la I y B
            for(let i=1;i<=30;i++)
                bingoCard.checkNewNumber(i);
            assert.isFalse(bingoCard.checkForWinner());
        })
    })
})