impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        let mut output = String::from("");
        for i in 0..strs[0].len() {
            let char = strs[0].chars().nth(i);
            match char {
                Some(c_of_char) => {
                    for p in (1..strs.len()) {
                        let str = strs[p].chars().nth(i);
                            match str {
                                Some(c_of_str) => {
                                    if c_of_char != c_of_str {
                                        return output;
                                    }
                                },
                                None => {
                                    return output;
                                }
                            }
                        }
                    output.push(c_of_char);       
                },
                None => break
            }
        }
        output
    }
    
}