import Box from '../../components/elements/Box'
import Button from '../../components/elements/Button'
import inngang2 from '../../assets/SaloonImages/inngang_2.jpg'
import galleri5 from '../../assets/SaloonImages/galleri_bilde_5.jpg'
import galleri6 from '../../assets/SaloonImages/galleri_bilde_6.jpg'
import galleri7 from '../../assets/SaloonImages/galleri_bilde_7.jpg'

const promises = [
    'God tid i stolen og en tydelig plan.',
    'Skreddersydd klipp som varer lenge.',
    'Enkel hjemmerutine for ditt har.',
]

const aboutImages = [
    { src: inngang2, alt: 'Salong inngang' },
    { src: galleri5, alt: 'Salong bilde 1' },
    { src: galleri6, alt: 'Salong bilde 2' },
    { src: galleri7, alt: 'Salong bilde 3' },
]

const ADDRESS = "Dybdahls veg 3 -5, 7051 Trondheim";
const mapsQuery = encodeURIComponent(`${ADDRESS}, Norway`);
const MAP_ZOOM = 13
const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&z=${MAP_ZOOM}&output=embed`;

function AboutUs() {
    return (
        <section>
            <Box className="w-full rounded-[28px] p-8 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
                            Om oss
                        </p>
                        <h2 className="mt-2 font-['Playfair_Display'] text-2xl text-text sm:text-3xl">
                            Lokale frisorer med fokus pa kvalitet.
                        </h2>
                        <p className="mt-3 text-sm text-muted sm:text-base">
                            Hos Frisor'n moter du et lite team som tar seg tid til konsultasjon,
                            fargevalg og styling. Vi jobber rolig, presist og med gode
                            produkter.
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
                            >
                                Sporsmal? Ta kontakt
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Bilder på forsiden*/}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {aboutImages.map((image) => (
                        <div
                            key={image.src}
                            className="overflow-hidden rounded-2xl border border-border-soft bg-surface-soft"
                        >
                            <img src={image.src} alt={image.alt} className="h-40 w-full object-cover" />
                        </div>
                    ))}
                </div>
            </Box>

            <div className="mt-20 w-full rounded-[28px]">
                <h3 className="mb-5 text-center font-['Playfair_Display'] text-2xl text-text">
                    Du finner oss pa {ADDRESS}
                </h3>
                <div className="flex justify-center">
                    <div className="w-150 rounded-xl border-2 border-border">
                        <div className="aspect-video">
                            <iframe
                                title="Kart over Frisørn"
                                src={embedSrc}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-full w-full rounded-xl"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
