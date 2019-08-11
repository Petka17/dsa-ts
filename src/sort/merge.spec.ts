import { mergeArrays, mergeSort } from "./merge";

test("merge two sorted arrays into one sorted array", (): void => {
  expect(mergeArrays([1, 5, 9], [2, 6, 8, 11])).toEqual([1, 2, 5, 6, 8, 9, 11]);
});

test("merge sort is sorting random array", (): void => {
  expect(mergeSort([6, 4, 7, 2, 13, 11])).toEqual([2, 4, 6, 7, 11, 13]);
});

test("merge sort of singleton array", (): void => {
  expect(mergeSort([6])).toEqual([6]);
});

test("merge sort of empty array", (): void => {
  expect(mergeSort([])).toEqual([]);
});
