const Snake = function(){
  this.snakePositions = [ 203, 204, 205, 206 ];
  this.tail =this.snakePositions.slice(-1);
  this.key = "ArrowRight";
  this.foodPosition;
  this.sizeOfGrid = 50;
}

Snake.prototype.updateSnakePosToDown = function (ref) {
  let tail = ref.snakePositions.shift();
  let newSnakeHeadId = ref.snakePositions.slice(-1)[0] + ref.sizeOfGrid;
  ref.snakePositions.push(+newSnakeHeadId);
  ref.tail = tail;
};

Snake.prototype.updateSnakePosUp = function (ref) {
  let tail = ref.snakePositions.shift();
  let newSnakeHeadId = ref.snakePositions.slice(-1)[0]-ref.sizeOfGrid;
  ref.snakePositions.push(+newSnakeHeadId);
  ref.tail = tail;
};

Snake.prototype.updateSnakePosRight = function (ref) {
  let tail = ref.snakePositions.shift();
  let newSnakeHeadId = ref.snakePositions.slice(-1)[0]+1;
  ref.snakePositions.push(+newSnakeHeadId);
  ref.tail = tail;
};

Snake.prototype.updateSnakePosLeft = function (ref) {
  let tail = ref.snakePositions.shift();
  let newSnakeHeadId = ref.snakePositions.slice(-1)[0]-1;
  ref.snakePositions.push(+newSnakeHeadId);
  ref.tail = tail;
};


Snake.prototype.updateSnakePos = function(key){
  let actions ={
    "ArrowDown":this.updateSnakePosToDown,
    "ArrowRight":this.updateSnakePosRight,
    "ArrowUp":this.updateSnakePosUp,
    "ArrowLeft":this.updateSnakePosLeft
  };
  actions[key](this);
}

Snake.prototype.generatedFood = function(){
  let maxPossiblePos = this.sizeOfGrid*this.sizeOfGrid;
  let foodPosition = Math.floor(Math.random()*maxPossiblePos)
  if(this.snakePositions.includes(foodPosition)){
    this.generatedFood();
  }
  this.foodPosition = foodPosition;
}

Snake.prototype.didSnakeEatFood = function(){
  let snakeHead = this.snakePositions.slice(-1);
  return this.foodPosition == snakeHead;
}

Snake.prototype.isGameOver = function () {
  let maxPossiblePos = this.sizeOfGrid*this.sizeOfGrid;
  let head = this.snakePositions.slice(-1);
  let didSnakeHitTopEdge = head<0;
  let didSnakeHitBottomEdge = head>(maxPossiblePos);
  return didSnakeHitTopEdge||didSnakeHitBottomEdge
};
