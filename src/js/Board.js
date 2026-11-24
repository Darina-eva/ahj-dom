export default class Board {
  constructor(container, size = 4) {
    this.container = container;
    this.size = size;
    this.cells = [];
  }

  render() {
    this.container.innerHTML = "";
    this.cells = [];
    for (let i = 0; i < this.size * this.size; i += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      this.container.append(cell);
      this.cells.push(cell);
    }
  }
}
