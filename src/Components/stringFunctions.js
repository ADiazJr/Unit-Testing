
function capitalizeFirstLetter(string) {
    let capitalizedLetter = string.charAt(0).toUpperCase()
    let remainder = string.slice(1)
    string = capitalizedLetter + remainder
    return string

}

function concatenateString(firstString, secondString) {
    return firstString + ' ' +  secondString

}

function returnSecondWord(string) {
    let wordArray = string.split(' ')
    return wordArray[1]
}

export {
    capitalizeFirstLetter,
    concatenateString,
    returnSecondWord,
}