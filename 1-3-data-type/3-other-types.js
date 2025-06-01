
// 논리 타입
let flag = false;
console.log(typeof flag);

let result = 10 > 5;
console.log(typeof result);
console.log(result);

//변수가 =기준으로 왼쪽에 나오면 영역으로 해석, 오른쪽에 나오면 값으로 해석
// 프루트 값을 복사해서 애플에 집어 넣으세욤
let fruit = '사과';
let apple = fruit;

let bool = true;
let True = bool;
let False = false;

let finalResult = True;
let finalResult2 = False;

// let result3 = !!0;
// console.log(result3);

//null 타입 - 부존재 (명시적인 없음)
// let money = 0;
let money = null;

//undefined - 변수가 아직 사용준비가 안됐다.
let yourName;
console.log(yourName);