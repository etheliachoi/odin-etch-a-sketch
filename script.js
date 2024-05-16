const container = document.querySelector(".container");

function createGrid(num) {
    if (num > 100) return
    for (let i = 0; i < num; i++) {
        let col = document.createElement("div");
        col.className = "col";
        container.appendChild(col);
        for (let j = 0; j < num; j++) {
            let div = document.createElement("div");
            div.className = "square";
            col.appendChild(div);
        }
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(sq) {
        sq.addEventListener("mouseover", 
        (e) => {if (blackToggle == true) {
            blackWhite(e.target, counter);
        }
            else if (rgbToggle == true) {
            colorGen(e.target);
        }   
            else if (colorToggle == true) {
                e.target.style.backgroundColor = colorPicker.value;
        } 
    })  
    }
)}

const body = document.querySelector("body");
const buttonContainer = document.createElement("div");
buttonContainer.className = "button-container";
document.body.insertBefore(buttonContainer, container);

const clearGridButton = document.createElement("button");
clearGridButton.textContent = "Clear drawing board";
clearGridButton.className = "grid-button";
buttonContainer.appendChild(clearGridButton);
clearGridButton.addEventListener("click", () => {
    clearGrid();
})
function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(sq) {
        sq.style.backgroundColor = null;
    })
}

const newGridButton = document.createElement("button");
newGridButton.textContent = "Create new grid";
newGridButton.className = "grid-button";
buttonContainer.appendChild(newGridButton);
newGridButton.addEventListener("click", () => {
    let userInput = prompt("Please enter the number of squares per side: ");
    if (userInput === null || !Number.isInteger(Number(userInput))) return;
    removeGrid();
    createGrid(userInput);
})

function removeGrid() {
    const columns = document.querySelectorAll(".col");
    columns.forEach(function(col) {
        container.removeChild(col);
    })
}

const palette = document.createElement("div");
palette.className = "palette";
document.body.appendChild(palette);

const paletteTitle = document.createElement("p");
paletteTitle.textContent = "Palette";
palette.appendChild(paletteTitle);

const paletteButtons = document.createElement("div");
paletteButtons.className = "palatte-container";
palette.appendChild(paletteButtons);

const blackWhiteButton = document.createElement("button");
blackWhiteButton.textContent = "Black & White";
paletteButtons.appendChild(blackWhiteButton);
let blackToggle = false;
let counter;
const blackHexArray = ["#e5e5e5", "#cccccc", "#b2b2b2", "#999999", "#7f7f7f",
"#666666", "#4c4c4c", "#333333", "#191919", "#000000"];
blackWhiteButton.addEventListener("click", () => {
    counter = 0;
    rgbToggle = false;
    colorToggle = false;
    blackToggle = true;
})

const rgbButton = document.createElement("button");
rgbButton.textContent = "Random colors";
paletteButtons.appendChild(rgbButton);
let rgbToggle = false;
rgbButton.addEventListener("click", () => {
    blackToggle = false;
    colorToggle = false;
    rgbToggle = true;
})

function blackWhite(elem, counter) {
    elem.style.backgroundColor = blackHexArray[counter];
    counter += 1;
    if (counter >= 10) counter = 0;
    return counter;
}


function colorGen(elem) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    elem.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

const colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.value = "#32cdcb";
paletteButtons.appendChild(colorPicker);
let colorToggle = false;
colorPicker.addEventListener("click", () => {
    blackToggle = false;
    rgbToggle = false;
    colorToggle = true;
})

createGrid(10);