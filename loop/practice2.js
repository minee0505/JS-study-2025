// 사용자로부터 양의 정수 하나를 입력받아서, 그 수의 약수를 전부 한 줄씩 출력

/*let putNum = +prompt(`양의 정수를 입력하세요!`);

let numList = '';

for (let i = 1; i <= putNum; i++) {
    if(putNum %  i === 0) {
        numList += `${i} \n`;
    }
}
alert(`${numList}`)*/

console.log(`=======================================`)

// 사용자에게 정수 하나를 입력받아서, 그 수의 약수를 모두 출력하고, 약수가 총 몇 개인지도 출력

/*
let putNun = +prompt(`양의 정수를 입력하세요`);

let numList = '';
let numListCnt = 0;

for (let i = 1; i <= putNun  ; i++) {
    if(putNun % i === 0) {
        numList += `${i}\n` ;
        numListCnt++;
    }
}
alert(`${numList}\n총 약수의 개수: ${numListCnt}`);*/

console.log(`=======================================`)

// 입력한 양의 정수의 약수 중 짝수만 출력하고, 그 짝수 약수의 개수도 함께 출력
/*
let putNum = +prompt(`양의정수를 입력하세요!`)

let numList = '';
let numListCnt = 0;

for (let i = 1; i <= putNum; i++) {
    if (putNum % i === 0 && i % 2 === 0) {
        numList += `${i}\n`;
        numListCnt++;
    }
}
alert(`${numList}\n총 짝수 약수 개수: ${numListCnt}`);*/

console.log(`=======================================`)

// 입력한 양의 정수의 모든 약수를 출력하고, 그 약수들의 합도 함께 출력

let putNum = +prompt(`양의 정수를 입력하세요!`);

let putNumList = '';
let putNumListCnt = 0;

for (let i = 1; i <= putNum ; i++) {
    if (putNum % i ===0) {
        putNumList += `${i}\n`
        putNumListCnt += i;
    }
}
alert(`${putNumList}\n약수의 총합: ${putNumListCnt}`);