'use strict';

/*
Recovery Key: 576451-2JY2RH7Aq5xiHSKHm22X6VyLXcAEICNZirOOn1YJ
   Generated: Tue, 27 Dec 2016, 11:54.18
   */

function getNumbers(lowerBound, upperBound) {
    let numbers = [];
    for (let i = lowerBound; i < upperBound; i++) {
        numbers.push(i);
    }

    return numbers;
}

function divisibleBy(...divisors)
{
    return function(value)
    {
        return divisors.some((element) => value % element === 0);
    };
}

let divisibleBy3or5 = divisibleBy(3, 5);


let problemDescription = 'Project Euler: Problem 1.\n\nIf we list all the natural numbers below 10 that are multiples of 3 or 5 we get 3, 5, 6 and 9.';
problemDescription += '\nThe sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.\n';

console.log(problemDescription);

let originalList = getNumbers(1, 1000);

let filteredList = originalList.filter(divisibleBy3or5).reduce((a, b) => a + b );

console.log(filteredList);

