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
                <title>Interno Marche - L&apos;Hotel dei designer - Enrico Chiaromonte Portfolio</title>
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
                                Interno Marche
                            </motion.h1>
                        </div>
                        <div className="description-mask">
                            <motion.p
                                className='description-sans-smaller color-main text-uppercase'
                                initial={{ translateY: '-100%' }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 1.15 , delay: 2.75 , ease: 'anticipate' }}
                            >
                                L&apos;Hotel dei designer
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
                                Un sito web per raccontare la storia di un sogno, quello di Franco Moschini, per il primo Design Experience Hotel nelle Marche.
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
                                    href="https://www.internomarche.it/"
                                    title="Interno Marche" 
                                    target='blank'>
                                    https://www.internomarche.it/
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
                            src="/images/work_interno_marche_img1.jpg" 
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
                                Questo progetto &grave; stato realizzato in collaborazione con <Link href="https://www.canenero.com/" rel='nofollow' target='blank'>CANENERO Advertising</Link> all&apos;interno 
                                di un processo di Branding; nel caso specifico ha realizzato in Figma l&apos;interfaccia utente - UI - poi &quot;riconvertita&quot; in Wordpress con Elementor.
                            </p>
                            <p className='description-sans-hero'>
                                <Link href="https://www.internomarche.com/" rel="nofollow" target='blank'>Interno Marche</Link>, non &egrave; un semplice Hotel, ma &egrave; una vera e propria esperienza di Design.<br />
                                30 camere ispirate ai designer e agli architetti che hanno collaborato con Franco Moschini e arricchite dalle loro opere pi&uacute; iconiche.
                            </p>
                            <p className='description-sans-hero'>
                                <strong>La Sfida</strong><br />
                                Far emergere le opere di design all&apos;interno di un&apos;interfaccia usabile e di facile utilizzo.<br />
                            </p>
                            <p className='description-sans-hero'>
                                <strong>L&apos;approccio</strong><br />
                                Una struttura web di Design arricchita da elementi geomentrici, Font eleganti e una palette di colori dai toni delicati.<br /> 
                                Un design explorer customizzato per dare spazio e rilievo a tutti i grandi Architetti e Designer che hanno contribuito alla realizzazione del &quot;sogno&quot;.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/interno_marche_video_website.mp4" />
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
                                href="https://www.internomarche.it/" 
                                target='blank'>
                                Visita internomarche.it
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