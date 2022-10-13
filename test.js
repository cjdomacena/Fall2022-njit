function positionInAlphabet(myChar) {
    const DIFFERENCE_CHARCODE_AND_LETTERS = 96
    // Convert the character into lowercase
    const myCharLowercase = myChar.toLowerCase()
    // Find the position of the char in the alphabet
    const position = myCharLowercase.charCodeAt(0) - DIFFERENCE_CHARCODE_AND_LETTERS
    return position;
}


console.log(positionInAlphabet("cjdomacena@yahoo.com"))