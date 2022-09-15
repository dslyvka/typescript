interface PluginConfig {
  readonly selector: string; //Свойство, которое нельзя будет изменить
  perPage: number;
  startIndex: number;
  draggable?: boolean; //Необязательное свойсвто
}

const config: PluginConfig = {
  selector: " # plugin - 1 ",
  perPage: 2,
  startIndex: 0,
  //   draggable: false,
};

// config.selector = "Hello" -> Нельзя изменить из-за readonly

// Interface для объекта с произвольным количеством полей
interface Employees {
  [key: string]: number;
}

// interface Employees {
//   [key: string]: number | string;
// }

const employees: Employees = {
  Danyil: 24,
  Andrew: 13,
  Dmitriy: 20,
  //   Helen: "17",
};

const entries = Object.entries(employees);
let bestEmployeeName: string = " ";
let bestEmployeeProductivity: number = 0;

for (const [name, value] of entries) {
  if (value > bestEmployeeProductivity) {
    bestEmployeeProductivity = value;
    bestEmployeeName = name;
  }
}

interface Shape {
  color: string;
}
interface Circle extends Shape {
  radius: number;
}

const circle: Circle = {
  color: " red ",
  radius: 10,
};

console.log(config, employees);
console.log(bestEmployeeName, bestEmployeeProductivity, "\n", circle);

export {};
