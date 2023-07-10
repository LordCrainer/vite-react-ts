import { useState } from "react"
import "./ticTacToe.css"

function Square({ value, onSquareClick }: { value: string, onSquareClick?: () => void }) {
  return (
    <button className="tt-square" onClick={onSquareClick}>{value}</button>
  )
}

function Board({ symbol }: { symbol: string }) {
  const squares = Array(9).fill(null)
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  const getNumber = (row: number, col: number) => (row * 3) + col + 1
  const [currentSquares, setCurrentSquares] = useState(squares)

  const setValue = (row: number, col: number) => {
    const index = getNumber(row, col)
    const newArray = [...currentSquares]
    newArray[index] = symbol
    setCurrentSquares(newArray)
  }
  return (
    <> 
      <div>
        {matrix.map((row, indexRow) => (
          <div key={indexRow}>
            {row.map((col, colIndex) => {
              const number = getNumber(indexRow, colIndex)
              return (
                <Square key={number} value={squares[number]} onSquareClick={() => setValue(indexRow, colIndex)}></Square>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}

const Player = ({ player }: { player: string }) => {
  return (
    <div>
      Siguiente Jugador: {player}
    </div>
  )
}

export function TicTacToe() {
  const players = [{ name: "Carlos" }, { name: "Kenya" }]
  const symbols = ["x", "o"]
  const [turn, setTurn] = useState(0)
  const currentPlayer = { name: players[turn], symbol: symbols[turn] }

  return (
    <div>
      <Player player={currentPlayer.symbol}></Player>
      <Board symbol={currentPlayer.symbol}></Board>
    </div>

  )
}