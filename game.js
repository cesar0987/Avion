const playerPrint = document.querySelector('.war-in-game-players');
const enemyPrint = document.querySelector('.war-enemies');
const oceanPrint = document.querySelector('.ocean-container');
const ammonBulletPrint = document.querySelector('.war-ammon-bullets');
//Player object defines the position of the player
var player = {
  left: 0,
  top: 0
};
//Boundaries for the player defines the area where the player can move
var boundaries = {
  top: 0,
  left: -220,
  bottom: 50,
  right: 220
};
//Boundaries for the enemies defines the area where the enemies can move
var enemyBoundaries = {
  top: 380,
  left: 0
};
//Boundaries for the ammon bullets defines the area where the ammon bullets can move
var ammonBoundaries = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
};
var ammonBullet = {
    left: 0,
    top: 0
};
var enemies = [
  { left: 80, top: 0 },
  { left: 70, top: 0 },
  { left: 250, top: 0 },
  { left: 95, top: 0 }
];
function drawAmmonBullet() {
    var content = '';
    content += "<div class='bullet'></div>";
    ammonBulletPrint.innerHTML = content;
    changeRandomBulletImage();
}
function changeRandomBulletImage() {
    var bullet = document.querySelector('.bullet');
    var imgDict = [
        '/img/bomb1.png',
        '/img/bomb.png',
    ];
    var randomIndex = Math.floor(Math.random() * imgDict.length);
    bullet.style.backgroundImage = "url('" + imgDict[randomIndex] + "')";
}

function moveAmmonBullet() {
    ammonBullet.top -= 10;
   drawAmmonBullet();
    changeRandomBulletImage();
}

function shootAmmonBullet() {
    ammonBullet = {
        left: player.left + 20,
        top: player.top - 20
    };
    setInterval(moveAmmonBullet, 100);
}

function drawPlayer() {
  var content = '';
  content +=
    "<div class='player1' style='top:" +
    player.top +
    'px; left:' +
    player.left +
    "px;'></div>";
  console.log(content);
  playerPrint.innerHTML = content;
  changeRandomPlayerImage();
}
function drawEnemies() {
  var content = '';
  console.log(enemies);
  for (var i = 0; i < enemies.length; i++) {
    content +=
      "<div class='enemy1' style='top:" +
      enemies[i].top +
      'px; left:' +
      enemies[i].left +
      "px;'></div>";
  }
  changeRandomEnemyImage();
  enemyPrint.innerHTML = content;
}
function moveEnemies() {   
    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].top < enemyBoundaries.top) {
            enemyPrint.style.display = 'block';
        enemies[i].top +=10;
        changeRandomEnemyImage();  
        } else {
            enemyPrint.style.display = 'none';
            enemies[i].top = 0; 
        }
    }
    drawEnemies();
    }
  


function changeRandomImageOceans() {
  var imgDict = [
    '/img/ocean1.jpeg',
    '/img/ocean2.jpeg',
    '/img/ocean3.jpeg',
    '/img/ocean4.jpeg',
    '/img/ocean5.jpeg'
  ];
  var randomIndex = Math.floor(Math.random() * imgDict.length);
  oceanPrint.style.backgroundImage = "url('" + imgDict[randomIndex] + "')";
}
function changeRandomPlayerImage() {
    var playerAircraft = document.querySelector('.player1');
  var imgDict = [
    '/img/player1.png', 
    '/img/player2.png',
    '/img/player3.png',
    '/img/player4.png',];
  var randomIndex = Math.floor(Math.random() * imgDict.length);
  playerAircraft.style.backgroundImage = "url('" + imgDict[randomIndex] + "')";
}
function changeRandomEnemyImage() {
    var enemyAircraft = document.querySelector('.enemy1');
    var imgDict = [
        '/img/enemy1.png',
        '/img/enemy2.png',
        '/img/enemy3.png',
        '/img/enemy4.png'
    ];
    var randomIndex = Math.floor(Math.random() * imgDict.length);
    enemyAircraft.style.backgroundImage = "url('" + imgDict[randomIndex] + "')";
    }
drawEnemies();
drawPlayer();
setInterval(moveEnemies, 100);
setInterval(changeRandomImageOceans, 5000);
document.onkeydown = function (e) {
  var step = 10; // Define the step size for player movement

  // Update player's position based on the key pressed
  if (e.keyCode === 37) {
    // Left arrow key
    if (player.left - step >= boundaries.left) {
      // Check if moving left stays within boundaries
      player.left -= step;
    }
  }
  if (e.keyCode === 39) {
    // Right arrow key
    if (player.left + step <= boundaries.right) {
      // Check if moving right stays within boundaries
      player.left += step;
    }
  }
  if (e.keyCode === 38) {
    // Up arrow key
    if (player.top - step >= boundaries.top) {
      // Check if moving up stays within boundaries
      player.top -= step;
    }
  }
  if (e.keyCode === 40) {
    // Down arrow key
    if (player.top + step <= boundaries.bottom) {
      // Check if moving down stays within boundaries
      player.top += step;
    }
  }
  if (e.keyCode === 32) {
    // Space key
    shootAmmonBullet();
  }
  drawPlayer(); // Redraw the player with updated position
  changeRandomPlayerImage();
};