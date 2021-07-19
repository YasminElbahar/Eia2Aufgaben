var selectedColor = document.querySelector(".teamColor.selected").style.backgroundColor;
var selectedFormation = document.querySelector(".teamFormation.selected").innerText;
var colorOptions = document.querySelectorAll(".teamColor");
colorOptions.forEach(function (color) {
    color.addEventListener("click", function (e) {
        colorOptions.forEach(function (option) {
            option.classList.remove("selected");
        });
        color.classList.add("selected");
        selectedColor = color.style.backgroundColor;
    });
});
var formationOptions = document.querySelectorAll(".teamFormation");
formationOptions.forEach(function (formation) {
    formation.addEventListener("click", function (e) {
        formationOptions.forEach(function (option) {
            option.classList.remove("selected");
        });
        formation.classList.add("selected");
        selectedFormation = formation.innerText;
    });
});
document.querySelector("#start").addEventListener("click", function (e) {
    var htmlCanvas = document.getElementById("gameField");
    var userTeam = new UserTeam(selectedColor, selectedFormation);
    var computerColor = chooseRandomDifferentColor(selectedColor);
    var computerFormation = chooseRandomFormation();
    var computerTeam = new ComputerTeam(computerColor, computerFormation);
    var game = new Game(htmlCanvas, userTeam, computerTeam);
    replaceCurtain();
    game.startGame();
});
function chooseRandomDifferentColor(userColor) {
    var colors = ["red", "blue", "yellow", "white"];
    var differentColors = colors.filter(function (color) { return color !== userColor; });
    return differentColors[Math.floor(Math.random() * differentColors.length)];
}
function chooseRandomFormation() {
    var formations = ["4-4-2", "4-2-3-1", "4-3-3"];
    return formations[Math.floor(Math.random() * formations.length)];
}
function replaceCurtain() {
    document.getElementById("curtain").style.display = "none";
    document.getElementById("dashboardContainer").style.display = "flex";
    document.getElementById("message").style.display = "block";
    document.getElementById("controls").style.display = "flex";
}
