export const swap = <T>(array: T[], i: number, j: number): void => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const bubbleSortBasic = <T>(array: T[]): T[] => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for (let i = 0; i < array.length; i++) {
    countOuter++;
    for (let j = 1; j < array.length; j++) {
      countInner++;
      if (array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log("outer:", countOuter, "inner:", countInner, "swap:", countSwap);

  return array;
};

export const bubbleSort = <T>(array: T[]): T[] => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;

  do {
    countOuter++;
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      countInner++;
      if (
        typeof array[i] === "undefined" ||
        typeof array[i + 1] === "undefined" ||
        array[i] < array[i + 1]
      ) {
        continue;
      }
      countSwap++;
      swap(array, i, i + 1);
      swapped = true;
    }
  } while (swapped);

  console.log("outer:", countOuter, "inner:", countInner, "swap:", countSwap);

  return array;
};
