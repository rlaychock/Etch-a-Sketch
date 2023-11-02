let grid = document.querySelector('.grid');

createGrid(16);

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquares = size * size;

    for(i = 0; i < numSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('gridItem');
        grid.insertAdjacentElement('beforeend', div);
    }
}

