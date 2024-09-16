export const ROUTE_ENDPOINTS = {
  Home: "/",
  SignIn: "/auth/signin",
  SignUp: "/auth/signup",
  ForgotPassword: "/auth/forgot-password",
} as const;

export const API_ENDPOINTS = {
  SignIn: "/api/auth/signin",
} as const;
