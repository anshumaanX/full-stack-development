const express = require('express')
const app = express()

const port = 3000;

app.use(express.json())

const users = [{
  pass: 11,
  name: "Oggy",
  kidney: [
    {
      isHealthy: false,
    }, {
      isHealthy: true
    }
  ]
}, {
  pass: 22,
  name: "Jack",
  kidney: [{
    isHealthy: true
  }]
}]

function authUser(req, res, next) {
  if(!req.body){
    console.log(req.body)
    return res.status(411).json({
      message: "Please input name and pass"
    })
  }
  const { name, pass } = req.body;

  for (let i = 0; i < users.length; i++) {
    if (name === users[i].name && pass === users[i].pass) {
      req.name = users[i].name;
      return next()
    }
  }
  return res.status(404).json({
    message: "Invalid credentials"
  })
}

app.get('/health-checkup', authUser, (req, res) => {

})

app.get('/kidney-check', authUser, (req, res) => {

})

app.get('/heart-check', authUser, (req, res) => {

})

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})