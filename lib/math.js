module.exports = {
    //determines if n is prime
    isPrime: function(n){               
        if(parseInt(n) !== n || n <= 1){            
            return false;
        }

        if(n === 2) return true;

        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0) {                
                return false;
            }
        }

        return true;
    },

    //returns the set of all primes less than n
    //98% of all numbers are divisible by the set of primes less that 1000. https://en.wikipedia.org/wiki/Trial_division#Speed
    primeSet: function(n) {
        let primes = { max: 0, values: [] } ;
        for(let i = 2; i <= n; i++)
        {                   
            if(this.isPrime(i))
            {                            
                primes.values.push(i);
                primes.max = i;
            }
        }
        return primes;
    },

    factorize: function(n, primeSet = {}){        
        let factors = [];
        
        if(parseInt(n) !== n){            
            return factors;
        }
        
        let firstNum = 2;
        let primeDivisor = 2;

        //If we have a precomputed set of prime numbers to test use these first
        if(primeSet) {
            primeSet.values.forEach(p => { if(n % p === 0) { 
                console.log("p::" + p);
                factors.push(p);

                primeDivisor = Math.max(primeDivisor, p);
             } })             
             firstNum = primeSet.max + 2;
        }

        for(let i = firstNum; i <= n/primeDivisor; i++){
            if(n % i === 0) {  
                console.log("i::" + i);              
                factors.push(i);
            }            
        }

        return factors;
    }
};