"use client";

import { Checkbox, Field, Input, Label } from "@headlessui/react";
import { Button } from "@repo/ui/Button";
import { FormField } from "@repo/ui/FormField";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormTypes = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormTypes>();

  async function onSubmit(data: LoginFormTypes) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <FormField
        label="Email"
        errorMessage={errors.email?.message}
      >
        <Input
          className={errors.email && "is-error"}
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "This field is required" })}
        />
      </FormField>
      <FormField
        className="relative"
        label="Password"
        errorMessage={errors.password?.message}
      >
        <Input
          className={errors.password && "is-error"}
          type="password"
          placeholder="Enter your password"
          minLength={6}
          {...register("password", { required: "This field is required" })}
        />
        <Link
          className="absolute top-0 right-0 text-sm"
          href="/auth/forgot-password"
        >
          Forgot password?
        </Link>
      </FormField>
      <Field className="flex items-center gap-1">
        <Checkbox
          checked={rememberMe}
          onChange={setRememberMe}
          className="group block size-4 rounded border border-solid bg-white data-[checked]:bg-primary-500 data-[checked]:border-primary-500"
        >
          <svg
            className="stroke-white opacity-0 group-data-[checked]:opacity-100"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox>
        <Label className="p-form-field__label">Remember me</Label>
      </Field>

      <Button
        className="w-full"
        variant="primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};
