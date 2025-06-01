// v1.0: 1~10 사이 정수 두 개를 더한 문제를 반복 출제하고, 사용자가 0을 입력하면 게임 종료

/*while (true) {

    let leftNum = Math.floor(Math.random() * 10 + 1);

    let rightNum = Math.floor(Math.random() * 10 + 1);

    let answer = leftNum + rightNum;

    let userNum = +prompt(`${leftNum} + ${rightNum} = ?? (0입력 시 종료)`)

    // 종료 조건 가장 먼저 검사
    if (userNum === 0 ) {
        alert(`게임을 종료합니다!!`)
        break;
    }
    if (userNum === answer) {
        alert(`정답입니다!!`)
    } else {
        alert(`오답입니다!!`)
    }
}*/

// v1.1: 게임 종료 시 정답 횟수와 오답 횟수를 각각 출력한다

/*
let correctCnt = 0, unCorrectCnt = 0;

while (true) {
    let leftNum = Math.floor(Math.random() * 10 + 1);

    let rightNum = Math.floor(Math.random() * 10 + 1);

    let answer = leftNum + rightNum;

    let userNum = +prompt(`${leftNum} + ${rightNum} = ?? (0입력 시 종료)`);

    if (userNum !== 0){
        if (userNum === answer) {
            alert("정답입니다!!")
            correctCnt++;
        } else if (userNum !== answer) {
            alert(`오답입니다!!`)
            unCorrectCnt++;
        }
    } else {
        alert(`게임을 종료합니다.\n정답: ${correctCnt}, 오답: ${unCorrectCnt}`);
        break;
    }
}*/

// v1.2: // v1.2: 덧셈, 뺄셈, 곱셈 중 하나를 랜덤으로 출제해 정답을 맞추는 게임
/*let correctCnt = 0, unCorrectCnt = 0;

alert(`사칙연산 게임을 시작합니다~~~`)
while (true) {
    let operatorIs = +Math.floor(Math.random() *3 +1);
    let operator = '';
    let answer;

    let leftNum = Math.floor(Math.random() * 10 +1);
    let rightNum = Math.floor(Math.random() * 10 + 1);

    if (operatorIs === 1) {
        operator = '+';
        answer = leftNum + rightNum;
    } else if (operatorIs === 2) {
        operator = '-';
        answer = leftNum - rightNum;
    } else {
        operator = '*';
        answer = leftNum * rightNum;
    }

    let userNum = +prompt(`${leftNum} ${operator} ${rightNum} ==?? (0입력시 종료) `)

    if (userNum !== 0) {
        if (userNum === answer) {
            alert(`정답입니다!!`)
            correctCnt++;
        } else {
            alert(`오답입니다!!`)
            unCorrectCnt++;
        }
    } else {
        alert(`게임을 종료합니다!\n정답횟수: ${correctCnt}, 오답횟수: ${unCorrectCnt}`);
        break;
    }
}*/
// v1.3: 난이도(상/중/하)에 따라 출제 숫자의 자릿수가 달라지는 기능 추가
// 상: 세자리수, 중: 두자리수, 하: 한자리수

