import Link from 'next/link';
import { motion } from "framer-motion"

export default function WorksMainContent() {
    return (
        <div className="content content-main">
            <div className="title-mask">
                <motion.h1
                className='title-sans-small text-uppercase color-main'
                initial={{ translateY: '100%' }}
                animate={{ translateY: 0 }}
                transition={{ duration: 1.25 , delay: 1.15 , ease: 'anticipate' }}
                >
                    WORKS
                </motion.h1>
            </div>
            <div className="description-mask">
                <motion.p
                className='description-sans-small color-main'
                initial={{ translateY: '100%' }}
                animate={{ translateY: 0 }}
                transition={{ duration: 1.25 , delay: 1.25 , ease: 'anticipate' }}
                >
                    In questa pagina ho raccolto tutti i progetti più significativi che mettono in risalto le mie competenze in diversi ambiti: 
                    dal Design di interfacce User Friendly allo sviluppo di temi interamente personalizzati per WordPress e WooCommerce, 
                    dalla creazione di siti web sviluppati in Elementor alla customizzazione di e-commerce su piattaforma Shopify. 
                </motion.p>
            </div>
            <div className="description-mask">
                <motion.p
                className='description-sans-small color-main'
                initial={{ translateY: '100%' }}
                animate={{ translateY: 0 }}
                transition={{ duration: 1.25 , delay: 1.25 , ease: 'anticipate' }}
                >
                   Ogni progetto è stato realizzato con cura e attenzione ai dettagli, con l&apos;obiettivo di superare 
                   le aspettative e fornire soluzioni che si distinguono per originalità e funzionalità.
                </motion.p>
            </div>
        </div>
    );
}