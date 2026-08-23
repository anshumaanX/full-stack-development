import userSignupSchema from "../../validators/auth.validator.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res) => {
  try{

    const result = userSignupSchema.safeParse(req.body);

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