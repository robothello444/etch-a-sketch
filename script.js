
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
            // console.log(`Hover! ${[i]}`);
            square.classList.add("hover-square");
        });
    container.appendChild(square);
    };
    
    container.setAttribute("style", `width: ${(x * 10)}px; height: ${(x * 10)}px;`);
};

const firstRun = generateGrid(16, 16);