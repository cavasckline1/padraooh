import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImg from '../assets/hero_background_colorful.png'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Digital LED Billboard Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Padrão OOH
              <span className="block text-secondary drop-shadow-lg">Excelência em</span>
              <span className="block">Mídia Exterior</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/95 mb-8 max-w-2xl drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Equipe especializada com 12+ anos de experiência. Qualificamos veículos e ativos 
              com selos de qualidade Bronze, Prata e Ouro para garantir o melhor resultado 
              para sua campanha.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('servicos')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold group shadow-lg"
              >
                Conhecer Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contato')}
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold group shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2 drop-shadow-lg">12+</div>
                <div className="text-white/90 text-sm drop-shadow-md">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2 drop-shadow-lg">100%</div>
                <div className="text-white/90 text-sm drop-shadow-md">Qualidade Garantida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2 drop-shadow-lg">24/7</div>
                <div className="text-white/90 text-sm drop-shadow-md">Suporte Dedicado</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Carousel de Ativos */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-96">
              {/* Container do carousel */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
                <div className="carousel-container h-full">
                  {/* Slide 1 - Outdoor */}
                  <div className="carousel-slide bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-center items-center text-white">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-2xl font-bold mb-2">Outdoor</h3>
                    <p className="text-center text-blue-100">Mídia exterior tradicional de grande impacto visual</p>
                  </div>
                  
                  {/* Slide 2 - Busdoor */}
                  <div className="carousel-slide bg-gradient-to-br from-green-600 to-green-800 p-8 flex flex-col justify-center items-center text-white">
                    <div className="text-6xl mb-4">🚌</div>
                    <h3 className="text-2xl font-bold mb-2">Busdoor</h3>
                    <p className="text-center text-green-100">Publicidade móvel em ônibus urbanos</p>
                  </div>
                  
                  {/* Slide 3 - Painel Digital */}
                  <div className="carousel-slide bg-gradient-to-br from-purple-600 to-purple-800 p-8 flex flex-col justify-center items-center text-white">
                    <div className="text-6xl mb-4">📺</div>
                    <h3 className="text-2xl font-bold mb-2">Painel Digital</h3>
                    <p className="text-center text-purple-100">Displays digitais interativos de alta definição</p>
                  </div>
                  
                  {/* Slide 4 - Front Light */}
                  <div className="carousel-slide bg-gradient-to-br from-orange-600 to-orange-800 p-8 flex flex-col justify-center items-center text-white">
                    <div className="text-6xl mb-4">💡</div>
                    <h3 className="text-2xl font-bold mb-2">Front Light</h3>
                    <p className="text-center text-orange-100">Painéis iluminados com alta visibilidade</p>
                  </div>
                </div>
              </div>
              
              {/* Indicadores do carousel */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium drop-shadow-md">Role para baixo</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

