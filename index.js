console.log("hello world!");


// Question 1 -
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num=> {
    if(num){
        count = count + 1;
    }
})

/* Ici la valeur sera "3" parce que elle verifie si "num" est vrai,
 sauf que pour "0"  le premier element vaut "fasle"   */
console.log("La valeur de count est  ",count);





// Question 2 -
// que fait la méthode slice
const arr = [2,3,4,5]
//console.log(arr);
//console.log(arr.slice(0,1)); //[2]
arr.splice(0,1)
arr.unshift(8);
console.log(arr);  //[8,3,4,5]





// Question 3

const obj ={
    a: 1,
    b:2,
    c:3,
    "a":6,
    b:7,
}
// Whats the output ?
console.log("is. :  ",obj);
