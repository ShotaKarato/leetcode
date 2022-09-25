type Symbol = "I" | "V" | "X" | "L" | "C" | "D" | "M";
type Table<T extends Symbol> = {
    [K in T]: number;
}
function romanToInt(s: string): number {
    let output: number = 0;
    const table: Table<Symbol> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const next = s[i + 1];
        console.log(curr, next);
        if (table[curr] < table[next]) {
            output += table[next] - table[curr];
            i++;
        } else {
            output += table[curr];
        }
    }
    return output;
};