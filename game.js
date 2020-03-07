let snake = new Snake();

const showFood = function(){
  let foodPosition = snake.foodPosition;
  document.getElementById(foodPosition).className = "food";
};

const updateSnakeOnDisplay = function(){
  let tail = snake.tail;
  let newSnakePositions = snake.snakePositions;
  document.getElementById(tail).className = "";
  newSnakePositions.map(function(snakePosition){
    document.getElementById(snakePosition).className="snake";
  });
};

const drawSnake = function(){
  let head = snake.snakePositions[0];
  let tail = snake.snakePositions.slice(-1);
  for (let id = head; id <= tail; id++) {
    let snakePart = document.getElementById(id);
    snakePart.className = "snake";
  }
};

const updateDisplay = function(text){
  document.getElementById("display").innerText = text;
}


const actionOnArrowKeys = function(event){
  snake.key = event.key;
}

const moveSnakeAndDisplay = function(){
  snake.updateSnakePos(snake.key);
  updateDisplayOfGame();
}

const updateDisplayOfGame = function(){
  if(snake.didSnakeEatFood()){
    snake.snakePositions.push(snake.foodPosition);
    snake.generatedFood();
  }
  if(snake.isGameOver()){
    updateDisplay("GAME OVER");
    return;
  }
  showFood();
  updateSnakeOnDisplay();
}

const loadGame = function(){
  let sizeOfGrid = snake.sizeOfGrid;
  createGrid(sizeOfGrid,sizeOfGrid);
  drawSnake();
  snake.generatedFood();
  window.addEventListener("keydown",actionOnArrowKeys);
  setInterval(moveSnakeAndDisplay,60);
}

window.onload = loadGame;
