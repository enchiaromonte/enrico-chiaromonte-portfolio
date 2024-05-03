import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';
import VideoPlayer from '@/components/videoPlayer';
 
function ProjectPageViviMassignano() {

    return (
        <div>
            <Head>
                <title>Vivi Massignano - Enrico Chiaromonte Portfolio</title>
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
                                Vivi Massignano
                            </motion.h1>
                        </div>
                        <div className="description-mask">
                            <motion.p
                                className='description-sans-smaller color-main text-uppercase'
                                initial={{ translateY: '-100%' }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 1.15 , delay: 2.75 , ease: 'anticipate' }}
                            >
                                Emozioni di un Piceno da vivere insieme
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
                                Un progetto nato per promuovere il territorio di Massignano facendone emergere tutte le bellezze storiche, culturali e gastronomiche.
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
                                    Gestione Hosting
                                </p>
                            </div>
                            <div className='responsibility'>
                                <h6
                                    className='description-sans-smaller color-dark'>
                                    COSA HO FATTO
                                </h6>
                                <p className='description-sans-small'>
                                    Creazione dell&apos;interfaccia utente tramite Figma, 
                                    Sviluppo del tema attraverso l&apos;utilizzo di Elementor, 
                                    Customizzazione CMS WordPress per l&apos;inserimento di contenuti specifici, 
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
                                    href="https://www.vivimassignano.it/" target='blank'>
                                    https://www.vivimassignano.it/
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
                            src="/images/work_vivi_massignano_img1.jpg" 
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
                                <Link href="https://www.vivimassignano.it/" target='blank' rel='nofollow'>Vivi Massignano</Link>, per promuovere il turismo e valorizzare le risorse locali del territorio di Massignano.<br />
                                Punto di incontro tra turisti e strutture ricettive, promozione degli eventi, promozione del territorio e delle sue bellezze culturali, paesaggistiche ed enogastronomiche.<br /><br />
                                ViviMassignano è il portale delle emozioni...
                                <br />
                                <strong>EMOZIONI DI UN PICENO DA VIVERE INSIEME</strong>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/vivi_massignano_video_intro.mp4" />
                    </motion.div>

                    <motion.div 
                        className='single-work-content'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <div className='single-work-text'>
                            <p className='description-sans-hero'>
                                <strong>La Sfida</strong><br />
                                Veicolare tanti contenuti nel modo più immediato possibile e ad un&apos;utenza anche internazionale per far emergere a pieno tutte le potenzialità del territorio.<br />
                            </p>
                            <p className='description-sans-hero'>
                                <strong>L&apos;approccio</strong><br />
                                Una struttura web dal forte impatto visivo, pulita e con una palette di colori ispirata al territorio circostante.<br /> 
                                Un design per porre in risalto tutte le potenzialità del borgo di Massignano e far incontrare il turista con la struttura ricettiva. 
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='single-work-video' 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.35 , delay: 2.15 , ease: 'anticipate' }}>
                        <VideoPlayer src="/videos/vivi_massignano_video_website.mp4" />
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
                                href="https://www.vivimassignano.it/" 
                                target='blank'>
                                Visita vivimassignano.it
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
 
export default ProjectPageViviMassignano