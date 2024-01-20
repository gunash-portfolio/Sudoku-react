// Update App.tsx
import React, { useState } from 'react';
import './App.css';
import SudokuCell from './SudokuCell';

const App: React.FC = () => {
  const [sudokuValues, setSudokuValues] = useState<number[]>([]);

  const handleCellChange = (index: number, value: number | null) => {
    const newValues = [...sudokuValues];
    newValues[index] = value !== null ? value : 0;
    setSudokuValues(newValues);
  };

  const checkSolution = () => {
    if (isSudokuSolved(sudokuValues)) {
      alert('Congratulations! You solved the puzzle correctly!');
    } else {
      alert('Keep trying! The solution is not correct.');
    }
  };

  const isSudokuSolved = (values: number[]): boolean => {
    // Check each row, column, and 3x3 grid for duplicates
    return (
      isSectionValid(values, checkRow) &&
      isSectionValid(values, checkColumn) &&
      isSectionValid(values, checkGrid)
    );
  };

  const isSectionValid = (values: number[], checkFunction: (section: number[]) => boolean): boolean => {
    for (let i = 0; i < 9; i++) {
      const section = values.slice(i * 9, (i + 1) * 9);
      if (!checkFunction(section)) {
        return false;
      }
    }
    return true;
  };

  const checkRow = (row: number[]): boolean => {
    return new Set(row).size === 9 && row.every((value) => value !== 0);
  };

  const checkColumn = (column: number[]): boolean => {
    return checkRow(column);
  };

  const checkGrid = (grid: number[]): boolean => {
    return checkRow(grid);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Sudoku App</h1>
      </header>
      <main className="main-content">
        <div className="sudoku-grid">
          {[...Array(9)].map((_, rowIndex) => (
            <div key={rowIndex} className="sudoku-row">
              {[...Array(9)].map((_, colIndex) => {
                const index = rowIndex * 9 + colIndex;
                return (
                  <SudokuCell
                    key={colIndex}
                    value={sudokuValues[index]}
                    onChange={(value) => handleCellChange(index, value)}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <button onClick={checkSolution}>Check Solution</button>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Sudoku App</p>
      </footer>
    </div>
  );
};

export default App;
