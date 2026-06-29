import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLang } from '../i18n/LanguageContext'

/* ── FadeUp ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Champ de formulaire ── */
function Field({ label, type = 'text', name, textarea = false }) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className="w-full bg-[#F5F3EF] border-b border-[#D8D4CC] px-4 py-3 text-[13px] text-[#0A0A0A] placeholder:text-[#BBB] focus:outline-none focus:border-[#003DA5] transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-full bg-[#F5F3EF] border-b border-[#D8D4CC] px-4 py-3 text-[13px] text-[#0A0A0A] placeholder:text-[#BBB] focus:outline-none focus:border-[#003DA5] transition-colors"
        />
      )}
    </label>
  )
}

/* ── Icône upload ── */
function UploadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  )
}

/* ── Zone d'envoi de documents ── */
function DocumentsUpload() {
  const { t } = useLang()
  const [files, setFiles] = useState([])
  const inputRef = useRef(null)
  const [dragActive, setDragActive] = useState(false)

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList)
    setFiles((prev) => {
      const names = new Set(prev.map((f) => f.name + f.size))
      const merged = [...prev]
      incoming.forEach((f) => {
        if (!names.has(f.name + f.size)) merged.push(f)
      })
      return merged
    })
  }

  const handleChange = (e) => {
    if (e.target.files?.length) addFiles(e.target.files)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} o`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
  }

  return (
    <div>
      <span className="block text-[10px] tracking-[0.2em] uppercase text-[#999] mb-3">
        {t('joinPage.docsLabel')}
      </span>

      {/* Zone cliquable / drag & drop */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`w-full flex flex-col items-center justify-center text-center px-6 py-10 border border-dashed transition-colors duration-200 ${
          dragActive
            ? 'border-[#003DA5] bg-[#EEF3FB] text-[#003DA5]'
            : 'border-[#D8D4CC] bg-[#F5F3EF] text-[#888] hover:border-[#003DA5] hover:text-[#003DA5]'
        }`}
      >
        <UploadIcon />
        <span className="text-[13px] mt-3 font-medium">
          {t('joinPage.docsDrop')}
        </span>
        <span className="text-[11px] mt-1.5 text-[#AAA]">
          {t('joinPage.docsFormats')}
        </span>
      </button>

      <input
        ref={inputRef}
        type="file"
        name="documents"
        multiple
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        onChange={handleChange}
        className="hidden"
      />

      {/* Liste des fichiers */}
      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, i) => (
            <li
              key={file.name + i}
              className="flex items-center justify-between bg-white border border-[#EBEBEB] px-4 py-2.5"
            >
              <span className="text-[12px] text-[#0A0A0A] truncate pr-3">
                {file.name}
                <span className="text-[#AAA] ml-2">{formatSize(file.size)}</span>
              </span>
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="text-[#999] hover:text-[#003DA5] transition-colors flex-shrink-0"
                aria-label={`Retirer ${file.name}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function NousRejoindrePage() {
  const [sent, setSent] = useState(false)
  const { t } = useLang()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="font-sans bg-white text-[#0A0A0A] overflow-x-hidden">
      <Header />

      <main className="pt-16">

        {/* ── Hero ── */}
        <section className="py-16 md:py-24">
          <div className="container-wide text-center">
            <FadeUp>
              <h1
                className="uppercase text-center mb-8"
                style={{ fontSize: 'clamp(34px, 7vw, 96px)', fontWeight: 100, letterSpacing: '0.1em', lineHeight: 1 }}
              >
                {t('joinPage.title')}
              </h1>
              <p className="text-[14px] text-[#555] font-light max-w-[600px] mx-auto leading-relaxed">
                {t('joinPage.intro')}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Coordonnées + Formulaire ── */}
        <section className="container-wide pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">

            {/* Pourquoi nous rejoindre */}
            <FadeUp>
              <h2
                className="mb-6"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 200, letterSpacing: '-0.01em' }}
              >
                {t('joinPage.leftTitle')}
              </h2>
              <p className="text-[14px] text-[#555] font-light leading-relaxed mb-8 max-w-[380px]">
                {t('joinPage.leftText')}
              </p>

              <div className="space-y-2">
                <p className="text-[12px] tracking-[0.06em] text-[#555]">
                  <span className="text-[#999] uppercase tracking-[0.16em] mr-2">{t('joinPage.email')}</span>
                  <a href="mailto:recrutement@g2v.fr" className="hover:text-[#003DA5] transition-colors">
                    recrutement@g2v.fr
                  </a>
                </p>
                <p className="text-[12px] tracking-[0.06em] text-[#555]">
                  <span className="text-[#999] uppercase tracking-[0.16em] mr-2">{t('joinPage.tel')}</span>
                  <a href="tel:+33124608880" className="hover:text-[#003DA5] transition-colors">
                    01 24 60 88 80
                  </a>
                </p>
              </div>
            </FadeUp>

            {/* Formulaire */}
            <FadeUp delay={0.1}>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <Field label={t('joinPage.fNom')} name="nom" />
                  <Field label={t('joinPage.fPrenom')} name="prenom" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <Field label={t('joinPage.fEmail')} type="email" name="email" />
                  <Field label={t('joinPage.fTel')} type="tel" name="telephone" />
                </div>
                <div className="mb-6">
                  <Field label={t('joinPage.fPoste')} name="poste" />
                </div>
                <div className="mb-8">
                  <Field label={t('joinPage.fMessage')} name="message" textarea />
                </div>

                {/* Zone documents */}
                <div className="mb-8">
                  <DocumentsUpload />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    {sent ? t('joinPage.sent') : t('joinPage.send')}
                  </button>
                  {sent && (
                    <p className="text-[11px] text-[#888] mt-4 tracking-[0.04em]">
                      {t('joinPage.thanks')}
                    </p>
                  )}
                </div>
              </form>
            </FadeUp>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
