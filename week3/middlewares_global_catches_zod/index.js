const express = require('express')
const app = express()

const port = 3000;

app.get('/health-checkup', (req,res) => {
  
})

app.get('/kidney-check', (req,res)=> {

})

app.get('/heart-check', (req,res)=> {
  
})

app.listen(port, ()=> {
  console.log(`Server is up at port ${port}`)
})