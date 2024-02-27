const array = [2,6,6643,34];
const doubledarray= array.map(n=>n*2);
console.log(doubledarray);

const arr = ["abc","lssss","Hfnkjds","eq","adtrfa"];
const filteredArray = arr.filter(n=>n.length <= 5);
console.log(filteredArray);

const sumOfArray = array.reduce((accumulator,currentValue)=>{
    return accumulator * currentValue;
},0);
console.log(sumOfArray)

const initialValue = 0;
let accumulator = initialValue;
array.forEach(currentValue=> accumulator = accumulator+currentValue)

const checkForNumberBiggerThan10 = array.some(n=> n >= 10);
console.log(checkForNumberBiggerThan10)