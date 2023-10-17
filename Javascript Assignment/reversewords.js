const prompt = require("prompt-sync")({ sigint: true});

// Use the readline module to get user input
function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and create a new array
    const reversedWords = words.map(word => word.split('').reverse().join(''));

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Input sentence from the user using prompt
const inputSentence = prompt("Enter a sentence: ");

// Check if the user provided input
if (inputSentence) {
    // Call the function to reverse the words
    const reversedResult = reverseWordsInSentence(inputSentence);

    // Print the reversed sentence
    console.log("Reversed sentence:", reversedResult);
} else {
    console.log("No input provided.");
}