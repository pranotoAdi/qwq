const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');


async function getQuote() {
    const proxyUrl = 'https://yeshop.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;
    } catch(error){
        getQuote()      
    }
}

getQuote();