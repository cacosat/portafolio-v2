import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const cardsConfig = {
    heroCard: {
      height: '512',
      width: '512',
      border: '1',
      borderColor: '#FFFFFF',
      primaryGradient: 'rgb(42,17,107)',
      shadowGradient: '#000000'
    },
  }

  return (
    <>
      <div className=''>dsñfjk</div>
      <h1 className=' '>Vite + React</h1>
      {/* TODO: Function to calculate height, width and border to pass it into Card */}
      <Card config={cardsConfig} />
    </>
  )
}

export default App
