export const evalRPN = (tokens: string[]): number => {
  const stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const curr = tokens[i];
    if (curr === "+") {
      const result = stack.pop()! + stack.pop()!;
      stack.push(result);
    } else if (curr === "-") {
      const a = stack.pop()!;
      const b = stack.pop()!;
      stack.push(b - a);
    } else if (curr === "*") {
      const result = stack.pop()! * stack.pop()!;
      stack.push(result);
    } else if (curr === "/") {
      const a = stack.pop()!;
      const b = stack.pop()!;
      const result = Math.trunc(b / a);
      stack.push(result);
    } else {
      stack.push(Number(curr));
    }
  }
  return stack[0];
};
