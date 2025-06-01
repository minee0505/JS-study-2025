//특정 양의 정수를 입력받고 1부터 해당 입력숫자까지의 범위
//2의 제곱수를 가로로 출력

let putNum = +prompt(`양의 정수를 입력하세요`);

if (isNaN(number)) {
  alert(`숫자만 입력하세요!`);
}
else if (number <= 0) {
  alert(`1 이상의 양수만 입력하세요!`)
}

let resultText = '';
for (let i = 2; i <= number ; i*=2) {
 resultText +=`${i}`;
}
alert(resultText);

// let squareNum = 1;
let squareList ='';
let squareNum = 1
for (let i = 2; squareNum<=putNum; i*=2 ) {
  // squareNum = squareNum ** i;
  squareList += (squareNum ** i) + '';
}
alert(`${squareList}`);
