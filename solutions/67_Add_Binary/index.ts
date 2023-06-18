// Initial Answer
const getLastChar = (str: string, index: number) => {
  const previousIndex = str.length - index + 1;
  return Number(str.substring(previousIndex, str.length - index));
};

function addBinary(a: string, b: string): string {
  let output = "";
  let index = 1;
  let carryover = 0;

  while (index <= a.length || index <= b.length) {
    const lastCharOfA = getLastChar(a, index) || 0;
    const lastCharOfB = getLastChar(b, index) || 0;

    const total = carryover + lastCharOfA + lastCharOfB;
    if (total > 1 && total % 2 === 1) {
      output = "1" + output;
      carryover = 1;
    } else if (total > 1 && total % 2 === 0) {
      output = "0" + output;
      carryover = 1;
    } else {
      output = String(carryover + lastCharOfA + lastCharOfB) + output;
      carryover = 0;
    }
    index++;
  }
  if (carryover > 0) {
    output = "1" + output;
  }
  return output;
}
