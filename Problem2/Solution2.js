/*
Recovery Key: 576451-2JY2RH7Aq5xiHSKHm22X6VyLXcAEICNZirOOn1YJ
   Generated: Tue, 27 Dec 2016, 11:54.18
   */

//return the list of the first n Fibonacci numbers
let Fibonaci = function(n, max=-1) {
    
    let a = 0, b = 1, f = 1;

    let fibnumbers = [];
    for(let i = 1; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;

        if(max > 0 && f > max){
            return fibnumbers;
        }

        fibnumbers.push(f);

        
    }
    return fibnumbers;
};



console.log("Project Euler: Problem 2.\n\nEach new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:\n\n1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...\n\nBy considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.\n");

const fibonacciThreshold = 4e6;
console.log(Fibonaci(50, fibonacciThreshold).filter(value => value % 2 === 0).reduce((a,b) => a + b));


