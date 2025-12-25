import Box from '../../components/elements/Box'
import Button from '../../components/elements/Button'
import galleri2 from '../../assets/SaloonImages/galleri_bilde_2.jpg'
import galleri3 from '../../assets/SaloonImages/galleri_bilde_3.jpg'
import galleri4 from '../../assets/SaloonImages/galleri_bilde_4.jpg'

import entryImage from '../../assets/SaloonImages/inngang.jpg'


const promises = [
    'God tid i stolen og en tydelig plan.',
    'Skreddersydd klipp som varer lenge.',
    'Enkel hjemmerutine for ditt har.',
]

const galleryItems = [
    { label: 'Klipp', image: galleri2, variant: 'square' as const },
    { label: 'Farge', image: galleri3, variant: 'square' as const },
    { label: 'Styling', variant: 'soft' as const },
    { label: 'Vask', image: galleri4, variant: 'square' as const },
    { label: 'Herre', variant: 'soft' as const },
    { label: 'Barn', variant: 'soft' as const },
]

const products = [
    {
        title: 'Fukt og glans',
        description: 'Shampoo og balsam for torte tupper.',
        price: 'Fra 249 kr',
    },
    {
        title: 'Volum og tekstur',
        description: 'Lettspray og mousse for fyldigere har.',
        price: 'Fra 199 kr',
    },
    {
        title: 'Fargebevaring',
        description: 'Kur og maske som forlenger fargen.',
        price: 'Fra 289 kr',
    },
    {
        title: 'Hverdagsstyling',
        description: 'Krem og paste som gir kontroll.',
        price: 'Fra 179 kr',
    },
]

function HomePage() {
    return (
        <>
            <section>
                <Box className="mx-auto w-full max-w-[1120px] rounded-[28px] bg-hero p-8 sm:p-10">
                    <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
                                Velkommen til oss!
                            </p>
                            <h1 className="mt-3 font-['Playfair_Display'] text-3xl text-text sm:text-4xl lg:text-5xl">
                                PlaceHolder Text, soon to be replaced!
                            </h1>
                            <p className="mt-4 max-w-lg text-sm text-muted sm:text-base">
                                Vi er tilbake i nyoppusset lokale i Dybdahls vei 3-5. Bestill
                                time, len deg tilbake og la oss ta oss av stilen.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button href="/kontakt">
                                    Bestill time
                                </Button>
                                <Button
                                    href="/produkter"                                >
                                    Se produkter
                                </Button>
                            </div>
                            <div className="mt-8 grid gap-4 text-xs tracking-[0.2em] text-muted sm:grid-cols-3 sm:text-sm">
                                <div>
                                    <div>
                                        <p className="uppercase">Åpningstider</p>
                                    </div>
                                    <div className="mt-2 space-y-1 text-sm font-semibold tracking-normal text-text sm:text-base">
                                        <p>Mandag: 09:00 - 17:00</p>
                                        <p>Tirsdag: 09:00 - 16:00</p>
                                        <p>Onsdag: 09:00 - 16:00</p>
                                        <p>Torsdag: 09:00 - 17:00</p>
                                        <p>Fredag: 09:00 - 16:00</p>
                                        <p>Lørdag: Etter avtale</p>
                                        <p>Søndag: Stengt</p>
                                    </div>
                                </div>
                                <div>
                                    <span className="uppercase">Telefon</span>
                                    <p className="mt-2 text-sm font-semibold tracking-normal text-text sm:text-base">
                                        918 32 002
                                    </p>
                                </div>
                                <div>
                                    <span className="uppercase">Adresse</span>
                                    <p className="mt-2 text-sm font-semibold tracking-normal text-text sm:text-base">
                                        Dybdahls vei 3-5
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full '>
                            <img
                                src={entryImage}
                                alt="bilde_av_inngang"
                                className="rounded-2xl border-4 border-border"
                            />
                        </div>
                    </div>
                </Box>
            </section>

            <section>
                <Box className="mx-auto w-full max-w-[1120px] rounded-[28px] p-8 sm:p-10">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
                                Om oss
                            </p>
                            <h2 className="mt-2 font-['Playfair_Display'] text-2xl text-text sm:text-3xl">
                                Lokale frisorer med fokus pa kvalitet.
                            </h2>
                            <p className="mt-3 text-sm text-muted sm:text-base">
                                Hos Frisor'n moter du et lite team som tar seg tid til
                                konsultasjon, fargevalg og styling. Vi jobber rolig, presist og
                                med gode produkter.
                            </p>
                            <p className="mt-3 text-sm text-muted sm:text-base">
                                Vi tilbyr klipp for dame, herre og barn, samt farge, toner og
                                oppsett til spesielle anledninger.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border bg-surface-warm p-6">
                            <h3 className="font-['Playfair_Display'] text-lg text-text">
                                Det vi lover
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm text-text">
                                {promises.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5">
                                <Button
                                    href="/kontakt"
                                    className="border border-border bg-surface-warm text-text hover:-translate-y-0.5"
                                >
                                    Sporsmal? Ta kontakt
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </section>

            <section>
                <Box className="mx-auto w-full max-w-[1120px] rounded-[28px] p-8 sm:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
                                Bilder
                            </p>
                            <h2 className="mt-2 font-['Playfair_Display'] text-2xl text-text sm:text-3xl">
                                Et lite glimt fra salongen.
                            </h2>
                        </div>
                        <p className="max-w-md text-sm text-muted">
                            Vi fyller opp med flere bilder etter hvert. Her er noen
                            stemningsbilder og stylingeksempler.
                        </p>
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                        {galleryItems.map((item) => {
                            const shapeClass = item.variant === 'square' ? 'rounded-lg' : 'rounded-2xl'
                            if (item.image) {
                                return (
                                    <div
                                        key={item.label}
                                        className={`relative flex h-28 items-center justify-center overflow-hidden border border-border-soft ${shapeClass}`}
                                    >
                                        <img src={item.image} alt={item.label} className="h-full w-full object-cover" />
                                        <span className="absolute bottom-3 left-3 rounded-full bg-surface/80 px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-text">
                                            {item.label}
                                        </span>
                                    </div>
                                )
                            }

                            return (
                                <div
                                    key={item.label}
                                    className={`flex h-28 items-center justify-center border border-border-soft bg-gradient-to-br from-surface-warm to-surface-soft text-[0.65rem] uppercase tracking-[0.22em] text-text ${shapeClass}`}
                                >
                                    {item.label}
                                </div>
                            )
                        })}
                    </div>
                </Box>
            </section>

            <section>
                <Box className="mx-auto w-full max-w-[1120px] rounded-[28px] p-8 sm:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                        <div>
                            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
                                Produkter
                            </p>
                            <h2 className="mt-2 font-['Playfair_Display'] text-2xl text-text sm:text-3xl">
                                Utvalgte produkter i hyllen.
                            </h2>
                        </div>
                        <p className="max-w-md text-sm text-muted">
                            Vi hjelper deg med a finne riktig pleie og styling som passer din
                            har- og hodebunn.
                        </p>
                    </div>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <div
                                key={product.title}
                                className="rounded-2xl border border-border bg-surface-warm p-5 text-sm"
                            >
                                <h3 className="font-['Playfair_Display'] text-lg text-text">
                                    {product.title}
                                </h3>
                                <p className="mt-2 text-muted">{product.description}</p>
                                <span className="mt-4 inline-block font-semibold text-accent-dark">
                                    {product.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </Box>
            </section>
        </>
    )
}

export default HomePage
