import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MusicPanel from './components/MusicPanel.jsx'

function App() {
  const [step, setStep] = useState("about");

  //hover:animate-[spin_10s_linear_infinite]

  /*
  <div className="fixed bottom-4 right-4">
          <MusicPanel />
        </div>
        */

  return (
    <>
      <div className="bg-background w-screen h-screen fixed top-0 left-0 z-0">
      </div>
      <div className="w-full p-0 m-0 font-serif text-primary">
        <Navigation setStep={setStep}/>
        <div className="absolute top-19 left-0 p-0 m-0 w-screen">
        {step === "about" && <About />}
        {step === "projects" && <Projects />}
        {step === "experience" && <Experience />}
        {step === "contact" && <Contact />}
        <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
