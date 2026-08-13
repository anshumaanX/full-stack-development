const express = require('express')
const app = express()

const port = 3000;

app.use(express.json())

const users = [{
  pass: 11,
  name: "Oggy"
}, {
  pass: 22,
  name: "Jack"
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
  req.kidneyId = kidneyId
  return next();
}
app.get('/health-checkup', authUser, validateKidneyInput, (req, res) => {
  if(req.kidneyId === "1"){
    return res.status(200).json({
      message: `Hello ${req.name}. Your kidney status is not good. Need to maintain a proper diet!`
    })
  }
  return res.status(200).json({
    message: `Hello ${req.name}. Your health is good`
  })
})

app.get('/kidney-check', authUser, validateKidneyInput, (req, res) => {
  if(req.kidneyId = "1"){
    return res.status(200).json({
      message: `Hello ${req.name}. You have only ${req.kidneyId} kidney. You need to take control on your sugar and BP!`
    })
  }
  return res.status(200).json({
    message: `Hello ${req.name}. Your both kidneys are fine. Just maintain health diet.`
  })
})

app.get('/heart-check', authUser, (req, res) => {
  return res.status(200).json({
    message: `Hello ${req.name}. Your heart is fine. Just maintain health diet.`
  })
})

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})