import { signupSchema, LoginSchema } from "../../validators/auth.validator.js";
import generateToken from "../utils/generateToken.js";
import setAuthCookie from "../utils/setAuthCookie.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res) => {
  try{

    const result = signupSchema.safeParse(req.body);

    if(!result.success) {
        return res.status(400).json({
        success: false,
        message: "Validation failed",
        error: result.error.issues,
      });
    }
    const { name, email, password } = result.data;

    const existingUser = await User.findOne({ email });

    if(existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    };

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = generateToken(user._id);
    setAuthCookie(res, token)

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
    });
  }catch(error){
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    })
  }
}


export const Login = async (req,res) => {
  try {
    const result = LoginSchema.safeParse(req.body);

    if(!result.success) {
      return res.status(400).json({
        success: false,
        message: result.error.issues,
      })
    }

    const { email , password } = result.data;

    
    const user = await User.findOne({ email });
    if(!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      })
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      })
    }

    const token = generateToken(user._id);

    setAuthCookie(res, token);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  }catch(error) {
    console.error("Login error:" ,error)
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};