import { useState } from "react";
import Button from '@mui/material/Button';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { GameBox } from "./GameBox";

//Parent component -> child component (Data)
export function TicTacToe() {
  const [board, setBoard] = useState(
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (var i in lines) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);

  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (winner === null && board[index] === null) {
      //copy the board and replace with "X" in the clicked GameBox
      //update only untouched boxes untill no winner
      const boardCopy = [...board];
      //console.log(boardCopy, index);
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
      //console.log(index);
    }
  };

  const { width, height } = useWindowSize();

  const styles = {
    textAlign: "center",
    marginTop: "10px",
  };

  const styles1 = {
    marginBottom: "15px",
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={styles1}>Welcome to Tic Tac Toe !!!</h2>
      <div className="full-game">
        {winner ? <Confetti width={width} height={height} /> : " "}
        <div className="board">
          {board.map((val, index) => <GameBox val={val} onPlayerClick={() => handleClick(index)} />)}
        </div>
        {/* <GameBox /> */}
      </div>
      {winner ? <h1 style={styles}>Winner is: {winner}</h1> : " "}
      <div className="button">
        <Button id="button" variant="contained" className="button" color="warning" onClick={() => {
          setBoard(
            [null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null]); setIsXTurn(true);
        }}>Restart</Button>
      </div>
    </div>
  );
}
