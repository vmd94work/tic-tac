import React, { useState } from 'react'
import './App.css'
import './Square.css'
import Tac from './component/Tac/Tac'
import Tic from './component/Tic/Tic'

function App() {
  const [turn, setTurn] = useState('X')
  const [cells, setCells] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState('')
  const checkWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    }
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]])
        }
      })
    }
  }

  const handleClick = (num) => {
    if (cells[num] !== '') {
      alert('already clicked')
      return
    }

    let squares = [...cells]

    if (turn === 'X') {
      squares[num] = <Tac key="1" />
      setTurn('O')
    } else {
      squares[num] = <Tic key="2" />
      setTurn('X')
    }
    console.log(squares)

    setCells(squares)
    checkWinner(squares)
  }
  const handleRestart = () => {
    setWinner(null)
    setCells(Array(9).fill(''))
  }

  const Square = ({ num }) => {
    return (
      <div className="square" onClick={() => handleClick(num)}>
        {cells[num]}
      </div>
    )
  }

  return (
    <div className="wrapper">
      <div className="game">
        <div className="board">
          <div className="board__grid">
            <div className="grid__block">
              <div className="vertical">
                <div className="vl"></div>
                <div className="vl"></div>
                <div className="vl"></div>
              </div>
              <div className="horizontal">
                <div className="hz"></div>
                <div className="hz"></div>
                <div className="hz"></div>
              </div>
            </div>
          </div>
          <div className="board__items">
            <Square num={0} />
            <Square num={1} />
            <Square num={2} />
            <Square num={3} />
            <Square num={4} />
            <Square num={5} />
            <Square num={6} />
            <Square num={7} />
            <Square num={8} />
          </div>
        </div>
        <div className="players__block">
          <h2 className="players__turn"> Turn: {turn} </h2>
          <br />
          {winner && (
            <>
              <p>{winner} is the winner!</p>
              <button onClick={() => handleRestart()}>Play Again</button>
            </>
          )}
          <div className="players">
            <div className="player">
              <h2 className="player__title">Player 1:</h2>
              <span className="player__score">0</span>
            </div>
            <div className="player">
              <h2 className="player__title">Player 2:</h2>
              <span className="player__score">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
