import { Stack } from "../src/Stack";

test("Top_ObjectsInStack_ReturnRightBefroePushingItem", () => {
  const st = new Stack<number>();
  const item = 30;
  st.push(10);
  st.push(20);
  st.push(item);

  const actual = st.top();
  expect(actual).toEqual(item);
});

test("Empty_NoObjectsInStack_ReturnTrue", () => {
  const st = new Stack<number>();

  const actual = st.empty();

  expect(actual).toEqual(actual);
});

test("Pop_SomeObjectsInStack_EmptyFalse", () => {
  const st = new Stack<number>();
  st.push(10);
  st.push(20);
  st.pop();

  const actual = st.empty();
  expect(actual).toEqual(false);
});

test("Pop_NoObjectsInStack_EmptyTrue", () => {
  const st = new Stack<number>();
  st.push(10);
  st.push(20);

  st.pop();
  st.pop();

  const actual = st.empty();
  expect(actual).toEqual(true);
});

test("Push_SomeObjects_EmptyFalse", () => {
  const st = new Stack<number>();
  st.push(10);
  st.push(20);

  const actual = st.empty();
  expect(actual).toEqual(false);
});
