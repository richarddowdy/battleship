class Game {
  constructor(HEIGHT, WIDTH){
    this.HEIGHT = HEIGHT;
    this.WIDTH = WIDTH;
    // this.board1 = this.makeBoard();
    // this.board2 = this.makeBoard();
    // this.htmlBoard1 = this.makeHtmlBoard();
    // this.htmlBoard2 = this.makeHtmlBoard()
    this.makeBoard();
    this.makeHtmlBoard();
  }

  makeBoard() {
    this.board1 = [];
    this.board2 = [];
    for(let y = 0; y < this.HEIGHT; y++){
      this.board1.push([])
      for(let x = 0; x < this.WIDTH; x++){
        this.board1[y].push("O")
      }
    }
    for(let y = 0; y < this.HEIGHT; y++){
      this.board2.push([])
      for(let x = 0; x < this.WIDTH; x++){
        this.board2[y].push("O")
      }
    }
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
        cell.append("O")
        row.append(cell);
      }
      board1.append(row);
    }
    for(let y = 0; y < this.HEIGHT; y++){
      const row = document.createElement("tr")
      for(let x = 0; x < this.WIDTH; x++){
        const cell = document.createElement("td");
        cell.setAttribute('id', `${y}-${x}`);
        cell.setAttribute('class', 'cell');
        cell.append("O")
        row.append(cell);
      }
      board2.append(row);
    }
    
    // console.log(board1);
    // console.log(board2);
  }
}


let currentGame; 
function newGame() {
  console.log("starting new Game")
  currentGame = new Game(5,5);

  console.log(currentGame.board1)
  console.log(currentGame.board2)
}

const startButton = document.getElementById('start-button');
startButton.addEventListener("click", newGame);
