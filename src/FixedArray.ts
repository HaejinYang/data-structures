class FixedArray<T, N extends SIZE> {
  data: RangeObject<T, N>;

  constructor() {
    // 클래스 안에서 N(N으로 주어지는건 1, 2, 4.. 중에 하나인데)
    // 이것을 타입이 아니라 값으로 얻어올 방법이 있나?
  }
}

type SIZE = 1 | 2 | 4 | 8 | 16 | 32;

type RangeObject<T, N extends SIZE> = {
  [K in keyof [...Array<N>]]: T;
};

export { FixedArray, RangeObject };
