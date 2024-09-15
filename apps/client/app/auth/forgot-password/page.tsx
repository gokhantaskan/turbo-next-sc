"use client";

import { Input } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/Button";
import { FormField } from "@repo/ui/FormField";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ENDPOINTS } from "@/lib/constants/endpoints";

const ForgotPasswordFormSchema = z.object({
  email: z.string().email(),
});

type ForgotPasswordFormSchemaType = z.infer<typeof ForgotPasswordFormSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchemaType>({
    resolver: zodResolver(ForgotPasswordFormSchema),
  });

  async function onSubmit(data: ForgotPasswordFormSchemaType) {
    console.log(data);
  }

  return (
    <div className="content-wrapper">
      <header>
        <h1>Forgot Password?</h1>
        <p>No worries, we’ll send you reset instructions.</p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormField
          label="Email"
          required
          errorMessage={errors.email?.message}
        >
          <Input
            className={errors.email && "is-error"}
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </FormField>
        <Button
          className="w-full"
          variant="primary"
          type="submit"
        >
          Send Instructions
        </Button>
      </form>

      <p className="text-sm text-center">
        <Link href={ENDPOINTS.SignIn}>Back to login</Link>
      </p>
    </div>
  );
}
