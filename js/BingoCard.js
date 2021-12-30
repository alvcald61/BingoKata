const {range, randomNumber,generateMatrix} =require("./Utils");

class BingoCard{
    #columnSize=15;
    #card=generateMatrix(5,5);
    #BINGO=[]
    
    constructor(){

        let B=range(1,this.#columnSize);
        let I=range(this.#columnSize+1,this.#columnSize*2);
        let N=range(this.#columnSize*2+1,this.#columnSize*3);
        let G=range(this.#columnSize*3+1,this.#columnSize*4);
        let O=range(this.#columnSize*4+1,this.#columnSize*5);
        this.#BINGO=[B,I,N,G,O];

    }

    getCard(){
        return this.#card; 
    }
    generateCard(){
        let randomIndex=0;
        for(let i=0;i<5;i++)
            for(let j=0;j<5;j++)
                {
                    randomIndex=randomNumber(this.#BINGO[i].length);
                    this.#card[j][i]=this.#BINGO[i][randomIndex];
                    this.#BINGO[i].splice(randomIndex,1)
                }
        
        this.#card[2][2]="-"
    }
    callBingo(){
        return "BINGO";
    }

    checkNewNumber(number){
        let col=Math.floor((number-1)/this.#columnSize);
        for(let i=0;i<5;i++)  
            if(this.#card[i][col]===number){
            this.#card[i][col]="-"
            return;
        }
    }
    checkForWinner(){
        let state=false;
        for(let i=0;i<5;i++)
            if(this.#card[i].find((val)=>val!=="-"))
            return false;
            
        
        return true;
    }


}
module.exports=BingoCard;