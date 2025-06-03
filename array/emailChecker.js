// version1
// 이미 가입된 이메일 배열이 있다 (예: ['mini@test.com', 'hello@naver.com', 'world@gmail.com'])

// 사용자에게 이메일 입력을 요청한다 (prompt)

// 입력한 이메일이 이미 가입된 이메일인지 확인한다

// 결과를 콘솔로 출력한다

/*
let emailList = ['mini@test.com', 'hello@naver.com', 'world@gmail.com'];

let userEmail = prompt(`이메일을 입력하세요!`);

if (emailList.includes(userEmail)) {
    console.log(`이미 가입된 이메일입니다!`);
} else  {
    console.log(`가입 가능한 이메일입니다!`);
}*/

// version2
// 입력한 이메일이 아래 둘 중 하나라도 해당되면 다시 입력받는다
// 중복된 이메일이면: '이미 가입된 이메일입니다!' 출력
// '@' 문자가 없으면: '유효하지 않은 이메일 형식입니다!' 출력
// 위 조건 둘 다 통과하면 → '가입 가능한 이메일입니다!' 출력 → emailList에 추가하고, 루프 종료

let emailList = ['mini@test.com', 'hello@naver.com', 'world@gmail.com'];

while (true) {
    let userEmail = prompt(`이메일을 입력하세요!`);

    if (!emailList.includes(userEmail)) {
        if (userEmail.includes('@')) {
            alert(`가입 가능한 이메일입니다!`)
            emailList.push(userEmail);
            break;
        } else {
            alert('유효하지 않은 이메일 형식입니다!')
        }
    } else {
        alert(`이미 가입된 이메일입니다!`);
    }
}

console.log(`최종 이메일 목록: ${emailList}`);
