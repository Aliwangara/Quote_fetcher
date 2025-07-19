const quoteApi = 'https://api.quotable.io/random'
const quote = document.getElementById('quote')
const author = document.getElementById('author');

const newQuoteBtn = document.getElementById('new-quote');
const copyQuoteBtn = document.getElementById('copy-quote');



async function fethApi(){

    const response = await fetch(quoteApi);

    const apiResponse = await response.json()

    quote.innerHTML = `${apiResponse.content}
     <br> ~ ${apiResponse.author}`


    copyQuoteBtn.addEventListener('click', ()=>{
        
        const text = `${apiResponse.content}
        ~ ${apiResponse.author}`
        navigator.clipboard.writeText(text).then(()=>{
            setTimeout(()=>copyQuoteBtn =alert(`Copied`), 100)
    })

})

    console.log(apiResponse)

}



newQuoteBtn.addEventListener('click', ()=>{
    fethApi()


})



