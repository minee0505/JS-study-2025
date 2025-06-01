

//돈이 3000원 이상이면 김밥을 먹을 수 있고 미만이면 집밥을 먹어야 한다.
//그런데 먹을 수 있는 음식이름을 변수에 조건부로 저장해야 한다.

let money = 4000;

// 3항 조건 연산자 ==> 변수에 조건부로 저장해야 할 때 사용하는 게 좋음, 단순 출력할 때는 if문이 더 나음, 분기가 여러개 일때도 비추천
let foodName = (money >= 3000) ? '김밥' : '집밥';
/*let foodName; // 음식이름을 저장할 변수
if (money >= 3000) {
  foodName = '김밥';
} else {
  foodName = '집밥';
}*/
console.log(`먹을 수 있는 음식: ${foodName}`);

console.log('==========================');

let age = 15;
let state;
if (age >= 20) {
  state = '성인';
} else if (age >= 8) {
  state = '학생';
} else {
  state = '아동';
}


console.log('==========================');

let season = '여름';
// ===어차피 논리식이니까 굳이 삼항 연산자로 만들필요 없음
let isHot = (season === '여름')? true : false; // 현재 더운 계절인지 여부

