const swap = <T>(arr: T[], i: number, j: number): void => {
  const iElem: T = arr[i];
  const jElem: T = arr[j];

  if (iElem === undefined || jElem === undefined) return;

  arr[i] = jElem;
  arr[j] = iElem;
};

const bubbleSortRecursion = <T>(arr: T[], indx: number): boolean => {
  let swapFlag = false;

  if (arr[indx - 1] > arr[indx]) {
    swap(arr, indx - 1, indx);
    swapFlag = true;
  }

  // If indx isn't equal to the last index of array,
  // than continue swapping. Aggregate all swapFlags
  return swapFlag || (indx < arr.length && bubbleSortRecursion(arr, indx + 1));
};

const bubbleSort = <T>(arr: T[]): void => {
  // start all over till there was at least one elements swap
  while (bubbleSortRecursion(arr, 1)) {}
};

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
