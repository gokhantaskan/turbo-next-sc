import { z } from "zod";

export const SignUpFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;
