import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Get from "./components/Get"
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
 <Get/>
   </div>
    )
}

export default App
