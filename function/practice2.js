/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아
2. bmi지수를 계산하여 반환함과 동시에
3. bmi가 25.0이상이면 "당신은 과체중입니다."
  18.5이하면 "당신은 저체중입니다."
  나머지는 "당신은 정상체중입니다."를 출력하는
  CalcBMI라는 함수를 정의하고 호출하세요.
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m))
# 출력 예시:
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/
/**
 *
 * @param cm - 신장
 * @param kg - 몸무게
 * @returns - 계산된 실수형 BMI 지수
 */


function calcBMI(cm, kg) {
    let Bmi = kg / ((cm / 100) * (cm / 100))
    if (Bmi >= 25) {
        console.log(`당신은 과체중입니다.`)
    } else if (Bmi <= 18.5) {
        console.log(`당신은 저체중입니다.`)
    } else {
        console.log(`당신은 정상체중입니다.`)
    }
    return Bmi;
}
    let user = {
        height: 178.4,
        weight: 78.2
    }

let myBmi = calcBMI(user.height, user.weight);

/*
function round(targetNum, digit) {
    3.7684 -> x 10 => 37.684 => 반올림 38 => /10 => 3.8
    -> 3.8

    3.7684 -> x 100 => 376.84 => 반올림 377 => /10 => 3.77
    -> 3.77

    return Math.round(targetNumber * (10 ** digit)) / (10 ** digit);

}*/

function round(Bmi, roundNum) {
    if (roundNum === 1) {
        Bmi = Math.round(myBmi * 10 ) / 10;
    }
    if (roundNum === 2) {
       Bmi = Math.round(myBmi * 100 ) / 100;
    }
    return Bmi;
}

console.log(
    `키 -> ${user.height}cm, 체중 -> ${user.weight}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`
);


