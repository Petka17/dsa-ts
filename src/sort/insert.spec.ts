import { insertSort } from "./insert";

test("insert sort should sort random array", (): void => {
  const arr = [4, 2, 5, 7, 9, 4];
  insertSort(arr);
  expect(arr).toEqual([2, 4, 4, 5, 7, 9]);
});

test("insert sort should sort empty array", (): void => {
  const arr: number[] = [];
  insertSort(arr);
  expect(arr).toEqual([]);
});

test("insert sort should sort singleton array", (): void => {
  const arr = [1];
  insertSort(arr);
  expect(arr).toEqual([1]);
});
