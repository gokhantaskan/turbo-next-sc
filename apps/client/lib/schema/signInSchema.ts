import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().min(1),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export type SignInFormSchemaType = z.infer<typeof SignInFormSchema>;
