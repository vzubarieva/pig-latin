// function pigLatin(word, text) {
//   let textArray = text.split(" ");
//   textArray.forEach(function (element, index) {
//     if (element.toLowerCase().includes(word.toLowerCase())) {
//     } 
//     let vowels = ["a", "e", "i", "o", "u"];
//     let newWord = "";

//     if (vowels.indexOf(word[0]) > -1) {
//       newWord = word + "way";
//       return newWord;
//     } else {
//       let firstMatch = word.match(/[aeiou]/g) || 0;
//       let vowel = word.indexOf(firstMatch[0]);
//       newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
//     }
//     return newWord;
//   }

// function pigLatin(word, letter) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let newWord = "";

//   if (vowels.indexOf(word[0]) > -1) {
//     newWord = word + "way";
//     return newWord;
//   } 
//   else if (word.indexOf(word [0, 1]) === "q" && "u") {
//     let quMatch = word.slice(2) + newWord + "ay";
//   } else {
//     let firstMatch = word.match(/[aeiou]/g) || 0;
//     let vowel = word.indexOf(firstMatch[0]);
//     newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
//     return newWord;
//   }
// }

const pigLatin = (str) => {
  let sentSplit = str.split(' ')
  let newArray = [];

  for (let i = 0; i < sentSplit.length; i++) {
    let element = sentSplit[i]
    console.log(element)
    function pigLatin(str) {
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      let newWord = "";

      if (vowels.indexOf(str[0]) > -1) {
        newWord = word + 'way';
        return newWord;
      }


      if (!['a', 'e', 'i', 'o', 'u'].includes(element[0]) && (element.slice(1, 3) === 'qu')) {
        newArray.push(`${element.slice(3)}${element.slice(0, 3)}ay`)
      }
      else if (!['a', 'e', 'i', 'o', 'u'].includes(element[0]) && !['a', 'e', 'i', 'o', 'u'].includes(element[1]) && !['a', 'e', 'i', 'o', 'u'].includes(element[2]) || (element.slice(0, 3) === 'sch')) {
        newArray.push(`${element.slice(3)}${element.slice(0, 3)}ay`)
      }

      else if (!['a', 'e', 'i', 'o', 'u'].includes(element[0]) && !['a', 'e', 'i', 'o', 'u'].includes(element[1]) || (element.slice(0, 2) === 'qu')
      ) {
        newArray.push(`${str.slice(2)}${str.slice(0, 2)}ay`)
      }

      else if (!['a', 'e', 'i', 'o', 'u'].includes(element[0])) {
        newArray.push(`${str.slice(1)}${str[0]}ay`)
      }

      else if (!['a', 'e', 'i', 'o', 'u'].includes(element[0])) {
        newArray.push(`${element}ay`)
      }
    }
  }
  return newArray.join('')
}