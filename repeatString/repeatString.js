const repeatString = function(string, int) {
    let i = 1;
    let newString = ""
    if (int < 0) {
        return "ERROR"
    }

    else {
    while (i<= int) {
    
        newString += string
        i++;
    }
    return newString
    }
}

module.exports = repeatString
