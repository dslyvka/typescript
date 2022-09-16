const addExpression = function (x: number, y: number): number {
  return x + y;
};

const addArrow = (x: number, y: number, z?: number): number => {
  return x + y;
};

//z?:number -> необязательный параметр

const resExpression: number = addExpression(2, 8);
const resArrow: number = addArrow(5, 15);

// Функция с произвольным количеством параметров
// const fn = function (x: number, ...restParams: number[]): number {
//   return x + 4;
// };
// fn(1, 2, 3, 4);

// ============================================================================================
// Более читаемый синтаксис функций. Создаём тип функции, а после перменной присваиваем его.
// Благодаря подобной манипуляции мы можем не указывать тип аргументов при объявлении функции,
// а так же не указывать тип возвращаемого объекта
type AddFn = (a: number, b: number) => number;
const add: AddFn = function (x, y) {
  return x + y;
};
// ============================================================================================

// Функция, которая ничего не возвращает
const randomFn = (message: string): void => {
  console.log(message);
};

//
interface IPizza {
  size: "small" | "medium" | "large";
  toppings: string[];
  printSize(): void;
  getSize: () => string; // Старый синтаксис
  addToping(topping: string): void;
  //Необязательные методы
  //   printSize?(): void;
  //   getSize?: () => string; // Старый синтаксис
}

const pizza: IPizza = {
  size: "medium",
  toppings: ["sause", "mushrooms"],
  printSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addToping(toping) {
    this.addToping(toping);
  },
};

console.log(resExpression, resArrow);

export {};
