Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It recognizes vowels in a word regardless of capitalization."
Code: pigLatin("A");
Expected Output: "Away"



Test: "It will move first consecutive consonants to the end of the word which start with a consonant."
Code: pigLatin("cat");
Expected Output: "atc"

Test:" It will add "ay" to the end of converted word"
Code: pigLatin("cat");
Expected Output: "atcay"

