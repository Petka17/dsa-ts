import { quickSort } from "./quick";

test("quick sort should sort random array", (): void => {
  const arr = [6, 2, 3, 4, 8, 5, 9];
  quickSort(arr);
  expect(arr).toEqual([2, 3, 4, 5, 6, 8, 9]);
});
