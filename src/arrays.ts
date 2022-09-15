let numArr: number[] = [1, 2, 3];
let numArr1: Array<number> = [4, 5, 6];
let numStrArr: (number | string)[] = [7, 8, "9"];

//
let strArr: readonly string[] = ["Danyil", "Ivan"];
// Массив только для чтения, на нём нельзя вызывать методы

const rgb: [number, number, number] = [255, 0, 100];
// Tuple/кортеж

console.log(numArr, numArr1, numStrArr, strArr, rgb);
export {};
