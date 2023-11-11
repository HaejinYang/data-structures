import { PriorityQueue } from "../src/PriorityUsingHeap";

test("Push_SingleItem_TopReturnIt", () => {
  const pq = new PriorityQueue<number>("greater");
  pq.push(0);

  const actual = pq.top();

  expect(actual).toEqual(0);
});

test("Empty_SingleItem_ReturnFalse", () => {
  const pq = new PriorityQueue<number>("greater");
  pq.push(0);

  const actual = pq.empty();

  expect(actual).toEqual(false);
});

test("Empty_NoItem_ReturnTrue", () => {
  const pq = new PriorityQueue<number>("greater");

  const actual = pq.empty();

  expect(actual).toEqual(true);
});

test("Push_MutipleItemByGreater_TopReturnGreatest", () => {
  const pq = new PriorityQueue<number>("greater");
  pq.push(0);
  pq.push(10);
  pq.push(100);
  pq.push(-10);
  pq.push(-100);

  const actual = pq.top();

  expect(actual).toEqual(100);
});

test("Push_MutipleItemByLess_TopReturnLeast", () => {
  const pq = new PriorityQueue<number>("less");
  pq.push(0);
  pq.push(10);
  pq.push(100);
  pq.push(-10);
  pq.push(-100);

  const actual = pq.top();

  expect(actual).toEqual(-100);
});

test("Pop_MutipleItemByLess_TopReturnNextLeast", () => {
  const pq = new PriorityQueue<number>("less");
  pq.push(0);
  pq.push(10);
  pq.push(100);
  pq.push(-10);
  pq.push(-100);
  pq.pop();
  const actual = pq.top();

  expect(actual).toEqual(-10);
});

test("Push_MutipleItemByLess_TopReturnAfterNextLeast", () => {
  const pq = new PriorityQueue<number>("less");
  pq.push(0);
  pq.push(10);
  pq.push(100);
  pq.push(-10);
  pq.push(-100);
  pq.pop();
  pq.pop();

  const actual = pq.top();

  expect(actual).toEqual(0);
});
