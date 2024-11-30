import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConsultationForm from './components/ConsultationForm'
import Features from './components/Features'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <header className="bg-[#112152]">
        <Navbar />
        <Hero />
      </header>
      <ConsultationForm />
      <Features />
      <Banner />
    </>
  )
}

export default App
