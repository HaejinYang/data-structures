interface IQueue<T> {
  push(item: T): void;
  pop(): void;
  front(): T;
  empty(): boolean;
}

export { IQueue };
