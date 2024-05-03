import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';
import VideoPlayer from '@/components/videoPlayer';
 
function ProjectPageAmbruosiResort() {

    return (
        <div>
            <Head>
                <title>Ambruosi Resort & SPA - Enrico Chiaromonte Portfolio</title>
            </Head>
            <EntranceEffect topPositionStart="0" topPositionEnd="100%" />
            <section className='main-content main-content-single-work' >
                <div className='content-center'>
                    <motion.div 
                        className='single-work-cover'
                        initial={{ translateY: '-100%' }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: 1.25 , delay: 1.15 , ease: 'anticipate' }} >
                        <div className="title-mask">
                            <motion.h1
                                className='title-serif-big'
                                initial={{ translateY: '-100%' }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}
                                >
                                Ambruosi
                            </motion.h1>
                        </div>
                        <div className="description-mask">
                            <motion.p
                                className='description-sans-smaller color-main text-uppercase'
                                initial={{ translateY: '-100%' }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 1.15 , delay: 2.75 , ease: 'anticipate' }}
                            >
                                Resort & SPA
                            </motion.p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className='single-work-content'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <div className='single-work-abstract'>
                            <p className='description-serif-hero'>
                                Tratti semplici e puliti per riflettere la raffinatezza di questo Resort a 4 stelle con SPA, situato a Marina di Massignano in uno dei tratti di Costa Adriatica più belli ed emozionanti.
                            </p>
                        </div>
                        <div className='single-work-info'>
                            <div className='role'>
                                <h6 
                                    className='description-sans-smaller color-dark'>
                                    RUOLO
                                </h6>
                                <p className='description-sans-small'>
                                    Consulente<br />
                                    Web Designer<br />
                                    Sviluppatore<br/>
                                    Responsabile Hosting 
                                </p>
                            </div>
                            <div className='responsibility'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    COSA HO FATTO
                                </h6>
                                <p className='description-sans-small'>
                                    Creazione dell&apos;interfaccia utente tramite Figma, Sviluppo del tema attraverso l&apos;utilizzo di Elementor,
                                    Integrazione del form di prenotazione con Booking Engine BeGenius, Customizzazione CMS WordPress per l&apos;inserimento di contenuti specifici, Impostazione e Gestione dell&apos;Hosting
                                </p>
                            </div>
                            <div className='url'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    VISITA IL SITO
                                </h6>
                                <Link
                                    className='button-hero-sans' 
                                    href="https://www.ambruosivillage.it/" target='blank'>
                                    https://www.ambruosivillage.it/
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-image' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <Image 
                            src="/images/work_ambruosi_resort_img1.jpg" 
                            alt="Ambruosi Resort & SPA Home page" 
                            layout="responsive" 
                            width={4160} 
                            height={6240} />
                    </motion.div>

                    <motion.div 
                        className='single-work-content'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <div className='single-work-text'>
                            <p className='description-sans-hero'>
                                Questo progetto &egrave; stato realizzato in collaborazione con <Link href="https://www.ideedimarca.it/" target='blank' rel='nofollow'>Idee di Marca</Link> che 
                                ha curato la parte di Branding, Shooting Foto e Video, Social Media &amp; ADS.
                            </p>
                            <p className='description-sans-hero'>
                                <Link href="https://www.ambruosivillage.it/" target='blank'>Ambruosi Resort &amp; SPA</Link>, una struttura ricettiva a 4 stelle situata a Marina di Massignano che incarna l&apos;eleganza e il lusso della vita marittima. 
                                Il resort si distingue per la sua SPA interna, l&apos;accesso diretto alla spiaggia privata e, in generale, all&apos;attenzione sulla qualit&aacute; dei servizi offerti.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/ambruosi_resort_video_intro.mp4" />
                    </motion.div>

                    <motion.div 
                        className='single-work-content'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <div className='single-work-text'>
                            <p className='description-sans-hero'>
                                <strong>La Sfida</strong><br />
                                Tradurre l&apos;atmosfera accogliente e sofisticata del resort in un&apos;esperienza digitale.<br />
                            </p>
                            <p className='description-sans-hero'>
                                <strong>L&apos;obiettivo</strong><br />
                                Creare una struttura web che riflettesse la filosofia e i valori dell&apos;Ambruosi Resort &amp; Spa partendo dai suoi punti di forza.
                            </p>
                            <p className='description-sans-hero'>
                                <strong>L&apos;approccio</strong><br />
                                Un design web minimalista e una palette di colori ispirata sia ai toni prettamente marittimi, con declinazioni di Beige e Celeste, sia al lusso della struttura, con utilizzo di un grigio scuro.<br /> 
                                Uno shooting video e foto per evidenziare la bellezza e l&apos;esclusività dell&apos;Ambruosi Resort &amp; Spa.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/ambruosi_resort_video_website.mp4" />
                    </motion.div>

                    <motion.div 
                        className='single-work-content single-work-content-last'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                            
                            <div className='single-work-abstract'>
                                <p className='description-serif-hero text-center'>
                                    Dai un&apos;occhiata!
                                </p>
                            </div>
                            <div className='button-hero-holder justify-content-center'>
                            <Link
                                className='button-hero-serif' 
                                href="https://www.ambruosivillage.it/" 
                                target='blank'>
                                Visita ambruosivillage.it
                            </Link>
                            <Link 
                                className='button-hero-serif button-outlined' 
                                href="/works">
                                Torna indietro
                            </Link>
                        </div>
                        
                    </motion.div>

                </div>
            </section>
        </div>
    )
}
 
export default ProjectPageAmbruosiResort