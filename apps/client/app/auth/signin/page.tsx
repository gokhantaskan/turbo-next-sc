"use client";

import Link from "next/link";

import { ENDPOINTS } from "@/lib/constants/endpoints";

import { SignInForm } from "./components/SignInForm";

export default function SignInPage() {
  return (
    <div className="content-wrapper">
      <header>
        <h1>Sign In</h1>
        <p>Welcome back! Please enter your details.</p>
      </header>
      <SignInForm />
      <p className="text-sm text-center">
        Don't have an account? <Link href={ENDPOINTS.SignUp}>Sign Up</Link>
      </p>
    </div>
  );
}
