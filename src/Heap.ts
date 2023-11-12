export class Heap<T> {
  private store: T[];
  private order: "greater" | "less";

  constructor(order: "greater" | "less") {
    this.order = order;
    this.store = [] as T[];
  }

  push(item: T) {
    this.store.push(item);
    this.heapifyToUpward();
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
    this.heapifyToDownward();
  }

  all(): T[] {
    return this.store;
  }

  private heapifyToUpward(): void {
    /**
     *    1. 가장 후미에 아이템 삽입
     *    2. 아이템의 부모, 부모의 부모, ... 루트까지 올라가며 비교후 스왑
     */
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

  private heapifyToDownward(): void {
    /**
     * HACK: 왜 2번 도나? push와 pop이 반복되는 상황에서 최소힙인데 루트가 자식 둘보다 크거나 최대힙인데 루트가 자식 둘보다 작은 상황이 발생할 수 있음
     * 예를 들어, 최소힙에서 0, 10, 100, -10, -100 순서대로 push를 진행하고 pop을 2번하면 [100, 10, 0]이 된다.
     * 한 번만 루프가 돌면 [10, 100, 0]이 되어, 최소힙이 깨진다. 두 번 돌아야 한다.
     */
    for (let i = 0; i < 2; i++) {
      let currentIndex = 0;
      while (true) {
        let leftChildIndex = 2 * currentIndex + 1;
        let rightChildIndex = 2 * currentIndex + 2;

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
