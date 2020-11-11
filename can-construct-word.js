// add whatever parameters you deem necessary & write doc comment
/* 
 * accepts a word and a string of letters and returns a Boolean if the word can be constructed from the letters
 * all the letters are lowercased, no special characters
 */
function canConstructWord(word, letters) {
    // if letters are empty and word is empty then thats valid right?
    if (!word) return true;
    // if given no letters, cannot construct a word
    if (!letters) return false;

    let wordFrequencies = buildFrequencyCounter(word);
    let lettersFrequencies = buildFrequencyCounter(letters);

    console.log("word freqs:", wordFrequencies);
    console.log("letter freqs:", lettersFrequencies);
    // goal: go thru letter of the word, and check that the frequencies in our letters string is >=  the frequency of the letter in that word
    for (let key of  wordFrequencies.keys()) {
        // check that letterFrequencies even has this key
        if (!lettersFrequencies.has(key)) { 
            return false;
        }

        if (lettersFrequencies.get(key) < wordFrequencies.get(key)) {
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

