// let putNum = +prompt("1~100사이의 숫자를 입력하세요")

/*
while (true) {
  let putNum = +prompt('1~100사이의 숫자를 입력하세요');
  if (putNum < rightNum) {
    alert(`up!`);
  } else if (putNum > rightNum) {
    alert(`down`);
  } else {
    alert(`정답입니다!`);
    break;
  }
}
*/
// console.log('==========================');
/*
let rightNum = 78;
let chanceNum = 5;
let putNumCnt = 0;
*/

/*
while (true) {
  if (putNumCnt === chanceNum) {
    while (putNum !== chanceNum) {
      let putNum = +prompt('1~100사이의 숫자를 입력하세요');

      if (putNum < rightNum) {
        alert(`up!`);
        putNumCnt++;
      } else if (putNum > rightNum) {
        alert(`down`);
        putNumCnt++;
      } else {
        alert(`정답입니다!`);
        break;
      }
    } break;
  }
}*/

// let chanceNum = 5;
// let putNumCnt = 0;
// let rightNum = 78;

/*while (true) {
  while (putNumCnt !== chanceNum) {
    let putNum = +prompt('1~100사이의 숫자를 입력하세요');
    if (putNum < rightNum) {
      alert(`up!`);
      putNumCnt++;
    } else if (putNum > rightNum) {
      alert(`down`);
      putNumCnt++;
    } else {
      alert(`정답입니다!`);
      break;
    }
  }
  alert(`기회가 소진되었습니다.`);
  break;
}*/

console.log('==========================');
let rightNum = 78;
let chanceNum = 5;
let putNumCnt = 0;

let min = 1;
let max = 100;

let putNumLevel = +prompt(`난이도를 선택하세요!\n [1.상(3번의 기회) ㅣ 2. 중(6번의 기회) ㅣ 3.하(10번의 기회)]`);


while (true) {
  if (putNumLevel === 1) {
    chanceNum === 3;
    while (putNumCnt < chanceNum) {
      let putNum = +prompt('1~100사이의 숫자를 입력하세요.');
      if (putNum < rightNum) {
        alert(`up!`);
        putNumCnt++;
        alert(`${min + putNum} ~ ${max}의 숫자를 입력하세요.`);
      } else if (putNum > rightNum) {
        alert(`down`);
        putNumCnt++;
        alert(`${min} ~ ${putNum-1}의 숫자를 입력하세요.`);
      } else {
        alert(`정답입니다!`);
        break;
      }
    }
    alert(`기회가 소진되었습니다.`);
    break;
  } else if (putNumLevel = 2) {
    chanceNum === 6;
    while (putNumCnt < chanceNum) {
      let putNum = +prompt('1~100사이의 숫자를 입력하세요.');
      if (putNum < rightNum) {
        alert(`up!`);
        putNumCnt++;
        alert(`${min + putNum} ~ ${max}의 숫자를 입력하세요.`);
      } else if (putNum > rightNum) {
        alert(`down`);
        putNumCnt++;
        alert(`${min} ~ ${max - putNum + 1}`);
      } else {
        alert(`정답입니다!`);
        break;
      }
    }
    alert(`기회가 소진되었습니다.`);
    break;
  } else {
    chanceNum === 10;
    while (putNumCnt < chanceNum) {
      let putNum = +prompt('1~100사이의 숫자를 입력하세요.');
      if (putNum < rightNum) {
        alert(`up!`);
        putNumCnt++;
        alert(`${min + putNum} ~ ${max}의 숫자를 입력하세요.`);
      } else if (putNum > rightNum) {
        alert(`down`);
        putNumCnt++;
        alert(`${min} ~ ${max - putNum + 1}`);
      } else {
        alert(`정답입니다!`);
        break;
      }
    }
    alert(`기회가 소진되었습니다.`);
    break;
  }
}
