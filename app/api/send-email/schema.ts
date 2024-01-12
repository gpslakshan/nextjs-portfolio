import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .min(3, { message: "Name must be at least 3 characters." }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please provide a valid email address." }),
  subject: z
    .string({ required_error: "Subject is required." })
    .min(3, { message: "Subject must be at least 3 characters." }),
  message: z
    .string({ required_error: "Message is required." })
    .min(3, { message: "Message must be at least 3 characters." }),
});

export default contactSchema;
