import Lesson from "../models/lesson.model.js";
import { createLessonSchema } from "../../validators/lesson.validator.js";

export const createLesson = async (req, res) => {
  try {
     const result = createLessonSchema.safeParse(req.body);
    
        if(!result.success) {
            return res.status(400).json({
            success: false,
            message: "Validation failed",
            error: result.error.issues,
          });
        }
    const { title, description, videoUrl, order } = result.data;

    const lesson = await Lesson.create({
      title,
      description,
      videoUrl,
      order,
      course: req.params.courseId,
    });

    return res.status(201).json({
      success: true,
      message: "Lesson created successfully",
      lesson,
    });
  } catch (error) {
    console.error("Create lesson error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A lesson with this order already exists in this course",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};