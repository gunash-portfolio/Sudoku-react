export const generatePartialSudoku = (): number[] => {
    const grid = Array(81).fill(0);
    fillRandomCells(grid);
    return grid;
};

const fillRandomCells = (grid:number[]):void => {
    const numCellsToFill = Math.floor(Math.random()*20)+15;
};