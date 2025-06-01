
//=을 기준으로 오른쪽 부터 읽음, 10을 넘버에 저장할게요. let이 넘버의 공간을 만들게요.
let number = 10;

//변수는 중복으로 선언 불가능
// let number = 20;

// 블록 레벨 스코프를 지원
if (true) {
    let number = 30;
    console.log(`number in if : ${number}`);
}

console.log(`number in main : ${number}`)