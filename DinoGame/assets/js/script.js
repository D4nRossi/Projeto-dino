document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    function control(e){
        if(e.keyCode === 32){
            console.log('certo')
        }
    }

    document.addEventListener('keyup', control)

    function jump(){
        let position = 0
        let timerId = setInterval(function (){
            // pular
            console.log('pulou')
            position += 30
            dino.style.bottom = position + 'px'
        },20)
    }

})