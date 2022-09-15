// Примитивные типы
//        Объявление типа : number , string , boolean , null w undefined , any & object
//        Ошибки :
//           присвоение значения другого типа
//           переопределение значения
//        [ type inference ] ( https://www.typescriptlang.org/docs/handbook/type-inference.html )
//        Множественные типы с type composition


let age: number = 18;
const name: string = "Danyil";
let typesComposition: string | number;
typesComposition = 11;
typesComposition = "11";
console.log(age, name, typesComposition);
export {};
