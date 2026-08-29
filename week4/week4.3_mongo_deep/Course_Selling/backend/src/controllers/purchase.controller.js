import Course from "../models/course.model.js";
import Purchase from "../models/purchase.model.js";
import { purchaseCourseSchema } from "../../validators/purchase.validator.js";

export const purchaseCourse = async (req, res) => {
  try {
      const result = purchaseCourseSchema.safeParse(req.body);
      if(!result.success){
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          error: result.error.issues,
        })
      }
    const { courseId } = result.data;

    const course = await Course.findOne({
      _id: courseId,
      isPublished: true,
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    const existingPurchase = await Purchase.findOne({
      user: req.user._id,
      course: course._id,
    });

    if (existingPurchase) {
      return res.status(409).json({
        success: false,
        message: "You have already purchased this course",
      });
    }

    const purchase = await Purchase.create({
      user: req.user._id,
      course: course._id,
      amount: course.price,
    });

    return res.status(201).json({
      success: true,
      message: "Course purchased successfully",
      purchase,
    });
  } catch (error) {
    console.error("Purchase course error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};