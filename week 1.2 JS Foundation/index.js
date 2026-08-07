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