const jokeText = document.getElementById('joketext');
const jokePunchLine = document.getElementById ('jokepunchline');
let jokeButton = document.getElementById('joke-btn');


jokeButton.addEventListener('click' , function () {
    jokeText.innerText = 'Loading...';
    jokePunchLine.innerText= '';

    fetch ('https://official-joke-api.appspot.com/random_joke')
    .then(function (response){
        return response.json()
    })
    .then(successFunction)
    .catch (errorFunction)
});

function successFunction(response) {
    jokeText.classList.remove('fadein');
    jokePunchLine.classList.remove('fadein');
    jokeText.innerText = response.setup;
    jokePunchLine.innerText =  `Punchline:  ${response.punchline}`;
    jokeText.offsetWidth;
    jokePunchLine.offsetWidth;
    jokeText.classList.add('fadein');
    jokePunchLine.classList.add('fadein');
};
function errorFunction (error) {
    jokeText.innerText = "Failed to fetch joke. Check your internet connection";

};


