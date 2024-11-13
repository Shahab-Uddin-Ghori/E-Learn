import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: { type: String },
    CNIC: String,
    qualification: String,
    address: String,
    contact: String,
  },
  { timestamps: true }
);

export const UserModel =
  mongoose.models.user || mongoose.model("user", userSchema);
