const Course = require("../../models/Course");

const addNewCourse = async (req, res) => {
  try {
    const courseData = req.body;
    const newCourse = new Course(courseData);
    const savedCourse = await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: savedCourse,
    });
  } catch (e) {
    console.error("Error adding course:", e);
    res.status(500).json({
      success: false,
      message: "Server error while creating course",
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ success: true, data: courses });
  } catch (e) {
    console.error("Error fetching courses:", e);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getCourseDetailsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, data: course });
  } catch (e) {
    console.error("Error fetching course:", e);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (e) {
    console.error("Error updating course:", e);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }
    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (e) {
    console.error("Error deleting course:", e);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getCoursesByInstructorID = async (req, res) => {
  try {
    const { instructorId } = req.params;
    const courses = await Course.find({ instructorId });
    res.status(200).json({ success: true, data: courses });
  } catch (e) {
    console.error("Error fetching instructor courses:", e);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  addNewCourse,
  getAllCourses,
  getCourseDetailsByID,
  updateCourseByID,
  deleteCourseByID,
  getCoursesByInstructorID,
};
