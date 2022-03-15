import './App.css';
import { useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip';

import './assets/css/layout.css'

import {
  Sidebar,
  GoToTop,
  Preloader,
} from './components/Index'
import { Toaster } from 'react-hot-toast'

import TopBar from './Sections/TopBar/TopBar'
import Services from './Sections/Services/Services'
import SkillCard from './Sections/MySkills/MySkills'
import Social from './Sections/Social/Social'
import Contact from './Sections/ContactUs/ContactUs'
import Footer from './Sections/Footer/Footer'
import Header from './Sections/Header/Header'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (<>
    {loading ? <Preloader /> : (<div className="app-container">
      <Sidebar />
      <div className="">
        <Header />
        <TopBar />
        <Social />
        <Services />
        <SkillCard />
        <Contact />
        <Footer />
      </div>
      <ReactTooltip place="top" type="info" effect="float" className="custom-tooltp" />
      <Toaster />
    </div>)}
    < GoToTop />
  </>
  );
}

export default App;
