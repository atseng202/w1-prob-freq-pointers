"use strict";
// add whatever parameters you deem necessary & write doc comment
/* 
 * accepts a word and a string of letters and returns a Boolean if the word can be constructed from the letters
 * assume all the letters are lowercased, no special characters
 */
function canConstructWord(word, letters) {
    // if word is empty, you can create it from any set of letters, so return true
    if (!word) return true;
    // if given no letters, cannot construct a word
    if (!letters) return false;

    let wordLtrFrequencies = buildFrequencyCounter(word);
    let lettersFrequencies = buildFrequencyCounter(letters);

    console.log("word freqs:", wordLtrFrequencies);
    console.log("letter freqs:", lettersFrequencies);
    // go thru letter of the word, and check that the frequencies in our letters string is >= the frequency of the letter in that word
    for (let key of wordLtrFrequencies.keys()) {
        // check that letterFrequencies even has this key
        if (!lettersFrequencies.has(key)) {
            return false;
        }

        if (lettersFrequencies.get(key) < wordLtrFrequencies.get(key)) {
            return false;
        }
    }

    return true;


}

/* Helper function
 * build a frequency counter for letters of each input string
 */

function buildFrequencyCounter(letters) {
    let frequencies = new Map();

    for (let letter of letters) {
        let valCount = frequencies.get(letter) || 0;
        frequencies.set(letter, valCount + 1);
    }
    return frequencies;
}

