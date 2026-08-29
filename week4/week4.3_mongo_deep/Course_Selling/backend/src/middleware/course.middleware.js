import Course from "../models/course.model.js";


const courseOwnershipMiddleware  = async (req,res,next) => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    if(course.instructor.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to modify this course"
      });
    }

    req.course = course;

    next()
  }catch(error) {
    console.error("Course ownership error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export default courseOwnershipMiddleware;