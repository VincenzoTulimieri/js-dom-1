console.log('Ti amo Margherita')
console.log('Ciao Vincenzo')


const button = document.getElementById('btn')
console.log(button)
const image = document.getElementById('img')
console.log(image)

button.addEventListener('click', function(){
    button.innerText = 'spegni la luce'
    image.src = '../img/yellow_lamp_360.png'
})

