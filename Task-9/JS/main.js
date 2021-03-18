console.log('Task-9 / Greatest Common Divisor for 25 and 15')
  const num1 = 25;
  const num2 = 15;
  const findGCD = (num1, num2) => {
     let a = Math.abs(num1);
     let b = Math.abs(num2);
     while (a && b && a !== b) {
        if(a > b){
           [a, b] = [a - b, b];
        }else{
           [a, b] = [a, b - a];
        };
     };
     return a || b;
  };
  console.log(findGCD(num1, num2));
