const studyMembers = [
    {
        name: '재훈',
        role: '프론트엔드',
        skills: ['HTML', 'CSS', 'JavaScript'],
        attendance: [true, true, false, true],
        score: 88,
        leader: false
    },
    {
        name: '수연',
        role: '백엔드',
        skills: ['Java', 'Spring'],
        attendance: [true, true, true, true],
        score: 95,
        leader: true
    },
    {
        name: '기철',
        role: '디자이너',
        skills: ['Photoshop', 'Figma'],
        attendance: [false, false, true, false],
        score: 72,
        leader: false
    },
    {
        name: '다인',
        role: '프론트엔드',
        skills: ['HTML', 'CSS', 'React'],
        attendance: [true, true, true, true],
        score: 91,
        leader: false
    }
];


function filterStudyMembers (array, callback) {
    const filteredList = [];
    for (const Element of studyMembers) {
        if (callback(Element)) {
            filteredList.push(Element)
        }
    }
    return filteredList;
}

const filter1 = filterStudyMembers(studyMembers, function (member) {
    let attendanceCnt = 0;
    for (const memberAttendance of member.attendance) {
        if (memberAttendance === true){
            attendanceCnt++;
        }
    }
    return attendanceCnt/ member.attendance.length >= 3/4;
})
console.log(filter1);
console.log(`====================================`)

const filter2 = filterStudyMembers(studyMembers, function (member) {
    return member.skills.includes('React');
} )
console.log(filter2)
console.log(`====================================`)

const filter3 = filterStudyMembers(studyMembers, function (member) {
    return member.leader === true && member.score >= 90;
} )
console.log(filter3)
console.log(`====================================`)

const filter4 = filterStudyMembers(studyMembers, function (member) {
    return member.role !== '디자이너' && !member.skills.includes('CSS' );
})
console.log(filter4)