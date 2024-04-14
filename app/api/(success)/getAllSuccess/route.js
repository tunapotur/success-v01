import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Success from "@/models/Success";

export async function GET() {
  try {
    await connectMongoDB();

    const data = await Success.find({})
      .sort({ date: "desc" })
      //.populate("user", ["_id", "name", "email", "role", "theme"]);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `An error occurred while getting all success list. ${error.message}`,
      },
      { status: 500 }
    );
  }
}
