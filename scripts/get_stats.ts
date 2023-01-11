import { STATS, Stats } from "./constants/stats";
import { createUrqlClient } from "./utils/client";

export const getStats = async () => {
  try {
    const { client } = createUrqlClient();
    const result = await client.getUserStats({
      username: process.env.USERNAME ?? "",
    });
    const stats = result.matchedUser?.submitStats?.acSubmissionNum ?? [];
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

getStats();
