import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import RealisationsPage from './pages/RealisationsPage'
import PergoleseProjectPage from './pages/PergoleseProjectPage'
import MetiersPage from './pages/MetiersPage'
import EvenementsPage from './pages/EvenementsPage'
import TravauxPage from './pages/TravauxPage'
import ActualitesPage from './pages/ActualitesPage'
import TissusDefilePage from './pages/articles/TissusDefilePage'
import SavoirFairePage from './pages/SavoirFairePage'
import ContactPage from './pages/ContactPage'
import TemoignagesPage from './pages/TemoignagesPage'
import RencontrePage from './pages/RencontrePage'
import NousRejoindrePage from './pages/NousRejoindrePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/realisations/pergolese" element={<PergoleseProjectPage />} />
        <Route path="/metiers" element={<MetiersPage />} />
        <Route path="/metiers/evenements" element={<EvenementsPage />} />
        <Route path="/metiers/travaux" element={<TravauxPage />} />
        <Route path="/actualites" element={<ActualitesPage />} />
        <Route path="/actualites/tissus-grand-defile" element={<TissusDefilePage />} />
        <Route path="/savoir-faire" element={<SavoirFairePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/temoignages" element={<TemoignagesPage />} />
        <Route path="/temoignages/:slug" element={<RencontrePage />} />
        <Route path="/nous-rejoindre" element={<NousRejoindrePage />} />
      </Routes>
    </>
  )
}
