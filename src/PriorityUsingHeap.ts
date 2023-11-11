import { Heap } from "./Heap";

export class PriorityQueue<T> {
  private store: Heap<T>;
  constructor(order: "greater" | "less") {
    this.store = new Heap<T>(order);
    }
    
    push(item: T) {
        this.store.push(item);
    }

    pop(): void {
        this.store.pop();
    }

    top(): T {
        return this.store.top();
    }

    empty() {
        return this.store.empty();
    }
}
