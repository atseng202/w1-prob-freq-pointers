// add whatever parameters you deem necessary
/* 
 * function accepts two integers and returns true if the frequency of digits in each one is the same, false otherwise
 * Expected time complexity: O(n + m)
 */
function sameFrequency(digit1, digit2) {
    // convert both digits into strings, build their frequency counters, and check that the counters are the same for each digit
    let digit1Freqs = buildFreqs(digit1);
    let digit2Freqs = buildFreqs(digit2);

    for (let oneDigit of digit1Freqs.keys()) {
        if (!digit2Freqs.has(oneDigit)) return false;

        if (digit1Freqs.get(oneDigit) !== digit2Freqs.get(oneDigit)) return false;
    }

    return true;
}

/* 
    Helper function: build frequencies map for digits
 */
function buildFreqs(digit) {
    let digitStr = digit.toString();
    let frequencies = new Map();
    for (let oneDigit of digitStr) {
        let valCount = frequencies.get(oneDigit) || 0;
        frequencies.set(oneDigit, valCount + 1);
    }
    return frequencies;
}
