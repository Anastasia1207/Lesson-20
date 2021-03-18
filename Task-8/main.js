console.log('Task-8 / find the last prime number occur before the entered number.')

function isPrime(num) {
    for (let i = 2; i < num; i++) {
       if (num % i === 0) {
           // Prime number can't be devided on any other number except 1 and itself
           return false;
       }
    }
   
    // Prime number can't be less than 1
    return num > 1;
   }
   
   function findPreviousPrimeNumber(num) {
    for (let i = num - 1; i >= 2; i--) {
       if (isPrime(i)) {
           return i;
       }
    }
    
    console.log(`There is no previous prime number for ${num}`);
   }
   console.log(findPreviousPrimeNumber(50));