type ID = number | string;
// Собственный тип, type - псевдоним типа
// Тип пишется с большой буквы
// type Tuple = [number, number];

// Union
type ReqStatus = "success" | "error" | "pending";
const respone: ReqStatus = "success";

const userId: ID = 5;
const postId: ID = " f7ln24m91z ";
const coords: [number, number] = [50.4501, 30.5234];
console.log(userId, postId, coords, respone);
export {};
