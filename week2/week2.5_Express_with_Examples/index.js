const express = require('express')
const app = express()

const port = 3000;

function findSum(n){
  let sum = 0;
  for(let i = 0; i<=n; i ++){
    sum += i
  }
  return sum
}
console.log(findSum(100))

app.get('/', function(req,res){
  const n = req.query.n
  const ans = findSum(n)
  if(n!= undefined && parseInt(n)){  
    res.json({
      result: `The sum from 0 to ${n} is: ${ans}`
    })
  }
  else{
    res.send(
      "Enter the value of n for calculating the sum in query parameter"
    )
  }
})

app.listen(port, function(){
  console.log(`Server is listining at port ${port}`)
})
