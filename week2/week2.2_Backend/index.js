const express = require('express')
const port = 4000;

const app = express()
app.use(express.json())

app.get('/', (req,res)=> {
  res.send('ok')
})
app.post('/', (req,res)=> {
  console.log(req.headers)
  console.log(req.query)
  res.json({
    message: "hi there!"
  })
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})