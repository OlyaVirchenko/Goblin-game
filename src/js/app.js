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

let strike = 0;
let miss = 0;

const strikeScore = document.querySelector('.luck');
const missScore = document.querySelector('.fail');

function zeroingScore() {
  strikeScore.textContent = 0;
  strike = 0;
  missScore.textContent = 0;
  miss = 0;
}

for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener('click', (ev) => {
    if (ev.target === picture) {
      strike += 1;
      strikeScore.textContent = strike;
      ev.target.remove();

      if (strikeScore === 5) {
        alert('You win!!!');
        zeroingScore();
      }
    }

    if (ev.target !== picture) {
      miss += 1;
      missScore.textContent = miss;

      if (missScore === 5) {
        alert('You lose!!!');
        zeroingScore();
      }
    }
  });
}
