"use client";

import { Input, Label } from "@headlessui/react";
import { Button } from "@repo/ui/Button";
import { FormField } from "@repo/ui/FormField";

export const RegistrationForm: React.FC = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
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
      <FormField
        label="Password"
        helperText="Must be at least 6 characters."
        required
      >
        <Input
          type="password"
          placeholder="Create a password"
          required
          minLength={6}
        />
      </FormField>

      <Button
        className="w-full"
        variant="primary"
      >
        Get Started
      </Button>
    </form>
  );
};
