"use client";

import Link from "next/link";

import { RegistrationForm } from "./components/RegistrationForm";

export default function RegisterPage() {
  return (
    <div className="content-wrapper">
      <header>
        <h1>Register</h1>
        <p>Welcome onboard! Let's get started.</p>
      </header>
      <RegistrationForm />
      <p className="text-sm text-center">
        Already have an account? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
}
