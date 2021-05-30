function solve(arr) {

    let sumPrime = 0;

    let sumNonPrime = 0;

    let result = [];

    let isPrime = true;

    for (let a = 0; a < arr.length; a++) {

        let current = arr[a];

        if (current == 'stop') {

            break;

        } else {

            current = Number(current);

            if (current < 0) {

                result.push('Number is negative.');

            } else {

                for (let b = 2; b < current; b++) {

                    if (current % b == 0) {

                        isPrime = false;

                        break;
                        
                    }
                    
                }
                
                isPrime ? sumPrime += current : sumNonPrime += current;

            }

            isPrime = true;

        }

    }

    return result.length ? `${result.join('\n')}\nSum of all prime numbers is: ${sumPrime}\nSum of all non prime numbers is: ${sumNonPrime}` : `Sum of all prime numbers is: ${sumPrime}\nSum of all non prime numbers is: ${sumNonPrime}`; 

}

console.log(solve(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
)
;