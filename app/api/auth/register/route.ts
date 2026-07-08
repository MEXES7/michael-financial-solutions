import { generateAccountNumber } from "@/libs/accountNumber";
import { createSession, hashPassword } from "@/libs/auth";
import { sendVerifyEmail, sendWelcomeEmail } from "@/libs/mail";
import { prisma } from "@/libs/prisma";
import { registerSchema } from "@/libs/validations";
import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { hashPassword, createSession } from "@/lib/auth";
// import { registerSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = registerSchema.safeParse(body);

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

    const {
      firstName,
      lastName,
      middleName,
      userName,
      email,
      phoneNumber,
      country,
      accountType,
      currency,
      pin,
      password,
    } = result.data;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists.",
        },
        {
          status: 409,
        },
      );
    }

    const hashedPassword = await hashPassword(password);
    const accountNumber = await generateAccountNumber();

    const user = await prisma.user.create({
      data: {
        accountNumber,
        firstName,
        lastName,
        middleName,
        userName,
        email,
        phoneNumber,
        country,
        accountType,
        currency,
        pin,

        password: hashedPassword,
      },
      select: {
        id: true,
        accountNumber: true,
        firstName: true,
        email: true,
        userName: true,
        accountType: true,
        createdAt: true,
      },
    });

    await createSession(user.id, user.email);

    // Send welcome email (don't fail registration if email fails)
    try {
      await sendWelcomeEmail(
        user.email,
        user.firstName,
        user.userName,
        user.accountType,
        user.accountNumber,
      );
    } catch (emailError) {
      console.error("Welcome email failed:", emailError);
    }

    // Send verification email (don't fail registration if email fails)
    try {
      await sendVerifyEmail(user.email, user.firstName);
    } catch (emailError) {
      console.error("Verification email failed:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        user,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Register Error:", error);

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
