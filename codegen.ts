import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./graphql/schema/schema.graphql",
  generates: {
    "./graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};
export default config;
