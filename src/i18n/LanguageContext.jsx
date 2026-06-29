import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('fr')

  /* Au montage : langue mémorisée, sinon détection navigateur */
  useEffect(() => {
    const saved = localStorage.getItem('g2v-lang')
    const initial = (saved === 'fr' || saved === 'en')
      ? saved
      : ((navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr')
    setLangState(initial)
    if (typeof document !== 'undefined') document.documentElement.lang = initial
  }, [])

  const setLang = useCallback((l) => {
    setLangState(l)
    try { localStorage.setItem('g2v-lang', l) } catch (e) { /* ignore */ }
    if (typeof document !== 'undefined') document.documentElement.lang = l
  }, [])

  /* t('section.cle') avec repli sur le français */
  const t = useCallback((key) => {
    const read = (dict) => key.split('.').reduce((node, k) => (node == null ? node : node[k]), dict)
    const val = read(translations[lang])
    if (val != null) return val
    const fallback = read(translations.fr)
    return fallback != null ? fallback : key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang doit être utilisé dans <LanguageProvider>')
  return ctx
}
