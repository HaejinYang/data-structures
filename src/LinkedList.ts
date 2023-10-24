class LinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;
  constructor() {
    this.head = new Node<T>();
    this.tail = new Node<T>();
    this.head.next = this.tail;
    this.head.prev = null;
    this.tail.next = null;
    this.tail.prev = this.head;
  }

  insert(item: T) {
    const prev = this.tail.prev;

    const newNode = new Node<T>();
    newNode.data = item;
    newNode.next = this.tail;
    newNode.prev = prev;
    prev.next = newNode;
    this.tail.prev = newNode;
  }

  all() {
    let result: T[] = [];
    let node = this.head.next;
    while (node !== this.tail) {
      result.push(node.data);
      node = node.next;
    }

    return result;
  }

  /**
   *
   * @param item
   * @return 찾는 아이템의 포지션, 못찾으면 -1
   */
  find(item: T): Node<T> | null {
    let node = this.head.next;
    while (node !== this.tail) {
      if (node.data === item) {
        return node;
      }

      node = node.next;
    }

    return null;
  }
}

class Node<T> {
  public data: T | null;
  public next: Node<T> | null;
  public prev: Node<T> | null;
}

export { LinkedList, Node };
