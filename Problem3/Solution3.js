/*
Recovery Key: 576451-2JY2RH7Aq5xiHSKHm22X6VyLXcAEICNZirOOn1YJ
   Generated: Tue, 27 Dec 2016, 11:54.18
   */

let eulermath = require('../lib/math');

console.log("Project Euler: Problem 3.\n\nThe prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143 ?\n");

//let firstThousandPrimes = eulermath.primeSet(1000);
let firstTenThousandPrimes = eulermath.primeSet(10e3);

//const numberToPrimeFactorize = 10;
//const numberToPrimeFactorize = 13195;
const numberToPrimeFactorize = 600851475143;

let primeSet = eulermath.primeSet(Math.sqrt(numberToPrimeFactorize));

console.log(eulermath.factorize(numberToPrimeFactorize, primeSet).filter(n => eulermath.isPrime(n) ));

