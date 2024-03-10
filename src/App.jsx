import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import projectImage from './assets/cardsBg/conway.gif'
import forestImage from './assets/cardsBg/forest.png'

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
      primaryBg: projectImage,
    }
  }
  

  return (
    <>
      <div className=''>dsñfjk</div>
      <h1 className=' '>grid container</h1>
      {/* TODO: Function to calculate height, width and border to pass it into Card */}
      <Card config={cardsConfig.heroCard} />
      <Card config={cardsConfig.projectCard} />
    </>
  )
}

export default App
