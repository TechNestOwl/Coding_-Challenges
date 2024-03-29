/**
 * Given a provieded block of text, write a function that accepts the string.
 * The function should return an array of objects with the top 3 most used words 
 * and counts.
 * Display the top 3 words and their counts in an array of objects
 * Consider only letters and numbers and filter out any special characters.
 */


// ** steps I should take **

// 1 - standardize the text ( toLowerCasse and remove special characters)

// 2 - sepperate string words into an array

// 3 - loop through array 
            /**
             * Find most common word
             * increment word count
             */

// 4 - For each of the top 3 words, create an object and add to mostUsed array.

// 5 - log finished mostUsed array to console.


const testWords = `Hello's GoodBye Hello Hello Seeya GoodBye Hello GoodBye Seeya`;


//a list of stop words we don't want to include in stats
function getStopWords() {
    return ["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"];
}


function mostUsedWords(text){

    let mostUsed = [];
    let cleanedText = text.toLowerCase().replace(/[^a-z0-9-]/g, ' ').split(' ');


    //creating object for each word instance in text
    for(let i = 0; i < cleanedText.length; i++){

        let wordObj = {
            foundWord: cleanedText[i],
            wordCounter: 0
        }
        wordObj.wordCounter ++;
        mostUsed.push(wordObj);
    };

    
    let newArray = [];
    let uniqueObject = {};

    //looping for the array elements
    for (let i in mostUsed){
        
        //extract object word
        objWord = mostUsed[i]["foundWord"];

        //use the word as the index
        uniqueObject[objWord] = mostUsed[i];
        
    };

    // loop to push unique objects into array
    for ( i in uniqueObject){
        newArray.push(uniqueObject[i]);
    }

   console.log(newArray)
    console.log(cleanedText)



}

mostUsedWords(testWords)


// function removeDuplicates(data){
//     return data.filter((value, index) => data.indexOf(value) === index)

// };
