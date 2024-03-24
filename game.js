const playerPrint = document.getElementById("players");
var player = {
    left : 575,
    top : 620
};
var enemies = [
    { left: 100, top: 100 },
    { left: 200, top: 100 },
];
function drawPlayer() {
    var content ="";
    console.log(typeof content)
    content += "<div class='player' style='top:" + player.top +"px; left:" + player.left + "px;'></div>";
    playerPrint.innerText = content;
}
drawPlayer();