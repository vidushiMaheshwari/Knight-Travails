import './App.css';
import { useState } from 'react';
import { ChessBoard } from '../logic/ChessBoard';

function App() {
  const [dimensions, setDimensions] = useState([8, 8]);  // [rows, columns]
  const [startSquare, setStart] = useState([2, 0]);      // [row, column]
  const [endSquare, setEnd] = useState([1, 4]);          // [row, column]
  const [numbers, setNumbers] = useState([]);            // contains elements of form [number: [row, column]]

  let chessBoard = new ChessBoard(dimensions[0], dimensions[1]);
  chessBoard.startSquare = chessBoard.board[startSquare[0]][startSquare[1]];
  chessBoard.endSquare = chessBoard.board[endSquare[0]][endSquare[1]];

  return (
    <div>
      <></>
    </div>
  )
}

export default App;
