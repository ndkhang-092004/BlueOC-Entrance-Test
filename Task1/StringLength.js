export const StringLengthFrequency = () => {
  //Mình chưa biết cách tạo unit test cho js, mình sẽ học phần này sau nếu cần ạ!
  const test1 = ["a", "ab", "abc", "cd", "def", "gh"];
  const test2 = ["abc", "def", "ghi"];
  const test3 = ["abcd", "efgh", "ij", "klmn", "op", "qrst"];
  const test4 = ["single"];
  const test5 = [];
  const test6 = ["short", "tiny", "min", "minimal", "brief"];
  const test7 = ["a", "aa", "aaa", "a", "b", "c"];
  const test8 = ["a", "bb", "cc", "ddd", "eee", "ff"];
  const test9 = ["repeat", "repeat", "repeat"];
  const test10 = ["123", "!@#", "$%^", "12", "ab", "**"];

  const result = GetResult(test1);
  console.log(result);
};

const GetResult = (stringArray) => {
  if (!stringArray[0]) return "Array is empty!";

  const countLength = [];
  let mostFrequentLength = 0;

  const lengths = stringArray.map((string) => string.length);

  for (const len of lengths) {
    countLength[len] = (countLength[len] || 0) + 1;

    if (countLength[len] > mostFrequentLength) {
      mostFrequentLength = len;
    }
  }

  const result = stringArray.filter(
    (string) => string.length === mostFrequentLength
  );

  return result;
};