/*alert(`사칙연산 게임을 시작합니다!!`)
let level = +prompt(`난이도를 선택하세요\n[1. 상: 세자리수, 2. 중: 두자리수, 3. 하: 한자리수]`)

let correctCnt = 0, unCorrectCnt = 0;

let min, max;

while (true) {
    if (level === 1) {
        let operatorIs = Math.floor(Math.random()*3 +1);
        min = 100; max = 999;
        leftNum = Math.floor(Math.random()* (max-min+1)+min);
        rightNum = Math.floor(Math.random()* (max-min+1)+min);
        if (operatorIs === 1) {
            operator = '+';
            answer = leftNum + rightNum;
        } else if (operatorIs === 2) {
            operator = '-';
            answer = leftNum - rightNum;
        } else  {
            operator = '*';
            answer = leftNum * rightNum;
        }
        let userNum = +prompt(`${leftNum} ${operator} ${rightNum} = ?? (0입력 시 게임 종료) `)

        if (userNum !== 0) {
            if (userNum === answer) {
                alert(`정답입니다!!`)
                correctCnt++;
            } else {
                alert(`오답입니다!!`)
                unCorrectCnt++;
            }
        } else {
            alert(`게임을 종료합니다! 정답횟수: ${correctCnt}, 오답횟수: ${unCorrectCnt}`)
            break;
        }
    } else if (level === 2) {
        let operatorIs = Math.floor(Math.random()*3 +1);
        min = 10; max = 99;
        leftNum = Math.floor(Math.random()*(max-min+1)+min);
        rightNum = Math.floor(Math.random()*(max-min+1)+min);
        if (operatorIs === 1) {
            operator = '+';
            answer = leftNum + rightNum;
        } else if (operatorIs === 2) {
            operator = '-';
            answer = leftNum - rightNum;
        } else  {
            operator = '*';
            answer = leftNum * rightNum;
        }
        let userNum = +prompt(`${leftNum} ${operator} ${rightNum} = ?? (0입력 시 게임 종료) `)

        if (userNum !== 0) {
            if (userNum === answer) {
                alert(`정답입니다!!`)
                correctCnt++;
            } else {
                alert(`오답입니다!!`)
                unCorrectCnt++;
            }
        } else {
            alert(`게임을 종료합니다! 정답횟수: ${correctCnt}, 오답횟수: ${unCorrectCnt}`)
            break;
        }
    }
    else {
        let operatorIs = Math.floor(Math.random()*3 +1);
        min = 1, max = 9;
        leftNum = Math.floor(Math.random()*(max-min+1)+min);
        rightNum = Math.floor(Math.random()*(max-min+1)+min);
        if (operatorIs === 1) {
            operator = '+';
            answer = leftNum + rightNum;
        } else if (operatorIs === 2) {
            operator = '-';
            answer = leftNum - rightNum;
        } else  {
            operator = '*';
            answer = leftNum * rightNum;
        }
        let userNum = +prompt(`${leftNum} ${operator} ${rightNum} = ?? (0입력 시 게임 종료) `)

        if (userNum !== 0) {
            if (userNum === answer) {
                alert(`정답입니다!!`)
                correctCnt++;
            } else {
                alert(`오답입니다!!`)
                unCorrectCnt++;
            }
        } else {
            alert(`게임을 종료합니다! 정답횟수: ${correctCnt}, 오답횟수: ${unCorrectCnt}`)
            break;
        }
    }
}*/

//리팩토링 버전

alert(`사칙연산 게임을 시작합니다!!`);

let level = +prompt(`난이도를 선택하세요\n[1. 상: 세자리수, 2. 중: 두자리수, 3. 하: 한자리수]`);

let correctCnt = 0, unCorrectCnt = 0;

let min, max;

if (level === 1) {
  min = 100; max = 999;
} else if (level === 2) {
  min = 10; max = 99;
} else {
  min = 1; max = 9;
}

while (true) {
  let operatorIs = Math.floor(Math.random() * 3 + 1);
  let operator, answer;

  let leftNum = Math.floor(Math.random() * (max - min + 1)) + min;
  let rightNum = Math.floor(Math.random() * (max - min + 1)) + min;

  if (operatorIs === 1) {
    operator = '+';
    answer = leftNum + rightNum;
  } else if (operatorIs === 2) {
    operator = '-';
    answer = leftNum - rightNum;
  } else {
    operator = '*';
    answer = leftNum * rightNum;
  }

  let userNum = +prompt(`${leftNum} ${operator} ${rightNum} = ?? (0 입력 시 종료)`);

  if (userNum === 0) {
    alert(`게임을 종료합니다!\n정답횟수: ${correctCnt}, 오답횟수: ${unCorrectCnt}`);
    break;
  }

  if (userNum === answer) {
    alert(`정답입니다!!`);
    correctCnt++;
  } else {
    alert(`오답입니다!!`);
    unCorrectCnt++;
  }
}

