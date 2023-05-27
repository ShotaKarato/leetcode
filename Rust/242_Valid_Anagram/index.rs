use std::collections::HashMap;

fn create_map (str: &String) -> HashMap<char, i32> {
    let mut map: HashMap<char, i32> = HashMap::new();
    for char in str.chars() {
        match map.get(&char) {
            None => {
                map.insert(char, 1);
            }
            _ => {
                *map.get_mut(&char).unwrap() += 1;
            }
        }
    }
    return map;
}

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }
        let s_map = create_map(&s);
        let t_map = create_map(&t);
        
        for (c, num) in &s_map {
            match t_map.get(c) {
                None => {
                    return false;
                },
                Some(r) => {
                    if num != r {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}