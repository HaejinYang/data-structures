import { HashMap } from "../src/HashMap";

test("Search_NoItem_ReturnNull", () => {
  const map = new HashMap<number>(100);

  const actual = map.search(100);

  expect(actual).toEqual(null);
});

test("Search_SingleItem_ReturnIt", () => {
  const map = new HashMap<number>(100);
  map.insert(100, 200);
  const actual = map.search(100);

  expect(actual).toEqual(200);
});

test("Search_ItemInMultipleBuckets_ReturnCorrectOne", () => {
  const map = new HashMap<number>(100);

  map.insert(100, 100);
  map.insert(200, 200);
  map.insert(300, 300);
  const actual = map.search(200);

  expect(actual).toEqual(200);
});
