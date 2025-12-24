
const container = document.querySelector(".container");

function generateGrid(x,y) {
    // Remove previous grid before generates one new
    while (container.firstChild) {
    container.removeChild(container.lastChild);
    };
    
    for (let i = 0; i < (x * y); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", (event) => {
            // console.log(`Hover! ${[i + 1]}`); // Debug
            square.classList.add("hover-square");
        });
    container.appendChild(square);
    };
    
    container.setAttribute("style", `width: ${(x * 16)}px; height: ${(x * 16)}px;`);
};

const firstRun = generateGrid(16, 16);

const btnResize = document.querySelector(".resize-grid");
btnResize.addEventListener("click", function resizeGrid() {
    var newResize = prompt("Write the width and height of the grid in squares, i.e. '16x16' (Limit = 100)").split('x');
    // console.log(newResize);
    let newResizeX = newResize[0];
    let newResizeY = newResize[1];

    // Checks user inputs
    if (newResizeX <= 100 && newResizeY <= 100) {
        generateGrid(newResizeX, newResizeY);
    } else {
        alert("Try again.");
        resizeGrid();
    };
});