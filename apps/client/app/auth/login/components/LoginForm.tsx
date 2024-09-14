"use client";

import { Checkbox, Field, Input, Label } from "@headlessui/react";
import { Button } from "@repo/ui/Button";
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
      <Field className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Email</Label>
        <Input
          type="email"
          required
        />
      </Field>
      <Field className="flex flex-col gap-1 relative">
        <Label className="text-sm font-medium">Password</Label>
        <Input
          type="password"
          required
          minLength={6}
        />
        <Link
          className="absolute top-0 right-0"
          href="/auth/forgot-password"
        >
          Forgot password?
        </Link>
      </Field>
      <Field className="flex items-center gap-1">
        <Checkbox
          checked={enabled}
          onChange={setEnabled}
          className="group block size-4 rounded border border-solid bg-white data-[checked]:bg-blue-500"
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
        <Label className="select-none">Remember me</Label>
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
