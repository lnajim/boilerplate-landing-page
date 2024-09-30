import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({ message: "Email is required" }),
    password: z.string().min(5, { message: "Password is required" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Confirm Password required" }),
    name: z.string().min(1, { message: "First name is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "Minimum of 6 characters required",
    }),
    confirmPassword: z
      .string()
      .min(5, { message: "Confirm Password required" }),

    token: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
