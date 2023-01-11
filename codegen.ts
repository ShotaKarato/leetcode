import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql/schema/schema.graphql",
  documents: ["./graphql/documents/getUserStats.graphql"],
  generates: {
    "graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
