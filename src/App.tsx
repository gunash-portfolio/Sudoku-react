import React from 'react';
import './App.css';

interface SudokuCellProps {
  index:number;
  value:number;
  onChange:(index:number,value:string)=>void;
}

function App() {
  return (
   <h1>New project</h1>
  );
}

export default App;
