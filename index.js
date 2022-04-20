
document.addEventListener("DOMContentLoaded", () => {
    fetchJoke(jokeUrl)
    fetchMeme(memeUrl)
     
     const allJokeBtn = document.getElementById("all-joke-filter")
     const safeModeBtn = document.getElementById("safe-mode-filter")
     const getJokeBtn = document.getElementById("new-joke-button")
     const easterEgg = document.getElementById("easter-egg")
     const programming = document.getElementById("programming-filter")
     const spooky = document.getElementById('spooky-filter')
     const reset = document.getElementById('reset')
     
 
     getJokeBtn.addEventListener("click",() => fetchJoke(jokeUrl))
     safeModeBtn.addEventListener("click", ()=> {safeModeBtn.innerHTML = "Clicked", jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"})
     allJokeBtn.addEventListener("click", ()=> {allJokeBtn.innerHTML = "Clicked", jokeUrl = "https://v2.jokeapi.dev/joke/Any?"})
     easterEgg.addEventListener("mouseover", ()=> alert("Thank you for checking out our page. We greatly appreciate the public APIs that made this possible"))
     programming.addEventListener('click', () => {programming.innerHTML = "Clicked", jokeUrl = 'https://v2.jokeapi.dev/joke/Programming'})
     reset.addEventListener('click', function(){
        programming.innerHTML = "Programming Jokes"
      safeModeBtn.innerHTML = "Safe Mode"
      allJokeBtn.innerHTML = "All Jokes"
      spooky.innerHTML ="Spooky Jokes"
     })
    //  spooky.addEventListener('click', () => {alert("Spooky Jokes Enabled"), jokeUrl="https://v2.jokeapi.dev/joke/Spooky"})
    spooky.addEventListener('click', function(){
        jokeUrl="https://v2.jokeapi.dev/joke/Spooky"
        spooky.innerHTML= "Clicked"
    })
 
 })
 // global variables
 
 let jokeUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode"
 
 let memeUrl = "https://api.imgflip.com/get_memes"
 
 //callback functions 
 
 const fetchMeme = (memeUrl) => {
     fetch(memeUrl)
     .then(res => res.json())
     .then(data => renderMemes(data))
 }
 
 const fetchJoke = (jokeUrl) => {
     fetch(jokeUrl)
     .then(res => res.json())
     .then(data => oneOrTwoParter(data))
 
 }
 const renderMemes = (returnFromFetch) => {
     returnFromFetch.data.memes.forEach(meme => {
         ul = document.getElementById("meme-list")
         img = document.createElement("img")
         img.src = meme.url
         img.width = 350
         img.height = 350
         
         ul.append(img)
     })
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

 