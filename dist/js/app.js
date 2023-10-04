export default class Game {
  constructor(fieldSize) {
    this.fieldSize = fieldSize;
    this.currentPosition = 0;
  }
  makeField() {
    document.addEventListener('DOMContentLoaded', () => {
      const character = document.createElement('img');
      character.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true');
      let x = 0;
      const container = document.createElement('div');
      container.classList.add('container');
      document.body.appendChild(container);
      for (let i = 0; i < this.fieldSize; i += 1) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.insertAdjacentElement('afterbegin', row);
        for (let j = 0; j < this.fieldSize; j += 1) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.id = `cell_${x}`;
          row.insertAdjacentElement('beforeend', cell);
          x += 1;
        }
      }
    });
    setInterval(() => {
      document.getElementById(`cell_${this.currentPosition}`).innerHTML = '';
      this.currentPosition = this.generateRandom();
      document.getElementById(`cell_${this.currentPos}`).insertAdjacentElement('afterbegin', this.goblin);
    }, 300);
  }
  generateRandom() {
    return Math.floor(Math.random() * (this.fieldSize ** 2 - 1));
  }
}
const game1 = Game(4);
game1.makeField();
game1.generateRandom();