import { Node } from "./LinkedList";

class Stack<T> {
  private head: Node<T>;
  constructor() {
    this.head = new Node<T>();
    this.head.prev = null;
    this.head.next = null;
  }

  pop() {
    if (this.head.prev === null) {
      throw new Error("빈 스택입니다.");
    }

    this.head = this.head.prev;
  }

  top(): T {
    if (this.head.prev === null) {
      throw new Error("빈 스택입니다.");
    }

    return this.head.data;
  }

  push(item: T) {
    const newNode = new Node<T>();
    newNode.data = item;
    newNode.prev = this.head;
    newNode.next = null;
    this.head.next = newNode;
    this.head = newNode;
  }

  empty() {
    return this.head.prev === null;
  }
}

export { Stack };
