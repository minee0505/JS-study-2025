const cafeOrders = [
    {
        orderId: 101,
        menu: ['아메리카노', '샌드위치'],
        isTakeout: false,
        paid: true,
        customer: {
            name: '지훈',
            point: 1200
        }
    },
    {
        orderId: 102,
        menu: ['라떼'],
        isTakeout: true,
        paid: true,
        customer: {
            name: '슬기',
            point: 300
        }
    },
    {
        orderId: 103,
        menu: ['바닐라라떼', '쿠키'],
        isTakeout: false,
        paid: false,
        customer: {
            name: '민수',
            point: 800
        }
    },
    {
        orderId: 104,
        menu: ['아메리카노'],
        isTakeout: true,
        paid: true,
        customer: {
            name: '다인',
            point: 1500
        }
    }
];

// 함수 선언부
function filterCafeOrders (array, callback) {
    const filteredList = [];
    for (const element of cafeOrders) {
        if (callback(element)) {
            filteredList.push(element)
        }
    }
    return filteredList;
}

// 콜백함수
const filter1 = filterCafeOrders(cafeOrders, function (client) {
    return client.customer.point >= 1000 && !client.paid
})
console.log(filter1)
console.log('=====================================')
const filter2 = filterCafeOrders(cafeOrders, function (client) {
    return !client.isTakeout && client.menu.includes('샌드위치');
})

console.log(filter2)
console.log('=====================================')
const filter3 = filterCafeOrders(cafeOrders, function (client) {
    return client.menu.length >=2 && client.customer.name.length ===2;
})

console.log(filter3)
console.log('=====================================')
const filter4 = filterCafeOrders(cafeOrders, function (client) {
    return client.menu.includes('아메리카노') || client.menu.includes('라떼') && client.customer.point <= 500;
})

console.log(filter4)
console.log('=====================================')

const filter5 = filterCafeOrders(cafeOrders, function (client) {
    return client.paid && client.isTakeout && (client.menu.includes('쿠키') || client.menu.includes('케이크'));
})
console.log(filter5)