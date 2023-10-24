import { LinkedList } from "../src/LinkedList";

test("if insert nodes, all() return them", () => {
  const list = new LinkedList<number>();
  list.insert(10);
  list.insert(20);
  list.insert(30);

  expect(list.all()).toEqual([10, 20, 30]);
});

test("if no nodes, find() retunr -1", () => {
  const list = new LinkedList<number>();

  expect(list.find(10)).toEqual(null);
});

test("if insert nodes, find() retunr position", () => {
  const list = new LinkedList<number>();
  list.insert(10);
  list.insert(20);
  list.insert(30);

  expect(list.find(10).data).toEqual(10);
  expect(list.find(20).data).toEqual(20);
  expect(list.find(30).data).toEqual(30);
});
