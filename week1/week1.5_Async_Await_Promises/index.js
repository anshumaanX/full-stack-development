/* let sum = 0
function findSum(n){
  for(let i =1; i<=n; i++) {
    sum+=i
  }
  return sum
}

function findSumTillN(){
  console.log(findSum(100))
}

// setTimeout is asynchronous
setTimeout(findSumTillN, 1)
console.log("after setTimeout call")
let a = 0
for(let i = 0; i<= 3000000000; i++) {
  a+=i
}
console.log(a) */

// fs -> fileSystem is asynchronous

const fs = require("fs");

/* function readFile(cb) {
  fs.readFile('package.json', 'utf-8', (err,data)=>{
    cb(data)
    })
    }
    function onDone(data){
      console.log(data)
      }
      readFile(onDone) */

/* function promiseReadFile() {
  return new Promise(function (resolve, reject) {
    fs.readFile("package.json", "utf-8", function (err, data) {
      resolve(data)
    });
  });
}
function logPromiseData(data) {
  console.log(data);
}
promiseReadFile().then(logPromiseData) */

//Async Await

function asyncAwaitReadFile(){
  return new Promise(function(resolve, reject){
    fs.readFile("package.json", 'utf-8', function(err,data){
      resolve(data)
    })
  })
}
async function logAsyncData(){
 const data =  await asyncAwaitReadFile()
 console.log(data)
}

logAsyncData()