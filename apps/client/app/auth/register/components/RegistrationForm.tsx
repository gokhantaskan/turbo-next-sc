"use client";

import { Field, Input, Label } from "@headlessui/react";
import { Button } from "@repo/ui/Button";

export const RegistrationForm: React.FC = () => {
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
      <Field className="flex flex-col gap-1">
        <Label className="text-sm font-medium">Password</Label>
        <Input
          type="password"
          required
          minLength={6}
        />
      </Field>

      <Button
        className="w-full"
        variant="primary"
      >
        Get Started
      </Button>
    </form>
  );
};
