const container = document.querySelector('.container');

function populate(size) {

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add("column")
        container.appendChild(column);
        for (j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.classList.add("grid")
            column.appendChild(grid);
        }
    }

    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', hover));
    grids.forEach(grid => grid.addEventListener('mouseout', stopHover));
    grids.forEach(grid => grid.addEventListener('mousedown', draw));
    grids.forEach(grid => grid.addEventListener('mouseover', draw));
}

const slider = document.querySelector('.slider');
const output = document.querySelector('.size');
output.textContent = `${slider.value} x ${slider.value}`;
slider.addEventListener('input', () => {
    populate(slider.value);
    output.textContent = `${slider.value} x ${slider.value}`;
});

function hover(e) {
    this.classList.add('hovering');
}

function stopHover(e) {
    this.classList.remove('hovering');
}

function draw(e) {
    if (e.type == 'mouseover' && !mouseDown) return;
    this.classList.add('drawn');
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

populate(16);
