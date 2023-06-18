impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        let mut output: Vec<i32> = Vec::new();
        let mut co = 0;

        for (i, val) in digits.iter().rev().enumerate() {
            if i == 0 {
                if *val == 9 {
                    output.insert(0, 0);
                    co = 1;
                } else {
                    output.insert(0, *val + 1);
                }
            } else {
                if *val + co > 9 {
                    output.insert(0, 0);
                    co = 1;
                } else {
                    output.insert(0, *val + co);
                    co = 0;
                };
                
            }
        }
        
        if co == 1 {
            output.insert(0, co);
            output
        } else {
            output
        }
    }
}