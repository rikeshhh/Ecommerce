import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import CombineHeader from './Component/Header/CombineHeader'
import { Herosection } from './Component/Herosection/Herosection'
//https://api.escuelajs.co/api/v1/products
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <CombineHeader/>
    </header>
    <main>
      <Herosection/>
    </main>
    </>
  )
}

export default App
