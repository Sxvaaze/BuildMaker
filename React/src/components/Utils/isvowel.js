const checkIfIsVowel = (word) => {
    let isVowel = false;
    if (word.length > 0) {
        let vowels = 'aeiou';
        let c = word[0];
        for (var i = 0; i < vowels.length && !isVowel; i++) {
            if (c === vowels[i]) {
                isVowel = true;
            }
        }
    }
    return isVowel;
}

export default checkIfIsVowel