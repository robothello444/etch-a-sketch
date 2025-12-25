
const container = document.querySelector(".container");
const sideNumberContainer = document.querySelector(".number-count");

function generateGrid(x) {
    // Remove previous grid before generates one new
    while (container.firstChild) {
    container.removeChild(container.lastChild);
    };

    const squareSize = (400 / x) - 2; // (-2) because of the grid lines
    
    for (let i = 0; i < (x * x); i++) {
        const square = document.createElement("div");

        square.classList.add("square");
        square.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px`);
        square.addEventListener("mouseover", (event) => {
            // console.log(`Hover! ${[i + 1]}`); // Debug
            square.classList.add("hover-square");
        });
    container.appendChild(square);
    };

    sideNumberContainer.textContent = `${x}x${x}`
};

const firstRun = generateGrid(16);

const btnResize = document.querySelector(".resize-grid");
btnResize.addEventListener("click", function resizeGrid() {
    var newResize = prompt("Write how many squares of length will have on each side (Limit = 100)");
    // console.log(newResize);
    // Checks user inputs
    if (newResize <= 100) {
        generateGrid(newResize);
    } else {
        alert("Try again.");
        resizeGrid();
    };
});