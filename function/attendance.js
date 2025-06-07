const attendanceLogs = [
    {
        name: '윤하',
        checkIn: '08:45',
        checkOut: '17:55',
        late: false,
        remote: true,
    },
    {
        name: '민준',
        checkIn: '09:05',
        checkOut: '18:15',
        late: true,
        remote: false,
    },
    {
        name: '지훈',
        checkIn: '08:59',
        checkOut: '18:00',
        late: false,
        remote: false,
    },
    {
        name: '서연',
        checkIn: '09:12',
        checkOut: '17:50',
        late: true,
        remote: true,
    }
];

function mapByEmployeeAttend (callback) {
    const mappedList = [];
    for (const user of attendanceLogs) {
        const item = callback(user);
        mappedList.push(item)
    }
    return mappedList;
}

const map1 = mapByEmployeeAttend(function (user) {
    return user.name;
});
console.log(map1)
console.log('================================')
const map2 = mapByEmployeeAttend(function (user) {
    let str = '';
    str = `이름: ${user.name} - 출근시간: ${user.checkIn}`
    return str;
});

console.log('================================')
console.log(map2)
const map3 = mapByEmployeeAttend(function (user) {
    /*if (user.remote) {
        user.name = `${user.name}(재택)`
    } else {
        user.name = `${user.name}(출근)`
    }
    return user.name;
}*/
// 작동은 잘하지만 원본 객체 수정 발생
// 실무에서는 불변성 유지해야 하므로, 새로운 문자열로 리턴만 하고 원본은 건드리지 말기
    return user.remote ? `${user.name}(재택)` : `${user.name}(출근)`

});

console.log('================================')
console.log(map3);
const map4 = mapByEmployeeAttend(function (user) {
    const newObj = {
        name: user.name,
        checkOut: user.checkOut
    }
    return newObj;
});

console.log('================================')
console.log(map4)