const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  public_id: { type: String },
  freePreview: { type: Boolean, default: false },
});

const CourseSchema = new mongoose.Schema({
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  instructorName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, enum: ["beginner", "intermediate", "advanced"], required: true },
  primaryLanguage: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  image: { type: String },
  welcomeMessage: { type: String },
  pricing: { type: Number, required: true },
  objectives: { type: String },
  students: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      studentName: String,
      studentEmail: String,
      paidAmount: String,
    },
  ],
  curriculum: [LectureSchema],
  isPublised: { type: Boolean, default: false },
});

module.exports = mongoose.model("Course", CourseSchema);
