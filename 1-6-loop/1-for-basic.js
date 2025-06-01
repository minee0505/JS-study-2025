console.log('안녕');

// 반복문 3요소 : 시작값(begin), 끝조건(end), 증감값(step)
/*
for (let n = 1; n <= 5; n++) {
  console.log('안냥');
}
console.log('반복문 종료!');*/
/*
for (let i = 1; i <=5 ; i++) {
  console.log(`${i}번 학생 안녕하세요!`);
}*/

//구구단 2단 출력

let level = 6;

for (let line= 1; line <= 9; line++) {
  console.log(`${level} X ${line} = ${level * line}`);
}

//변수값 swap
let x = 10;
let y = 20;
let t = x;
x = y;
y = t;
console.log(`x: ${x}, y: ${y}`);

// 변수값 swap
let 콜라컵 = '콜라';
let 환타컵 = '환타';
let 빈컵 = 콜라컵;
콜라컵 = 환타컵;
환타컵 = 빈컵;
console.log(`콜라컵: ${콜라컵}, 환타컵: ${환타컵}`);

console.log('==========================');

// 1~10 누적합 - 합을 저장할 공간을 설정하고
// 거기에 반복해서 1부터 10까지의 숫자를 더해나간다.

let total = 0;
let n = 1;
total += n ; // 0+1
n++; // 1 ->2

for (let n = 1; n <= 10; n++ ) {
  total += n;
}
console.log(`누적합: ${total}`);

console.log('==========================');

/*
for (let i = 5; i >= 0 ; i--) {
  console.log(`countdown - ${i}`);
}*/

for (let i = 3; i <= 100 ; i+=3) {
  console.log(`i: ${i}`);
}

for (let i = 0; i > 10 ; i++) {

}