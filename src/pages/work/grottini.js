import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';
import VideoPlayer from '@/components/videoPlayer';
 
function ProjectPageGrottini() {

    return (
        <div>
            <Head>
                <title>Grottini - We create places together - Enrico Chiaromonte Portfolio</title>
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
                                Grottini
                            </motion.h1>
                        </div>
                        <div className="description-mask">
                            <motion.p
                                className='description-sans-smaller color-main text-uppercase'
                                initial={{ translateY: '-100%' }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 1.15 , delay: 2.75 , ease: 'anticipate' }}
                            >
                                We create places together
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
                                Grottini: un brand prestigioso che crea spazi per brand globali.
                                Spazi creati per ispirare le persone a riunirsi e interagire tra loro.
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
                                    Sviluppatore
                                </p>
                            </div>
                            <div className='responsibility'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    COSA HO FATTO
                                </h6>
                                <p className='description-sans-small'>
                                    Sviluppo del tema attraverso l&apos;utilizzo di Elementor partendo da interfaccia commissionata, 
                                    Customizzazione CMS WordPress per l&apos;inserimento di contenuti specifici
                                </p>
                            </div>
                            <div className='url'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    VISITA IL SITO
                                </h6>
                                <Link
                                    className='button-hero-sans' 
                                    href="https://www.grottini.com/"
                                    title="Grottini We create places together" 
                                    target='blank'>
                                    https://www.grottini.com/
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
                            src="/images/work_grottini_img1.jpg" 
                            alt="Grottini We create places together Home page" 
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
                                Questo progetto &egrave; stato realizzato in collaborazione con <Link href="https://www.canenero.com/" rel='nofollow' target='blank'>CANENERO Advertising</Link> all&apos;interno 
                                di un processo di Re-Branding; nel caso specifico ha realizzato in Figma l&apos;interfaccia utente - UI - poi &quot;riconvertita&quot; in Wordpress con Elementor.
                            </p>
                            <p className='description-sans-hero'>
                                <Link href="https://www.grottini.com/" target='blank'>Grottini</Link>, si prefigge l&apos;obiettivo di servire il progresso sostenibile, creando luoghi 
                                che vanno oltre i canoni tradizionali del mondo retail, dell&apos;ospitalità, dell&apos;automotive e della nautica, ispirando le persone a riunirsi e interagire tra loro.
                                <br /><br />
                                <strong>WE CREATE PLACES TOGETHER</strong>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/grottini_video_intro.mp4" />
                    </motion.div>

                    <motion.div 
                        className='single-work-content'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <div className='single-work-text'>
                            <p className='description-sans-hero'>
                                <strong>La Sfida</strong><br />
                                Far emergere l&apos;ideale della Persona al centro dello &quot;Spazio&quot; creando una struttura che possa ispirare le persone a riunirsi e interagire tra loro.<br />
                            </p>
                            <p className='description-sans-hero'>
                                <strong>L&apos;approccio</strong><br />
                                Una struttura web &quot;ampia e pulita&quot;, Font molto grandi e una palette di colori ispirata chiaramente al tema del green e della sostenibilità.<br /> 
                                Un design che mette al centro del viaggio le persone come strumento e fine per la creazione di &quot;Spazi&quot; pensati per ispirare.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/grottini_video_website.mp4" />
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
                                href="https://www.grottini.com/" 
                                target='blank'>
                                Visita grottini.com
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
 
export default ProjectPageGrottini