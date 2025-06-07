const reservationList = [
    {
        petName: '콩이',
        species: '강아지',
        weight: 4.2,
        vaccinated: true,
        owner: {
            name: '김민지',
            phone: '010-1234-5678'
        }
    },
    {
        petName: '하늘',
        species: '고양이',
        weight: 5.7,
        vaccinated: false,
        owner: {
            name: '박철수',
            phone: '010-2345-6789'
        }
    },
    {
        petName: '초코',
        species: '강아지',
        weight: 2.9,
        vaccinated: true,
        owner: {
            name: '이하늘',
            phone: '010-3456-7890'
        }
    },
    {
        petName: '비비',
        species: '고양이',
        weight: 6.3,
        vaccinated: false,
        owner: {
            name: '최예나',
            phone: '010-4567-8901'
        }
    }
];

function filterPetHospital (array, callback) {
    const filteredArray = [];
    for (const element of reservationList) {
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

const filter1 = filterPetHospital(reservationList, pet => pet.weight >= 5 && !pet.vaccinated)

console.log(filter1)

console.log('=========================================')

const filter2 = filterPetHospital(reservationList, pet => pet.owner.name.includes('하늘') && pet.species === '고양이')
console.log(filter2)

console.log('=========================================')
const filter3 = filterPetHospital(reservationList, pet => pet.species === '강아지' && pet.petName.length === 2)
console.log(filter3)

console.log('=========================================')
const filter4 = filterPetHospital(reservationList, function (pet) {
    let lastPhoneNum = '';
    for (let i = 9; i <pet.owner.phone.length ; i++) {
        lastPhoneNum += pet.owner.phone[i];
    }
    return lastPhoneNum === '8901';
})
console.log(filter4)

console.log('=========================================')
const filter5 = filterPetHospital(reservationList, pet => pet.vaccinated && pet.weight <= 3)
console.log(filter5)