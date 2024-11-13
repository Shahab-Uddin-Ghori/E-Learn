import mongoose from "mongoose";

const coursesSchema = mongoose.Schema(
  {
    title: { type: String, unique: true },
    batch: String,
    eligibility: String,
    duration: String,
    description: String,
  },
  { timestamps: true }
);

export const CoursesModel =
  mongoose.models.courses || mongoose.model("courses", coursesSchema);
