function count(){
  let sum = 0;
  for(let i = 0; i<=1000; i++){
    sum+=i;
  }
  console.log(sum)
}

// setTimeot is async
setTimeout(count, 1000)
console.log("hello World")

const fs = require("fs");

// async call
fs.readFile("a.txt", "utf-8", function(err, data){
  console.log(data)
})

val = 0;
for(let i = 0; i<100000000; i++){
  val+=i
}

console.log("hi there 2");


// my async function
function readTheFile(cb){
  fs.readFile("b.txt","utf-8", function(err, data){
    cb(data)
  })
}

function logTheFile(file){
  console.log(file)
}

readTheFile(logTheFile)