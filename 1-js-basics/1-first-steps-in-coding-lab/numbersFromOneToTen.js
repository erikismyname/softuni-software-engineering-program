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
