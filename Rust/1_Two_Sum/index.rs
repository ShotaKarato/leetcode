use std::collections::HashMap;
use std::convert::TryInto;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut hash_map:HashMap<i32, usize> = HashMap::new();
        let mut output: Vec<i32> = Vec::new();
        for (i, val) in nums.iter().enumerate() {   
            let key: i32 = target - val;
            match hash_map.get(&key) {
                Some(&value) => {
                    output.push(value.try_into().unwrap());
                    output.push(i.try_into().unwrap());
                },
                None => {
                    hash_map.insert(*val, i);
                },
            };
        }
        output
    }
}