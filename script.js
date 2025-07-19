const quoteApi = 'https://api.quotable.io/random'
const quote = document.getElementById('quote')
const author = document.getElementById('author');

const newQuoteBtn = document.getElementById('new-quote');



async function fethApi(){

    const response = await fetch(quoteApi);

    const apiResponse = await response.json()

    quote.innerHTML = `${apiResponse.content}
     \n ~ ${apiResponse.author}`

    console.log(apiResponse)

}



newQuoteBtn.addEventListener('click', ()=>{
    fethApi()


})

