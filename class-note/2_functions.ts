// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b; // 타입 추론. VSCode 자체에서 내부적으로 TS language 서버가 반환 값이 숫자가 된다고 계산해줌
// }
// sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
// sum(10, 20, 20); // 에러

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  
}
log("hello world");
log("hello ts", 'abc');
