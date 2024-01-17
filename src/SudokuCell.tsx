// SudokuCell.tsx
import React, { ChangeEvent } from 'react';

interface SudokuCellProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedValue = inputValue === '' ? null : parseInt(inputValue, 10);

    onChange(parsedValue);
  };

  return (
    <input
      type="text"  // Use type="text" to disable the number input arrows
      inputMode="numeric"  // Set inputMode to "numeric" for better mobile support
      pattern="[0-9]*"  // Set pattern to allow only numeric input
      value={value !== null ? value : ''}
      onChange={handleChange}
      className="sudoku-cell"
    />
  );
};

export default SudokuCell;
