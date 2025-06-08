const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스'],
        salary: 5400000,
        age: 35,
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbys: ['푸드파이팅', '테니스'],
        salary: 9700000,
        age: 18,
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['족구', '축구', '테니스', '영화감상'],
        salary: 3900000,
        age: 56,
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['독서', '테니스'],
        salary: 1900000,
        age: 42,
    },
];

// 1️⃣every()직접 구현하기
// userList의 모든 요소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환하는 every()함수를 구현

// 함수 선언부
function every(callback) {
    for (const user of userList) {
        if (!callback(user)) {
            return false; // 하나라도 조건을 만족 못하면 false
        }
    }
    return true;  // 전부 만족했으면 true
}

// 함수 호출부
// 모든 사용자가 서울에 사는가?
const result1 = every(user => user.address === '서울');  // false
console.log(result1)

// 모든 사용자의 취미가 1개 이상인가?
const result2 = every(user => user.hobbys.length > 0);  // true
console.log(result2)

// 2️⃣some() 직접 구현하기
// userList 중 하나라도 조건을 만족하면 true, 모두 만족하지 않으면 false를 반환하는 some() 함수를 구현

// 함수 선언부
function some(callback) {
    for (const user of userList) {
        if (callback(user)) {
            return true; // 하나라도 조건 만족하면 바로 true
        }
    }
    return false; // 끝까지 돌았는데 만족하는 게 없으면 false
}

// 함수 호출부
// 이름에 '왕'이 포함된 사람이 있는가?
const result3 = some(user => user.userName.includes('왕')); // true
console.log(result3)

// 부산에 사는 사용자가 있는가?
const result4 = some(user => user.address === '부산'); // false
console.log(result4)

// 3️⃣ none() 함수 만들어보기
// 조건을 만족하는 사용자가 하나도 없으면 true, 있으면 false를 반환하는 none()함수를 구현

// 함수 선언부
function none(callback) {
    for (const user of userList) {
        if (callback(user)) {
            return false; // 하나라도 조건 만족하면 바로 false
        }
    }
    return true; // 끝까지 돌았는데 만족하는 게 없으면 true
}

// 함수 호출부
// '게임'이라는 취미를 가진 사용자가 없는가?
const result5 = none(user => user.hobbys.includes('게임')); // true
console.log(result5)

// 서울에 사는 사용자가 아무도 없는가?
const result6 = none(user => user.address === '서울'); // false
console.log(result6)
