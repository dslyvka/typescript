enum PizzaSize {
  Small, //0
  Medium, //1
  Large, //2
}
// По умолчанию элементам перечисления присваиваются индексы

enum Tech {
  PC = "PC",
  Laptop = "Laptop",
  Tablet = "Tablet",
}

console.log(PizzaSize.Small, Tech.PC);

export {};
