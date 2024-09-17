/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_PATH: string;
      NEXT_RTE: string;
      // Add other environment variables here
    }
  }
}

export {};
