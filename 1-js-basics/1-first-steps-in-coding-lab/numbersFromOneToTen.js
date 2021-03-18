// This solution is not mine. It was created by my fellow software developer doychinivanov and its purpose is to serve as an improvement of my initial solution.

function getNumbersInRange(n, m){
    
    const result = [];
    
    return setNumbers(n, m).join('\n');

    function setNumbers(n, m) {
        
        if (n <= m) {
            
          result.push(n);
            
          n++;
            
          setNumbers(n, m);
            
        }

        return result;
        
    }

}
