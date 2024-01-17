import React from 'react';
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
  return (
  //<SudokuCell></SudokuCell>
  <h1>Anan</h1>
  );
}

export default App;
