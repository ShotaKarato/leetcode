class MinStack {
  public stack: number[];
  public minStack: number[];
  public size: number;

  constructor() {
    (this.stack = []), (this.minStack = []), (this.size = 0);
  }

  push(val: number): void {
    // stack
    if (this.size === 0) {
      this.stack.push(val);
      this.minStack.push(val);
      this.size++;
    } else {
      this.stack.push(val);
      // minStack
      if (this.getMin() === undefined || this.getMin() >= val) {
        this.minStack.push(val);
      }
    }
    // size
    this.size++;
  }

  pop(): void {
    if (this.getMin() === this.stack.pop()) {
      this.minStack.pop();
      this.size--;
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
