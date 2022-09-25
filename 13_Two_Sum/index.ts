type Table = {
    [key: number]: number;
};
function twoSum(nums: number[], target: number): number[] {
    const table: Table = {};
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const diff = target - curr;
        if (table[diff] != null) {
            return [i, table[diff]];
        } else {
            table[curr] = i;
        }
    }
};