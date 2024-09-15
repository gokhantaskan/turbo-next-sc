"use client";

import Link from "next/link";

import { ROUTE_ENDPOINTS } from "@/lib/constants/endpoints";

import { SignUpForm } from "./components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="content-wrapper">
      <header>
        <h1>Sign Up</h1>
        <p>Welcome onboard! Let's get started.</p>
      </header>
      <SignUpForm />
      <p className="text-sm text-center">
        Already have an account? <Link href={ROUTE_ENDPOINTS.SignIn}>Sign In</Link>
      </p>
    </div>
  );
}
