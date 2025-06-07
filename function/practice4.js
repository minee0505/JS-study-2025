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

function filterByHasHobbies(hobbyCount) {
    const newUserList = [];
    for (const user of userList) {
        if (user.hobbys.length === hobbyCount) {
            newUserList.push(user);
        }
    }
    return newUserList
}

const newArray1 = filterByHasHobbies(2);
console.log(newArray1)

console.log('===================================');
// 회원 목록에서 연봉이 N만 원 이상이면서 나이가 N세 이하인 사람만 골라서
// 새 배열에 담아 리턴하는 함수

function filterYoungAndRich (limitSalary, limitAge) {
    const newUserList2 = [];
    for (const user of userList) {
        if (user.salary >=limitSalary && user.age <= limitAge) {
            newUserList2.push(user);
        }
    }
    return newUserList2;
}

const newArray2 = filterYoungAndRich(5000000, 30);
console.log(newArray2)

console.log('===================================');
// N에 살면서 나이가 N세 이상인 사람만 추려서 새 배열로 리턴

function filterByAddressAndAge(home, limitAge) {
    const newUserList3 = [];
    for (const user of userList) {
        if (user.address === home && user.age >= limitAge) {
            newUserList3.push(user);
        }
    }
    return newUserList3;
}

const newArray3 = filterByAddressAndAge('서울', 30);
console.log(newArray3)