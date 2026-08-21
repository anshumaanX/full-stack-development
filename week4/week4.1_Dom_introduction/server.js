const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3000;

app.use(cors())

app.get('/sum', (req, res) => {
  const { a, b } = req.query
  if (!a || !b) {
    return res.status(400).json({
      message: "Please provide both a and b!"
    })
  }

  const sum = Number(a) + Number(b)

  res.status(200).json({
    message: `Sum of ${a} and ${b} is ${sum}`,
    sum
  })
})

app.listen(PORT, ()=>{
  console.log(`Server is up at port ${PORT}`)
})