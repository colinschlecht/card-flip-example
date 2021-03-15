let cards = document.querySelectorAll('.card')


for(let card of cards){
    // card.addEventListener('mouseover', function (){
    card.addEventListener('click', function (){
    card.classList.toggle('flipped')
    })
}
