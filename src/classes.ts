interface IParams {
  size: "small" | "medium" | "large";
  toppings: string[];
}

interface IPizza {
  size: string;
  addTopping(topping: string): void;
}

class Pizza implements IPizza {
  public size: string; // По умолчанию свойство публичное, но лучше указать наверняка
  private toppings: string[];
  constructor({ size = "small", toppings = [] }: IParams) {
    this.size = size;
    this.toppings = toppings;
  }

  public addTopping(topping: string): void {
    this.toppings.push(topping);
  }
}

const pizza: IPizza = new Pizza({
  size: "medium",
  toppings: ["cheese", "mushrooms"],
});

pizza.addTopping("tomato");
console.log(pizza);
export {};
