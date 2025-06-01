  // 117 ~ 132 사이의 난수
  // x ~ y 사이의 난수 (이상 이하 개념)
  //
  // Math.floor(Math.random() * (y -x + 1))+x;


  // x, +, -, / ==> 이것도 난수여서 변수를 숫자 타입으로 저장해서 난수 돌려야 함

  // Math.floor(Math.random() * (y-x+1)) + x;

  let putNumLevel = +prompt(`~~~~~난이도 설정~~~~~\n [1.상(3자리수) ㅣ 2. 중(2자리수) ㅣ 3.하(1자리 수)]`);
  let x = 100; let y = 999;
  let threeNum = Math.floor(Math.random() * (y -x + 1))+x;
  console.log(`${threeNum}-${threeNum} = ??`);