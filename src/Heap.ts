export class Heap<T> {
  private store: T[];
  private order: "greater" | "less";

  constructor(order: "greater" | "less") {
    this.order = order;
    this.store = [] as T[];
  }

  push(item: T) {
    this.store.push(item);
    this.heapify();
  }

  empty(): boolean {
    return this.store.length === 0;
  }

  top(): T {
    if (this.empty()) {
      throw new Error("No elements in heap");
    }

    return this.store[0];
  }

  pop(): void {
    if (this.empty()) {
      throw new Error("No elements in heap");
    }

    this.store.shift();

    let currentIndex = 0;
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;

      /**
       * 좌측 비교, 우측 비교 둘 다 참인 경우는 있을 수 없음. push할때 정렬이 한 번 되었으므로
       */
      if (
        leftChildIndex < this.store.length &&
        this.swap(leftChildIndex, currentIndex)
      ) {
        currentIndex = leftChildIndex;

        continue;
      }

      if (
        rightChildIndex < this.store.length &&
        this.swap(rightChildIndex, currentIndex)
      ) {
        currentIndex = rightChildIndex;

        continue;
      }

      break;
    }
  }

  all(): T[] {
    return this.store;
  }

  /**
   *    1. 가장 후미에 아이템 삽입
   *    2. 아이템의 부모, 부모의 부모, ... 루트까지 올라가며 비교후 스왑
   */
  private heapify(): void {
    let currentIndex = this.store.length - 1;
    let parentIndex = -1;

    while (currentIndex !== 0) {
      if (currentIndex % 2 === 1) {
        parentIndex = (currentIndex - 1) / 2;
      } else {
        parentIndex = (currentIndex - 2) / 2;
      }

      if (!this.swap(currentIndex, parentIndex)) {
        break;
      }

      currentIndex = parentIndex;
    }
  }

  private swap(currentIndex: number, parentIndex: number): boolean {
    if (
      this.order === "greater" &&
      this.store[currentIndex] > this.store[parentIndex]
    ) {
      [this.store[currentIndex], this.store[parentIndex]] = [
        this.store[parentIndex],
        this.store[currentIndex],
      ];

      return true;
    }

    if (
      this.order === "less" &&
      this.store[currentIndex] < this.store[parentIndex]
    ) {
      [this.store[currentIndex], this.store[parentIndex]] = [
        this.store[parentIndex],
        this.store[currentIndex],
      ];

      return true;
    }

    return false;
  }
}
