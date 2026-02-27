let game = 0
let trailx = 0
let traily = 0
let p1 = 0
let p2 = 0

const obj = {
    x: 50,
    y: 250
}


const obj2 = {
    x: 750,
    y: 250
}

const ball = {
    bx: 390,
    by: 280,
    hspeed: 10,
    vspeed: 10
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'lime'
ctx.fillRect(obj.x, obj.y, 20,100)
ctx.fillRect(obj2.x, obj2.y, 20,100)
ctx.fillRect(ball.bx, ball.by, 20, 20)
function move_ball() {
    if (game === 1){
        if (ball.bx <= 0 || ball.bx >= 780 || ball.by >= obj.y && ball.by <= obj.y + 100 && ball.bx >= obj.x - 20 && ball.bx <= obj.x + 20 || ball.by >= obj2.y && ball.by <= obj2.y + 100 && ball.bx >= obj2.x - 20 && ball.bx <= obj2.x + 20) {
            ball.hspeed = -ball.hspeed
        }
        if (ball.by <= 0 || ball.by >= 580 ) {
            ball.vspeed = -ball.vspeed
        }

        if (ball.bx <= 0 || ball.bx >= 780) {
                if (ball.bx < 400) {
                    p2 += 1
                    ctx.clearRect(trailx, traily, 20,20)
                    trailx = 0
                    traily = 0
                    ctx.fillStyle = 'white'
                    ctx.fillRect(ball.bx, ball.by, 20, 20)
                    if (p2 === 5) {
                        alert('Player 2 wins!')
                        p1 = 0
                        p2 = 0
                    }
                } else {
                    p1 += 1
                    ctx.clearRect(trailx, traily, 20,20)
                    trailx = 0
                    traily = 0
                    ctx.fillStyle = 'white'
                    ctx.fillRect(ball.bx, ball.by, 20, 20)
                    if (p1 === 5) {
                        alert('Player 1 wins!')
                        p1 = 0
                        p2 = 0
                    }
                }
                ball.bx = 390
                ball.by = 280
                ball.hspeed = -ball.hspeed
        }
        ctx.clearRect(ball.bx, ball.by, 20, 20)
        ctx.clearRect(trailx, traily, 20, 20)
        trailx = ball.bx
        traily = ball.by
        ball.bx += ball.hspeed
        ball.by += ball.vspeed
        ctx.fillStyle = 'green'
        ctx.fillRect(trailx, traily, 20, 20)
        ctx.fillStyle = 'lime'
        ctx.fillRect(ball.bx, ball.by, 20, 20)

    
    }
}

function move_up() {
    ctx.clearRect(obj.x, obj.y, 20, 100)
    ctx.fillStyle = 'lime'
    obj.y -= 20
    ctx.fillRect(obj.x, obj.y, 20, 100)
}

function move_down() {
    ctx.clearRect(obj.x, obj.y, 20, 100)
    ctx.fillStyle = 'lime'
    obj.y += 20
    ctx.fillRect(obj.x, obj.y, 20, 100)
}

function move_up2() {
    ctx.clearRect(obj2.x, obj2.y, 20, 100)
    ctx.fillStyle = 'lime'
    obj2.y -= 20
    ctx.fillRect(obj2.x, obj2.y, 20, 100)
}

function move_down2() {
    ctx.clearRect(obj2.x, obj2.y, 20, 100)
    ctx.fillStyle = 'lime'
    obj2.y += 20
    ctx.fillRect(obj2.x, obj2.y, 20, 100)
}


function pause_game() {
    if (game === 0) {
        game = 1
    }
    else if (game === 1) {
        game = 0
    }

}

document.addEventListener('keydown', function(event) {

    if (event.key === 'w') {
        move_up()
    }
    if (event.key === 's') {
        move_down()
    }

    if (event.key === ' ') {
        pause_game()
    }

    if (event.key === 'ArrowUp') {
        move_up2()
    }   

    if (event.key === 'ArrowDown') {
        move_down2()
    }

})

setInterval(move_ball, 50)
