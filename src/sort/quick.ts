import { swap } from "./bubble";

const quickSortRecursion = <T>(arr: T[], f: number, l: number): void => {
  if (f === l) return;

  let m = 0;

  for (let i = 0; i < l; i++) {
    if (arr[l] > arr[i]) {
      swap(arr, m, i);
      m += 1;
    }
  }

  swap(arr, m, l);

  if (f < m - 1) quickSortRecursion(arr, f, m - 1);
  if (l > m + 1) quickSortRecursion(arr, m + 1, l);
};

export const quickSort = <T>(arr: T[]): void => {
  if (arr.length === 0 || arr.length === 1) return;

  quickSortRecursion(arr, 0, arr.length - 1);
};

if (require.main === module) {
  const arr = [6, 2, 3, 4, 8, 5, 7];
  quickSort(arr);
}
