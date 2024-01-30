

const testWords = `Hello's GoodBye Hello Hello Seeya GoodBye Hello GoodBye Hello Seeya`;


//a list of stop words we don't want to include in stats
function getStopWords() {
    return ["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"];
}

function getMostUsedWords(wordText, topN){
    let wordCounts = [];

    wordText = wordText.toLowerCase();
    
    wordText = wordText.replace(/[^A-Z0-9\s']/ig,"")

    // looking for white space characters, line breaks, etc.. 
    let words = wordText.split(/\s+/g);


    // not accurate 
    //let words = wordText.split('');
 
    for(let i = 0; i < words.length; i++){

        // iterating through wordCounts to see if any element in this array has the value of words[i]
        let obj = wordCounts.find(w => {
        return w.word === words[i] ;
        });

        //if there is not a match above,(returns undefinded), push the new word[i] into wordCounts and format it into an object with a count of 1.
        if(obj == undefined){
            wordCounts.push({
                "word": words[i],
                "count": 1
            })
        }else{// if there is a match above, acces the count key in the object and increment the value.
            obj.count ++;
        }
    };

    // sort in descending order
    sortByCount(wordCounts, "desc");

    console.log(wordCounts)
    
    //get the topN results 
    wordCounts = wordCounts.slice(0, topN);
    console.log(wordCounts)
    
};

getMostUsedWords(testWords,2);



function sortByCount(words, sortDirection){

    words.sort((a,b) => {
        if(sortDirection == "asc"){
            return a.count - b.count;
        }else {
            return b.count - a.count;
        }
    });

};


