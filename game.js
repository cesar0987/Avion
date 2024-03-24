var player = {
    left : 575,
    top : 620
};
var enemies = [
    { left: 100, top: 100 },
    { left: 200, top: 100 },
];
function drawPlayer() {
    var content = "";
    content += "<div class='player' style='left:" + player.left + "px; top:" + player.top + "px;'></div>";
    document.getElementById('players').innerHTML = content;
}
drawPlayer();