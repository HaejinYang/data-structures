import { Queue } from "../src/Queue";

test("Front_PushItem_ReturnRightBeforePusingItem", () => {
  const q = new Queue<number>();
  const item = 0;
  q.push(item);

  const actual = q.front();

  expect(actual).toEqual(item);
});

test("Front_PopItem_ReturnRightAfterItem", () => {
  const q = new Queue<number>();
  const target = 3;
  q.push(0);
  q.push(target);
  q.push(1);
  q.push(2);
  q.pop();

  const actual = q.front();

  expect(actual).toEqual(target);
});

test("Push_SingleItem_FrontReturnItem", () => {
  const q = new Queue<number>();
  const target = 0;
  q.push(target);

  const actual = q.front();

  expect(actual).toEqual(target);
});

test("Pop_SingleItem_FrontChange", () => {
  const q = new Queue<number>();
  const target = 3;
  q.push(0);
  q.push(target);
  q.push(1);
  q.pop();

  const actual = q.front();

  expect(actual).toEqual(target);
});

test("Empty_SingleItem_ReturnFalse", () => {
  const q = new Queue<number>();
  const item = 0;
  q.push(item);

  const actual = q.empty();

  expect(actual).toEqual(false);
});

test("Empty_NoItemsInQueue_ReturnTrue", () => {
  const q = new Queue<number>();

  const actual = q.empty();

  expect(actual).toEqual(true);
});
