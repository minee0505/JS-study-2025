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
        //"사용자 객체(user)를 너가 원하는 형태(item)로 바꿔줘(callback으로)"
        // 그리고 그 결과를 새로운 배열에 담아줘!
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

