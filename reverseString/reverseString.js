const reverseString = function(string) {
    let stringArray = string.split("");
    let reverseArray = stringArray.reverse()
    let newString = "";

    for (let i = 0;  i < reverseArray.length; i++) {
        newString += reverseArray[i];
    }
    return newString
}

module.exports = reverseString
