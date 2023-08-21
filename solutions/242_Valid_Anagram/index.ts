export const isAnagram = (s: string, t: string): boolean => {
  const mapForS: Record<string, number> = {};
  const mapForT: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapForS[s[i]]) {
      mapForS[s[i]] = 1;
    } else {
      mapForS[s[i]] += 1;
    }
  }

  for (let p = 0; p < t.length; p++) {
    if (!mapForT[t[p]]) {
      mapForT[t[p]] = 1;
    } else {
      mapForT[t[p]] += 1;
    }
  }

  if (Object.keys(mapForS).length !== Object.keys(mapForT).length) return false;

  for (const key in mapForS) {
    if (mapForS[key] !== mapForT[key]) return false;
  }

  return true;
};

/**
 * Big O: O(n), n is the sum of the length of s and t.
 * (But the lengths of s and t are mostly likely to be the same, it could be O(n^2)??)
 */
