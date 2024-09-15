import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>;
