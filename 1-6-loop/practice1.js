let list = ''
for (let i = 2; i <=10 ; i=i+2) {
  // list += i + ' ';
  list += `${i} `
}
console.log(list);

console.log('==========================');
let level = 6;
for (let i = 1; i * level <= 50; i++) {
  if (i % 6 === 0) {
    console.log(`${i}`);
  }
}
console.log('==========================');
let num1 = 7;
for (let i = 1; i * num1 <= 100; i+=2 ) {
  console.log(`${i * num1}`);
}


console.log('==========================');
let count = 0;
for (let i = 1; i < 7777; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log('==========================');


for (let i = 0; i < 5 ; i++) {
  console.log(`hello`);
}
