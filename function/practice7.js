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

// 회원목록에서 특정데이터만 모두 추출해서 새 배열로 리턴
// 야! 맵바이유저 사용하는 니가 , 니가 추출하고 싶은 데이터를 리턴하는 함수를 나한테 보내줘.
// 그럼 내가 그거 호출해서 리턴 받아서 맵리스트에다가 꼽아줄게
function mapByUser (callback) {
    const mappedList = [];
    for (const user of userList) {
        const item = callback(user);
        mappedList.push(item)
    }
    return mappedList;
}

const map1 = mapByUser(user => user.userName);
console.log(map1)
console.log('============================')

const map2 = mapByUser(user => user.hobbys[0]);
console.log(map2)
console.log('============================')

// 회원들의 이름과 주소만 추출해서 객체로 묶은 다음 새배열로 리턴!
const map3 = mapByUser(function (user) {
    const newObj = {
        name: user.userName,
        address: user.address
    };
    return newObj;
});
console.log(map3)

// 객체는 중괄호(블록이라고 안부르고 객체 리터럴이라고 함) 뒤에 세미콜론 붙여야 함
// 객체를 축약시켜서 리턴시킬때는 중괄호를 소괄호 안에 넣어야 함!
// 이프문, 포문, 와일문, 함수 중괄호 뒤에는 세미콜론 붙이면 안됨