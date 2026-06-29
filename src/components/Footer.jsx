import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

const QUICK_LINKS = [
  { k: 'actualites',    to: '/actualites' },
  { k: 'rencontres',    to: '/temoignages' },
  { k: 'contact',       to: '/contact' },
  { k: 'nousRejoindre', to: '/nous-rejoindre' },
]
const OTHER_LINKS = [
  { k: 'adn',          to: '/adn' },
  { k: 'metiers',      to: '/metiers' },
  { k: 'realisations', to: '/realisations' },
  { k: 'savoirFaire',  to: '/savoir-faire' },
]

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main footer */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Col 1 — Brand */}
          <div>
            <a href="/" className="flex items-center mb-6">
              <img
                src="/logos/logo-white.webp"
                alt="G2V"
                className="h-14 w-auto"
              />
            </a>
            <address className="not-italic text-[11px] leading-[1.9] text-white/60 uppercase tracking-[0.06em] mb-5">
              57 Boulevard de la République<br />
              Espace Lumière — Bâtiment 3<br />
              Terrase — Chatou
            </address>
            <p className="text-[11px] text-white/60 leading-[1.9]">
              {t('footer.phone')} : <a href="tel:+33124608880" className="hover:text-white transition-colors">01 24 60 88 80</a>
            </p>
            <p className="text-[11px] text-white/60">
              {t('footer.email')} : <a href="mailto:info@g2v.fr" className="hover:text-white transition-colors">info@g2v.fr</a>
            </p>
          </div>

          {/* Col 2 — Accès rapide */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-5 text-white/80">
              {t('footer.quickAccess')}
            </p>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ k, to }) => (
                <li key={k}>
                  <Link
                    to={to}
                    className="text-[11px] tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors"
                  >
                    {t(`footer.links.${k}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Autres */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-5 text-white/80">
              {t('footer.others')}
            </p>
            <ul className="space-y-3">
              {OTHER_LINKS.map(({ k, to }) => (
                <li key={k}>
                  <Link
                    to={to}
                    className="text-[11px] tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors"
                  >
                    {t(`footer.links.${k}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter + social */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-5 text-white/80">
              {t('footer.newsletter')}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 mb-8"
            >
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="bg-transparent border border-white/25 text-white text-[12px] px-4 py-2.5 placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors"
                aria-label={t('footer.emailPlaceholder')}
              />
              <button
                type="submit"
                className="text-[11px] tracking-[0.16em] uppercase font-medium border border-white/30 px-4 py-2.5 hover:bg-white hover:text-[#0A0A0A] transition-colors text-left"
              >
                {t('footer.subscribe')}
              </button>
            </form>

            {/* Social */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-white/50 mb-4">{t('footer.follow')}</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                  <IconLinkedIn />
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                  <IconInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1380px] mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/30 tracking-[0.06em]">
            © Copyright {year}, Coda Interactive
          </p>
          <div className="flex items-center gap-6">
            {['legal', 'privacy', 'cookies'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[10px] text-white/30 hover:text-white/60 transition-colors tracking-[0.04em]"
              >
                {t(`footer.${l}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
