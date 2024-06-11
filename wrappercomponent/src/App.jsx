import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Child/>
       </div>
    </>
  )
}

export default App
