const express = require('express');
const z = require('zod');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 3000;

const secretKey = 'wlpg';

const app = express();
app.use(express.json());

const signinSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const signupSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

const users = [
  { id: 1, username: 'john_doe', password: 'password123' },
  { id: 2, username: 'jane_smith', password: 'securepass' },
  { id: 3, username: 'alice_jones', password: 'mypassword' },
  { id: 4, username: 'bob_brown', password: 'passw0rd' },
]

async function connectDB () {
  try{
    const conn = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch(err){
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema);

app.post('/signup', async (req, res) => {
  if(!req.body) {
    return res.status(411).json({
      message: "Please enter username and password"
    })
  }
  const result = signupSchema.safeParse(req.body);
  if(!result.success) {
    console.log("issues:", result.error.issues);
    return res.status(400).json({
      message: result.error.issues[0].message
    })
  }
  try{
    const { username, password } = result.data;
    const existingUser = await User.findOne({ username });
    if(existingUser) {
      return res.status(409).json({
        message: "Username already exists"
      })
    }
    const newUser = await User.create({
      username,
      password
    })
    return res.status(201).json({
      message: "user created successfully",
      user: newUser
    })
  }catch(err){
    console.error(`Error creating user: ${err.message}`);
    return res.status(500).json({
      message: "Internal server error"
    })
  }
});

app.post('/signin', (req, res) => {
  if (!req.body) {
    return res.status(411).json({
      message: "Please enter username and password"
    })
  }
  const result = signinSchema.safeParse(req.body);

  if (!result.success) {
    console.log("issues:", result.error.issues);

    const issue = result.error.issues[0];

    console.log("path:", issue.path);
    console.log("message:", issue.message);

    return res.status(400).json({
      message: issue.message,
      path: issue.path,
    });
  }

  const { username, password } = result.data;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    })
  }
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
  res.status(200).json({
    token
  });
});

app.get('/users', (req, res) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({
      message: "No token provided"
    })
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    const { id, username } = decoded;

    const user = users.find(u => u.id === id && u.username === username);
    if(!user) {
      return res.status(401).json({
        message: "User not found!"
      })
    }
    const filteredUsers = users.filter(u => u.id !== id && u.username !== username);
    return res.status(200).json({
      users: filteredUsers
    })

  } catch (err) {
    return res.status(403).json({
      message: "Invalid token",
      error: err
    })
  }
})

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
})