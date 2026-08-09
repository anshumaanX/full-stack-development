// strings methods

str = " Hello World! "
console.log(str.length)
console.log(str.indexOf('l')) //first occurrence
console.log(str.lastIndexOf('l'))
console.log(str.slice(0, 5)) // 0 to 4
// my own slice function
function cutIt(str, start, end){
  let newStr = "";
  for(let i = 0; i<str.length; i++){
    if(i>= start && i < end){
      newStr = newStr + str[i]
    }
  }
  return newStr
}
console.log(cutIt(" Hello World! ",0,5))

console.log(str.substr(5,5)) // start from 5 to 5 characters
console.log(str.replace(" ", "W"))
console.log(str.split(" ")) // split by delimeter and returns array
console.log(str.trim()) // trim spaces from starting and end
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log("==================================================")

// numbers
console.log(parseInt("123456"))
console.log(parseInt("-123456"))
console.log(parseInt("123456adsdasdadad")) // 123456
console.log(parseInt("assada123456")) // NAN 
console.log(parseInt("123adada456")) // 123 
console.log(parseInt("4.22")) // 4 
console.log(parseInt(4.72)) // 4

console.log(parseFloat("4")) // 4
console.log("==================================================")

// Arrays
const arr = [1,2,4,7,3,5,0]
arr.push(-1)
console.log(arr)
arr.pop()            // removes from last
console.log(arr)
arr.shift()          // removes from front
console.log(arr)
arr.unshift(-0)
console.log(arr)     // insert from front

const arr2 = ['a','b','c']
w = arr.concat(arr2)
console.log(w)

function upperCase(val){
  console.log(val.toUpperCase())
}
arr2.forEach(upperCase)

const testArray = [50, 22.59, "123", "hello", "0.0"]
function testForEach(input){
  if(typeof(input) === "number") {
    console.log(input/2 * -1)
  } else if(isNaN(parseInt(input))) {
    console.log(input.split('').reverse().join(''))
  } else console.log(parseInt(input))
}

testArray.forEach(testForEach)
console.log("==================================================")

// classes

class Animal {
  constructor(name, legCount, speaks){
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }
  speak(){
    console.log("hi there "+ this.speaks)
  }
  static myAnimal(){
    console.log("Hello i am animal from zoo")
  }
}

let dog = new Animal('dogesh', '4', 'Bhaoww bhauuu') 
console.log(dog)
dog.speak()
Animal.myAnimal()

console.log("==================================================")

// date class
const currDate = new Date()
console.log(currDate.getFullYear())
console.log(currDate.getMonth()+1)
console.log(currDate.getDate())
console.log("Time in milliseconds since 1970",currDate.getTime())
console.log("==================================================")

// JSON
const user = '{"name": "user1", "age":21, "gender":"male"}'
console.log(typeof(user)) // string
let parsedUser = JSON.parse(user)
console.log(typeof(parsedUser)) // object
console.log(parsedUser)

console.log("==================================================")

// Object

const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}
const sampleObject2 = {
  key4: "value4",
  key5: "value5",
  key6: "value6"
}

console.log(sampleObject)
console.log("Object.keys(sampleObject) -> ",Object.keys(sampleObject))
console.log("Object.vlaues(sampleObject) -> ",Object.values(sampleObject))
console.log("Object.entries(sampleObject) -> ",Object.entries(sampleObject))
console.log("sampleObject.hasOwnProperty('propery here key' key1) ->", sampleObject.hasOwnProperty("key1"))
console.log("Object.assign({}, sampleObject, {newProperty: 'newValue'}) ->", Object.assign({}, sampleObject, {newproperty: "newValue"}, sampleObject2))