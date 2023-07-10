import { useState } from "react"
import "./ticTacToe.css"

function Square({ value, onSquareClick }: { value: string, onSquareClick?: () => void }) {
  return (
    <button className="tt-square" onClick={onSquareClick}>{value}</button>
  )
}

function Board({ matrix, playing, squares }: { matrix: number[][], playing: (v: number) => void, squares: string[] }) {

  const getIndexFromMatrix = (row: number, col: number) => (row * 3) + col + 1

  const handleClick = (index: number) => {
    playing(index)
  }
  return (
    <>
      <div>
        {matrix.map((row, indexRow) => (
          <div key={indexRow}>
            {row.map((col, colIndex) => {
              const number = getIndexFromMatrix(indexRow, colIndex)
              return (
                <Square key={number} value={squares[number]} onSquareClick={() => handleClick(number)}></Square>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}

const Player = ({ name, symbol }: { name: string, symbol: string }) => {
  return (
    <div>
      Siguiente Jugador: {name} {symbol}
    </div>
  )
}

export function TicTacToe() {
  const [turn, setTurn] = useState(0)
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const matrixsElements = matrix.flat().length

  const [history, setHistory] = useState(Array(matrixsElements).fill(null))

  const players = [{ name: "Carlos", symbol: "x" }, { name: "Kenya", symbol: "o" }]
  const { name, symbol } = players[turn]

  const handlePlay = (i: number) => {
    const newArray = [...history]
    newArray[i] = symbol
    setHistory(newArray)
  }

  return (
    <div>
      <Player name={name} symbol={symbol}></Player>
      <Board squares={history} playing={handlePlay} matrix={matrix}></Board>
    </div>

  )
}