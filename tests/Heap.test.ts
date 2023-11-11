import { Heap } from "../src/Heap";

test("Push_SingleItem_TopReturnIt", () => {
  const heap = new Heap<number>("greater");
  heap.push(0);

  const actual = heap.top();

  expect(actual).toEqual(0);
});

test("Push_MultipleItemByGreaterOrder_TopReturnGreatest", () => {
  const heap = new Heap<number>("greater");
  heap.push(0);
  heap.push(3);
  heap.push(100);
  heap.push(-100);
  heap.push(30);

  const actual = heap.top();

  expect(actual).toEqual(100);
});

test("Empty_SingleItem_ReturnFalse", () => {
  const heap = new Heap<number>("greater");
  heap.push(0);

  const actual = heap.empty();

  expect(actual).toEqual(false);
});

test("Empty_NoItems_ReturnTrue", () => {
  const heap = new Heap<number>("greater");

  const actual = heap.empty();

  expect(actual).toEqual(true);
});

test("Pop_SingleItem_EmptyReturnTrue", () => {
  const heap = new Heap<number>("greater");
  heap.push(0);
  heap.pop();

  const actual = heap.empty();

  expect(actual).toEqual(true);
});

test("Pop_MutlpleItem_EmptyReturnFalse", () => {
  const heap = new Heap<number>("greater");
  heap.push(0);
  heap.push(0);

  heap.pop();

  const actual = heap.empty();

  expect(actual).toEqual(false);
});

test("Pop_MutlpleItemByGreater_TopReturnNextGreatest", () => {
  const heap = new Heap<number>("greater");
  heap.push(0);
  heap.push(3);
  heap.push(100);
  heap.push(-100);
  heap.push(30);
  heap.pop();

  const actual = heap.top();

  expect(actual).toEqual(30);
});

test("PopTwice_MutlpleItemByGreater_TopReturnAfterNextGreatest", () => {
  const heap = new Heap<number>("greater");
  heap.push(0);
  heap.push(3);
  heap.push(100);
  heap.push(-100);
  heap.push(30);
  heap.pop();
  heap.pop();

  const actual = heap.top();

  expect(actual).toEqual(3);
});

test("Pop_MutlpleItemByLess_TopReturnNextLeast", () => {
  const heap = new Heap<number>("less");
  heap.push(0);
  heap.push(3);
  heap.push(100);
  heap.push(-100);
  heap.push(30);
  heap.pop();

  const actual = heap.top();

  expect(actual).toEqual(0);
});

test("PopTwice_MutlpleItemByLess_TopReturnAfterNextLeast", () => {
  const heap = new Heap<number>("less");
  heap.push(0);
  heap.push(10);
  heap.push(-10);
  heap.push(100);
  heap.push(-100);
  heap.push(1000);
  heap.push(-1000);
  heap.push(10000);
  heap.pop();
  heap.pop();

  const actual = heap.top();

  expect(actual).toEqual(-10);
});
