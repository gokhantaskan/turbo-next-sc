import { z } from "zod";

export const CustomErrorSchema = z.object({
  data: z.any(),
  status: z.number(),
  statusText: z.string(),
});

export type CustomError = z.infer<typeof CustomErrorSchema>;
