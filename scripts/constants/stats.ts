export const STATS = {
  Easy: {
    color: "green",
  },
  Medium: {
    color: "yellow",
  },
  Hard: {
    color: "red",
  },
} as const;

export type Stats = keyof typeof STATS;
export type StatsColor = typeof STATS[Stats]["color"];
