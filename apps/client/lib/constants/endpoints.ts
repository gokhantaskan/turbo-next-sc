export const ROUTE_ENDPOINTS = {
  Home: "/",
  Profile: (username: string) => `/u/${username}`,
  SignIn: "/auth/signin",
  SignUp: "/auth/signup",
  SignOut: "/auth/signout",
  ForgotPassword: "/auth/forgot-password",
  RefreshAuthToken: "/auth/forgot-password",
} as const;

export const API_ENDPOINTS = {
  SignIn: "/api/auth/signin",
  SignOut: "/api/auth/signout",
  RefreshAuthToken: "/api/auth/refresh",
} as const;
