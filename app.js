const container = document.querySelector('.container');
for (i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add("column")
    container.appendChild(column);
    for (j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add("grid")
        column.appendChild(grid);
    }
}

function hover(e) {
    this.classList.add('hovering');
}

function stopHover(e) {
    this.classList.remove('hovering');
}

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => grid.addEventListener('mouseover', hover));
grids.forEach(grid => grid.addEventListener('mouseout', stopHover));
