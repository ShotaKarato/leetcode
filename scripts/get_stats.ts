import fetch from "cross-fetch";
import { createClient, gql } from "@urql/core";
import type { GetUserStatsQuery } from "../graphql/generated/graphql";
import { STATS, Stats } from "./constants/stats";

const GetStats = gql`
  query getStats($username: String!) {
    matchedUser(username: $username) {
      username
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

export const getStats = async () => {
  try {
    const client = createClient({
      url: "https://leetcode.com/graphql",
      fetch,
    });

    const result = await client
      .query<GetUserStatsQuery>(GetStats, { username: process.env.USERNAME })
      .toPromise();
    const stats = result.data?.matchedUser?.submitStats?.acSubmissionNum ?? [];
    const badges = stats
      .filter((stat) => stat!.difficulty !== "All")
      .map(
        (stat) =>
          `!\[A badge for ${
            stat!.difficulty
          } problem\](https://img.shields.io/badge/${stat!.difficulty}-${
            stat!.count
          }-${STATS[stat!.difficulty as Stats]["color"]})`
      )
      .join(" ");
    return badges;
  } catch (error) {
    console.log(error);
  }
};
