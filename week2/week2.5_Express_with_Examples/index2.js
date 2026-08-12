const express = require('express')
const app = express()

const port = 3000;

app.use(express.json())

const users = [{
  id: 1,
  name: "Oggy",
  kidney: [
    {
      isHealthy: false,
    }, {
      isHealthy: true
    }
  ]
}, {
  id: 2,
  name: "Jack",
  kidney: [{
    isHealthy: true
  }]
}]

app.get('/', function (req, res) {
  const name = req.query.name;

  if (!name) {
    return res.status(411).json({
      message: "Enter your name"
    });
  }

  for (let i = 0; i < users.length; i++) {

    if (users[i].name === name) {

      const totalKidneys = users[i].kidney.length;
      let healthyKidneys = 0;

      for (let j = 0; j < totalKidneys; j++) {
        if (users[i].kidney[j].isHealthy) {
          healthyKidneys++;
        }
      }

      const unhealthyKidneys = totalKidneys - healthyKidneys;

      return res.status(200).json({
        user: name,
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys
      });
    }
  }
  return res.status(404).json({
    message: "Name not found"
  });
});

app.post("/", function (req, res) {
  const name = req.query.name;
  const kidney = req.body.kidney;
  console.log(kidney)
  if (!name) {
    return res.status(411).json({
      message: "Please Enter your name"
    })
  }
  if (!kidney) {
    return res.status(411).json({
      message: "kidney is required!"
    })
  }
  if (typeof kidney !== 'object' ||
    kidney === null ||
    typeof kidney.isHealthy !== "boolean"
  ) {
    return res.status(400).json({
      message: "Invalid kidney format"
    });
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      users[i].kidney.push(kidney)

      return res.status(201).json({
        messgae: "Kidney added successfully"
      })
    }
  }
  return res.status(404).json({
    message: "Name not found"
  })
})

app.put("/", function (req, res) {
  const name = req.query.name;
  if (!name) {
    return res.status(411).json({
      message: "Name is required!"
    })
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {

      for (let j = 0; j < users[i].kidney.length; j++) {
        users[i].kidney[j].isHealthy = true
      }
      return res.status(200).json({
        message: "All kidneys are now healthy"
      });
    }
  }
  return res.status(404).json({
    message: "Name not found"
  })
})

app.delete("/", function (req, res) {
  const name = req.query.name;
  if (!name) {
    return res.status(411).json({
      message: "Name is required!"
    })
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      let refreshedKidneys = [];
      for (let j = 0; j < users[i].kidney.length; j++) {
        if (users[i].kidney[j].isHealthy)
          refreshedKidneys.push(users[i].kidney[j])
      }
      users[i].kidney = refreshedKidneys;

      return res.status(200).json({
        message: "All unHealthy kidneys deleted suucessfully!"
      })
    }
  }
  return res.status(404).json({
    message: "Name not found!"
  })
})

app.listen(port, function () {
  console.log(`Server is listining at port ${port}`)
})