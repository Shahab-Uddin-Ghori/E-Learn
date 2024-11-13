import { CoursesModel } from "@/lib/modals/coursesModel";
import { connectDB } from "@/lib/dbConncect";
import { headers } from "next/headers";

export async function GET(response) {
  headers();

  await connectDB();
  const course = await CoursesModel.find();
  console.log("🚀 ~ GET ~ course from route js:", course);
  return Response.json({
    data: course,
    msg: "Courses fetch successfully",
  });
}
