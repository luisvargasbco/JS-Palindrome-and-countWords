// Función para contar palabras

let text = "Frase hola preba definitiva terminal final";

let textArray = text.split(' ');

let wordsList = {};

textArray.forEach(function(word) {
    if (wordsList[word]) {
        wordsList[word] += 1;
    } else {
        wordsList[word] = 1;
    }
});


let wordsListSize = Object.keys(wordsList).length;

function countWords() {
    console.log("En la frase hay " + textArray.length + " palabras."); 
};
countWords();

// Función para identificar un palíndromo

let textToTest = 'Amor a roma';
let textReadyToTest = textToTest.toLowerCase();

function isPalindrome(chain) {
    let array = chain.split('');
    let reverse = array.reverse();
    

    return chain === reverse.join('') ? ('El texto "' + textReadyToTest + '" si es palíndromo') : ('El texto "' + textReadyToTest + '" no es palíndromo')
};

console.log(isPalindrome(textReadyToTest));
