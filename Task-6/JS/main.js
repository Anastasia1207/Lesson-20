console.log('Task 6: prime numbers within a range 1 and 100');
 function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}
var value, result = [];
for (var i = 0; i < 25; i++) {
    value = nextPrime(value);
    result.push(value);
}
console.log("Primes:", result);
