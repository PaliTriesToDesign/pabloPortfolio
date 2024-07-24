import { postsInfo } from "../posts-info.js";
const text = document.getElementById("text");
document.title = postsInfo[0].title;

// GRID ==========================
const gridContainer = document.getElementById('gridContainer');
const grid = {rows: 27, columns: 50};
let cellELement;
let cellsArr = [];
let cellHoverMatrix = [
    -grid.columns - 1, -grid.columns, -grid.columns + 1,
    -1,                  /*center*/                  +1,
    +grid.columns - 1, +grid.columns, +grid.columns + 1
]

let totalCells = grid.rows * grid.columns;

createCells(gridContainer, cellsArr, totalCells);

function createCells(parentContainer, cellsArray, numOfCells){
    for(let i = 0; i <= numOfCells; i++){
        cellELement = document.createElement('div');
        cellELement.classList.add('cell');
        cellELement.id = `cell-${i}`;
        parentContainer.appendChild(cellELement);
        cellsArray.push(cellELement);
    };
}

function colorCell(cell){
    gsap.to(cell, {
        borderRadius: 8,
        opacity: 0.5
    });

    gsap.to(cell, {
        borderRadius: 0,
        duration: 0.8,
        ease: "power4.out",
        opacity: .02,
        delay: 0.35,
    });
};

cellsArr.forEach((cell, index) => {
    cell.addEventListener('mouseenter', () => {
        let randNumOfCells = Math.floor(Math.random() * cellHoverMatrix.length) + 1;

        for(let i = 0; i < randNumOfCells; i++){
            let randMatrixPosition = Math.floor(Math.random() * cellHoverMatrix.length);

            let targetIndex = index + cellHoverMatrix[randMatrixPosition];

            colorCell(cellsArr[targetIndex]);
        };
    });
});

document.addEventListener("mousedown", toggleArrowColor);
document.addEventListener("mouseup", toggleArrowColor);

function toggleArrowColor(event){
    text.style.color = event.type === "mousedown" ? "#72ff89" : "#fff";
}
// END OF GRID ===================

// PARTIAL RESULT 1 ==============
const partialResult1 = document.getElementById("partialResult1");
let partialArray1 = [];
let partialGrid = {cols: 20, rows: 20}
let partialCellsAmount = partialGrid.cols * partialGrid.rows;

createCells(partialResult1, partialArray1, partialCellsAmount);
// END OF  PARTIAL RESULT 1 ======


// PARTIAL RESULT 2 ======
const partialResult2 = document.getElementById("partialResult2");
let partialMatrix = [
    -partialGrid.cols - 1, -partialGrid.cols, -partialGrid.cols + 1,
    -1,                  /*center*/                  +1,
    +partialGrid.cols - 1, +partialGrid.cols, +partialGrid.cols + 1
]
let partialArray2 = [];

createCells(partialResult2, partialArray2, partialCellsAmount);

partialArray2.forEach((cell, index) => {
    cell.addEventListener('mouseenter', () => {
        let randNumOfCells = Math.floor(Math.random() * partialMatrix.length) + 1;

        for(let i = 0; i < randNumOfCells; i++){
            let randMatrixPosition = Math.floor(Math.random() * partialMatrix.length);

            let targetIndex = index + partialMatrix[randMatrixPosition];

            partialArray2[targetIndex].style.opacity = '1';
            setTimeout(() => {
                partialArray2[targetIndex].style.opacity = '0.02';
            }, 200);
        };
    });

});
// END OF PARTIAL RESULT 2 ======