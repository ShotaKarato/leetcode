export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      username: string;
    }
  }
}
