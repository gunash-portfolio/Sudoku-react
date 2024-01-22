export const generatePartialSudoku = (): number[] => {
    const grid = Array(81).fill(0);
    fillRandomCells(grid);
    return grid;
};

const fillRandomCells = (grid:number[]):void => {
    const numCellsToFill = Math.floor(Math.random()*20)+15;
    for (let i = 0; i < numCellsToFill; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * 81);
        } while (grid[randomIndex]!==0);
        const randomValue = Math.floor(Math.random() * 9) + 1;
        if (isValidMove(grid, Math.floor(randomIndex / 9), randomIndex % 9, randomValue)) {
            grid[randomIndex] = randomValue;
          }
    }
};
export const isValidMove = (grid: number[], row: number, col: number, num: number): boolean => {
    // Check if the number is not present in the current row, column, and 3x3 grid
    return (
      !isInRow(grid, row, num) &&
      !isInColumn(grid, col, num) &&
      !isInGrid(grid, row - (row % 3), col - (col % 3), num)
    );
  };
  
  const isInRow = (grid: number[], row: number, num: number): boolean => {
    for (let i = 0; i < 9; i++) {
      if (grid[row * 9 + i] === num) {
        return true;
      }
    }
    return false;
  };
  
  const isInColumn = (grid: number[], col: number, num: number): boolean => {
    for (let i = 0; i < 9; i++) {
      if (grid[i * 9 + col] === num) {
        return true;
      }
    }
    return false;
  };
  
  const isInGrid = (grid: number[], startRow: number, startCol: number, num: number): boolean => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[(startRow + i) * 9 + startCol + j] === num) {
          return true;
        }
      }
    }
    return false;
  };