class Stack {
  #topOfStack = 0;
  elements: number[] = [];

  size() {
    return this.#topOfStack;
  }

  push(element: number) {
    this.#topOfStack++;
    this.elements.push(element);
  }

  pop() {
    if (this.#topOfStack === 0) throw Error("poped when empty");
    this.#topOfStack--;
    return this.elements.pop();
  }
}
