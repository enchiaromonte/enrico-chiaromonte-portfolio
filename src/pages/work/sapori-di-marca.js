import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';
import VideoPlayer from '@/components/videoPlayer';
 
function ProjectPageSaporiDiMarca() {

    return (
        <div>
            <Head>
                <title>Sapori di Marca - Enrico Chiaromonte Portfolio</title>
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
                                Sapori di Marca
                            </motion.h1>
                        </div>
                        <div className="description-mask">
                            <motion.p
                                className='description-sans-smaller color-main text-uppercase'
                                initial={{ translateY: '-100%' }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 1.15 , delay: 2.75 , ease: 'anticipate' }}
                            >
                                Tante chicche marchigiane tutte da scoprire
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
                                Un progetto nato per promuovere le Marche sull’intero territorio nazionale facendo emergere la loro grande identità gastronomica.
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
                                    Sviluppatore<br/>
                                    Consulente strategia
                                </p>
                            </div>
                            <div className='responsibility'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    COSA HO FATTO
                                </h6>
                                <p className='description-sans-small'>
                                    Selezione e Customizzazione del template Shopify, Impostazione generale dello Store,
                                    Implementazione di var Add-ons tra cui Box &quot;regalo su misura&quot;, Consulenza per strategia di vendita 
                                </p>
                            </div>
                            <div className='url'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    VISITA IL SITO
                                </h6>
                                <Link
                                    className='button-hero-sans' 
                                    href="https://www.saporidimarca.com/" target='blank'>
                                    https://www.saporidimarca.com/
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
                            src="/images/work_sapori_di_marca_img1.jpg" 
                            alt="Sapori di Marca Home page" 
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
                                Questo progetto è stato realizzato in collaborazione con <Link href="https://www.ideedimarca.it/" target='blank' rel='nofollow'>Idee di Marca</Link>, che 
                                ha curato la parte di Branding, Shooting Foto e Video, Social Media & ADS.
                            </p>
                            <p className='description-sans-hero'>
                                <Link href="https://www.saporidimarca.com/" target='blank' rel='nofollow'>Sapori di Marca</Link> parte dai prodotti del <Link href="https://www.pastificiocarassai.it/" target='blank' rel='nofollow'>Pastificio Leonardo Carassai</Link>, 
                                riconosciuto come un&apos;eccellenza marchigiana a tutto tondo.<br />
                                Il progetto avrà l&apos;obiettivo di mettere insieme un vero e proprio catalogo di &quot;chicche gastronomiche&quot; che raccontino il territorio Marchigiano attraverso i suoi sapori caratteristici.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/sapori_di_marca_video_intro.mp4" />
                    </motion.div>

                    <motion.div 
                        className='single-work-content'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <div className='single-work-text'>
                            <p className='description-sans-hero'>
                                <strong>La Sfida</strong><br />
                                Esaltare l&apos;unicità e la ricercatezza del prodotto in un&apos;esperienza di acquisto semplice e fruibile.<br />
                            </p>
                            <p className='description-sans-hero'>
                                <strong>L&apos;approccio</strong><br />
                                Una struttura web minimalista e pulita con una palette di colori ispirata alla terra e alla tradizione artigianale.<br /> 
                                Un design che mette al centro il prodotto ed una customer journey attentamente studiata per ottimizzare l&apos;esperienza utente, facilitando il processo di acquisto.<br />
                                Un blog di ricette in abbinamento ai prodotti prensenti all&apos;interno dello Store online. 
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/sapori_di_marca_video_website.mp4" />
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
                                href="https://www.saporidimarca.com/" 
                                target='blank'>
                                Visita saporidimarca.com
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
 
export default ProjectPageSaporiDiMarca