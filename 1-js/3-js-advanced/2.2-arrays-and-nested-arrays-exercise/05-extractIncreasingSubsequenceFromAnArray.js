const result = (arr) => arr.reduce((acc, c) => {

    if (c >= acc[acc.length - 1] || !acc.length) {

        acc.push(c);
        
    }
    
    return acc;

}, []);