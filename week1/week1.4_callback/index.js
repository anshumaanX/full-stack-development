function square(n){
  return n * n
}
function cube(n){
  return n * n * n
}
function quad(n){
  return n * n * n * n
}

function sumOfAnything(value1,value2, fnToCall){
  const sum = fnToCall(value1) + fnToCall(value2)
  console.log(sum)
}
sumOfAnything(2,2, cube)

// Anonymous function
sumOfAnything(1,5, function(a){
  return a * a
})