// 1️⃣ frontendTeam
const frontendTeam = [
    {
        name: '지훈',
        experience: 3,
        remote: true,
        tech: ['HTML', 'CSS', 'React'],
        region: '서울',
        github: 'https://github.com/jhdev',
        portfolio: 'https://jhdev.com',
        blog: '',
    },
    {
        name: '슬기',
        experience: 1,
        remote: false,
        tech: ['HTML', 'CSS'],
        region: '부산',
        github: '',
        portfolio: '',
        blog: '',
    },
    {
        name: '민지',
        experience: 5,
        remote: true,
        tech: ['HTML', 'CSS', 'Vue'],
        region: '서울',
        github: 'https://github.com/mjvue',
        portfolio: 'https://mjvue.com',
        blog: 'https://blog.mj.com',
    },
];

// 2️⃣ backendTeam
const backendTeam = [
    {
        name: '도윤',
        experience: 2,
        remote: true,
        tech: ['Node.js', 'MongoDB'],
        region: '경기',
        github: 'https://github.com/doyun',
        certificate: ['정보처리기사'],
    },
    {
        name: '하늘',
        experience: 4,
        remote: false,
        tech: ['Java', 'Spring'],
        region: '대전',
        github: '',
        certificate: [],
    },
    {
        name: '서연',
        experience: 6,
        remote: true,
        tech: ['Python', 'Django'],
        region: '서울',
        github: 'https://github.com/seoyeon',
        certificate: ['SQLD', 'ADsP'],
    },
];

// 3️⃣ designTeam
const designTeam = [
    {
        name: '예린',
        uxCount: 2,
        hasResponsive: true,
        favoriteTools: ['Figma', 'Photoshop'],
        portfolio: 'https://yerinux.com',
        region: '서울',
    },
    {
        name: '하린',
        uxCount: 1,
        hasResponsive: false,
        favoriteTools: ['Illustrator'],
        portfolio: '',
        region: '부산',
    },
    {
        name: '주하',
        uxCount: 3,
        hasResponsive: true,
        favoriteTools: ['Figma', 'XD'],
        portfolio: 'https://jooxa.com',
        region: '대전',
    },
];

// 필터 함수 선언
function filterByApplicants(array, callback) {
    const filteredArray = [];
    for (const element of array) {
        if (callback(element)) {
            filteredArray.push(element)
        }
    }
    return filteredArray;
}

// 매핑 함수 선언
function mapByApplicants (array, callback) {
    const mappedList = [];
    for (const element of array) {
        const item = callback(element)
        mappedList.push(item)
    }
    return mappedList;
}

// 1️⃣ 포트폴리오와 GitHub가 모두 있는 프론트엔드만 걸러서 "이름 - 포트폴리오 주소"로 추출하자.
// 필터함수 호출
const filter1 = filterByApplicants(frontendTeam, applicant => applicant.portfolio && applicant.github);
// 매핑함수 호출
const map1 = mapByApplicants(filter1, applicant => `${applicant.name} - ${applicant.portfolio}`);
console.log(map1)
console.log('=======================================================================')

// 2️⃣ 원격 근무가 가능한 백엔드 중 기술스택이 2개 이상인 사람만 골라서 "이름 (기술스택 수)" 형태로 가공하자.
// 필터함수 호출
const filter2 = filterByApplicants(backendTeam, applicant => applicant.tech.length >= 2);
// 매핑함수 호출
const map2 = mapByApplicants(filter2, applicant => `${applicant.name} (${applicant.tech.length})`);
console.log(map2)
console.log('=======================================================================')

// 3️⃣ UX 프로젝트가 2건 이상이고 반응형 경험도 있는 디자이너들만 "이름: 사용 툴 수"로 가공하자.
// 필터함수 호출
const filter3 = filterByApplicants(designTeam, applicant => applicant.uxCount >= 2 && applicant.hasResponsive);
// 매핑함수 호출
const map3 = mapByApplicants(filter3, applicant => `${applicant.name} : ${applicant.favoriteTools.length}` );
console.log(map3)
console.log('=======================================================================')

