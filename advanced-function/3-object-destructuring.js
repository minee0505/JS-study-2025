// 객체는 순서 상관 없음
const student = {
    stuName: '뽀로로',
    age: 5,
    birthDay: '2020-01-01',
};

// 기존 방식
console.log(`학생의 이름은 ${student.stuName}이고, 나이는 ${student.age}살이고, 생일은 ${student.birthDay}입니다.`);

// student. 때고 싶을 때 기존 방식, 변수로 추출
/*const name = student.stuName;
const age = student.age;
const birth = student.birthDay;*/

const stuName = '김철수';

// 배열처럼 오른쪽에 객체, 왼쪽에는 중괄호 안에 프로퍼티 나열(객체 안에 있던 프로퍼티 그대로 작성해야 함),
// 내가 원래 사용하던 변수랑 중복될 수 있음, 프로퍼티 이름 바꾸고 싶으면 : 이용
const {stuName: name, age, birthDay} = student;
console.log(`학생의 이름은 ${name}이고, 나이는 ${age}살이고, 생일은 ${birthDay}입니다.`);

console.log('===================');

const divStyle = {
    'font-size': '16px',
    'border-radius': '50%'
};
// console.log(divStyle['font-size']); //- 사용하면 대괄호 사용해서 참조해야 함

// 이런 애들은 ' 이거 빼는 순간 에러남, 별칭을 이용하면 됨
const { 'font-size':fontSize, 'border-radius':radius } = divStyle;
console.log(fontSize);
console.log(radius);

console.log('===================');

/*function myPetInfo (mypet) {
    console.log(`우리 애완동물의 이름은 ${mypet.name}입니다.`);
    console.log(`우리 애완동물의 나이는 ${mypet.age}살입니다.`);
}

// 초코는 변수에 저장을 안해놨기 때문에 재사용 불가, 프로퍼티 추가 불가
myPetInfo({
    name: '초코',
    age: 3
});

const cat = {
    name: '나비',
    age: 7,
};

// 나비는 변수에 저장을 해놨기 때문에 재사용 가능
myPetInfo(cat);

// cat에 추가적으로 프로퍼티 넣기 가능
cat.injection = false;*/


const myPetInfo = ({name, age}) => {

    // const { name, age } = myPet; , 디스트럭쳐링을 파라미터에서 객체로 받자마자 바로 진행 가능

    console.log(`우리 애완동물의 이름은 ${name}입니다.`);
    console.log(`우리 애완동물의 나이는 ${age}살입니다.`);
};

myPetInfo({
    name: '초코',
    age: 3
});

const cat = {
    name: '나비',
    age: 7,
    kind: '러시안블루',
    injection: true
};

// 카인드랑 인젝션은 따로 변수에 뽑고 싶은데, 네임이랑 에이지는 다시 묶어 놓고 싶어

const {kind, injection, ...basicInfo} = cat;

console.log(basicInfo);



