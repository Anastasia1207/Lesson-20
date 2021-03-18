console.log('Task-10 / The sum of digits of a given number 1234')

const m = 1234;
const k = 4;
const digitSumUpto = (m, k) => {
   if(k > String(m).length){
      return 0;
   };
   let sum = 0;
   for(let i = 0; i < k; i++){
      const el = +String(m)[i];
      sum += el;
   };
   return sum;
};
console.log(digitSumUpto(m, k));