import { createCourseSchema, updateCourseSchema } from "../../validators/course.validator.js"
import Course from '../models/course.model.js'
export const createCourse = async (req,res) => {
  try{
    const result = createCourseSchema.safeParse(req.body);
    if(!result.success){
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        error: result.error.issues,
      })
    }
    const { title, description, price, thumbnail } = result.data;

    const course = await Course.create({
      title,
      description,
      price,
      thumbnail,
      instructor: req.user._id
    });

    return res.status(201).json({
      success: true,
      message: "course created successfully",
      course,
    });

  }catch(error) {
    console.error("create course error: ", error)

    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

export const getCourses = async (req,res) => {
  try{
    const courses = await Course.find({ isPublished: true })
      .populate("instructor", "name email")
      .sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        courses,
      });
  }catch(error) {
    console.error("Get courses error: ", error);
    
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getCourseById = async (req,res) => {
  try{
    const { id } = req.params;

    const course = await Course.findOne({
      _id: id,
      isPublished: true,
    }).populate("instructor", "name email");

    if(!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.status(200).json({
      success: true,
      course
    })
  }catch(error) {
    console.error("Get course by id error: ", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const result = updateCourseSchema.safeParse(req.body);
      if(!result.success){
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          error: result.error.issues,
        })
      }
    const { title, description, price, thumbnail } = result.data;

    req.course.title = title;
    req.course.description = description;
    req.course.price = price;
    req.course.thumbnail = thumbnail;

    await req.course.save();

    return res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course: req.course,
    });
  } catch (error) {
    console.error("Update course error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    await req.course.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error("Delete course error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const publishCourse = async (req, res) => {
  try {
    req.course.isPublished = true;

    await req.course.save();

    return res.status(200).json({
      success: true,
      message: "Course published successfully",
      course: req.course,
    });
  } catch (error) {
    console.error("Publish course error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
