import ContactEmail from "@/emails/ContactEmail";
import { resend } from "./resend";
import WelcomeEmail from "@/emails/WelcomeEmail";
import VerifyEmail from "@/emails/VerifyEmail";

export async function sendWelcomeEmail(
  email: string,
  firstName: string,
  userName: string,
  accountType: string,
  accountNumber: string,
) {
  await resend.emails.send({
    from: "Michael Finance <onboarding@amqeypay.com>",
    to: email,
    subject: "Welcome to Michael Finance",
    react: WelcomeEmail({
      name: firstName,
      userName: userName,
      accountType: accountType,
      accountNumber: accountNumber,
    }),
  });
}

export async function sendVerifyEmail(email: string, firstName: string) {
  await resend.emails.send({
    from: "Michael Finance <onboarding@amqeypay.com>",
    to: email,
    subject: "Verify Your Email",
    react: VerifyEmail({}),
  });
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return resend.emails.send({
    from: "Michael Finance <noreply@amqeypay.com>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: data.email,
    subject: `New Contact Form: ${data.subject}`,
    react: ContactEmail(data),
  });
}
