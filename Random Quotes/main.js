const quote = $('#text');
const author = $('#author');
const button = $('#new-quote');
const url = 'http://api.quotable.io/random';
let data = {
    content: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay'
}
//we are going to use fetch to get the data from the api
function getQuote(url, callback) {

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json();
            //console.log(response.json());

        })
        .then((data) => {
            console.log(data);
            return callback(data);
        })
        .catch((error) => {
            console.log(error);
        });

}

const createQuote = (data) => {
    //console.log(data);
    document.getElementById("text").innerHTML = data.content;

    document.getElementById("author").innerHTML = data.author;
}

//document.getElementById('text').innerText = "Hello World";
$(document).ready(function () {

    button.value = 'Hello';
    getQuote(url, createQuote);
    document.getElementById("new-quote").addEventListener("click", function () {
        getQuote(url, createQuote);
    });
});