import { useState } from 'react';

function PlayerNameForm() {
  let name1 = document.querySelector("#player1");
  let name2 = document.querySelector("#player2");
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const player1Name = formData.get('player1Name');
    const player2Name = formData.get('player2Name');
    name1.disabled = true;
    name2.disabled = true;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='player1'>Player 1 Name:</label>
        <input type="text" id="player1" name="player1Name" value="Player 1"/>
        <label htmlFor='player2'>Player 2 Name:</label>
        <input type="text" id="player2" name="player2Name" value="Player 2"/>
        <button>Start</button>
      </form>
    </>
  )
}
export default PlayerNameForm