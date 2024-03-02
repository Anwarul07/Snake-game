//Constant And Varibles 
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("Files/food.mp3");
const gameOver = new Audio("Files/gameover.mp3");
const moveSound = new Audio("Files/move.mp3");
const musicSound = new Audio("Files/music.mp3");
const speed = 5;
let Score = 0;
let Section = document.querySelector(".section")
let lastpaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
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
    for (let index = 1; index < snakeArr.length; index++) {
        if (sArr[index].x === sArr[0].x && sArr[index].y === sArr[0].y) {
            return true;
        }
    }
    if (sArr[0].x >= 18 || sArr[0].x <= 0 || sArr[0].y >= 18 || sArr[0].y <= 0) {
        return true;
    }
}


function gameEngne() {

    if (isCollide(snakeArr)) {
        gameOver.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over ! pls press any key to play again");
        snakeArr = [{ x: 13, y: 15 }];
        Score = 0;

    }

    // game food regenerate and score updation

    if (snakeArr[0].y === Food.y && snakeArr[0].x === Food.x) {
        foodSound.play();
        Score += 1;
        document.querySelector("#score").innerHTML="Score: "+ Score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        Food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }

    //Moving The Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] }
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;





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
    musicSound.play()

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

        case "ArrowLeft":
            console.log("ArrowLeft Pressed");
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
});

