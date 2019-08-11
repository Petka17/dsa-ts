export const swap = <T>(arr: T[], i: number, j: number): void => {
  const iElem: T = arr[i];
  const jElem: T = arr[j];

  if (iElem === undefined || jElem === undefined) return;

  arr[i] = jElem;
  arr[j] = iElem;
};

export const bubbleSortRecursion = <T>(arr: T[], indx: number): boolean => {
  let swapFlag = false;

  if (arr[indx - 1] > arr[indx]) {
    swap(arr, indx - 1, indx);
    swapFlag = true;
  }

  // If indx isn't equal to the last index of array,
  // than continue swapping. Aggregate all swapFlags
  return swapFlag || (indx < arr.length && bubbleSortRecursion(arr, indx + 1));
};

export const bubbleSort = <T>(arr: T[]): void => {
  // start all over till there was at least one elements swap
  while (bubbleSortRecursion(arr, 1)) {}
};
