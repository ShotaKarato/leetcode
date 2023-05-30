use std::collections::HashMap;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map: HashMap<Vec<i32>, Vec<String>> = HashMap::new();
        for str in strs {
            let mut count = vec![0;26];

            for c in str.chars() {
                let index = c as usize - 'a' as usize;
                count[index] += 1;
            }
            
            let key = count.clone();
            let flag = map.get_mut(&key);

            match (flag) {
                Some(v) => v.push(str),
                None => {
                    map.insert(key, vec![str]);
                }
            };
        }

        return map.values().cloned().collect();
    }
}