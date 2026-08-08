firstName = "Anshumaan"
lastName = "Tripathi"
gender = 'male'

if(gender == 'male'){
  console.log("Hello Mr", firstName, lastName, "sir!")
} else {
  console.log("Hello Ms", firstName, lastName, "Mam!")
}

let ans = 0
for(let i = 0; i <= 100; i++){
  ans = ans + i
}
console.log(ans)


// prints all even number in an array
const numbers = [5,6,7,9,1,2,3,4,8,0]
for(i = 0; i<numbers.length; i++){
  if(numbers[i] % 2 == 0){
    console.log(numbers[i])
  }
}

// print the biggest number in an array
const allNumbers = [45,65,4,64,6,46,8,3,64,0,-54,1]
let largestNumber = allNumbers[0]

for(let i = 0; i<allNumbers.length; i++){
  if(allNumbers[i] > largestNumber){
    largestNumber = allNumbers[i]
  }
}
console.log(largestNumber)

// print male people first name from a complex object
const obj = {

  peoples: [
    {
      first_name: "Anshumaan",
      last_name: "Tripathi",
      people_details: {
        gender: "male"
      }
    },
    {
      first_name: "Khusi",
      last_name: "kumari",
      people_details: {
        gender: "female"
      }
    }
  ]
}

for(let i = 0; i< obj.peoples.length; i++){
  if(obj.peoples[i].people_details["gender"] == "male"){
    console.log(obj.peoples[i]["first_name"])
  }
}

// program to reverse the elements of an array
const randomArray = [1,3,5,2,6,8,7]
const reversedArray = []
for(let i = randomArray.length-1; i>= 0; i--){
  reversedArray.push(randomArray[i])
}
console.log(reversedArray)


// functions
function sum(a,b){
  const sumValue = a + b
  return sumValue
}

let value = sum(2,5)
console.log(value)

// single threaded nature of js. CPU core one of the thread will reach 100%
/*
let calculatedValue = 0
for(let i = 0; i<10000000000; i++){
  calculatedValue += i
}
console.log(calculatedValue)
*/

// callbacks
// without callback
function sumIt(num1, num2){
  let result = num1 + num2
  return result
}

function displayResult(data){
  console.log("Result of sum is ", data)
  return data
}
function displayResultPassive(data){
  console.log("sums result is ", data)
}
val = displayResult(sumIt(1,5))
console.log(val)

// with callbacks
function callback(a, b, cb){
  let result = a + b;
  cb(result);
}
callback(2,5,displayResultPassive)
callback(2,5,displayResult)

// setTimeout
function greetAnimal(){
  console.log("Good morning dear Tiger")
}
setTimeout(greetAnimal, 3000)

// counter
let count = 5
function counter(){
  console.log(count)
  if(count==0){
    clearInterval(time)
    return;
  }
  count--
}
const time = setInterval(counter, 1000)