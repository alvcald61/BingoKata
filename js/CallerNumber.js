const {range,randomNumber} =require("./Utils");



class CallerNumber{
    
        #maxNum=75;
        #minNum=1;
        #expectedNumbers=range(this.#minNum,this.#maxNum);
    getNumber(){
        
            let random=randomNumber(this.#expectedNumbers.length)
            random=this.#expectedNumbers.splice(random,1);
            return random[0];  
            
    }

}



module.exports=CallerNumber;
