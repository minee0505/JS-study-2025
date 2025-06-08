const petList = [
    {
        name: '나비',
        type: '고양이',
        age: 2,
        weight: 4.1,
        owner: {
            name: '지훈',
            phone: '010-1234-5678',
        },
        favorite: ['낮잠', '해바라기씨', '방충망 찢기'],
    },
    {
        name: '초코',
        type: '강아지',
        age: 5,
        weight: 8.2,
        owner: {
            name: '윤하',
            phone: '010-9876-4321',
        },
        favorite: ['산책', '간식'],
    },
    {
        name: '망고',
        type: '앵무새',
        age: 1,
        weight: 0.4,
        owner: {
            name: '슬기',
            phone: '010-2222-3333',
        },
        favorite: ['노래 부르기', '거울 보기'],
    },
    {
        name: '피카츄',
        type: '햄스터',
        age: 3,
        weight: 0.15,
        owner: {
            name: '민준',
            phone: '010-8888-9999',
        },
        favorite: ['회전바퀴', '해바라기씨'],
    },
];

function mapByPets (array, callback) {
    const mappedList = [];
    for (const pet of petList) {
        const item = callback(pet)
        mappedList.push(item)
    }
    return mappedList;
}
// 1️⃣ 동물 이름과 나이를 "나비(2살)" 형식의 문자열로 변환하자
const map1 = mapByPets(petList, pet => `${pet.name}(${pet.age})`);
console.log(map1)
console.log('================================')

// 2️⃣ 모든 동물의 주인 이름만 배열로 추출하자
const map2 = mapByPets(petList, pet => pet.owner.name);
console.log(map2)
console.log('================================')
// 3️⃣ 동물의 이름과 몸무게를 "초코 - 8.2kg"처럼 출력해보자

const map3 = mapByPets(petList, pet => `${pet.name} - ${pet.weight}kg`);
console.log(map3)
console.log('================================')
// 4️⃣ 각 동물의 이름과 주인 전화번호 마지막 4자리만 "망고 - 3333"으로 구성하자

const pet4 = mapByPets(petList, pet => `${pet.name} - ${pet.owner.phone.slice(-4)}`);
console.log(pet4)
console.log('================================')

// 5️⃣ 모든 동물의 "이름: 좋아하는 행동 수"를 "피카츄: 2개" 형식으로 바꾸자
const pet5 = mapByPets(petList, pet => `${pet.name} : ${pet.favorite.length}개`);
console.log(pet5)
