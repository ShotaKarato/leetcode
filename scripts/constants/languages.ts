// export const LANGUAGES = {
//   TypeScript: "-ts",
//   Rust: "-rust",
// } as const;
// export type Languages = keyof typeof LANGUAGES;
// export type LanguagesFlag = typeof LANGUAGES[Languages];

const typeScript = {
  name: "TypeScript",
  flag: "-ts",
} as const;

const rust = {
  name: "Rust",
  flag: "-rust",
} as const;

export const LANGUAGES = [typeScript, rust];
export type Languages = typeof LANGUAGES[number]["name"];
export type LanguagesFlag = typeof LANGUAGES[number]["flag"];
