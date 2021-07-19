let selectedColor = (<HTMLElement>document.querySelector(".teamColor.selected")).style.backgroundColor;
let selectedFormation = (<HTMLElement>document.querySelector(".teamFormation.selected")).innerText;

const colorOptions = document.querySelectorAll(".teamColor");
colorOptions.forEach(color => {
    color.addEventListener("click", e => {
        colorOptions.forEach(option => {
            option.classList.remove("selected");
        });
        color.classList.add("selected");
        selectedColor = (<HTMLElement>color).style.backgroundColor;
    });
});

const formationOptions = document.querySelectorAll(".teamFormation");
formationOptions.forEach(formation => {
    formation.addEventListener("click", e => {
        formationOptions.forEach(option => {
            option.classList.remove("selected");
        });
        formation.classList.add("selected");
        selectedFormation = (<HTMLElement>formation).innerText;
    });
});

document.querySelector("#start").addEventListener("click", e => {
    const htmlCanvas = document.getElementById("gameField") as HTMLCanvasElement;
    const userTeam = new UserTeam(selectedColor, selectedFormation);
    const computerColor = chooseRandomDifferentColor(selectedColor);
    const computerFormation = chooseRandomFormation();
    const computerTeam = new ComputerTeam(computerColor, computerFormation);
    const game = new Game(htmlCanvas, userTeam, computerTeam);
    replaceCurtain();
    game.startGame();
});

function chooseRandomDifferentColor(userColor: string) {
    const colors = ["red", "blue", "yellow", "white"];
    const differentColors = colors.filter(color => color !== userColor);
    return differentColors[Math.floor(Math.random() * differentColors.length)];
}

function chooseRandomFormation() {
    const formations = ["4-4-2", "4-2-3-1", "4-3-3"];
    return formations[Math.floor(Math.random() * formations.length)];
}

function replaceCurtain() {
    document.getElementById("curtain").style.display = "none";
    document.getElementById("dashboardContainer").style.display = "flex";
    document.getElementById("message").style.display = "block";
    document.getElementById("controls").style.display = "flex";
}