"use client";

import { Field, Input, Label } from "@headlessui/react";
import { Button } from "@repo/ui/Button";
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
        <Field className="flex flex-col gap-1">
          <Label>Email</Label>
          <Input
            type="email"
            id="email"
          />
        </Field>
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
