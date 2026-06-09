import Header from '../components/Header'
import Hero from '../components/Hero'
import Realisations from '../components/Realisations'
import SavoirFaire from '../components/SavoirFaire'
import ActualitesHighlight from '../components/ActualitesHighlight'
import Domaines from '../components/Domaines'
import Fondateur from '../components/Fondateur'
import Competences from '../components/Competences'
import UnProjet from '../components/UnProjet'
import Histoire from '../components/Histoire'
import Rencontres from '../components/Rencontres'
import GroupeOptions from '../components/GroupeOptions'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Realisations />
        <SavoirFaire />
        <ActualitesHighlight />
        <Domaines />
        <Fondateur />
        <Competences />
        <UnProjet />
        <Histoire />
        <Rencontres />
        <GroupeOptions />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
