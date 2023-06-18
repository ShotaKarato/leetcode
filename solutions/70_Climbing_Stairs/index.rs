impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        fn recur(n: i32, mut table: HashMap<i32, i32>) -> i32 {
            if n < 0 {
                return 0;
            }
            if n == 0 {
                return 1;
            }

            match table.get(&n) {
                Some(value) => {
                    return value.to_owned();
                },
                None => {
                    let value = recur(n - 1, table.clone()) + recur(n - 2, table.clone());
                    table.insert(n, value);
                    return value;
                }
            }
        }
        return recur(n, HashMap::new());
    }
}