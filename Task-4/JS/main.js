console.log('Task 4: find perfect numbers between 1 and 500');

const nummm = 8;
const checkPerfectNumber = (nummm = 1) => {
   if (nummm === 1) { 
      return false;
   };
   let sum = 1;
   for (let i = 2; i <= Math.floor(Math.sqrt(nummm)); i++) {
      if (nummm % i === 0) {
         sum = sum + i + nummm / i; if(sum > nummm) {
            return false;
         }
      };
   };
   return sum === nummm;
};

console.log(checkPerfectNumber(nummm));
