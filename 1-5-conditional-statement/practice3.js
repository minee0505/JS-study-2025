let firstNum = prompt(`첫번째 수를 입력하세요`);
let secondNum = prompt(`두번째 수를 입력하세요`);
let thirdNum = prompt(`세번째 수를 입력하세요`);

if (+firstNum === +secondNum + +thirdNum) {
  alert('비밀의 문이 열립니다!');
} else if (+secondNum === +firstNum + +thirdNum) {
  alert('비밀의 문이 열립니다!');
} else if (+thirdNum === +firstNum + +secondNum) {
  alert('비밀의 문이 열립니다!');
} else {
  alert('퍼즐이 맞지 않습니다. 다시 시도하세요!');
}
