import { Node } from "./LinkedList";

class Queue<T> {
  private head: Node<T>;
  private tail: Node<T>;

  constructor() {
    this.head = new Node<T>();
    this.tail = new Node<T>();

    this.head.prev = null;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.tail.next = null;
  }

  push(item: T) {
    const newNode = new Node<T>();
    newNode.data = item;

    const prev = this.tail.prev;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = this.tail;
    this.tail.prev = newNode;
  }

  pop() {
    if (this.empty()) {
      throw new Error("큐 안에 아이템이 없음");
    }

    this.head.next = this.head.next.next;
    this.head.next.next.prev = this.head;
  }

  front(): T {
    if (this.empty()) {
      throw new Error("큐 안에 아이템이 없음");
    }

    return this.head.next.data;
  }

  empty() {
    return this.head.next === this.tail;
  }
}

export { Queue };
