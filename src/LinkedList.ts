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

  insertEnd(item: T): Node<T> {
    const prev = this.tail.prev;

    const newNode = new Node<T>();
    newNode.data = item;
    newNode.next = this.tail;
    newNode.prev = prev;
    prev.next = newNode;
    this.tail.prev = newNode;

    return newNode;
  }

  insertBegin(item: T): Node<T> {
    const next = this.head.next;
    const newNode = new Node<T>();
    newNode.data = item;

    this.head.next = newNode;
    newNode.prev = this.head;
    newNode.next = next;
    next.prev = newNode;

    return newNode;
  }

  insertAfterNode(node: Node<T>, item: T): Node<T> {
    if (!this.find(node.data)) {
      throw new Error("링크드리스트에 속한 노드가 아님");
    }

    const next = node.next;

    const newNode = new Node<T>();
    newNode.data = item;
    newNode.prev = node;
    newNode.next = next;
    node.next = newNode;
    next.prev = newNode;

    return newNode;
  }

  insertBeforeNode(node: Node<T>, item: T): Node<T> {
    if (!this.find(node.data)) {
      throw new Error("링크드리스트에 속한 노드가 아님");
    }

    const prev = node.prev;

    const newNode = new Node<T>();
    newNode.data = item;
    newNode.prev = prev;
    newNode.next = node;
    prev.next = newNode;
    node.prev = newNode;

    return newNode;
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

  revers() {
    let result: T[] = [];
    let node = this.tail.prev;
    while (node !== this.head) {
      result.push(node.data);
      node = node.prev;
    }

    return result;
  }

  /**
   *
   * @param item
   * @return 찾으면 Node, 못찾으면 null
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

  has(node: Node<T>): boolean {
    let find = this.head.next;
    while (find !== this.tail) {
      if (find === node) {
        return true;
      }

      find = find.next;
    }

    return false;
  }

  /**
   * @param this
   * @param item
   * @returns 응답으로 자신을 반환. 리턴으로 성공 실패를 줘야하나 싶었지만, 지운다는 것의 결과로 성공 실패를 받는게 사용자에게 이점이 없다.
   */
  remove(item: T): this {
    const node = this.find(item);
    if (node) {
      const prev = node.prev;
      const next = node.next;

      prev.next = next;
      next.prev = prev;
    }

    return this;
  }

  removeNode(node: Node<T>): this {
    if (!this.has(node)) {
      throw new Error("링크드리스트에 속한 노드가 아님");
    }

    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;

    return this;
  }
}

class Node<T> {
  public data: T | null;
  public next: Node<T> | null;
  public prev: Node<T> | null;
}

export { LinkedList, Node };
