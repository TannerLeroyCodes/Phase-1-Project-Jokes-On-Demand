
document.addEventListener("DOMContentLoaded", () => {
   fetchJoke(jokeUrl)
    
    
    const allJokeBtn = document.getElementById("all-joke-filter")
    const safeModeBtn = document.getElementById("safe-mode-filter")
    const getJokeBtn = document.getElementById("new-joke-button")
    getJokeBtn.addEventListener("click",() => fetchJoke(jokeUrl))
    safeModeBtn.addEventListener("click", ()=> alert("safe mode enabled", safeMode))
    allJokeBtn.addEventListener("click", ()=> alert("all jokes enabled",
        makeAllJokesAvail))

    function makeAllJokesAvail(){
        jokeUrl = "https://v2.jokeapi.dev/joke/Any?"
        console.log(jokeUrl)}

    function safeMode() {
        jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"
        }

        

})
// global variables

let jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"

let memeUrl = "https://api.imgflip.com/get_memes"

//callback functions 

const fetchJoke = (jokeUrl) => {
    fetch(jokeUrl)
    .then(res => res.json())
    .then(data => oneOrTwoParter(data))

}
const oneOrTwoParter = (data) => {

const lineOne = document.getElementById("line-one")
const lineTwo = document.getElementById("line-two")
let categoryLine = document.getElementById("category")
categoryLine.textContent = `Catergory: ${data.category}`


if (data.type === "single"){
    lineOne.textContent = data.joke
    

}else 
    lineOne.textContent = data.setup
    lineTwo.textContent = data.delivery
    
}



