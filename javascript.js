let grid = document.querySelector('.grid');
let color ="black";

const popup = document.getElementById('popup');
popup.addEventListener('click', function(){
    let newSize = getSize();
    createGrid(newSize);
});



function createGrid(size) {

    let squares = document.querySelectorAll('.gridItem');
    squares.forEach((gridItem) => gridItem.remove()) ;

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquares = size * size;

    for(i = 0; i < numSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('gridItem');
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `${color}`;
        });
        grid.insertAdjacentElement('beforeend', div);
    }
}


function getSize() {
   input = prompt("Enter a board size (minimum 100): ");
   message = document.querySelector(".message");
   if(input === "") {
    message.textContent = "Enter a number!";
   } else if(input < 1 || input > 100){
    message.textContent = "Enter a number between 1-100!";
   } else {
    message.textContent = "Good!";
    return input;
   }
}   



createGrid(16);