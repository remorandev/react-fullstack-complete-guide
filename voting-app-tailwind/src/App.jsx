import { useState } from 'react'
import VotingApp from './layout/VotingApp/VotingApp'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <VotingApp/>
    </div>
  )
}

export default App
