//Constant And Varibles 
const direction = { x: 0, y: 0 };
const foodSound = new Audio("Files/food.mp3");
const gameOver = new Audio("Files/gameover.mp3");
const moveSound = new Audio("Files/move.mp3");
const musicSound = new Audio("Files/music.mp3");
const speed = 2;
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
function gameEngne() {
    Section.innerHTML = '';
    snakeArr.forEach((e, index) => {
        //Displaying the location and Snake

        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add("head");
        } else{
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

window.requestAnimationFrame(main);


