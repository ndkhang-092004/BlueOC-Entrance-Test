const SumOfTopTwoIntegers = () => {
  const test1 = [1, 4, 2, 3, 5];
  const test2 = [10, 20];
  const test3 = [4, 4, 4, 4];
  const test4 = [-10, -20, 5, 15, 0];
  const test5 = [-3, -1, -7, -5];
  const test6 = [8, 8, 1, 5, 3];
  const test7 = [1, 2, 3, 1000000, 4];
  const test8 = [-1, -2];
  const test9 = Array.from({ length: 1000 }, (_, i) => i + 1);
  const test10 = [5];

  const result = GetResult(test1);
  console.log(result);
};

const GetResult = (numArray) => {
  if (numArray.length < 2) return "Invalid input array";
  if (numArray.length === 2) return numArray[0] + numArray[1];

  let maxNum = -Infinity;
  let secondMaxNum = -Infinity;

  for (const n of numArray) {
    if (n > maxNum) {
      secondMaxNum = maxNum;
      maxNum = n;
    } else if (n > secondMaxNum) {
      secondMaxNum = n;
    }
  }

  return maxNum + secondMaxNum;
};
