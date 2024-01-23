# Sudoku App

Sudoku App is a simple React application that allows users to play Sudoku puzzles and check their solutions.

## Getting Started

To run the Sudoku App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sudoku-app.git
    ```
2. Instal Dependencies:
    ```bash
    cd sudoku-app
    npm install
    ```
3. Run the app:
    ```bash
    npm start
    ```    
    The app will be accessible at [Localhost:3000](http://localhost:3000)


## How to Play

1. The Sudoku grid is displayed on the main screen, and you can fill in the cells with numbers.
2. To fill in a cell, click on it and enter a number.
3. To check your solution, click the "Check Solution" button.

## Features

- Dynamic Sudoku Grid: The app generates a partial Sudoku grid for users to complete.
- Solution Checker: Users can check whether their solution is correct.

## Technologies Used
- React
- Typescript

## Folder Structure
- src/
    - SudokuCell.tsx: Component for individual Sudoku cells.
    - SudokuGenerator.ts: Module for generating partial Sudoku grids.
    - App.tsx: Main application file.

# SudokuCell Component    
The SudokuCell component represents an individual cell in the Sudoku grid. It allows users to input numbers and handles changes in the cell value.

### Code Explanation
```tsx
// SudokuCell.tsx
import React, { ChangeEvent } from 'react';

interface SudokuCellProps {
  value: number | null;
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
      value={value !== null && value !== 0 ? value : ''}
      onChange={handleChange}
      className="sudoku-cell"
    />
  );
};

export default SudokuCell;
```
- The `SudokuCell` component is a functional React component that takes `value` and `onChange` as props. 
- It renders an `<input>`element where users can input numeric values.
- The `handleChange` function is responsible for parsing the input value and updating the cell value accordingly.
- The `value` prop represents the current value of the cell, and the `onChange` prop is a callback function to handle value changes.
- The input element is configured to only accept numeric input, and invalid inputs result in a `null` value.
Feel free to customize this explanation or add more details if necessary!