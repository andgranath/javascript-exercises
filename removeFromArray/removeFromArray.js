const removeFromArray = function(firstArray, n) {

    let i;
    let newArray = [];
    argsArray = Array.from(arguments);
    for (i = 0; i < firstArray.length; i++) {
        if (!argsArray.includes(firstArray[i])) {
            newArray.push(firstArray[i])   
        }

    }
    return newArray;

}

module.exports = removeFromArray
