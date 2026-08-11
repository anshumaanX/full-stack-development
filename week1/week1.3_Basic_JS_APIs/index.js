// Strings
const str = "Hello World Dubai"

console.log("str.length", str.length, "|",str)
console.log("str.indexOf 'o' ->",str.indexOf("o"), "|",str)
console.log("str.lastIndexOf 'o' ->",str.lastIndexOf("o"), "|",str)
console.log("str.slice(start, end(not included)) => (2, 7) ->", str.slice(2,7),"|",str)
console.log("str.substr(start, length) => (7, 5) ->", str.substr(7,5), "|",str)
console.log("str.replace => o with 5 ->", str.replace('l',5), "|",str)
console.log("str.split(delimeter) => (' ') ->", str.split(" "), "|",str)
console.log("str.trim() -> ", str.trim(), "|", str)
console.log("str.toUpperCase() -> ", str.toUpperCase(), "|", str)
console.log("str.toLowerCase() -> ", str.toLowerCase(), "|", str)

//Numbers

console.log("parseInt('22') -> ", parseInt("22"),typeof(parseInt("22")))
console.log("parseInt('22.2553') -> ", parseInt("22.2553"),typeof(parseInt("22.2553")))
console.log("parseInt('2px') -> ", parseInt("2px"),typeof(parseInt("2px")))
console.log("parseInt('xpp55') -> ", parseInt("xpp55"),typeof(parseInt("xpp55")))
console.log("parseInt('') -> ", parseInt(""),typeof(parseInt("")))
console.log("parseFloat('55.12asd') -> ", parseFloat("55.12asd"),typeof(parseFloat("55.12asd")))

// Arrays

const initialArr = [1,2,3]
const secondArr = ['a','b','c',9.5]
console.log("initialArr ->",initialArr)
initialArr.push(0)
console.log("initialArr.push(0) ->",initialArr)
initialArr.pop()
console.log("initialArr.pop() ->",initialArr)
initialArr.shift()
console.log("initialArr.shift() ->",initialArr)
initialArr.unshift('5',5)
console.log("initialArr.unshift('5',5) ->",initialArr)
console.log("secondArr ->",secondArr)
console.log("initialArr.concat(secondArr) -> ",initialArr.concat(secondArr))

//forEach

const testArray = [50, 22.59, "123", "hello", "0.0"]
function testForEach(input){
  if(typeof(input) === "number") {
    console.log(input/2 * -1)
  } else if(isNaN(parseInt(input))) {
    console.log(input.split('').reverse().join(''))
  } else console.log(parseInt(input))
}

testArray.forEach(testForEach)

// class

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks = speaks
  }

  static myType(){
    console.log("Static method associated with class not object")
  }

  speak(){
    console.log("Hi there from "+ this.speaks)
  }
}

let dog = new Animal("dogesh",4,"bhaow bhaow")
let cat = new Animal("cutee",4,"meueee")

dog.speak()
cat.speak()
Animal.myType()

//Date

//JSON

const user1 = {
  name:"Aarya",
  age: 12,
  gender: "female"
}
console.log("JSON.stringify ->",JSON.stringify(user1))
const user2 = JSON.stringify(user1)
console.log("JSON.parse() ->",JSON.parse(user2))

//objects

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
console.log("sampleObject.hasOwnProperty('propery here/key' key1) ->", sampleObject.hasOwnProperty("key1"))
console.log("Object.assign({}, sampleObject, {newProperty: 'newValue'}) ->", Object.assign({}, sampleObject, {newproperty: "newValue"}, sampleObject2))