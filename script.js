import {sisterQuotes} from "./Quots.js";

const quotes = document.querySelector('.quotes');
const author = document.querySelector('.author');
const button = document.querySelector('button');
function quotsRun () {
    const randomNumber = Math.floor(Math.random()* sisterQuotes.length );
    quotes.textContent = sisterQuotes[randomNumber].quote;
    author.textContent = sisterQuotes[randomNumber].author;
}
quotsRun();
button.addEventListener('click', (quotsRun))

