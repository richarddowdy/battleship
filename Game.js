class Game {
  constructor(HEIGHT, WIDTH){
    this.HEIGHT = HEIGHT;
    this.WIDTH = WIDTH;
    this.shipLengths = [5,4,3,3,2];
    // this.board1 = this.makeBoard();
    // this.board2 = this.makeBoard();
    // this.htmlBoard1 = this.makeHtmlBoard();
    // this.htmlBoard2 = this.makeHtmlBoard()
    this.makeBoard();
    this.makeHtmlBoard();
    this.startingPoints = this.startingPoints();
  }
  startingPoints() {
    let arr = [];
    while(arr.length < 5) {
      let random = Math.floor(Math.random()* 100);
      if (!arr.includes(random)) {
        arr.push(random);
      }
    }
    return arr;
  }
  //checks in clock-wise manner if a ship of "length" length can be placed at that starting position
  // are there any borders/ships in those spots around the starting position??
  isValidStart(start, length) {

  }

  // places ship on board at available spot
  placeShip() {

  }

  makeBoard() {
    this.board1 = [];
    // this.board2 = [];
    for(let y = 0; y < this.HEIGHT; y++){
      this.board1.push([])
      for(let x = 0; x < this.WIDTH; x++){
        this.board1[y].push(`${y}${x}`)
      }
    }
    // for(let y = 0; y < this.HEIGHT; y++){
    //   this.board2.push([])
    //   for(let x = 0; x < this.WIDTH; x++){
    //     this.board2[y].push("O")
    //   }
    // }
  }
  addShips() {

  }

  makeHtmlBoard() {
    const board1 = document.getElementById("board1");
    const board2 = document.getElementById("board2");

    for(let y = 0; y < this.HEIGHT; y++){
      const row = document.createElement("tr")
      for(let x = 0; x < this.WIDTH; x++){
        const cell = document.createElement("td");
        cell.setAttribute('id', `${y}-${x}`);
        cell.setAttribute('class', 'cell');
        cell.append(`${y}${x}`)
        row.append(cell);
      }
      board1.append(row);
    }
    // for(let y = 0; y < this.HEIGHT; y++){
    //   const row = document.createElement("tr")
    //   for(let x = 0; x < this.WIDTH; x++){
    //     const cell = document.createElement("td");
    //     cell.setAttribute('id', `${y}-${x}`);
    //     cell.setAttribute('class', 'cell');
    //     cell.append("O")
    //     row.append(cell);
    //   }
    //   board2.append(row);
    // }
    
    // console.log(board1);
    // console.log(board2);
  }
}


let currentGame; 
function newGame() {
  console.log("starting new Game")
  currentGame = new Game(10,10);

  console.log(currentGame.board1)
  console.log(currentGame.board2)
  console.log(currentGame.startingPoints);
}

const startButton = document.getElementById('start-button');
startButton.addEventListener("click", newGame);
