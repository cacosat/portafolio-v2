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
      type: 'hero',
      height: '512',
      width: '1000',
      border: '2',
      primaryBg: '#2a116b',
      title: 'Joaquín Sateler',
      fecha: '',
      descripcion: 'Psicólogo trabajando en Experiencia de Usuario (UX), diseñando soluciones tecnológicas con base en la conducta de las persona. Siempre con espíritu de aprendizaje y descubrimiento.',
    },
    projectCardExpenseTracker: {
      type: 'project',
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: expenseImage,
      title: 'Desarrollo de producto asistido por IA',
      fecha: '01-01-2020',
      descripcion: 'Creación y desarrollo de producto asistido por IA de inicio a fin.',

    }, 
    projectCardMedible: {
      type: 'project',
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: uxImage,
      title: 'Experiencia con Medible',
      fecha: '01-01-2020',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at.',

    }, 
    projectCardSessions: {
      type: 'project',
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: sessionImage,
      title: 'Aplicación de productividad en base a la técnica pomodoro',
      fecha: '01-01-2020',
      descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam faucibus vel imperdiet elementum non pulvinar quis at.',

    }, 
    projectCardConway: {
      type: 'project',
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: conwayImage,
      title: "Conway's Game of life",
      fecha: '01-01-2020',
      descripcion: '',

    },
    aboutCard: {
      type: 'project',
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: aboutImage,
      title: 'Más sobre mi',
      fecha: '',
      descripcion: 'Soy psicólogo con experiencia en el desarrollo de productos desde su concepción hasta su finalización, especializándome en Experiencia de Usuario (UX), en particular en UX Research. La combinación de conocimientos en psicología y tecnología me permite ofrecer una perspectiva única y altamente valiosa',

    },
    contactCard: {
      type: 'form',
      height: '712',
      width: '400',
      border: '2', 
      primaryBg: '#FFFFFF',
      title: 'Hablemos',
      fecha: '01-01-2020',

    }, 
    footerCard: {
      type: 'footer',
      height: '512',
      width: '1000',
      border: '2',
      primaryBg: '#2a116b',
      title: 'Footer'
    },
  }
  

  return (
    <>
      <div className='grid grid-cols-4 grid-rows-9 gap-4 m-2 sm:m-8 max-w-[1280px]'>
        {/* TODO toggle for description */}
        {/* TODO Responsiveness: below 750px change layout */}
        <Card config={cardsConfig.heroCard} className='col-span-4 row-span-3' />
        <Card config={cardsConfig.projectCardExpenseTracker} className=' lg:row-span-2 lg:col-span-1 sm:col-span-1 sm:row-span-3 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardMedible} className='lg:col-span-3 lg:row-span-1 sm:col-span-3 sm:row-span-1 col-span-2' />
        <Card config={cardsConfig.projectCardSessions} className='lg:col-span-3 lg:row-span-1 sm:col-span-2 sm:row-span-2 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardConway} className='lg:row-span-2 lg:col-span-1 sm:col-span-1 sm:row-span-2 col-span-2' />
        <Card config={cardsConfig.aboutCard} className='lg:row-span-2 lg:col-span-2  sm:col-span-2 sm:row-span-1 col-span-4 row-span-2' />
        <Card config={cardsConfig.contactCard} className='lg:row-span-2 lg:col-span-1 sm:col-span-2 sm:row-span-1 col-span-4 row-span-2' />
        <Card config={cardsConfig.footerCard} className='col-span-4' />

      </div>
      <h1 className=' '>footer</h1>
    </>
  )
}

export default App
