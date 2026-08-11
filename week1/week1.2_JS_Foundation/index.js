let firstName = "unknown";
let lastName = "person";
let gender = "female"

if(gender === "female") {
  console.log("Hello", firstName, "mam. How are you!")
} else if(gender === "male"){
  console.log("Hello", firstName, "Sir. How are you!")
}

let count = 0;
for(let i = 1; i<=1000; i++){
  count = count+i
}
console.log(count)

// print even numbers in an array

let arr = [0,1,2,3,4,-5,-2,-1,6,-7]
let evenNumber = []
for(let i = 0; i<arr.length; i++){
  if(arr[i]%2 === 0) {
    evenNumber.push(arr[i])
  }
}
console.log("evenNumbers using for loop", evenNumber)
let evenNumbers = arr.filter(num => num%2 === 0)
console.log("even numbers using filter",evenNumbers)

// print biggest number in an array
let biggestnumber = arr[0]
for(let i =0; i<arr.length; i++) {
  if(arr[i] > biggestnumber) {
    biggestnumber = arr[i]
  }
}
console.log("largest number using loop",biggestnumber)
console.log("largest number using math.max", Math.max(...arr))

// Male people firstname in an Object

let peoples = [
  {
  "first-Name": "Khaman",
  lastName: "Dhokla",
  metaData: {
    location: "gas Stove",
    age: 1
  }
},
{
  firstName: "adarakh",
  lastName: "lahsun"
}
]

for (let i = 0; i < peoples.length; i++) {
  console.log(peoples[i]["first-Name"] || peoples[i].firstName);
  console.log(peoples[i].metaData?.location);
}

// reverse all elements in an array

let reverseElements = []
for(let i = arr.length-1; i>= 0; i--) {
  reverseElements.push(arr[i])
}
console.log("Reverse array with for loop",reverseElements)

let reverseElement = arr.reverse()
console.log("Reverse array elemets using arr.reverse",reverseElement)

// function which prints sum of two number

function sum (a, b) {
  console.log(parseInt(a) + parseInt(b))
}

sum(5,1)

// display result is prettier form

function sumOfNumbers(num1, num2, cb) {
  const result =  num1 + num2
  cb(result)
}

function printSumInPrettyform(sum) {
  console.log(" Your sum's result is", sum)
}

function displaySumInActiveFormat(sum) {
  console.log(" result of sum is "+ sum)
}

sumOfNumbers(2,2,printSumInPrettyform)
sumOfNumbers(2,2,displaySumInActiveFormat)

function greet(){
  console.log("hello person")
}

// setTimeout(greet, 3000)

//counter in js

let counter = 5
function counterFunction () {
  console.clear()
  console.log(counter)
  if(counter > 0){
    counter -= 1;
  } else {
    clearInterval(currentTime)
  }
}
// const currentTime = setInterval(counterFunction, 1000)

//time difference b/w setTimeOut call and inner function

const beforeTime = new Date().getTime()
const testFunction = () => {
  const afterTime = new Date().getTime()
  const finalTime = afterTime - beforeTime
  console.log(finalTime)
}
setTimeout(testFunction, 1000)

const scheduledTime = Date.now() + 1000;

setTimeout(() => {
  const actualDelay = Date.now() - scheduledTime;
  console.log(`Scheduled: 1000ms | Actual: ${actualDelay}ms`);
}, 1000);

// terminal clock

function printTime () {
  console.clear()
  const hour = new Date().getHours().toString().padStart(2,0)
  const minute = new Date().getMinutes().toString().padStart(2,0)
  const second = new Date().getSeconds().toString().padStart(2,0)
  console.log(`${hour}:${minute}:${second}`)
  setTimeout(printTime, 1000)
} 
// printTime()
// setInterval(printTime, 1000)