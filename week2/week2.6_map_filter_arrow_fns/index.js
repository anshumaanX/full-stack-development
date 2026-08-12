// map filter arrow functions

// normal function
 function ab (a,b){
  return a + b;
 }

 // arrow function
 const sum = (a,b) => {
  return a + b;
 }

 // map
 // multiply every element of array by 2
const arr = [1,2,3,4,5];
let result = arr.map(function(val){
  return val*2
})
console.log(result);

// filter
// return the even values
const arr2 = [0,1,2,3,4,5]
const ans = arr2.filter(function(n){
  if(n%2 == 0) return true
})
console.log(ans)