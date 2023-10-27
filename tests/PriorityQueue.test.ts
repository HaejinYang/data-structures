import { PriorityQueue } from "../src/PriorityQueue";

test("Empty_SingleNodeInQueue_ReturnFalse", () => {
  const gerater = (lhs: number, rhs: number): number => {
    return rhs - lhs;
  };

  const q = new PriorityQueue<number>(gerater);
  q.push(0);

  const actual = q.empty();

  expect(actual).toEqual(false);
});

test("Front_PushItems_ReturnOrdered", () => {
  const gerater = (lhs: number, rhs: number): number => {
    return rhs - lhs;
  };

  const q = new PriorityQueue<number>(gerater);
  const target = 100;
  q.push(0);
  q.push(target);
  q.push(10);

  const actual = q.front();

  expect(actual).toEqual(target);
});

test("Front_PopItems_ReturnOrdered", () => {
  const gerater = (lhs: number, rhs: number): number => {
    return rhs - lhs;
  };

  const q = new PriorityQueue<number>(gerater);
  const target = 5;
  q.push(0);
  q.push(100);
  q.push(10);
  q.push(target);
  q.push(1);
  q.pop();
  q.pop();

  const actual = q.front();

  expect(actual).toEqual(target);
});
