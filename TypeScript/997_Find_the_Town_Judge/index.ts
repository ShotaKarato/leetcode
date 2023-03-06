export const findJudge = (n: number, trust: number[][]): number => {
  if (trust.length < 1) return n < 2 ? 1 : -1;
  const trustMap: Record<number, number> = {};

  for (let i = 0; i < trust.length; i++) {
    const [trustee, trusted] = trust[i];
    if (!trustMap[trusted]) {
      trustMap[trusted] = 1;
    } else {
      trustMap[trusted] += 1;
    }
    if (!trustMap[trustee]) {
      trustMap[trustee] = -1;
    } else {
      trustMap[trustee] -= 1;
    }
  }

  const judgeCondition = n - 1;
  const judgeIndex = Object.values(trustMap).indexOf(judgeCondition);

  return judgeIndex > -1 ? Number(Object.keys(trustMap)[judgeIndex]) : -1;
};
