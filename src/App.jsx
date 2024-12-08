import './App.css'
import About from './component/About'
import Certificate from './component/Certificate'
import ContactPage from './component/ContactPage'
import Footer from './component/Footer'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Projects from './component/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Certificate />
      <Projects />
      <ContactPage />
      <Footer />
    </>
  )
}

export default App
