import { bubbleSort, swap } from "./bubble";

test("swap to element of array is working", (): void => {
  const arr = [1, 3, 2];
  swap(arr, 1, 2);
  expect(arr).toEqual([1, 2, 3]);
});

test("swap to element of array is not working for incorrect input", (): void => {
  const arr = [1, 3, 2];
  swap(arr, 1, 4);
  expect(arr).toEqual([1, 3, 2]);
});

test("bubble sort is sorting random array", (): void => {
  const arr = [6, 4, 7, 2, 13, 11];
  bubbleSort(arr);
  expect(arr).toEqual([2, 4, 6, 7, 11, 13]);
});
