score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer');
        }, 700);

    }
    if (e.keyCode == 39) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 112 + "px";


    }
    if (e.keyCode == 37) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 112) + "px";


    }
}
setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);
    // console.log(offsetX,offsetY);
    if (offsetX < 93 && offsetY < 50) {
        gameOver.innerHTML = "Game Over - Reload to start again";
        obstacle.classList.remove('obstacleAni');
    }
    else if ((offsetX < 145 || offsetX > 146) && cross) {
        if ((score >= 0 && score <= 8)&& offsetX < 200 && cross){

            score += 1;
            updateScore(score);
            cross = false;
        setTimeout(() => {
            cross = true;
        }, 500);

        }
        if (score > 8) {
            obstacles();
        }
        
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(player, null).getPropertyValue('animation-duration'));
            newdur = aniDur - 0.7;
            obstacle.style.animationDuration = newdur + 's';
        }, 1000);
    }
}, 10);
function updateScore(score) {
    
    scoreContainer.innerHTML = "your Score:" + score;
    
}
function obstacles() {
    setInterval(() => {
    document.getElementById('obstacle').style.display = "none";
    obstacle1 = document.querySelector('.obstacle1');
    obstacle1.classList.add('obstacleOne');
    ox1 = parseInt(window.getComputedStyle(obstacle1, null).getPropertyValue('left'));
    oy1 = parseInt(window.getComputedStyle(obstacle1, null).getPropertyValue('top'));
    offsetX1 = Math.abs(px - ox1);
    offsetY1 = Math.abs(py - oy1);
    console.log("ox1:", offsetX1, offsetY1);
    if (offsetX1 < 93 && offsetY1 < 50) {
        gameOver.innerHTML = "Game Over - Reload to start again";
        obstacle1.classList.remove('animateObstacle1');
    }
    else if ((offsetX1 < 145) && cross) {
        score += 1;
        updateScore(score);
        
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

    }
},10);
}