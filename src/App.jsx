import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import conwayImage from './assets/cardsBg/conway.gif'
import uxImage from './assets/cardsBg/researcher.png'
import expenseImage from './assets/cardsBg/expense-tracker.jpg'
import sessionImage from './assets/cardsBg/sessions.png'
import aboutImage from './assets/cardsBg/forest.png'
import dashboardUx from './assets/dashboard.jpg'
import leanCanvas from './assets/leancanvasds.jpg'
import ReactGA from 'react-ga';

const TRACKING_ID = "G-TT80NZW4ZJ"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

function App() {

  useEffect(() => {
    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  const cardsConfig = {
    heroCard: {
      type: 'hero',
      primaryBg: '#2a116b',
      title: 'Joaquín Sateler',
      fecha: '',
      descripcion: 'Actualmente trabajando en Experiencia de Usuario (UX). Me interesa la intersección entre las tecnologías informáticas y las personas, en cómo herramientas digitales pueden potenciar nuestras capacidades, que es lo que se requiere para lograrlo y también cómo mejor lograrlo.',
    },
    projectCardExpenseTracker: {
      type: 'project',
      link: 'https://github.com/cacosat/expense-tracker',
      primaryBg: expenseImage,
      title: 'Desarrollo de producto asistido por IA',
      fecha: '02/03/2024',
      descripcion: 'Creación y desarrollo de producto asistido por IA de inicio a fin.',

    }, 
    projectCardDesafioUx: {
      type: 'project',
      link: 'https://www.figma.com/file/Di8qum5FRzKymuNC8a0Yy2/Joaquin-Sateler-DataScope-UX?type=design&node-id=0-1&mode=design&t=jCN0rX3dagE1gAvo-0',
      primaryBg: leanCanvas,
      title: 'Desafío UX: gestión de menús',
      fecha: '28/01/2024',
      descripcion: 'El desafío fue diseñar una interfaz para la gestión de menús en línea de un restaurante de comida rápida, buscando mejorar los ingresos y la disponibilidad de productos. Para trabajar este problema y encontrar una solución, trabajé con un Lean UX Canvas.',

    }, 
    projectCardSessions: {
      type: 'project',
      link: 'https://www.figma.com/file/BTW5BIriUPaFRey0oOBJpo/Sessions-App?type=design&node-id=0%3A1&mode=design&t=IT1p0X9HV694Gtl3-1',
      primaryBg: sessionImage,
      title: 'Aplicación de productividad en base a la técnica pomodoro',
      fecha: '20/10/2022',
      descripcion: '',

    }, 
    projectCardConway: {
      type: 'project',
      link: 'https://cacosat.github.io/portafolio/pages/conway.html',
      primaryBg: conwayImage,
      title: "Conway's Game of life",
      fecha: '15/11/2023',
      descripcion: '',

    },
    aboutCard: {
      type: 'about',
      primaryBg: aboutImage,
      title: 'Más sobre mi',
      fecha: '',
      descripcion: 'Soy psicólogo con experiencia en el desarrollo de productos desde su concepción hasta su finalización, especializándome en Experiencia de Usuario (UX), en particular en UX Research. Tengo intereses en diferentes tecnologías, como la Inteligencia Artificial (IA), y como ponerlas al servicio de las personas de en función de lo que nos enseñan campos de estudio como el de Interacción Humano-Computadora (HCI) y Experiencia de Usuario (UX), entre otros.',

    },
    contactCard: {
      type: 'form',
      primaryBg: '#505050',
      title: 'Hablemos!',
      fecha: '',

    }, 
    footerCard: {
      type: 'footer',
      primaryBg: '#0F0821',
      title: ''
    },
  }
  

  return (
    <>
      <div className='grid grid-cols-4 grid-rows-9 gap-4 m-2 sm:m-8 max-w-[1280px]'>
        {/* TODO toggle for description */}
        {/* TODO Responsiveness: below 750px change layout */}
        <Card config={cardsConfig.heroCard} className='col-span-4 lg:row-span-3 sm:row-span-2 row-span-3 ' />
        <Card config={cardsConfig.projectCardExpenseTracker} className=' lg:row-span-3 lg:col-span-1 sm:col-span-1 sm:row-span-2 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardDesafioUx} className='lg:col-span-3 lg:row-span-2 sm:col-span-3 sm:row-span-1 col-span-2' />
        <Card config={cardsConfig.projectCardSessions} className='lg:col-span-2 lg:row-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardConway} className='lg:row-span-1 lg:col-span-1 sm:col-span-1 sm:row-span-1 col-span-2' />
        <Card config={cardsConfig.aboutCard} className='lg:row-span-2 lg:col-span-2  sm:col-span-2 col-span-4 sm:row-span-2 row-span-3' />
        <Card config={cardsConfig.contactCard} className='lg:row-span-2 lg:col-span-2 sm:col-span-2 col-span-4 sm:row-span-2 row-span-3' />
        <Card config={cardsConfig.footerCard} className='col-span-4' />

      </div>
    </>
  )
}

export default App
