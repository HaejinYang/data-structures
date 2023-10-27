import { IQueue } from "./IQueue";

type Comperator<T> = (lhs: T, rhs: T) => number;

class PriorityQueue<T> implements IQueue<T> {
  private data: T[];
  private comperator: Comperator<T>;
  
  constructor(comperator: Comperator<T>) {
    this.comperator = comperator;
    this.data = [] as T[];
  }

  push(item: T): void {
    this.data.push(item);
    this.data.sort(this.comperator);
  }

  pop(): void {
    if (this.empty()) {
      throw new Error("비어있는 큐");
    }

    this.data.shift();
  }

  front(): T {
    if (this.empty()) {
      throw new Error("비어있는 큐");
    }

    return this.data[0];
  }

  empty(): boolean {
    return this.data.length === 0;
  }
}

export { PriorityQueue };
