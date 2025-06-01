//=뒤에 들어간 값 보고 알아서 데이터타입 결정함 ==동적타이핑

let element = 65; // number

element = 'A' //==65 //string

// 자바스크립트는 정수와 실수를 모두 실수로 판단한다.
let age = 20.5;
console.log(typeof age);

console.log(20 / 8);

// infinity
console.log(age / 0);

//Nan : Not a Number
console.log(age * '메렁');
