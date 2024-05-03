import Link from 'next/link';
import { motion } from "framer-motion"

export default function AboutMainContent() {
    return (
      <div className="content content-main">
      <div className="title-mask">
        <motion.h1
          className='title-serif-hero color-dark'
          initial={{ translateY: '100%' }}
          animate={{ translateY: 0 }}
          transition={{ duration: 1.25 , delay: 1.15 , ease: 'anticipate' }} >
          About.
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
          Durante i miei <strong>oltre 15 anni di esperienza</strong>, ho avuto il privilegio di acquisire una profonda comprensione di come l&apos;estetica e la funzionalità si possano integrare per creare esperienze coinvolgenti.
          <br /><br />
          Ciascuna delle esperienze e dei progetti che ho affrontato, indipendentemente dalla loro grandezza e/o importanza, ha contribuito a plasmare sia la persona che e il professionista che sono oggi.<br />
          Sono grato per le sfide che ho incontrato lungo il cammino e per i successi che ho ottenuto, poiché ogni ostacolo superato mi ha insegnato qualcosa di nuovo e mi ha spinto a migliorare costantemente.<br /><br />
          La mia passione per l&apos;arte, sia essa &quot;analogica&quot; che digitale, si traduce nella ricerca di soluzioni creative e innovative per i progetti che affronto. 
          Credo fermamente che l&apos;unione tra estetica e funzionalità sia fondamentale per creare esperienze digitali significative per gli utenti.<br /><br />
          Guardo con umiltà e gratitudine al futuro, pronto ad affrontare nuove sfide e a continuare a crescere sia personalmente che professionalmente nel mondo del design e dello sviluppo web.
        </p>
        <h6 className='title-serif-small text-underline'>
            L&apos;ESPERIENZA
        </h6>
        <p className='description-sans-primary'>
          Oltre 15 anni di esperienza nel Digital Design, Web Development e Digital Strategies
        </p>
        <ul className='list-sans-primary'>
          <li>15+ anni di esperienza come UI/UX Designer per Siti web, App e WebAPP</li>
          <li>15+ anni di esperienza come Front-end Developer</li>
          <li>15+ anni di esperienza come WordPress e WooCommerce Developer</li>
          <li>4+ anni di esperienza nel mondo Shopify</li>
          <li>3 anni di esperienza nel mondo delle Strategie digitali</li>
          <li>2 anni di esperienza come React Developer - React Native, React.js e Next</li>
        </ul>
        <h6 className='title-serif-small text-underline'>
            LE SKILLS
        </h6>
        <p className='description-sans-primary'>
          UI-UX Design / Web Design / HTML & CSS / jQuery & Javascript / React & Next.js / Sviluppo Temi e Plugin WordPress & WooCommerce / Elementor Expert / 
          Shopify Stores / Strategie Digitali / SEO / Metodologie Agile & Scrum / Project Management
        </p>
        <div className='button-hero-holder'>
          <Link
            className='button-hero-serif' 
            href="/files/enricochiaromonte-cv-2024.pdf" target='blank'>
            Il mio CV
          </Link>
          <Link
          className='button-hero-serif button-outlined' 
            href="/contatti">
            Contattami
          </Link>
        </div>
      </motion.div>
    </div>
    );
}