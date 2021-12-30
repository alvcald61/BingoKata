

function range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}
function randomNumber(end,start){
    if(start===undefined)start=0;
    return  Math.floor(Math.random()*(end-start))+start;

}
function generateMatrix(collumn,row){
    return Array.from({ length: collumn }, () => Array.from({ length: row }, () => "0"));
}
module.exports={range,randomNumber,generateMatrix};