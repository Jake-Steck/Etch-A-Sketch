const display = document.getElementsByClassName('display')[0];
const clear = document.getElementsByClassName('button')[0];





function grid() {
    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
             square = document.createElement('div');
            square.className = 'square';
            display.appendChild(square);
        }
    }
};

grid();
