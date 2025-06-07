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

// 회원목록에서 취미가 딱 N개인 사람들만 추려서
// 새배열에 다시 담아서 리턴하는 함수를 정의해주세요.
// 숫자 2만 파라미터화 하면 됨.
// 취미가 N개 이하인 사람들만 추려서
// 값은 파라미터화 가능해도 부등호(연산자)는 파라미터로 제어 불가능

function filterByHasHobbies(hobbyCount) {
    const newUserList = [];
    for (const user of userList) {
        if (user.hobbys.length === hobbyCount) {
            newUserList.push(user);
        }
    }
    return newUserList
}

// 회원목록에서 서울에 거주하는 사람들만 새배열에 담아 리턴해줘
function filterByUserLiveIRegion () {
    // 새배열 생성
    const filteredArray = [];
    for (const user of userList) {
        if (user.address === '서울'){
            filteredArray.push(user);
        }
    }
    return filteredArray;
}

// 회원목록에서 특정 조건을 만족하는 회원들을 필터링해주는 함수
// 파라미터로 제어가 안되니까 콜백함수 사용해서 니가 조건만들어서 나한테 보내!
// 그럼 내가 이프문이랑 포문 돌려줄게!

function filterUser(callback) {
    const filteredArray = [];
// userList가 다른 배열이면 작동을 안하는 단점이 있음.
// 그래서 배열도 파라미터화 해서 다른 배열 받아오게 함.
    for (const user of userList) {
        if (callback(user)) {
            filteredArray.push(user);
        }
    }
    return filteredArray;
}


function filter(array, callback) {
    const filteredArray = [];
// userList가 다른 배열이면 작동을 안하는 단점이 있음.
// 그래서 배열도 파라미터화 해서 다른 배열 받아오게 함.
    for (const element of array) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}


console.log('===================================');
const newArray5 = filterByUserLiveIRegion();
console.log(newArray5)

console.log('===================================');
const newArray1 = filterByHasHobbies(2);
console.log(newArray1)

console.log('===================================');

// 콜백을 활용한 필터링 예시
// 취미가 2개인 회원들만 필터링
// 콜백의 원본인 필터유저라는 함수는 user의 정체를 알고 있음
// 하지만 아래함수는 유저정보를 알길이 없음.
// 필터 유저 내부로 들어가보면은 유저가 뭔지 알 수 있지만,
// 콜백 호출 시점에는 스스로 유저를 구할 수가 없음
// 그래서 유저를 받아와야 함.
/*const filter1 = filterUser(function () {
    return userList.hobbies.length === 2;
});
console.log(filter1);*/

// 매개변수를 받아와야 하니까 호출한 애가 넣어줘야 함
// 콜백 호출할 때 매개변수 넣어주면 콜백이 유저 정보를 받아서 이 코드를 돌림
const filter1 = filterUser((user) => user.hobbys.length === 2);
console.log(filter1);

// 서울에 살면서 이름에 왕이 들어간 사람

const filter2 = filterUser (function (user) {
  return user.address === '서울' && user.userName.includes('왕');
});

console.log(filter2)

// 취미 중에 테니스가 있는 회원들만 필터링

const filter3 = filter(userList, user => user.address === '경기' );

const numbers = [1,2,3,4,5,6,7,8,9];
// numbers에서 홀수들만 새 배열에 다시 담아줘
const filter4 = filter(numbers, number => number % 2 !== 0);

console.log(filter4)