import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/libs/validations";
import { sendContactEmail } from "@/libs/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    await sendContactEmail(result.data);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message.",
      },
      {
        status: 500,
      },
    );
  }
}
