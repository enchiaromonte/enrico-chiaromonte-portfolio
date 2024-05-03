import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';
import VideoPlayer from '@/components/videoPlayer';
 
function ProjectPageMenuDiMarca() {

    return (
        <div>
            <Head>
                <title>Menù di Marca - Enrico Chiaromonte Portfolio</title>
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
                                Menù di Marca
                            </motion.h1>
                        </div>
                        <div className="description-mask">
                            <motion.p
                                className='description-sans-smaller color-main text-uppercase'
                                initial={{ translateY: '-100%' }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 1.15 , delay: 2.75 , ease: 'anticipate' }}
                            >
                                Menù Digitale & Take away
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
                                Un modo semplice per prenotare un Take Away per la tua attività di ristorazione o 
                                un modo accattivante per far vedere il tuo cibo ai tuoi clienti!
                            </p>
                        </div>
                        <div className='single-work-info'>
                            <div className='role'>
                                <h6 
                                    className='description-sans-smaller color-dark'>
                                    RUOLO
                                </h6>
                                <p className='description-sans-small'>
                                    Web Designer<br />
                                    Sviluppatore React & Wordpress<br/>
                                    Responsabile Hosting 
                                </p>
                            </div>
                            <div className='responsibility'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    COSA HO FATTO
                                </h6>
                                <p className='description-sans-small'>
                                    Creazione dell&apos;interfaccia utente tramite Figma, 
                                    Sviluppo del sistema di prenotazione in React.js,
                                    Customizzazione CMS Wordpress &amp; API per la gestione del Menù e del Take away,
                                    Prenotazione gestita tramite WhatsApp, 
                                    Impostazione e Gestione dell&apos;Hosting
                                </p>
                            </div>
                            <div className='url'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    VISITA IL SITO
                                </h6>
                                <Link
                                    className='button-hero-sans' 
                                    href="https://www.menudimarca.it/spadu/" target='blank'>
                                    Take away Spadù
                                </Link>
                                <br /> <br />
                                <Link
                                    className='button-hero-sans' 
                                    href="https://www.menudimarca.it/orsini-pizza/" target='blank'>
                                    Take away Orsini pizza
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
                            src="/images/work_menu_di_marca_img1.jpg" 
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
                                Questo progetto è stato realizzato in collaborazione con <Link href="https://www.ideedimarca.it/" target='blank' rel='nofollow'>Idee di Marca</Link>.
                            </p>
                            <p className='description-sans-hero'>
                                <Link href="https://www.menudimarca.it/spadu/" target='blank'>Menù di Marca</Link>, nasce come un progetto pensato per la ristorazione, una webapp semplice da gestire, 
                                da utilizzare e dal forte impatto visivo.<br /><br />
                                <Link href="https://www.menudimarca.it/spadu/" target='blank'>Menù di Marca</Link> può essere un <strong>Menù digitale</strong> per presentare al meglio i piatti o un sistema di prenotazione <strong>Take Away</strong> per acquistare 
                                in modo semplice e veloce tramite WhatsApp. 
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/spadu_video_intro.mp4" />
                    </motion.div>

                    <motion.div 
                        className='single-work-content'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <div className='single-work-text'>
                            <p className='description-sans-hero'>
                                <strong>La Sfida</strong><br />
                                Creare un sistema di prenotazione versatile che, alla facilità di gestione per il ristoratore, unisca estetica e fruibilità per il cliente finale.<br />
                            </p>
                            <p className='description-sans-hero'>
                                <strong>L&apos;approccio</strong><br />
                                Un CMS - Wordpress - altamente conosciuto e quindi di immediato utilizzo<br />
                                API sviluppate ad hoc per l&apos;integrazione in React<br />
                                Un&apos;interfaccia e un&apos;esperienza utente - UI/UX - semplice e di grande effetto.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/menu_di_marca_video_website.mp4" />
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
                                <p className='description-sans-hero text-center'>
                                    Ecco alcuni esempi di <strong>Menù di Marca</strong> in azione<br /><br />
                                </p>
                            </div>
                            <div className='button-hero-holder justify-content-center'>
                            <Link
                                className='button-hero-serif' 
                                href="https://www.menudimarca.it/spadu/" 
                                target='blank'>
                                Spadù
                            </Link>
                            <Link
                                className='button-hero-serif' 
                                href="https://www.menudimarca.it/orsini-pizza/" 
                                target='blank'>
                                Orsini Pizza
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
 
export default ProjectPageMenuDiMarca