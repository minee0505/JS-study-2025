// 1부터 45 사이의 숫자 중에서 6개를 랜덤으로 뽑아서 출력 (중복 허용)

let lottoList = '';

for (let i = 0; i < 6 ; i++) {
   lottoList += `${Math.floor(Math.random() * 45 + 1)} `;
}
alert(`${lottoList}`)
