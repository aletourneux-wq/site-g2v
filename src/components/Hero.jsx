import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="pt-16">
      {/* Title block */}
      <div className="text-center py-14 md:py-20 px-4">
        <motion.h1
          className="text-hero"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Artisans<br />Bâtisseurs
        </motion.h1>
      </div>

      {/* Split images */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Événements */}
        <Link to="/metiers/evenements" className="block">
          <motion.div
            className="relative h-[380px] md:h-[560px] overflow-hidden group cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <img
              src="/Photo Page d'accueil/Photo header Evenement.png"
              alt="Événements G2V — mise en scène et décoration"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white text-[#0A0A0A] text-[13px] font-medium tracking-[0.16em] uppercase px-7 py-3.5 shadow-sm group-hover:bg-[#003DA5] group-hover:text-white transition-colors duration-300">
                Événements
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Travaux */}
        <Link to="/metiers/travaux" className="block">
          <motion.div
            className="relative h-[380px] md:h-[560px] overflow-hidden group cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.4 }}
          >
            <img
              src="/Photo Page d'accueil/Photo  header travaux.jpg"
              alt="Travaux G2V — aménagement et rénovation haut de gamme"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white text-[#0A0A0A] text-[13px] font-medium tracking-[0.16em] uppercase px-7 py-3.5 shadow-sm group-hover:bg-[#003DA5] group-hover:text-white transition-colors duration-300">
                Travaux
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}
