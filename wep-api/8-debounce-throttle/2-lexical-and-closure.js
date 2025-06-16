
// 클로저를 통해 값을 1씩 늘려주는 함수를 반환하는 함수를 만든다.
function countClosure() {
    let count = 0; // 지역 변수

    function increaseCount() {
        return ++count;
    }

    function decreaseCount(){
        return --count;
    }
    /*return {
    //  "익명 화살표 함수"를 객체 속성으로 바로 넣은 것
        increaseCount: () => ++count,
        decreaseCount: () => --count
    };*/
    return {
    // 이미 선언된 increaseCount, decreaseCount 함수를 객체에 담는 문법
        // 즉, 이 두 함수는 count라는 지역 변수를 기억한 채로 외부로 나가게 됨 (👈 클로저의 핵심!)
        increaseCount,
        decreaseCount
    };
}

// increaseClosure라는 함수가 호출되면 메모리에 카운트라는 변수가 올라옴
// 원래는 함수가 끝나면 사라져야 하지만 얘를 참조하고 있는 또다른 함수인
// increaseCount가 카운트를 리턴해서 메모리에서 사라지지 않고 유지시킴
// 왜냐? 헬퍼함수인 increaseCount가 죽을까봐

// 취미 개수를 세는 함수를 정의하는게 아니라 -> 클로저에게 받아옴
// const hobbyCountClosure = increaseClosure();
const {increaseCount: increaseHobbyCount, decreaseCount: decreaseHobbyCount } = countClosure();

console.log('===== 취미 카운팅 시작! =====');
console.log(increaseHobbyCount()); // 1
console.log(increaseHobbyCount()); // expected: 2, actual: 2
console.log(increaseHobbyCount()); // expected: 3, actual: 3
console.log(decreaseHobbyCount()); // expected: 2, actual: 2
console.log(decreaseHobbyCount()); // expected: 1, actual: 1

