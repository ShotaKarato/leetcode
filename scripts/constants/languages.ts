const typeScript = {
  name: "TypeScript",
  flag: "-ts",
} as const;

const rust = {
  name: "Rust",
  flag: "-rust",
} as const;

export const LANGUAGES = [typeScript, rust];
export type Languages = typeof LANGUAGES[number]["flag"];
