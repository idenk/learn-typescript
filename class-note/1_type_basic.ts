// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3]; // arr는 배열, 요소는 숫자만 가능
let arr2: Array<string> = ["Capt", "Thor", "Hulk"];
let items: number[] = [1, 2, 3];

// TS 튜플
let address: [string, number] = ["gangnam", 100]; // 배열 인덱스의 타입 지정

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// };

let person: { name: string; age: number } = { // 객체의 속성 타입 지정 
  name: "capt",
  age: 1000,
};

// TS 진위값
let show: boolean = true;