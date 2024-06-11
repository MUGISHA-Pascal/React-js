import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ref from './components/Ref'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Ref/>
     </div>
    </>
  )
}

export default App
