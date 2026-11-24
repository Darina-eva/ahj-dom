import goblin from "../img/goblin.png";
import Board from "./Board";
import Game from "./Game";

const board = new Board(document.getElementById("board"));
const game = new Game(board, goblin);
game.start();
