"use client";

import { Input } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui/components/Button";
import { FormField } from "@ui/components/FormField";
import { useForm } from "react-hook-form";

import { SignUpFormSchema, type SignUpFormSchemaType } from "../schema/signUpSchema";

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
  });

  async function onSubmit(data: SignUpFormSchemaType) {
    console.log(data);
  }

  return (
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
      <FormField
        label="Password"
        helperText="Must be at least 6 characters."
        required
        errorMessage={errors.password?.message}
      >
        <Input
          className={errors.password && "is-error"}
          type="password"
          placeholder="Create a password"
          {...register("password", { required: true, minLength: 6, maxLength: 20 })}
        />
      </FormField>

      <Button
        className="w-full"
        variant="primary"
        type="submit"
      >
        Get Started
      </Button>
    </form>
  );
};
