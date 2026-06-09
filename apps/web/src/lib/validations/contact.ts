import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),

  lastName: z.string().trim().min(2, "Last name is required"),

  email: z.string().trim().email("Please enter a valid email address"),

  subject: z.string().trim().min(3, "Please enter a subject"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
