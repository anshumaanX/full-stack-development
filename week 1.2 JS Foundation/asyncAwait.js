const fs = require("fs")

function readFile(){
  let p = new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err,data){
      setTimeout(function(){
        resolve(data)
      },2000)
    })
  })
  return p
}

console.log(readFile())

async function main(){
  value = await readFile()
  console.log(value)
  console.log("hi there!")
}
main()

console.log("after main")
let sum = 0;
for(let i = 0; i <= 5000000000; i++){
  sum+=i
}
console.log(sum)