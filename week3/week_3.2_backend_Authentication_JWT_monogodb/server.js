const express = require('express')
const cors = require("cors")
const app = express()


app.use(cors())

const port = 3000;

app.get('/persons', (req,res)=>{
  const persons = [
    {
      firstname: "Jack",
      lastname: "Smith",
      email: "jack.smith@example.com",
      phone: "9876543210",
      birthday: "1995-04-12",
      gender: "male",
      address: {
        id: 1,
        street: "123 Main Street",
        streetName: "Main Street",
        buildingNumber: "123",
        city: "New York",
        zipcode: "10001",
        country: "United States",
        county_code: "US",
        latitude: 40.7128,
        longitude: -74.006
      },
      website: "https://example.com",
      image: "https://example.com/image.jpg"
    },
    {
      firstname: "Sarah",
      lastname: "Johnson",
      email: "sarah.johnson@example.com",
      phone: "9876543211",
      birthday: "1998-07-21",
      gender: "female",
      address: {
        id: 2,
        street: "456 Oak Avenue",
        streetName: "Oak Avenue",
        buildingNumber: "456",
        city: "Chicago",
        zipcode: "60601",
        country: "United States",
        county_code: "US",
        latitude: 41.8781,
        longitude: -87.6298
      },
      website: "https://example.com",
      image: "https://example.com/image2.jpg"
    }
  ];
  res.json({
    status: "OK",
    code: 200,
    total: persons.length,
    data: persons
  })
})

app.listen(port, ()=>{
  console.log(`Server is up at port ${port}`)
})