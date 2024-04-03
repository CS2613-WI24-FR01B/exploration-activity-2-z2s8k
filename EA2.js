
//this is a simple program designed for the purpose of showing the utility of the Jest library in javaScript
const prompt = require ('prompt-sync')();
//This function takes in a sentence and counts the amount of vowels
function countVowels(inWord){
    let vowelCount = 0;
    inWord = inWord.toLowerCase();
    for(let i = 0; i<inWord.length;i++){
        if((inWord[i] == 'a') || (inWord[i] == 'e') || (inWord[i] == 'i') || (inWord[i] =='o') || (inWord[i] == 'u')){
            vowelCount = vowelCount +1;
        }
    }
    return vowelCount;
}
//This function takes in a sentence and prints the unique vowel elements found in the sentence
function uniquelistVowels(inWord){
    let vowelList = [];
    inWord = inWord.toLowerCase();
    for(let i = 0; i<inWord.length;i++){
        if((inWord[i] == 'a') || (inWord[i] == 'e') || (inWord[i] == 'i') || (inWord[i] =='o') || (inWord[i] == 'u')){
            vowelList.push(inWord[i]) ;
        }
    }
    vowelList = vowelList.filter(function (value, index, self){
        return index == self.indexOf(value);
    });

    return vowelList;
}
console.log("Input a sentence:");
let user_input = prompt();

console.log(`Your sentence has: ${countVowels(user_input)} vowels`);
console.log(`Those vowels are one of the following: ${uniquelistVowels(user_input)}`);

module.exports ={ countVowels, uniquelistVowels };
