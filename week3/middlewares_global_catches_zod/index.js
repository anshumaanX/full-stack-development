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


function validateKidneyInput(req, res, next) {
  const { kidneyId } = req.query;

  if (!kidneyId) {
    return res.status(400).json({
      message: "Enter kidney id!"
    });
  }

  if (kidneyId !== "1" && kidneyId !== "2") {
    return res.status(400).json({
      message: "Invalid kidney id!"
    });
  }

  return next();
}
app.get('/health-checkup', authUser, validateKidneyInput, (req, res) => {

})

app.get('/kidney-check', authUser, validateKidneyInput, (req, res) => {

})

app.get('/heart-check', authUser, validateKidneyInput, (req, res) => {

})

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})