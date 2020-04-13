const sumAll = function(n, int) {

    let newValue = 0;
    let minVal = Math.min(n, int);
    let maxVal = Math.max(n, int);

    if (n < 0 || int < 0) {
        return "ERROR"
    }
    
    else if (typeof(n) != "number" || typeof(int) != "number") {
        return "ERROR"
    }
    else {

        while (minVal <= maxVal) {
            newValue += minVal;
            minVal++;
            
    }
    return newValue
}
    
}
module.exports = sumAll
