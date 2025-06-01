console.log('브라우저 연결!!');

/*
  브라우저 전용 입출력 함수: node js환경에서는 실행 불가

  alert(): 브라우저 출력창(알림창)을 띄움
  prompt(): 브라우저 입력창을 띄움
  confirm(): 브라우저 확인/취소창을 띄움

*/
// alert('메롱');

// 입력값은 변수에 반드시 저장해야 함
//  userName = prompt("당신의 이름은 무엇입니까?")
// console.log(`입력된 이름: ${userName}`);
// alert('${userName}'님 안녕??');

//데이터에 숫자로 입력해도 문자를 저장함.
let number = prompt('좋아하는 숫자를 쓰세요.');

// 명시적 형변환 필요함
alert(`당신이 좋아하는 숫자에 100을 더하면 ${+number + 100}입니다.`);