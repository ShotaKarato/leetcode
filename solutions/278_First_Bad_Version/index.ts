type IsBadVersion = (version: number) => boolean;

const solution =
  (isBadVersion: IsBadVersion) =>
  (n: number): number => {
    let left = 1;
    let right = n;

    const findFirstBadVersion = () => {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid - 1;
        if (!isBadVersion(right)) return right + 1;
        return findFirstBadVersion();
      } else {
        left = mid + 1;
        return findFirstBadVersion();
      }
    };

    return findFirstBadVersion();
  };
