import Board from './board';
import goblin from '../img/goblin.png';

const board = new Board(4);
const fieldBoard = board.createField();
const items = Array.from(fieldBoard.querySelectorAll('.el'));

const picture = document.createElement('img');
picture.src = goblin;
picture.classList.add('picture');

setInterval(() => {
  const index = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
  if (items[index].children) {
    items[index].textContent = '';
  }
  items[index].appendChild(picture);
}, 1000);
