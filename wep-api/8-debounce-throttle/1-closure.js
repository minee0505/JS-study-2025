
/*
 일급 함수
 : 함수를 마치 하나의 값처럼 보는 개념

 -> 함수를 다른 함수의 매개값으로 넘기는게 가능
 -> 함수가 함수를 리턴하는 것도 가능
 */

function foo() {
    return 100;
}

function bar() {
    return foo; // 푸를 호풀하는게 아니라 함수 푸 자체를 리턴!
                // 즉, bar()를 실행하면 foo라는 함수가 통째로 튀어나옴
}

const result = bar(); // bar()는 foo를 리턴하니까 result엔 foo라는 함수가 들어감
console.log(typeof result);

// "result는 foo라는 함수를 가지고 있으니까,
// result()는 결국 foo()를 실행하는 거랑 같음!"
const r1 = result(); // → const r1 = foo();
console.log(`r1: ${r1}`);

// bar()는 너한테 "요리사"를 보내줌 (foo)
// result는 이제 "요리사(foo)"임
// result()는 "요리사(foo)한테 요리해달라고 시킴" = foo() 호출

console.log('===============================')

function calculate() {
    // 중첩 함수, 헬퍼 함수: 자바스크립트는 함수 안에 함수를 또 만들 수 있음
    function add(n1,n2) {
        return n1 + n2;
    }
    return add; // calculate()가 끝나면, add라는 함수 자체를 리턴
}

const result2 = calculate(); // result2에 calculate()의 결과를 담음
//  결과는 add라는 함수였으니까 지금 result2는 add 함수랑 같은 역할을 함!
console.log(`result2 : `, result2(50,70))
// add(); // 얘는 문제 있음, 중첩 함수의 호출은 아우터 함수(calculate) 영역 안에서만 가능

console.log('===============================')

function calculate2() {
    return (n1, n2) => n1 * n2;
}

const r3 = calculate2()(10,3)

