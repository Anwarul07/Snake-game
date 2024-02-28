//Constant And Varibles 
const inputDir = { x: 0, y: 0 };
const foodSound = new Audio("Files/food.mp3");
const gameOver = new Audio("Files/gameover.mp3");
const moveSound = new Audio("Files/move.mp3");
const musicSound = new Audio("Files/music.mp3");
const speed = 2;
let scor = 0;
let Section = document.querySelector(".section")
let lastpaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }]
Food = { x: 6, y: 7 };



//Logic Start from here
function main(currTime) {

    window.requestAnimationFrame(main);
    // console.log(currTime);
    if ((currTime - lastpaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastpaintTime = currTime;
    gameEngne();

}

// Display food and snake items 

function isCollide(sArr) {
    return false;
    
}
function gameEngne() {

    if (isCollide(snakeArr)) {
        gameOver.play();
        musicSound.paued();
        inputDir = { x: 0, y: 0 };
        alert("Game Over ! pls press any key to play again");
        snakeArr = [{ x: 13, y: 15 }];
        Score = 0;

    }




    Section.innerHTML = '';
    snakeArr.forEach((e, index) => {
        //Displaying the location and Snake

        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add("head");
        } else {
            snakeElement.classList.add("snake");
        }
        Section.appendChild(snakeElement);

    })

    //Displayimg The Food
    FoodElement = document.createElement("div");
    FoodElement.style.gridRowStart = Food.y;
    FoodElement.style.gridColumnStart = Food.x;
    FoodElement.classList.add("food");
    Section.appendChild(FoodElement);


}

//Main LOgic Starts
window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    inputDir = { x: 0, y: 1 }// Start the Game
    moveSound.play();

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp Pressed");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown Pressed");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "Arrowleft":
            console.log("Arrowleft Pressed");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight Pressed");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})


