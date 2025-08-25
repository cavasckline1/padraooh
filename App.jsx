import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SobreOOH from './components/SobreOOH'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe'
import Processo from './components/Processo'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SobreOOH />
      <Servicos />
      <Equipe />
      <Processo />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
