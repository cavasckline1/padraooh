import React from 'react'
import { motion } from 'framer-motion'
import { Award, TrendingDown, Camera, Handshake, Trophy } from 'lucide-react'
import selosImg from '../assets/selos_qualidade.png'

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: Award,
      title: "Qualificação com Selos",
      description: "Avaliamos e certificamos veículos e ativos com selos Bronze, Prata e Ouro, garantindo transparência e qualidade em cada campanha.",
      color: "text-secondary"
    },
    {
      icon: TrendingDown,
      title: "Melhores Custos",
      description: "Negociações estratégicas e parcerias sólidas para otimizar seu investimento sem comprometer a qualidade da entrega.",
      color: "text-accent"
    },
    {
      icon: Camera,
      title: "Checking Fotográfico Padronizado",
      description: "Padrão técnico fotográfico rigoroso para garantir qualidade de entrega e documentação profissional de todas as campanhas.",
      color: "text-primary"
    },
    {
      icon: Handshake,
      title: "Relacionamento Premium",
      description: "Não vendemos publicidade, criamos relacionamentos duradouros. Nossa equipe está focada em entregar o melhor atendimento.",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Expertise Comprovada",
      description: "Equipe com anos de atuação em veículos de mídia exterior, trazendo conhecimento profundo do mercado brasileiro.",
      color: "text-accent"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="diferenciais" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a <span className="text-gradient">Padrão OOH</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos diferenciais únicos no mercado garantem que sua campanha de mídia exterior 
            tenha o máximo de qualidade, transparência e resultados.
          </p>
        </motion.div>

        {/* Selos de Qualidade */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img 
              src={selosImg} 
              alt="Selos de Qualidade Bronze, Prata e Ouro" 
              className="h-32 w-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {diferenciais.map((diferencial, index) => {
            const IconComponent = diferencial.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 h-full border border-border card-hover quality-seal">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${diferencial.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {diferencial.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {diferencial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para experimentar a diferença?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Descubra como nossos diferenciais podem transformar sua próxima campanha de mídia exterior.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Solicitar Proposta Personalizada
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Diferenciais

