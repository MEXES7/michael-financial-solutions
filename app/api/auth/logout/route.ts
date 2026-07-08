import { destroySession } from "@/libs/auth";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await destroySession();

    return NextResponse.json(
      {
        success: true,
        message: "Logged out successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Logout Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
