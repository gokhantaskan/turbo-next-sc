export const ROUTE_ENDPOINTS = {
  Home: "/",
  SignIn: "/auth/signin",
  SignUp: "/auth/signup",
  ForgotPassword: "/auth/forgot-password",
  RefreshAuthToken: "/auth/forgot-password",
} as const;

export const API_ENDPOINTS = {
  SignIn: "/api/auth/signin",
  RefreshAuthToken: "/api/auth/refresh",
} as const;
