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

  return (
    <>
      <div className="bg-amber-50 w-full p-0 m-0 font-serif">
        <Navigation setStep={setStep}/>
        <div className="absolute top-16 left-0 p-0 m-0 w-screen">
        {step === "about" && <About />}
        {step === "projects" && <Projects />}
        {step === "experience" && <Experience />}
        {step === "contact" && <Contact />}
        <Footer />
        </div>
        <div className="fixed bottom-4 right-4">
          <MusicPanel />
        </div>
      </div>
    </>
  )
}

export default App;
