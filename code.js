
//reverse String

// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello Elakkiya"))

//find a  longest word
function findlongestWord(sentence){
    const words=sentence.split(" ");
    let longestWord="";

    for(let word of words){
        
        if (word.lenght > longestWord.length){

            longestWord=word;

        }
    }
 return longestWord;
}
console.log(findlongestWord("i love codding in javascript"));