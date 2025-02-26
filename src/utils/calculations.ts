export const calculateExpression = (a: number, x: number): number => {
  return (a * Math.sin(Math.pow(x, 2)) + Math.tan(a)) / Math.sqrt(Math.E);
};

export const calculateDigitProduct = (num: number): number => {
  return String(num)
    .split('')
    .reduce((acc, digit) => acc * parseInt(digit), 1);
};

export const findMinElement = (arr: number[]): number => {
  return Math.min(...arr);
};

export const findMaxElementWithIndex = (matrix: number[][]): {
  value: number;
  row: number;
  col: number;
} => {
  // First check if matrix exists and has rows
  if (!matrix.length) {
    throw new Error('Matrix must not be empty');
  }

  // Then check if first row exists and has elements
  const firstRow = matrix[0];
  if (!firstRow?.length) {
    throw new Error('Matrix rows must not be empty');
  }

  // Initialize max with the first element
  let max = firstRow[0]!;
  let row = 0;
  let col = 0;

  for (let i = 0; i < matrix.length; i++) {
    const currentRow = matrix[i];
    if (!currentRow?.length) {
      throw new Error(`Row ${i} is empty or undefined`);
    }
    
    for (let j = 0; j < currentRow.length; j++) {
      const currentValue = currentRow[j]!;
      if (currentValue > max) {
        max = currentValue;
        row = i;
        col = j;
      }
    }
  }

  return { value: max, row, col };
};

export const countPositiveElements = (arr1: number[], arr2: number[]): number => {
  return [...arr1, ...arr2].filter(num => num > 0).length;
};

export const removeMiddleLetters = (str: string): string => {
  if (str.length <= 1) return str;
  
  const mid = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.slice(0, mid - 1) + str.slice(mid + 1);
  }
  return str.slice(0, mid) + str.slice(mid + 1);
}; 