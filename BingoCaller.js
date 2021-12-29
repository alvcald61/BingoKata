const {range,randomNumber} =require("./Utils");



class CallerNumber{
    constructor(){
        this.maxNum=75;
        this.minNum=1;
        this.numbers=[];
        this.expectedNumbers=range(1,75);
    }

    

    getNumber(){
        
            let random=randomNumber(this.expectedNumbers.length)
            random=this.expectedNumbers.splice(random,1);
            return random[0];  
        
        
            
    }

}



module.exports=CallerNumber;
