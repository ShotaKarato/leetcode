use std::collections::HashMap;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut brackets = HashMap::new();
        brackets.insert('{', '}');
        brackets.insert('[', ']');
        brackets.insert('(', ')');

        let mut heap = Vec::new();

        for elm in s.chars() {
            match brackets.get(&elm) {
                // handle opening bracket
                Some(closing_bracket) => {
                  heap.push(closing_bracket);
                }
                // handle closing bracket
                None => {
                    match heap.get(heap.len() - 1) {
                        None => {
                            return false;
                        }
                        Some(opening_bracket) => {
                            if elm == **opening_bracket {
                                heap.pop();
                            } else {
                                return false;
                            }
                        }
                    }
                }
            }
        }

        if heap.len() > 0 {
            return false;
        }
        
        return true;
    }
}