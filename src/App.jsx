import { useState } from 'react'
import PlayerNameForm from './components/player-form'
import './App.css'
import GameBoard from './components/game-board'
import CurrentPlayer from './components/current-player';

function App() {

  return (
    <>
      <PlayerNameForm />
      <CurrentPlayer />
      <GameBoard />
    </>
  )
}

export default App
