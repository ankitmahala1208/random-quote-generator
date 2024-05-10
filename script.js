//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const api_url = "https://api.quotable.io/random"



async function getQuotes(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    quote.innerText = data.content;
    person.innerText = data.author;

}

btn.addEventListener('click', () => {
    getQuotes(api_url)
});

