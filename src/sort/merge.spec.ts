// TODO add custom compare function as a parameter
const mergeArrays = <T>(leftArr: T[], rightArr: T[]): T[] => {
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

const mergeSort2 = <T>(arr: T[]): T[] => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  return mergeArrays(
    mergeSort2(arr.slice(0, middle)),
    mergeSort2(arr.slice(middle))
  );
};

test("merge two sorted arrays into one sorted array", (): void => {
  expect(mergeArrays([1, 5, 9], [2, 6, 8, 11])).toEqual([1, 2, 5, 6, 8, 9, 11]);
});

test("merge sort is sorting random array", (): void => {
  expect(mergeSort2([6, 4, 7, 2, 13, 11])).toEqual([2, 4, 6, 7, 11, 13]);
});

test("merge sort of singleton array", (): void => {
  expect(mergeSort2([6])).toEqual([6]);
});

test("merge sort of empty array", (): void => {
  expect(mergeSort2([])).toEqual([]);
});
