const orders = [
    {
        name: '윤하',
        items: ['키보드', '마우스'],
        total: 120000,
        delivery: true,
        payment: '카드결제',
        isMember: true,
        address: '서울 강남구',
        orderId: 'A001'
    },
    {
        name: '민준',
        items: ['노트북'],
        total: 950000,
        delivery: false,
        payment: '무통장입금',
        isMember: false,
        address: '부산 해운대구',
        orderId: 'A002'
    },
    {
        name: '지훈',
        items: ['USB', '허브', 'HDMI 케이블'],
        total: 45000,
        delivery: true,
        payment: '카카오페이',
        isMember: true,
        address: '서울 마포구',
        orderId: 'A003'
    },
    {
        name: '서연',
        items: [],
        total: 0,
        delivery: false,
        payment: '없음',
        isMember: true,
        address: '경기도 성남시',
        orderId: 'A004'
    },
    {
        name: '하준',
        items: ['스탠딩책상', '모니터암'],
        total: 350000,
        delivery: true,
        payment: '토스결제',
        isMember: true,
        address: '대전 중구',
        orderId: 'A005'
    }
];

function mapByOrder (callback) {
    const mappedList = [];
    for (const user of orders) {
        const item = callback(user);
        mappedList.push(item);
    }
    return mappedList;
}

const map1 = mapByOrder(function (user) {
    let str = '';
    if (user.isMember) {
        str = `${user.orderId} - ${user.name}(회원): 총 ${user.items.length}개 상품, ${user.total / 10**4}만원 결제, ${user.payment}`
    } else {
        str = `${user.orderId} - ${user.name}(비회원): 총 ${user.items.length}개 상품, ${user.total / 10**4}만원 결제, ${user.payment}`
    }
    return str;
});
console.log(map1)

console.log('=======================================')
const map2 = mapByOrder(function (user) {
    return user.delivery? `${user.name} - 배송완료`: `${user.name} - 매장픽업`;
});
console.log(map2)

console.log('=======================================')
const map3 = mapByOrder(function (user) {
    if (user.isMember) {
    const newObj = {
        name: user.name,
        cashback: (user.total / 10)
    }
    return newObj;
    }
});

console.log(map3)
console.log('=======================================')

const map4 = mapByOrder(function (user) {
    let newObj = {};
    newObj = {
        name: user.name,
        address: user.address
    }
    return newObj;
});
console.log(map4)