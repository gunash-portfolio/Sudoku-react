// App.tsx
import React, { useState } from 'react';
import './App.css';
import SudokuCell from './SudokuCell';

const App: React.FC = () => {
  const [sudokuValues, setSudokuValues] = useState<number[]>(Array(81).fill(null));

  const handleCellChange = (index: number, value: number | null) => {
    const newValues = [...sudokuValues];
    newValues[index] = value !== null ? value : 0;
    setSudokuValues(newValues);
  };

  return (
    <div className="app">
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
        <button onClick={() => console.log(sudokuValues)}>Check Solution</button>
      </main>
    </div>
  );
};

export default App;
