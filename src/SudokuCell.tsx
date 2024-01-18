// SudokuCell.tsx
import React, { ChangeEvent } from 'react';

interface SudokuCellProps {
  value: number;
  onChange: (value: number | null) => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 9) {
      onChange(parsedValue);
    } else {
      onChange(null);
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={value !== null ? value : ''}
      onChange={handleChange}
      className="sudoku-cell"
    />
  );
};

export default SudokuCell;
