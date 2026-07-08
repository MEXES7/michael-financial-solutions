import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  middleName: z.string().min(2, "Middle name must be at least 2 characters"),
  userName: z.string().min(2, "User name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string(),
  country: z.string(),
  accountType: z.string(),
  currency: z.string(),
  pin: z.string().length(4, "PIN must be exactly 4 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.string().email(),

  password: z.string().min(1),
});

export const contactSchema = z.object({
  name: z.string().min(2),

  email: z.string().email(),

  subject: z.string().min(3),

  message: z.string().min(10),
});
