import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import conwayImage from './assets/cardsBg/conway.gif'
import uxImage from './assets/cardsBg/researcher.png'
import expenseImage from './assets/cardsBg/expense-tracker.jpg'
import strainerImage from './assets/cardsBg/strainer.png'
import paraderoImage from './assets/cardsBg/paradero.png'
import sessionImage from './assets/cardsBg/sessions.png'
import medibleGoImage from './assets/cardsBg/mediblego.png'
import musicatImage from './assets/cardsBg/musicat.png'
import aboutImage from './assets/cardsBg/forest.png'
import dashboardUx from './assets/dashboard.jpg'
import leanCanvas from './assets/leancanvasds.jpg'
import mailImg from './assets/mail.jpg'
import aboutBg from './assets/aboutbg.png'
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher.jsx'

const TRACKING_ID = "G-TT80NZW4ZJ"; // Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    // To report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const cardsConfig = {
    heroCard: {
      type: 'hero',
      primaryBg: '#2a116b',
      title: t('heroTitle'),
      fecha: '',
      descripcion: t('heroDescription'),
    },
    projectCardMusicat: {
      type: 'project',
      link: 'https://github.com/cacosat/musicat',
      primaryBg: musicatImage,
      title: t('projectMusicatTitle'),
      fecha: '10/05/2024',
      descripcion: t('projectMusicatDescription'),
      buttonText: t('seeMore')
    },
    projectCardStrainer : {
      type: 'project',
      link: 'https://github.com/cacosat/desafio_strainer',
      primaryBg: strainerImage,
      title: t('projectStrainerTitle'),
      fecha: '07/03/2024',
      descripcion: t('projectStrainerDescription'),
      buttonText: t('seeMore')
    },
    projectCardParadero: {
      type: 'project',
      link: 'https://github.com/cacosat/paradero',
      primaryBg: paraderoImage,
      title: t('projectParaderoTitle'),
      fecha: '03/07/2024',
      descripcion: t('projectParaderoDescription'),
      buttonText: t('seeMore')
    },
    projectCardMediblego : {
      type: 'project',
      link: 'https://mediblego.com/',
      primaryBg: medibleGoImage,
      title: t('projectMediblegoTitle'),
      fecha: '03/07/2024',
      descripcion: t('projectMediblegoDescription'),
      buttonText: t('seeMore')
    },
    projectCardExpenseTracker: {
      type: 'project',
      link: 'https://github.com/cacosat/expense-tracker',
      primaryBg: expenseImage,
      title: t('projectExpenseTrackerTitle'),
      fecha: '02/03/2024',
      descripcion: t('projectExpenseTrackerDescription'),
      buttonText: t('seeMore')

    }, 
    projectCardDesafioUx: {
      type: 'project',
      link: 'https://www.figma.com/file/Di8qum5FRzKymuNC8a0Yy2/Desafio-UX?type=design&node-id=0%3A1&mode=design&t=5IBkjNwRUNy4M8EQ-1',
      primaryBg: dashboardUx,
      title: t('projectUxChallengeTitle'),
      fecha: '28/01/2024',
      descripcion: t('projectUxChallengeDescription'),
      buttonText: t('seeMore')

    }, 
    projectCardSessions: {
      type: 'project',
      link: 'https://www.figma.com/file/BTW5BIriUPaFRey0oOBJpo/Sessions-App?type=design&node-id=0%3A1&mode=design&t=IT1p0X9HV694Gtl3-1',
      primaryBg: sessionImage,
      title: t('projectSessionsTitle'),
      fecha: '20/10/2022',
      descripcion: '',
      buttonText: t('seeMore')

    }, 
    projectCardConway: {
      type: 'project',
      link: 'https://cacosat.github.io/portafolio/pages/conway.html',
      primaryBg: conwayImage,
      title: t('projectConwayTitle'),
      fecha: '15/11/2023',
      descripcion: '',
      buttonText: t('seeMore')

    },
    aboutCard: {
      type: 'about',
      primaryBg: aboutBg,
      title: t('aboutTitle'),
      fecha: '',
      descripcion: t('aboutDescription'),

    },
    contactCard: {
      type: 'form',
      primaryBg: mailImg,
      title: t('contactTitle'),
      fecha: '',
      buttonText: t('sendMessage'),
      placeholders: {
        name: t('namePlaceholder'),
        mail: t('mailPlaceholder'),
        message: t('messagePlaceholder')
      }

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
        <Card config={cardsConfig.heroCard} className='col-span-4 xl:row-span-2 lg:row-span-2 sm:row-span-2 row-span-3 ' />
        <Card config={cardsConfig.projectCardMusicat} className='lg:col-span-4 lg:row-span-1 sm:col-span-4 sm:row-span-1 col-span-4 row-span-1' />
        <Card config={cardsConfig.projectCardMediblego} className='lg:col-span-2 lg:row-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardParadero} className='lg:col-span-2 lg:row-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardStrainer} className='lg:row-span-3 lg:col-span-1 sm:col-span-1 sm:row-span-2 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardExpenseTracker} className=' lg:col-span-1 lg:row-span-2 sm:col-span-3 sm:row-span-1 col-span-2' />
        <Card config={cardsConfig.projectCardDesafioUx} className='lg:col-span-2 lg:row-span-2 sm:col-span-3 sm:row-span-1 col-span-2' />
        <Card config={cardsConfig.projectCardSessions} className='lg:col-span-2 lg:row-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.projectCardConway} className='lg:row-span-1 lg:col-span-1 sm:col-span-2 sm:row-span-1 col-span-2 row-span-2' />
        <Card config={cardsConfig.aboutCard} className='lg:row-span-2 lg:col-span-2  sm:col-span-2 col-span-4 sm:row-span-2 row-span-3' />
        <Card config={cardsConfig.contactCard} placeholders={cardsConfig.contactCard.placeholders} className='lg:row-span-2 lg:col-span-2 sm:col-span-2 col-span-4 sm:row-span-2 row-span-3' />
        <Card config={cardsConfig.footerCard} className='col-span-4' />

      </div>
    </>
  )
}

export default App
