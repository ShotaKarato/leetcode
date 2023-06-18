impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len() - 1;
    
        while left <= right {
            let middle = (left + ((right - left) / 2)) as usize;
            
            match nums.get(middle) {
                Some(num) => {
                    if target.eq(num) {
                        return middle as i32;
                    } else if target.lt(num) {
                        right = middle - 1;
                    } else {
                        left = middle + 1;
                    }
                },
                None => {
                    return 0;
                }
            }
        }

        left as i32
    }
}