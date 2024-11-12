import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name field cannot be empty" }),
  email: z.string().min(1, { message: "Email field cannot be empty" }).email(),
  message: z.string().min(1, { message: "Message field cannot be empty" })
});
