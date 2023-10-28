import { Array2d } from "../src/Array2d";

test("Create_NoActions_ReturnSameRowAndCol", () => {
  const row = 10;
  const col = 5;
  const arr = new Array2d<number>(row, col);

  const actual = [arr.row, arr.col];

  expect(actual).toEqual([row, col]);
});

test("Put_SingleItem_GetReturnSameItem", () => {
  const row = 10;
  const col = 5;
  const arr = new Array2d<number>(row, col);
  const item = 0;
  arr.put(4, 4, item);
  const actual = arr.get(4, 4);

  expect(actual).toEqual(item);
});

test("Get_NoSetItem_ReturnNull", () => {
  const row = 10;
  const col = 5;
  const arr = new Array2d<number>(row, col);

  const actual = arr.get(4, 4);

  expect(actual).toEqual(null);
});

test("Delete_SingleItem_GetReturnNull", () => {
  const row = 10;
  const col = 5;
  const arr = new Array2d<number>(row, col);

  arr.put(4, 4, 0);
  arr.delete(4, 4);
  const actual = arr.get(4, 4);

  expect(actual).toEqual(null);
});
