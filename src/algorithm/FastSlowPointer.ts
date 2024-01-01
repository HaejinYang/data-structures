import { LinkedList, Node } from "../LinkedList";

class LoopDetectableList<T> extends LinkedList<T> {
  constructor() {
    super();
  }

  detectLoop() {
    let slow = this.head;
    let fast = this.head;

    while (slow !== this.tail && fast != this.tail) {
      slow = slow.next;
      fast = fast.next?.next;
      if (!fast) {
        break;
      }

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }
}

export { LoopDetectableList };
