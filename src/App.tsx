import React from 'react';
import './App.css';

interface SudokuCellProps {
  index:number;
  value:string;
  onChange:(index:number,value:string)=>void;
}

const Tutorial = (index:number,value:string)=> {
return (
  <h1>First OnChange</h1>
)
};

const SudokuCell:React.FC<SudokuCellProps> = ({index,value, onChange}) => {
  return (
    <h1>Anan</h1>
  )
}

function App() {
  return (
  <SudokuCell index={1} value={"emiler"} onChange={Tutorial}></SudokuCell>
  );
}

export default App;
