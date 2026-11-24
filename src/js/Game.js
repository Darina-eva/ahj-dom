export function randomIndex(length, exclude) {
  let index;
  do {
    index = Math.floor(Math.random() * length);
  } while (index === exclude);
  return index;
}

export default class Game {
  constructor(board, imageSrc, interval = 1000) {
    this.board = board;
    this.interval = interval;
    this.position = null;
    this.character = document.createElement("img");
    this.character.src = imageSrc;
    this.character.alt = "Goblin";
    this.character.className = "character";
  }

  start() {
    this.board.render();
    this.move();
    this.timer = setInterval(() => this.move(), this.interval);
  }

  move() {
    this.position = randomIndex(this.board.cells.length, this.position);
    this.board.cells[this.position].append(this.character);
  }
}
