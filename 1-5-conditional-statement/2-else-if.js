let age = 12;

// if를 생성하면 if 그룹이 생긴다고 생각해야 함 else는 마지막 if 합쳐서
// 조건을 생각할 때 그룹별로 적용함.
// 위에서부터 순서대로 코드 읽기 때문에 조건 순서에 맞게 제대로 짜야 함.
if (age>=20) {
    console.log(`성인입니다.`);
} else if (age>=12) {
    console.log(`고등학생입니다.`);
} else if (age>=14) {
    console.log(`중학생입니다.`);
} else if (age>=8) {
    console.log(`초등학생입니다.`);
} else {
    console.log(`미취학 아동입니다.`);
}