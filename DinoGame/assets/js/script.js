document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    const grid = document.querySelector('.grid')
    const alert = document.getElementById('alert')
    let isJumping = false
    let gravity = 0.9
    let gameOver = false


    function control(e){
        if(e.keyCode === 32){
            if(!isJumping){
                isJumping = true
                jump()
            }
        }
    }

    document.addEventListener('keyup', control)


    let position = 0
    function jump(){
        let count = 0
        let timerId = setInterval(function (){
            
            //cair
            if(count === 15){
                clearInterval(timerId)
                let downTimerId = setInterval(function(){
                    if(count === 0){
                        clearInterval(downTimerId)
                        isJumping = false
                    }
                    count--
                    position -= 5
                    position = position * gravity
                    dino.style.bottom = position + 'px'
                },20)
                
            }


            
            // pular
            console.log('pulou')
            count++
            position += 30
            position = position * gravity
            dino.style.bottom = position + 'px'
            console.log(dino.style.bottom)
        },20)
    }


    function generateObstacles(){
        let randomTime = Math.random() * 4000
        let obstaclePosition = 1000
        const obstacle = document.createElement('div')
        if(!gameOver) obstacle.classList.add('obstacle')
        grid.appendChild(obstacle)
        obstacle.style.left = obstaclePosition + 'px'

        let timerId = setInterval(function(){
            if(obstaclePosition > 0 && obstaclePosition < 60 && position < 60){
                clearInterval(timerId)
                alert.innerHTML = 'Você perdeu'
                gameOver = true
                while (grid.firstChild){
                    grid.removeChild(grid.lastChild)
                }
            }

            obstaclePosition -= 10
            obstacle.style.left = obstaclePosition + 'px'
        },20)
        if(!gameOver) setTimeout(generateObstacles, randomTime)
    }
    generateObstacles()






})