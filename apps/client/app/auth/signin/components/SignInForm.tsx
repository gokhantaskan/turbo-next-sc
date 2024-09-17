"use client";

import { Checkbox, Field, Input, Label } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "@ui/components/Alert";
import { Button } from "@ui/components/Button";
import { FormField } from "@ui/components/FormField";
import Warning from "assets/img/icons/warning.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";
import { SignInFormSchema, type SignInFormSchemaType } from "@/lib/schema/signInSchema";
import { CustomError } from "@/lib/types/globals";
import { signIn } from "@/lib/utils/actions/auth";

export const SignInForm: React.FC = () => {
  const router = useRouter();

  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSchemaType>({
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInFormSchemaType> = async data => {
    setError(null);
    setLoading(true);

    try {
      await signIn(data);
      router.push(ROUTE_ENDPOINTS.Home);
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setError(error.message);
        return;
      }

      setError((error as CustomError).data.message);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
    >
      {error && (
        <div>
          <Alert
            variant="error"
            title="Error"
            description={error}
            icon={<Warning className="text-error" />}
          />
        </div>
      )}
      <FormField
        required
        label="Email"
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
        className="relative"
        required
        label="Password"
        errorMessage={errors.password?.message}
      >
        <Input
          className={errors.password && "is-error"}
          type="password"
          placeholder="Enter your password"
          minLength={6}
          {...register("password", { required: true })}
        />
        <Link
          className="absolute top-0 right-0 text-sm"
          href={ROUTE_ENDPOINTS.ForgotPassword}
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
        loading={loading}
      >
        Login
      </Button>
    </form>
  );
};
