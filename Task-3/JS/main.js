console.log('Task 3: find n numbers of 7 and their sum');

for(let i = 1; i < 8; i++) {
    console.log(i);
}
const num = 7;
let numSum = 0;
for(let i = 0; i <= num; i++) {
    numSum += i;
}
console.log(`The sum of the natural numbers up to ${num} is`, numSum);
