import { LinkedList } from "../src/LinkedList";

test("InsertEnd_MultipleItems_ReturnSameOrders", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  list.insertEnd(20);
  list.insertEnd(30);

  const actual = list.all();

  expect(actual).toEqual([10, 20, 30]);
});

test("InsertAfterNode_Item_ReturnNext", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  list.insertEnd(20);
  list.insertEnd(30);

  const node = list.find(20);
  list.insertAfterNode(node, 50);
  const actual = list.all();

  expect(actual).toEqual([10, 20, 50, 30]);
});

test("InsertBegin_Item_ReturnNodeAtFirst", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  list.insertEnd(20);
  list.insertEnd(30);

  list.insertBegin(100);
  const actual = list.all();

  expect(actual).toEqual([100, 10, 20, 30]);
});

test("Find_ItemNotInList_ReturnNull", () => {
  const list = new LinkedList<number>();
  const item = 10;

  const actual = list.find(item);

  expect(actual).toEqual(null);
});

test("Find_ItemInList_ReturnNode", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  const target = list.insertEnd(20);
  list.insertEnd(30);

  const actual = list.find(20);

  expect(actual).toEqual(target);
});

test("Has_NodeInList_ReturnNode", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  list.insertEnd(20);

  const target = list.insertEnd(30);
  const actual = list.has(target);

  expect(actual).toEqual(true);
});

test("Remove_ItemInList_ReturnWithoutThem", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  list.insertEnd(20);
  list.insertEnd(30);

  const actual = list.remove(20).all();

  expect(actual).toEqual([10, 30]);
});

test("Remove_NodeInList_ReturnWithoutIt", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  list.insertEnd(20);

  const target = list.insertEnd(30);
  list.removeNode(target);
  const actual = list.has(target);

  expect(actual).toEqual(false);
});

test("Reverse_Items_ReturnReverseOrder", () => {
  const list = new LinkedList<number>();
  list.insertEnd(10);
  list.insertEnd(20);
  list.insertEnd(30);

  const actual = list.revers();

  expect(actual).toEqual([30, 20, 10]);
});
