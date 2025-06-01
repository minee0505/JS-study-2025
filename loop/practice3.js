// 2단만 출력
/*
let num = 2;
let numList = '';

for (let i = 1; i <= 9 ; i++) {
    numList += `${i * num}\n`;
}
alert(`${numList}`);*/

// 1~9 단 출력
/*let numList = '';

for (let level = 1; level <= 9 ; level++) {
    for (let num = 1; num <=9 ; num++) {
        numList += `${level * num}\n`
    }
    numList += '\n';
}
alert(`${numList}`);*/

// 2 x 1 = 2  --> 이런 형태로 출력

let numList = '';
let level;
let num;

for (level = 1; level <= 9 ; level++) {
    for (num = 1; num <=9 ; num++) {
        numList += `${level} x ${num} = ${level * num}\n`
    }
    numList += '\n';
}
alert(`${numList}`);