
const person = {
    name: '홍길동',
    age: 30
};

// const copyPerson = person;은 제대로 된 복사가 아님, 값을 수정하면 둘다 바뀌기 때문

const copyPerson = { ...person };

person.age = 40;
person.occupation = '개발자';

console.log('person: ', person);
console.log('copyPerson: ', copyPerson);

console.log('===================');

const newPerson = {
    ...person,// 기존의 펄슨을 복제해놓고
    hobbies: ['산책', '풋살'],
    age: 20
};
console.log(newPerson);