// 4️⃣ 블로그 주소가 있는 프론트엔드 중 서울 지역 사람만 "이름 - 블로그 마지막 경로" (e.g., mj만 추출)로 바꾸자.
// 필터함수 호출
const filter4 = filterByApplicants(frontendTeam, applicant => applicant.blog && applicant.region.includes('서울'));
// 매핑함수 호출
// const url = "https://github.com/seoyeon";
// const username = url.split("/").pop();
// console.log(username); // "seoyeon"
const map4 = mapByApplicants(filter4, applicant => applicant.blog.split('.')[1])
console.log(map4)
console.log('=======================================================================')
// 5️⃣ 자격증이 하나 이상 있는 백엔드만 이름 앞에 '[CERT]' 붙여서 출력
// 필터함수 호출
const filter5 = filterByApplicants(backendTeam, applicant => applicant.certificate.length >= 1);
// 매핑함수 호출
const map5 = mapByApplicants(filter5, applicant => `[CERT]${applicant.name}`);
console.log(map5)
console.log('=======================================================================')

// 6️⃣ 디자인팀에서 포트폴리오가 있는 사람들 중 "이름 - 도구목록(,로 연결된 문자열)"로 출력하자.
// 필터함수 호출
const filter6 = filterByApplicants(designTeam, applicant => applicant.portfolio);
// 매핑함수 호출 favoriteTools: ['Figma', 'XD'],
const map6 = mapByApplicants(filter6, applicant => `${applicant.name} - ${applicant.favoriteTools}`);
console.log(map6)
console.log('=======================================================================')

// 7️⃣ 원격근무가 가능한 프론트 + 백엔드 통합 리스트에서 "이름 - 원격(O)" 문자열로 통일해서 출력하자.
// 프론트엔드 + 백엔드 통합리스트
const backPlusFrontTeam = [...frontendTeam,...backendTeam];
// 필터함수 호출
const filter7 = filterByApplicants(backPlusFrontTeam, applicant => applicant.remote);
// 매핑함수 호출
const map7 = mapByApplicants(filter7, applicant => `${applicant.name} - 원격(o)`);
console.log(map7)
console.log('=======================================================================')

// 8️⃣ 기술스택 중 React나 Vue가 포함된 프론트엔드만 "이름 - 사용 기술"로 추출하자.
// 필터함수 호출
const filter8 = filterByApplicants(frontendTeam, applicant => applicant.tech.includes('React') || applicant.tech.includes('Vue'));
// 매핑함수 호출
const map8 = mapByApplicants(filter8, applicant => `${applicant.name} - ${applicant.tech}`);
console.log(map8)
console.log('=======================================================================')

// 9️⃣ 백엔드 팀 중 GitHub 주소가 있는 사람의 "이름 - 깃허브 마지막 유저ID"만 추출하자. (e.g., https://github.com/seoyeon → seoyeon)
// 필터함수 호출
const filter9 = filterByApplicants(backendTeam, applicant => applicant.github);
// 매핑함수 호출
const map9 = mapByApplicants(filter9, applicant => applicant.github.split('/').pop());
console.log(map9)
console.log('=======================================================================')

// 🔟 디자인팀에서 사용 툴에 Figma가 포함된 사람만 "이름: 메인 툴 - Figma" 형태로 출력하자.
// 필터함수 호출
const filter10 = filterByApplicants(designTeam, applicant => applicant.favoriteTools.includes('Figma'));
// 매핑함수 호출
const map10 = mapByApplicants(filter10, applicant => `${applicant.name} : 메인툴 - Figma`);
console.log(map10)
console.log('=======================================================================')

// 1️⃣1️⃣ 프론트 중 경력이 3년 이상이고 포트폴리오가 있는 사람의 "이름 (포트폴리오 도메인)"만 추출하자. (e.g., https://jhdev.com → jhdev.com)
// 필터함수 호출
const filter11 = filterByApplicants(frontendTeam, applicant => applicant.experience >= 3 && applicant.portfolio);
// 매핑함수 호출
const map11 = mapByApplicants(filter11, applicant => `${applicant.name} - ${applicant.portfolio.split('//').pop()}`);
console.log(map11)
console.log('=======================================================================')

// 1️⃣2️⃣ 기술스택이 2개 이상인 모든 팀(프론트+백+디자인)에 대해 "이름: 기술 개수" 문자열 출력하자.
// 모든 팀 배열 생성
const allTeamList = [...backendTeam, ...frontendTeam, ...designTeam];
// 필터함수 호출
const filter12 = filterByApplicants(allTeamList, applicant => applicant.tech?.length >= 2 || applicant.favoriteTools?.length >= 2);
// 매핑함수 호출
const map12 = mapByApplicants(filter12, function (applicant) {
    const techCnt = applicant.tech?.length ?? applicant.favoriteTools?.length;
    return `${applicant.name} : ${techCnt}`;
});
console.log(map12)
console.log('=======================================================================')