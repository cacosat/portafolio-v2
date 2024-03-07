import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import projectImage from './assets/cardsBg/conway.gif'

function App() {
  const [count, setCount] = useState(0)

  const cardsConfig = {
    heroCard: {
      height: '512',
      width: '1000',
      border: '2',
      primaryBg: '#2a116b',
    },
    projectCard: {
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: '#2a116b',
    }
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
