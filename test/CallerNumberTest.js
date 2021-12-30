const chai = require("chai");
const {range}=require("../js/Utils");
const assert=chai.assert;
const CallerNumber=require("../js/CallerNumber");


describe("Assert Test for CallerNumber",()=>{
    describe("Validating getNumber()",()=>{
        
        it("The number is between 1 and 75 inclusive",()=>{
            let bingoCaller=new CallerNumber();    
            result=bingoCaller.getNumber();
            assert.isAtLeast(result,1,"The return number is greater than  1");
            assert.isAtMost(result,75,"The return number is less than 75");
        })
        it("No number has been called more than once",()=>{
            let bingoCaller=new CallerNumber();
            result=[];
            for(let i=0;i<75;i++)
                result.push(bingoCaller.getNumber());
            let match=true;
            result.sort((a,b)=>a-b);
            //como el arreglo esta ordenado, si uno de los indices (i) no coincidiece seria por que se esta repitiendo un valor
            for(let i=0;i<75;i++)
                if(result[i]!==i+1){
                    match=false;
                    return;
                }
            assert.isTrue(match);
        })
    })

})