import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import conwayImage from './assets/cardsBg/conway.gif'
import uxImage from './assets/cardsBg/researcher.png'
import expenseImage from './assets/cardsBg/expense-tracker.jpg'
import sessionImage from './assets/cardsBg/sessions.png'
import aboutImage from './assets/cardsBg/forest.png'


function App() {

  const cardsConfig = {
    heroCard: {
      height: '512',
      width: '1000',
      border: '2',
      primaryBg: '#2a116b',
    },
    projectCardExpenseTracker: {
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: expenseImage,
      title: 'Desarrollo de producto asistido por IA',
      fecha: '01-01-2020',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at. Commodo porttitor varius mauris aliquet nibh ultrices in. Mollis non sapien morbi a. Aliquam et tellus tortor vitae eu.',

    }, 
    projectCardMedible: {
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: uxImage,
      title: 'Experiencia con Medible',
      fecha: '01-01-2020',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at. Commodo porttitor varius mauris aliquet nibh ultrices in. Mollis non sapien morbi a. Aliquam et tellus tortor vitae eu.',

    }, 
    projectCardSessions: {
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: sessionImage,
      title: 'Aplicación de productividad en base a la técnica pomodoro',
      fecha: '01-01-2020',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at. Commodo porttitor varius mauris aliquet nibh ultrices in. Mollis non sapien morbi a. Aliquam et tellus tortor vitae eu.',

    }, 
    projectCardConway: {
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: conwayImage,
      title: "Conway's Game of life",
      fecha: '01-01-2020',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at. Commodo porttitor varius mauris aliquet nibh ultrices in. Mollis non sapien morbi a. Aliquam et tellus tortor vitae eu.',

    },
    aboutCard: {
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: aboutImage,
      title: 'Más sobre mi',
      fecha: '',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at. Commodo porttitor varius mauris aliquet nibh ultrices in. Mollis non sapien morbi a. Aliquam et tellus tortor vitae eu.',

    },
    contactCard: {
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: '#FFFFFF',
      title: 'Hablemos',
      fecha: '01-01-2020',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at. Commodo porttitor varius mauris aliquet nibh ultrices in. Mollis non sapien morbi a. Aliquam et tellus tortor vitae eu.',

    }
  }
  

  return (
    <>
      <div className='grid grid-cols-4 grid-rows-9 gap-4 m-4 md:m-16 max-w-[1280px]'>
        {/* TODO toggle for description */}
        {/* TODO Responsiveness: below 750px change layout */}
        <Card config={cardsConfig.heroCard} className='col-span-4 row-span-3' />
        <Card config={cardsConfig.projectCardExpenseTracker} className=' row-span-3' />
        <Card config={cardsConfig.projectCardMedible} className='col-span-3 row-span-2' />
        <Card config={cardsConfig.projectCardSessions} className='col-span-3' />
        <Card config={cardsConfig.projectCardConway} className='row-span-3' />
        <Card config={cardsConfig.aboutCard} className='row-span-3 col-span-2' />
        <Card config={cardsConfig.contactCard} className='row-span-3' />

      </div>
      <h1 className=' '>footer</h1>
    </>
  )
}

export default App
