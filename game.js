const playerPrint = document.getElementById("players");
    var player = {
        left : 0,
        top : 0
    };
    //Boundaries for the player defines the area where the player can move
    var boundaries = {
        top: 0,
        left: 0,
        bottom: 150,
        right: 330
    };

    var enemies = [
        { left: 0, top: 0 },
        { left: 10, top: 50 },
        { left: 20, top: 100 },
        { left: 30, top: 150 },
    ];

    function drawPlayer() {
        var content = "";
        content += "<div class='player1' style='top:" + player.top +"px; left:" + player.left + "px;'></div>";
        console.log(content);
        playerPrint.innerHTML = content;
    }
    function drawEnemies() {
        var content = "";
        console.log(enemies);
        for (var i = 0; i < enemies.length; i++) {
            content += "<div class='enemy1' style='top:" + enemies[i].top + "px; left:" + enemies[i].left + "px;'></div>";
        }
        document.getElementById("enemies").innerHTML = content;
    }
    function changeRandomImageOceans() {
        var oceanImg = document.getElementById("ocean");
        var imgDict = ['/img/ocean1.jpeg', '/img/ocean2.jpeg', '/img/ocean3.jpeg', '/img/ocean4.jpeg', '/img/ocean5.jpeg'];
        var randomIndex = Math.floor(Math.random() * imgDict.length);
        oceanImg.style.backgroundImage = "url('"+imgDict[randomIndex]+"')";
    }
    drawEnemies();
    drawPlayer();
    setInterval(changeRandomImageOceans, 5000)
   document.onkeydown = function(e) {
    var step = 10; // Define the step size for player movement

    // Update player's position based on the key pressed
    if (e.keyCode === 37) { // Left arrow key
        if (player.left - step >= boundaries.left) { // Check if moving left stays within boundaries
            player.left -= step;
        }
    }
    if (e.keyCode === 39) { // Right arrow key
        if (player.left + step <= boundaries.right) { // Check if moving right stays within boundaries
            player.left += step;
        }
    }
    if (e.keyCode === 38) { // Up arrow key
        if (player.top - step >= boundaries.top) { // Check if moving up stays within boundaries
            player.top -= step;
        }
    }
    if (e.keyCode === 40) { // Down arrow key
        if (player.top + step <= boundaries.bottom) { // Check if moving down stays within boundaries
            player.top += step;
        }
    }
    drawPlayer(); // Redraw the player with updated position
}


