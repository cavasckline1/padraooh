import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, Truck, Building, Zap, MapPin, Navigation } from 'lucide-react'

const SobreOOH = () => {
  const tiposMidia = [
    {
      icon: Monitor,
      title: "Front Light",
      description: "Painéis iluminados com alta visibilidade"
    },
    {
      icon: Building,
      title: "Outdoor",
      description: "Mídia exterior tradicional de grande impacto"
    },
    {
      icon: Truck,
      title: "Busdoor",
      description: "Publicidade em ônibus urbanos"
    },
    {
      icon: Monitor,
      title: "Painel Digital",
      description: "Displays digitais interativos"
    },
    {
      icon: Navigation,
      title: "Painel Rodoviário",
      description: "Mídia estratégica em rodovias"
    },
    {
      icon: Building,
      title: "Empena",
      description: "Painéis em laterais de edifícios"
    }
  ]

  return (
    <section id="sobre-ooh" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que fazemos na <span className="text-primary">Padrão OOH</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos especialistas em <strong>mídia exterior (OOH)</strong> e <strong>mídia exterior digital (DOOH)</strong>, 
              oferecendo soluções completas para sua marca alcançar o público certo no momento ideal. 
              Nossa expertise abrange todos os formatos de publicidade externa, desde os tradicionais 
              até as mais modernas tecnologias digitais.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de 12 anos de experiência no mercado, desenvolvemos um sistema único de 
              qualificação que garante a melhor performance para cada campanha, trabalhando com 
              os principais veículos e formatos do país.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tiposMidia.map((tipo, index) => {
            const IconComponent = tipo.icon
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-xl p-6 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {tipo.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tipo.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Sua marca merece estar nos melhores lugares
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Descubra como podemos potencializar sua presença no mercado com as melhores 
              soluções em mídia exterior e digital.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('servicos')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Conhecer Nossos Serviços
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SobreOOH

