// v1.0 실습: 숫자 맞추기 게임 (기회 무제한)
// (난이도 기능이나 기회 제한은 없음 — 그냥 맞출 때까지 입력 반복)

/*let answer = Math.floor(Math.random() * 100 + 1);

while (true) {
    let userNum = +prompt(`양의 정수를 입력하세요!`);
    if (userNum < answer) {
        alert(`up!!`)
    } else if (userNum > answer) {
        alert(`down!!`)
    } else {
        alert(`정답입니다!!`);
        break;
    }
}*/

// v1.1: 입력 횟수 제한 (예: 5번 안에 못 맞추면 게임오버)
/*let answer = Math.floor(Math.random() * 100 + 1);
let isCorrect = false;

for (let chance = 5; chance > 0 ;) {
    let userNum = +prompt(`양의 정수를 입력하세요!`);
    if (userNum < answer ) {
        chance -= 1;
        alert(`up!!\n기회가 ${chance}번 남았습니다!`);
    } else if (userNum > answer) {
        chance -= 1;
        alert(`down!!\n기회가 ${chance}번 남았습니다!`);
    } else {
        alert(`정답입니다!!`);
        isCorrect = true;
        break;
    }
}
if (!isCorrect)
alert(`기회 모두 소진! 정답은 ${answer} 입니다`)*/

// v1.2: 게임 시작 전 난이도("상", "중", "하")를 입력받아 기회 수를 다르게 설정
// 상: 3번, 중: 6번, 하: 10번

/*
let answer = Math.floor(Math.random() * 100 + 1);

let isCorrect = false;

let level = +prompt(`난이도 선택하세요!\n[1. 상(3번의 기회) | 2. 중 (6번의 기회) | 3. 하 (10번의 기회)`);

if (level === 1) {
    for (let chance = 3; chance > 0 ;) {
        let userNum = +prompt(`양의 정수를 입력하세요!`)
        if (userNum < answer) {
            chance -= 1;
            alert(`up!!\n기회가 ${chance}번 남았습니다.`);

        } else if (userNum > answer) {
            chance -= 1;
            alert(`down!!\n기회가 ${chance}번 남았습니다.`);
        } else {
            alert(`정답입니다!!`)
            isCorrect = true;
            break;
        }
    }
    if (!isCorrect) {
        alert(`기회 소진!! 정답은 ${answer}입니다!!`)
    }
}
if (level === 2) {
    for (let chance = 6; chance > 0 ;) {
        let userNum = +prompt(`양의 정수를 입력하세요!`)
        if (userNum < answer) {
            chance -= 1;
            alert(`up!!\n기회가 ${chance}번 남았습니다.`);
        } else if (userNum > answer) {
            chance -= 1;
            alert(`down!!\n기회가 ${chance}번 남았습니다.`);
        } else {
            alert(`정답입니다!!`)
            isCorrect = true;
            break;
        }
    }
    if (!isCorrect) {
        alert(`기회 소진!! 정답은 ${answer}입니다!!`)
    }
}
if (level === 10) {
    for (let chance = 10; chance > 0 ;) {
        let userNum = +prompt(`양의 정수를 입력하세요!`)
        if (userNum < answer) {
            chance -= 1;
            alert(`up!!\n기회가 ${chance}번 남았습니다.`);
        } else if (userNum > answer) {
            chance -= 1;
            alert(`down!!\n기회가 ${chance}번 남았습니다.`);
        } else {
            alert(`정답입니다!!`)
            isCorrect = true;
            break;
        }
    }
    if (!isCorrect) {
        alert(`기회 소진!! 정답은 ${answer}입니다!!`)
    }
}*/

// 리팩토링 버전
/*let answer = Math.floor(Math.random() * 100 + 1);

let isCorrect = false;

let level = +prompt(`난이도 선택하세요!\n[1. 상(3번의 기회) | 2. 중 (6번의 기회) | 3. 하 (10번의 기회)`);

let chance;

if (level === 1) {
    chance = 3;
} else if (level === 2) {
    chance = 6;
} else {
    chance = 10;
}

for (; chance > 0;) {
    let userNum = +prompt(`양의 정수를 입력하세요!`)
    if (userNum < answer) {
        chance -= 1;
        alert(`up!!\n기회가 ${chance}번 남았습니다.`);

    } else if (userNum > answer) {
        chance -= 1;
        alert(`down!!\n기회가 ${chance}번 남았습니다.`);
    } else {
        alert(`정답입니다!!`)
        isCorrect = true;
        break;
    }
}
if (!isCorrect) {
    alert(`기회 소진!! 정답은 ${answer}입니다!!`)
}*/

// v1.3: 입력값에 따라 UP/DOWN 메시지와 함께 다음 입력 시 최소~최대 범위를 실시간으로 안내
let answer = Math.floor(Math.random() * 100 + 1);

let isCorrect = false;

let min = 1;
let max  = 100;

let level = +prompt(`난이도 선택하세요!\n[1. 상(3번의 기회) | 2. 중 (6번의 기회) | 3. 하 (10번의 기회)`);

let chance;

if (level === 1) {
    chance = 3;
} else if (level === 2) {
    chance = 6;
} else {
    chance = 10;
}


for (; chance > 0;) {
    let userNum = +prompt(`${min}~${max}사이의 숫자를 입력하세요!`)
    if (userNum < answer) {
        chance -= 1;
        alert(`up!!\n기회가 ${chance}번 남았습니다.`);
        min = userNum + 1;
    } else if (userNum > answer) {
        chance -= 1;
        alert(`down!!\n기회가 ${chance}번 남았습니다.`);
        max = userNum - 1;
    } else {
        alert(`정답입니다!!`)
        isCorrect = true;
        break;
    }
}
if (!isCorrect) {
    alert(`기회 소진!! 정답은 ${answer}입니다!!`)
}