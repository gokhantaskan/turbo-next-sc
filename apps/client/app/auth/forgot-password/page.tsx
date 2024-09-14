"use client";

import { Input } from "@headlessui/react";
import { Button } from "@repo/ui/Button";
import { FormField } from "@repo/ui/FormField";
import Link from "next/link";

export default function ForgotPasswordPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="content-wrapper">
      <header>
        <h1>Forgot Password?</h1>
        <p>No worries, we’ll send you reset instructions.</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <FormField
          label="Email"
          required
        >
          <Input
            type="email"
            placeholder="Enter your email"
            required
          />
        </FormField>
        <Button
          className="w-full"
          variant="primary"
        >
          Send Email Instructions
        </Button>
      </form>

      <p className="text-sm text-center">
        <Link href="/auth/login">Back to login</Link>
      </p>
    </div>
  );
}
