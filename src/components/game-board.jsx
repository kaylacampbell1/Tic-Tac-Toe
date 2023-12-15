import { useState } from 'react';
import '../game-board.css';



export default function GameBoard() {
  const [player, setPlayer] = useState('X');
  const [cellArr, setCellArr] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleClick = (event) => {
    let cellList = document.querySelectorAll(".cell");

    if (!event.target.textContent) {
      event.target.textContent = player;
      setPlayer(player === 'X' ? 'O' : 'X');
    }
    
    
  }
  return (
    <section id="game-board" onClick={handleClick}>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
      <div class="row">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell"></div>
      </div>
    </section>
  )
}