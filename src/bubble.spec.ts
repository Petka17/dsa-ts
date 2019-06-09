import { bubbleSort, bubbleSortBasic } from "./bubble";

const getRandomArray = (): number[] => [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const getOrderedArray = (): number[] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getReversedArray = (): number[] => [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

test("Basic bubble should sort ordered array", (): void => {
  const actual = bubbleSortBasic(getOrderedArray());

  expect(actual).toEqual(getOrderedArray());
});

test("Basic bubble should sort random array", (): void => {
  const actual = bubbleSortBasic(getRandomArray());

  expect(actual).toEqual(getOrderedArray());
});

test("Basic bubble should sort reversed array", (): void => {
  const actual = bubbleSortBasic(getReversedArray());

  expect(actual).toEqual(getOrderedArray());
});

test("Optimized bubble should sort ordered array", (): void => {
  const actual = bubbleSort(getOrderedArray());

  expect(actual).toEqual(getOrderedArray());
});

test("Optimized bubble should sort random array", (): void => {
  const actual = bubbleSort(getRandomArray());

  expect(actual).toEqual(getOrderedArray());
});

test("Optimized bubble should sort reversed array", (): void => {
  const actual = bubbleSort(getReversedArray());

  expect(actual).toEqual(getOrderedArray());
});
