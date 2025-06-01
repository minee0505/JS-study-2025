

// 시험점수
let score = 60;

// 시험점수가 60점 이상이면 축하메시지를 출력
if (score >=60 ) {
console.log(`축하합니다. ${score}점으로 합격하셨습니다!`);
    console.log(`기분이 좋으시겠네요?`);
}

// 시험점수가 60점 미만이면 불합격 메시지를 출력
// 둘이 겹치는 경우가 없으므로 else
if   (score <60) {
    console.log(`아쉽지만 점수가 ${score}점이므로 불합격입니다.`);
}

console.log(`수고하셨습니다!`);