import { useState } from 'react'

import './App.css'
import VotingPanel from './layout/VotingPanel/VotingPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <VotingPanel/>
    </div>
  )
}

export default App
