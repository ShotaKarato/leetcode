const findCenter = (edges: number[][]): number => {
  const edgesMap: Record<number, number> = {};

  for (const edge of edges) {
    for (const node of edge) {
      if (!edgesMap[node]) {
        edgesMap[node] = 1;
        continue;
      }
      edgesMap[node] += 1;
    }
  }

  const entries = Object.entries(edgesMap);
  const n = entries.length - 1;

  return parseInt(entries.find(([_, value]) => value === n)![0]);
};
