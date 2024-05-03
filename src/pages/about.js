import EntranceEffect from '@/components/entrance';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import AboutMainContent from '@/components/aboutMainContent'; 

function AboutPage() {

  const { scrollYProgress } = useViewportScroll();

  // Adjust the range and offset values to control the parallax effect
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div>
        <Head>
            <title>About me - Enrico Chiaromonte Portfolio</title>
        </Head>
        <EntranceEffect topPositionStart="0" topPositionEnd="100%" />
        <section className='main-content main-content-about' >
            <div className='content-left'>
              <AboutMainContent />
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
                  <Image src="/images/about_enrico_chiaromonte.jpg" alt="Enrico Chiaromonte" layout="responsive" width={3648} height={5472} />
                </motion.div>
            </div>
        </section>
    </div>
  )
}
 
export default AboutPage