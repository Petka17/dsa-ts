export const insertSort = <T>(arr: T[]): void => {
  // console.log(`Sorting array: ${arr}`);

  if (arr.length === 0 || arr.length === 1) return;

  for (let i = 1; i < arr.length; i++) {
    // console.log(`Array before ${i + 1}th iteration: ${arr}`);

    let j = i - 1;

    if (arr[j] < arr[i]) continue;

    let temp = arr[i];
    // console.log(`Process item: ${temp}`);

    do {
      // console.log(`Move item ${arr[j]} forward`);
      arr[j + 1] = arr[j];
      j -= 1;
    } while (j >= 0 && arr[j] > temp);

    arr[j + 1] = temp;
  }

  // console.log(`Array after sorting: ${arr}`);
};

if (require.main === module) {
  const arr = [4, 2, 67, 2, 6, 8, 4, 5, 8, 2];
  insertSort(arr);
}
