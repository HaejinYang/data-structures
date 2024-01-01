import { LoopDetectableList } from "../src/algorithm/FastSlowPointer";

test("DetectLoop_NoItem_ReturnFalse", () => {
  const list = new LoopDetectableList<number>();

  const actual = list.detectLoop();

  expect(actual).toEqual(false);
});

test("DetectLoop_MultipleItems_ReturnTrue", () => {
  const list = new LoopDetectableList<number>();

  list.insertEnd(10);
  list.insertEnd(9);
  const makeLoopNoode = list.insertEnd(5);
  // 10 -> 9 -> 5;
  const actual = list.detectLoop();

  expect(actual).toEqual(false);
});


// LinkedList 구현 구조상 노드 그 자체를 삽입할 수가 없다.
// 그래서, 인위적으로 루프를 발생시킬 수 없네...
