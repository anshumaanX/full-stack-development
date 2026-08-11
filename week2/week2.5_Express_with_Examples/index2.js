const express = require('express')
const app = express()

const port = 3000;

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

app.listen(port, () => {
  console.log(`Server is listining at port ${port}`)
})