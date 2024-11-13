import { UserModel } from "@/lib/modals/userModel";
import { connectDB } from "@/lib/dbConncect";
import { headers } from "next/headers";

export async function GET(response) {
  headers();

  await connectDB();
  const users = await UserModel.find();
  console.log("🚀 ~ GET ~ course from route js:", users);
  return Response.json({
    data: users,
    msg: "users fetch successfully",
  });
}
