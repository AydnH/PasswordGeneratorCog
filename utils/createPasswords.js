const letters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
const specials = '!@#$%^&*_-+=';
const nums = '0123456789';

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const createDummyString = (length, syms, non) => {
    const rndInt = randomInteger(0, 10);
    console.log(rndInt);
    const lettersLength = +length + +rndInt;
    console.log(lettersLength);
    let characters = '';
    // get random symbols based on number requested
    for( let i = 0; i < syms; i++) {
        characters += specials.charAt(Math.floor(Math.random() * specials.length));
    }
    // get random numbers based on number requested
    for( let i = 0; i < non; i++) {
        characters += nums.charAt(Math.floor(Math.random() * nums.length));
    }
    // get letters based on total left after numbers and symbols subtracted
    for( let i = 0; i < lettersLength; i++) {
        characters += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return characters
}

const createPasswords = (length, syms, non) => {
    let chars = createDummyString(length, syms, non);
    return generatePassword(length, chars); 
}
// using fisher-yates shuffle to randomize password sequence
const generatePassword = ( length, chars) => {
    let chosenCharacters = chars;
    let shuffle = [...chosenCharacters];
    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
    shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );
    shuffle = shuffle.join('');
    let password = shuffle;
    return password;
}
module.exports = createPasswords;