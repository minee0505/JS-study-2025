const frontendApplicants = [
    {
        name: '민지',
        experience: 2,
        portfolio: 'https://mjdev.com',
        remote: true,
        region: '서울',
        contact: 'mj@gmail.com',
        languages: ['HTML', 'CSS', 'JavaScript', 'React'],
        blog: 'https://blog.mjdev.com',
        github: 'https://github.com/mjdev',
    },
    {
        name: '석현',
        experience: 1,
        portfolio: '',
        remote: false,
        region: '부산',
        contact: 'sh@naver.com',
        languages: ['HTML', 'CSS'],
        blog: '',
        github: '',
    },
    {
        name: '주연',
        experience: 3,
        portfolio: 'https://jyui.net',
        remote: true,
        region: '대구',
        contact: 'jy@daum.net',
        languages: ['HTML', 'CSS', 'JavaScript'],
        blog: '',
        github: 'https://github.com/jyui',
    },
];

const backendApplicants = [
    {
        name: '기훈',
        experience: 4,
        techStack: ['Node.js', 'MySQL'],
        remote: false,
        region: '서울',
        contact: 'gh@kakao.com',
        github: 'https://github.com/ghdev',
        certificate: ['정보처리기사'],
        degree: '컴퓨터공학',
    },
    {
        name: '윤서',
        experience: 2,
        techStack: ['Java', 'Spring'],
        remote: true,
        region: '광주',
        contact: 'ys@gmail.com',
        github: '',
        certificate: [],
        degree: '소프트웨어학',
    },
    {
        name: '채린',
        experience: 5,
        techStack: ['Node.js', 'MongoDB'],
        remote: false,
        region: '인천',
        contact: 'cr@naver.com',
        github: 'https://github.com/crnode',
        certificate: ['SQLD'],
        degree: '정보보호학',
    },
];

const designApplicants = [
    {
        name: '도영',
        uxProjectCount: 3,
        hasResponsive: true,
        region: '서울',
        portfolio: 'https://dyfolio.com',
        tools: ['Figma', 'Photoshop'],
        education: '시각디자인 전공',
    },
    {
        name: '소은',
        uxProjectCount: 1,
        hasResponsive: false,
        region: '대전',
        portfolio: '',
        tools: ['Illustrator'],
        education: '멀티미디어학과',
    },
    {
        name: '해진',
        uxProjectCount: 2,
        hasResponsive: true,
        region: '부산',
        portfolio: 'https://hjux.net',
        tools: ['Figma'],
        education: 'UX디자인 석사',
    },
];

const allApplicants = [...frontendApplicants, ...backendApplicants, ...designApplicants];

function filterByApplicant(array, callback) {
    const filteredArray = [];
    for (const element of array) {
        if (callback(element)){
            filteredArray.push(element)
        }
    }
    return filteredArray;
}
// 1️⃣ 포트폴리오를 등록하지 않은 프론트엔드 지원자
const filter1 = filterByApplicant(frontendApplicants, applicant => !applicant.portfolio);
console.log(filter1)
console.log('===================================');
// 2️⃣ 원격 근무를 원하지 않는 백엔드 중 Node.js 가능한 사람

const filter2 = filterByApplicant(backendApplicants, applicant => !applicant.remote && applicant.techStack.includes('Node.js'));
console.log(filter2)
console.log('===================================');
// 3️⃣ UX 프로젝트가 2건 이상이며 반응형 경험 있는 디자이너
const filter3 = filterByApplicant(designApplicants, applicant => applicant.uxProjectCount >= 2 && applicant.hasResponsive);
console.log(filter3)
console.log('===================================');
// 4️⃣ GitHub 주소가 존재하고 경력 3년 이상인 모든 지원자
const filter4 = filterByApplicant(allApplicants, applicant => applicant.github && applicant.experience >= 3);
console.log(filter4)
console.log('===================================');
// 5️⃣ 백엔드 또는 프론트 중 원격 근무가 가능한 사람

let filter5 = [];
filter5 = filter5.concat(filterByApplicant(frontendApplicants, applicant => applicant.remote))
filter5 = filter5.concat(filterByApplicant(backendApplicants, applicant => applicant.remote))
console.log(filter5)
console.log('===================================');
// 6️⃣ 디자인팀 중 반응형 경험이 없는 사람

const filter6 = filterByApplicant(designApplicants, applicant => !applicant.hasResponsive);
console.log(filter6)
console.log('===================================');