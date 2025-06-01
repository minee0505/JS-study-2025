//특정 정수를 입력받고 해당 정수들의 약수를
//모두 세로로 출력
//그리고 마지막에 약수의 총 개수를 출력한다.


let putNum = +prompt(`양의 정수를 입력하세요`);

let resultText = '';

//카운트를 저장할 변수
let count = 0;
for (let i = 1; i <= putNum ; i++) {
  if (putNum % i === 0) {
    // 약수다!
    resultText += `${i}\n`;
    count++;
  }
} //end for

alert(resultText);

resultText += `\n약수의 총 개수 : ${count}`