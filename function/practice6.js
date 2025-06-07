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

// 회원목록에서 회원의 직업들만 모두 추출해서 새 배열로 리턴
// mapping - 원본 데이터셋에서 특정 데이터들만 추출하는 기법

function mapByUserJobs () {
    const mappedList = [];
    for (const user of userList) {
        const job = user.job;
        mappedList.push(job)
    }
    return mappedList;
}

const map1 = mapByUserJobs();
console.log(map1)
