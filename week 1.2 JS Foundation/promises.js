const fs = require("fs")

function readMyFile(){
  return new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err,data){
      resolve(data)
    })
  })
}

function logIt(data){
  console.log(data)
}
readMyFile().then(logIt);

// ==============================================

let p = new Promise(function(resolve){
  setTimeout(function(){
    resolve("food")
  },1000)
})

console.log(p) // pending

function output(data){
  console.log(data)
}
p.then(output) // resolved

console.log("hello there!")