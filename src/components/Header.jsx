import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

/* ── Sélecteur de langue FR | EN ── */
function LangSwitch({ className = '' }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`flex items-center text-[11px] tracking-[0.12em] font-medium select-none ${className}`}>
      <button
        onClick={() => setLang('fr')}
        className={`px-1 transition-colors ${lang === 'fr' ? 'text-[#003DA5]' : 'text-[#999] hover:text-[#0A0A0A]'}`}
        aria-label="Français"
      >
        FR
      </button>
      <span className="text-[#CCC]">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-1 transition-colors ${lang === 'en' ? 'text-[#003DA5]' : 'text-[#999] hover:text-[#0A0A0A]'}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}

/* ── Dropdown desktop ── */
function Dropdown({ items, visible }) {
  return (
    <div
      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
        visible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'
      }`}
      style={{ minWidth: '180px' }}
    >
      <div className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#F0F0F0] py-2">
        {items.map(({ label, href, internal }) =>
          internal ? (
            <Link
              key={label}
              to={href}
              className="block px-5 py-2.5 text-[10px] tracking-[0.18em] uppercase text-[#555] hover:text-[#003DA5] hover:bg-[#F8F8F8] transition-colors duration-150"
            >
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href={href}
              className="block px-5 py-2.5 text-[10px] tracking-[0.18em] uppercase text-[#555] hover:text-[#003DA5] hover:bg-[#F8F8F8] transition-colors duration-150"
            >
              {label}
            </a>
          )
        )}
      </div>
    </div>
  )
}

/* ── Nav item avec dropdown optionnel ── */
function NavItem({ label, href, internal, isActive, dropdown }) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(null)

  const handleEnter = () => {
    clearTimeout(timerRef.current)
    setOpen(true)
  }
  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120)
  }

  const baseClass = `nav-link transition-colors duration-200 ${isActive ? 'text-[#003DA5]' : 'text-[#0A0A0A] hover:text-[#003DA5]'}`

  if (dropdown) {
    return (
      <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {internal ? (
          <Link to={href} className={baseClass}>{label}</Link>
        ) : (
          <a href={href} className={baseClass}>{label}</a>
        )}
        <Dropdown items={dropdown} visible={open} />
      </div>
    )
  }

  return internal ? (
    <Link to={href} className={baseClass}>{label}</Link>
  ) : (
    <a href={href} className={baseClass}>{label}</a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()
  const { t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    {
      id: 'metiers',
      label: t('nav.metiers'),
      href: '/metiers',
      internal: true,
      dropdown: [
        { label: t('nav.evenements'), href: '/metiers/evenements', internal: true },
        { label: t('nav.travaux'),    href: '/metiers/travaux',    internal: true },
      ],
    },
    {
      id: 'realisations',
      label: t('nav.realisations'),
      href: '/realisations',
      internal: true,
    },
    {
      id: 'savoir-faire',
      label: t('nav.savoirFaire'),
      href: '/savoir-faire',
      internal: true,
    },
    {
      id: 'adn',
      label: t('nav.adn'),
      href: '/adn',
      internal: true,
      dropdown: [
        { label: t('nav.actualites'),    href: '/actualites', internal: true },
        { label: t('nav.rencontres'),    href: '/temoignages', internal: true },
        { label: t('nav.equipe'),        href: '#', internal: false },
        { label: t('nav.nousRejoindre'), href: '/nous-rejoindre', internal: true },
      ],
    },
  ]

  const isActive = (item) =>
    item.internal &&
    (location.pathname === item.href || location.pathname.startsWith(item.href + '/'))

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.07)]'
          : 'bg-white/98 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 h-[64px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src="/logos/logo-blue.png" alt="G2V" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              {...item}
              isActive={isActive(item)}
            />
          ))}
          <Link
            to="/contact"
            className="nav-link border border-[#0A0A0A] px-5 py-2 hover:bg-[#003DA5] hover:border-[#003DA5] hover:text-white transition-colors duration-300 ml-2"
          >
            {t('nav.contact')}
          </Link>
          <LangSwitch className="ml-1" />
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] p-1 w-8 h-8"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className={`block h-[1px] bg-[#0A0A0A] origin-center transition-all duration-250 ${menuOpen ? 'rotate-45 translate-y-[6px] w-6' : 'w-6'}`} />
          <span className={`block h-[1px] bg-[#0A0A0A] transition-all duration-250 ${menuOpen ? 'opacity-0 w-6' : 'w-6'}`} />
          <span className={`block h-[1px] bg-[#0A0A0A] origin-center transition-all duration-250 ${menuOpen ? '-rotate-45 -translate-y-[6px] w-6' : 'w-6'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          menuOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-2">
          {navItems.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-between border-b border-gray-100">
                {item.internal ? (
                  <Link
                    to={item.href}
                    onClick={() => !item.dropdown && setMenuOpen(false)}
                    className="flex-1 py-4 text-[11px] tracking-[0.2em] font-medium hover:text-[#003DA5] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => !item.dropdown && setMenuOpen(false)}
                    className="flex-1 py-4 text-[11px] tracking-[0.2em] font-medium hover:text-[#003DA5] transition-colors"
                  >
                    {item.label}
                  </a>
                )}
                {item.dropdown && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                    className="p-2 text-[#999] hover:text-[#003DA5] transition-colors"
                    aria-label="Ouvrir sous-menu"
                  >
                    <span className={`block w-3 h-3 border-r border-b border-current transition-transform duration-200 ${mobileExpanded === item.id ? '-rotate-45 translate-y-0.5' : 'rotate-45 -translate-y-0.5'}`} />
                  </button>
                )}
              </div>
              {item.dropdown && mobileExpanded === item.id && (
                <div className="pl-4 pb-2">
                  {item.dropdown.map(({ label, href, internal }) =>
                    internal ? (
                      <Link
                        key={label}
                        to={href}
                        onClick={() => setMenuOpen(false)}
                        className="flex py-2.5 text-[10px] tracking-[0.18em] uppercase text-[#777] hover:text-[#003DA5] transition-colors"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        key={label}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="flex py-2.5 text-[10px] tracking-[0.18em] uppercase text-[#777] hover:text-[#003DA5] transition-colors"
                      >
                        {label}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center py-4 text-[11px] tracking-[0.2em] font-medium hover:text-[#003DA5] transition-colors"
          >
            {t('nav.contact')}
          </Link>
          {/* Sélecteur de langue mobile */}
          <div className="py-4 border-t border-gray-100">
            <LangSwitch />
          </div>
        </nav>
      </div>
    </header>
  )
}
