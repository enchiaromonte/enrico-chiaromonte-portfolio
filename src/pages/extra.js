import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
 
function ExtraPage() {

  const { scrollYProgress } = useViewportScroll();

  // Adjust the range and offset values to control the parallax effect
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div>
        <Head>
            <title>Extras | Enrico Chiaromonte Front-End Developer Portfolio</title>
        </Head>
        <EntranceEffect topPositionStart="0" topPositionEnd="100%" />
        <section className='main-content main-content-about' >
            <div className='content-left'>
              <div className="content content-main">
                <div className="title-mask">
                  <motion.h1
                    className='title-serif-hero color-dark'
                    initial={{ translateY: '100%' }}
                    animate={{ translateY: 0 }}
                    transition={{ duration: 1.25 , delay: 1.15 , ease: 'anticipate' }} >
                    Extra.
                  </motion.h1>
                </div>
                <div className="title-mask">
                  <motion.h4
                    className='title-serif-medium title-text'
                    initial={{ translateY: '120%' }}
                    animate={{ translateY: 0 }}
                    transition={{ duration: 1.25 , delay: 1.25 , ease: 'anticipate' }} >
                      Arte e tecnologia per plasmare esperienze digitali uniche ed emozionanti.
                  </motion.h4>
                </div>
                <motion.div
                  className='description-mask'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.25 , delay: 1.5 , ease: 'anticipate' }} >
                  <p className='description-sans-primary'>
                    La passione per l&apos;arte, sia essa &quot;analogica&quot; che digitale, &egrave; guidata da un obiettivo costante: migliorare e ampliare le prospettive.<br />
                    Ogni progetto artistico che abbraccio &egrave; intriso dell&apos;intento di non solo creare, ma anche di ispirare e favorire la crescita personale e professionale.
                  </p>
                  <h6 className='title-serif-small text-uppercase text-underline'>
                      INSTAGRAM E LA FOTOGRAFIA
                  </h6>
                  <p className='description-sans-primary'>
                    Un progetto fotografico incentrato sulla ricerca del &quot;bello&quot;.<br />
                    <strong>whatsbeyondthatdoor</strong> significa &quot;Lived lives, doors now shut forever, guardians of untold stories and forgotten memories&quot;.
                  </p>
                  <div className='button-hero-holder'>
                    <Link
                      className='button-hero-serif' 
                      href="https://www.instagram.com/whatsbeyondthatdoor/" target='blank'>
                      whatsbeyondthatdoor
                    </Link>
                  </div>
                  <h6 className='title-serif-small text-uppercase text-underline'>
                      <br />SOUNDCLOUD E LA MUSICA
                  </h6>
                  <p className='description-sans-primary'>
                    L&apos;enorme passione per la musica mi ha portato alla realizzazione di un EP interamente auto-prodotto.<br />
                    <strong>Words of Sorrow</strong> significa &quot;Speak through music&quot;.
                  </p>
                  <div className='button-hero-holder'>
                    <Link
                      className='button-hero-serif' 
                      href="https://soundcloud.com/enrico-chiaromonte" target='blank'>
                      Words of Sorrow
                    </Link>
                  </div>
                  <h6 className='title-serif-small text-uppercase text-underline'>
                    <br />YOUTUBE E L&apos;ARTE DIGITALE
                  </h6>
                  <p className='description-sans-primary'>
                    Nel tempo libero mi piace rilassarmi e perdermi nei vari mondi virtuali cogliendone ogni aspetto artistico.<br />
                    <strong>The Silent Wise</strong> significa &quot;Be Silent, Be Wise!&quot;
                  </p>
                  <div className='button-hero-holder'>
                    <Link
                      className='button-hero-serif' 
                      href="https://www.youtube.com/channel/UCkHNpy-8buQQtETFg4vcKSA" target='blank'>
                      The Silent Wise
                    </Link>
                  </div>

                  
                </motion.div>
              </div>
            </div>
            <div className='content-right'>
              <motion.div 
                style={{
                  translateY: yRange
                }}
                className='about-image'
                initial={{ opacity : 0 , filter: "blur(10px)" }}
                animate={{ opacity : 1, filter: "blur(0)" }}
                transition={{ duration: 0.4 , delay: 1.5 }}>
                  <Image src="/images/extra_enrico_chiaromonte.jpg" alt="Enrico Chiaromonte" layout="responsive" width={4160} height={6240} />
                </motion.div>
            </div>
        </section>
    </div>
  )
}
 
export default ExtraPage