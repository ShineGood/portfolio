import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Dragdropgal from './components/dragdopgal'
import './App.css'

function App() {
  return (

  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/dragdropgal" element={<Dragdropgal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thankyou" element={<ThankYou/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;