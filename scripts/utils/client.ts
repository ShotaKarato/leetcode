import fetch from "cross-fetch";
import { createClient } from "@urql/core";
import { getSdk } from "../../graphql/generated/graphql";

const client = createClient({
  url: "https://leetcode.com/graphql",
  fetch,
});

export const createUrqlClient = () => ({
  client: getSdk(async (doc, variables) => {
    const { data, error } = await client
      .query(doc, variables as any)
      .toPromise();
    if (error) throw error;
    if (!data) throw new Error("No data");
    return data;
  }),
});
