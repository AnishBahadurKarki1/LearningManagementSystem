const express = require("express");
const {
  addNewCourse,
  getAllCourses,
  getCourseDetailsByID,
  updateCourseByID,
  deleteCourseByID,
  getCoursesByInstructorID,
} = require("../../controllers/instructor-controller/course-controller");

const router = express.Router();

// Add a new course
router.post("/add", addNewCourse);

// Get all courses
router.get("/get", getAllCourses);

// Get course details by course ID
router.get("/get/details/:id", getCourseDetailsByID);

// Update course by ID
router.put("/update/:id", updateCourseByID);

// Delete course by ID
router.delete("/delete/:id", deleteCourseByID);

// Get all courses by instructor ID
router.get("/get/instructor/:instructorId", getCoursesByInstructorID);

module.exports = router;
