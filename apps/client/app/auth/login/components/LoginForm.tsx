"use client";

import { Checkbox, Field, Input, Label } from "@headlessui/react";
import { Button } from "@repo/ui/Button";
import { FormField } from "@repo/ui/FormField";
import Link from "next/link";
import { useState } from "react";

export const LoginForm: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <FormField label="Email">
        <Input
          type="email"
          placeholder="Enter your email"
          required
        />
      </FormField>
      <FormField
        className="relative"
        label="Password"
      >
        <Input
          type="password"
          placeholder="Enter your password"
          required
          minLength={6}
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
          checked={enabled}
          onChange={setEnabled}
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
      >
        Login
      </Button>
    </form>
  );
};
