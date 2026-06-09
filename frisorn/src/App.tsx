import AboutUs from './pages/aboutUs/AboutUs'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/homePage/HomePage'
import Footer from './components/pageSections/Footer'
import Header from './components/pageSections/Header'
import Button from './components/elements/Button'
import { useState } from 'react'

const routes = {
  '/': HomePage,
  '/om-oss': AboutUs,
  '/kontakt': ContactPage,
}

//404-page
function NotFound() {
  return (
    <div className="w-full rounded-[var(--radius-shell)] border-[var(--border-width)] border-border bg-surface p-8 text-text shadow-elevated">
      <p className="text-lg uppercase tracking-[0.3em] text-accent-dark">404</p>
      <h1 className="mt-2 font-secondarytext-3xl">Fant ikke siden</h1>
      <Button href="/" className="mt-5">
        Gå til startsiden
      </Button>
    </div>
  )
}

function App() {
  //Vis 404-siden hvis path ikke matcher noen av de definerte rutene
  const path = typeof window === 'undefined' ? '/' : window.location.pathname || '/'
  const Page = routes[path as keyof typeof routes] ?? NotFound
  const [showHolidayNotice, setShowHolidayNotice] = useState(true)

  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] bg-background bg-page text-text">
      <Header />

      <main className="min-w-0 px-7 pt-10 pb-16 sm:px-10 lg:px-14">
        <Page />
      </main>

      <Footer />

      {showHolidayNotice && (
        <aside
          aria-label="Ferieinformasjon"
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-[var(--radius-image)] border border-red-500 bg-surface px-5 py-4 text-text shadow-elevated sm:bottom-6 sm:right-6 sm:left-auto sm:w-full sm:translate-x-0"
        >
          <button
            type="button"
            aria-label="Lukk feriebeskjed"
            onClick={() => setShowHolidayNotice(false)}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-border-soft bg-surface-warm text-xl leading-none text-muted transition hover:border-accent hover:text-accent"
          >
            ×
          </button>
          <p className="pr-10 text-sm font-semibold uppercase tracking-[0.18em] text-accent-dark">
            Ferieinformasjon
          </p>
          <p className="mt-2 pr-6 text-base leading-7">
            Jeg har ferie i uke 27, og fra 23. juli til og med 9. august.
          </p>
          <p className="mt-2 pr-6 text-sm leading-6 text-muted">
            Jeg er tilgjengelig på mail og SMS i ferien.
          </p>
        </aside>
      )}
    </div>
  )
}

export default App
