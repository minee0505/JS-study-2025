const employees = [
    {
        name: '윤하',
        department: '개발',
        level: '시니어',
        yearsAtCompany: 5,
        skills: ['JavaScript', 'React', 'Node.js'],
        isRemote: true,
    },
    {
        name: '민준',
        department: '디자인',
        level: '주니어',
        yearsAtCompany: 1,
        skills: ['Figma', 'Photoshop'],
        isRemote: false,
    },
    {
        name: '지훈',
        department: '개발',
        level: '주니어',
        yearsAtCompany: 2,
        skills: ['JavaScript', 'Vue', 'CSS'],
        isRemote: false,
    },
    {
        name: '서연',
        department: '마케팅',
        level: '시니어',
        yearsAtCompany: 7,
        skills: ['SEO', 'Google Ads'],
        isRemote: true,
    },
    {
        name: '하준',
        department: '개발',
        level: '시니어',
        yearsAtCompany: 10,
        skills: ['Java', 'Spring', 'AWS'],
        isRemote: false,
    },
];

function filterByEmployee (array, callback) {
    const filteredList = [];
    for (const element of employees) {
        if (callback(element)) {
            filteredList.push(element);
        }
    }
    return filteredList;
}

const filter1 = filterByEmployee(employees, function (employee) {
    return employee.department === '개발' && !employee.isRemote && employee.yearsAtCompany >= 5;
})
console.log(filter1)
console.log('====================================')
const filter2 = filterByEmployee(employees, function (employee) {
    return (employee.skills.includes('JavaScript') && !employee.skills.includes('React')) && employee.level === '주니어'
})

console.log(filter2)
console.log('====================================')
const filter3 = filterByEmployee(employees, function (employee) {
    return employee.department === '디자인' && !employee.skills.includes('Photoshop');
})

console.log(filter3)
console.log('====================================')
const filter4 = filterByEmployee(employees, function (employee) {
    return employee.isRemote && employee.department !== '개발'
})

console.log(filter4)
console.log('====================================')

const filter5 = filterByEmployee(employees, function (employee) {
    return !employee.isRemote && (employee.skills.includes('AWS') || employee.yearsAtCompany >= 10);
})
console.log(filter5)
