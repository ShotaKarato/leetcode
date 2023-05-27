use std::collections::HashMap;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut table:HashMap<i32, i32> = HashMap::new();
        
        for i in nums {
            match table.get(&i) {
                None => {
                    table.insert(i, 1);
                },
                _ => {
                    return true;
                }
            }
        }

        return false;
    }
}