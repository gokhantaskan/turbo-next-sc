"use client";

import Link from "next/link";

import { LoginForm } from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="content-wrapper">
      <header>
        <h1>Login</h1>
        <p>Welcome back! Please enter your details.</p>
      </header>
      <LoginForm />
      <p className="text-sm text-center">
        Don't have an account? <Link href="/auth/register">Register</Link>
      </p>
    </div>
  );
}
