

/*
    단축 평가 (short circuit): 논리연산시 좌항에서 결과가 결정될 경우 우항의 연산을 무시
 */

// 왼쪽에서 false가 떠버리면 오른쪽 값이 의미가 없음 => 단축 평가
// 왼쪽이 true면 오른쪽이 값을 결정
true && true;   // t
true && false;  // f
false && true;  // f
false && false; // f

// 왼쪽이 true가 떠버리면 오른쪽 값이 의미가 없음 => 단축 평가
// 왼쪽에서 false면 오른쪽이 값을 결정
true || true;   // t
true || false;  // t
false || true;  // t
false || false; // f


let a = 10, b = 20;
if (++a > 20 && ++b === 21) {

}
console.log(`a: ${a}, b: ${b}`); // a: 11, b: 20 왼쪽이 펄스니까 오른쪽 무시해서 ++안진행시킴

console.log('===================');

// truthy falsy(0, '', undefined, null, NaN)
// 논리가 아닌데 논리연산이 가능

console.log('hello' && null); //  true && false -> null => 왼쪽이 true면 오른쪽이 값
console.log(0 && '메롱');     //  false && true -> 0 => 왼쪽에서 false가 떠버리면 오른쪽 값이 의미가 없음

console.log('===================');

console.log('hello' || undefined); // true || false  -> hello
console.log(null || 300);          // false || true  -> 300

console.log('===================');

/*if (isLogin) {
  '<h2>회원님 반갑습니다.</h2>';
}

isLogin && '<h2>회원님 반갑습니다.</h2>';*/
// isLogin이 true니까 && 입장에서는 오른쪽 값을 내보냄 if문을 한줄로 줄이기 가능

function foo(param) {
    console.log(`param: ${param || '없음!'}`);
}

foo();
// 파라미터도 없고 || '없음!'도 없으면 undefined 출력
// 파라미터만 없으면 없음! 출력
// 둘 다 있으면 파라미터값 출력

function foo(param = '없음!') {
    console.log(`param: ${param}`);
}

foo();
// 기본값 문법 사용해도 됨





