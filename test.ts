const array = [2,6,6643,34];
const doubledarray= array.map(n=>n*2);
console.log(doubledarray);

const arr = ["abc","lssss","Hfnkjds","eq","adtrfa"];
const filteredArray = arr.filter(n=>n.length <= 5);
console.log(filteredArray);

const sumOfArray = array.reduce((accumulator,currentValue)=>{
    return accumulator * currentValue;
},0);
console.log(sumOfArray);

const initialValue = 0;
let accumulator = initialValue;
array.forEach(currentValue=> accumulator = accumulator+currentValue);

const checkForNumberBiggerThan10 = array.some(n=> n >= 10);
console.log(checkForNumberBiggerThan10);

const liste = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const sortedArray= liste.sort((a,b)=> {
    return b-a;

});

const squaredNumbers= sortedArray.map(n=> n*n);

 squaredNumbers.splice(squaredNumbers.length - 4, 4);
 squaredNumbers.splice(0 , 1)
console.log(squaredNumbers);