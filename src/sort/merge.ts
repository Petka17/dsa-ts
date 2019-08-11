// TODO add custom compare function as a parameter
export const mergeArrays = <T>(leftArr: T[], rightArr: T[]): T[] => {
  let result: T[] = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }

  return result
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
};

export const mergeSort = <T>(arr: T[]): T[] => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  return mergeArrays(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle))
  );
};
