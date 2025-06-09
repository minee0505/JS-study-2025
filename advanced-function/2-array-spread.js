// 스프레드: 배열을 평탄화(해체해서 늘어놓는다) 시킨다.

const foods = ['햄버거', '콜라', '감자튀김'];
const fruits = ['오렌지', '레몬', '라임'];

// combination [ '햄버거', '콜라', '감자튀김', '오렌지', '레몬', '라임' ]
// const combination = foods.concat(fruits);
// ...을 빼면 2차원 배열임, length 2임
const combination = [...foods, ...fruits];

console.log(combination);

// 배열 복사 (원본은 그대로)
const newFruits = [...fruits];

const myFavorites = ['족발', ...foods];
console.log(myFavorites);

// push : 원본 손상 (버전 관리가 힘들다.)

const newFoods = [...foods, '치즈스틱'];
console.log(newFoods);
console.log(foods);