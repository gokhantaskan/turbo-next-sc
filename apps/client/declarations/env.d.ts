/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_PATH: string;
      NEXT_RTE: string;
      NEXT_SESSION_KEY: string;
    }
  }
}

export {};
