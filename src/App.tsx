import React, { useState } from 'react';
import './App.css';

interface SudokuCellProps {
  index:number;
  value:string;
  onChange:(index:number,value:string)=>void;
}



const SudokuCell:React.FC<SudokuCellProps> = ({index,value, onChange}) => {
  return (
    <div className="sudoku-cell">
      <input
      type="text"
      maxLength={1}
      value={value}
      onChange={(e)=> onChange(index,e.target.value)}
      />
    </div>
  );
};

function App() {
  const [sudokuValues,setSudokuValues] = useState<Array<string>>(Array(81).fill(''));
  const handleInputChange = (index:number, value:string)=> {
    const newValues = [...sudokuValues];
    newValues[index] = value;
    setSudokuValues(newValues)
  };
  return (
  <div className="app">
    <header className="header">
      <h1>Sudoku Game</h1>
    </header>
    <main className="main-content">
        <div className="sudoku-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row) => (
            <div key={row} className="sudoku-row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((col) => {
                const index = (row - 1) * 9 + col - 1;
                return (
                  <SudokuCell
                    key={col}
                    index={index}
                    value={sudokuValues[index]}
                    onChange={handleInputChange}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Sudoku App</p>
      </footer>
  </div>
  );
}

export default App;
