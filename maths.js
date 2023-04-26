// function primeNum(num) {
//   // for (let i = 0; i < num )
//   if (num === 1 || num % 2 === 0) {
//     num === false;
//   } else {
//     num === true;
//   }
// }

function prime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++)
    if (i % 2 === 0 && i % 3 === 0) {
      console.log(i);
      let n = i;
    }
}
console.log("hello");
prime(30);
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//     console.log(i);
//   }
//   return true;
// }

// console.log(primeNum(3));
// console.log("hello");

// if (number === 1) {return false}
