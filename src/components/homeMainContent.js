import Link from 'next/link';
import { motion } from "framer-motion"

export default function HomeMainContent() {
    return (
        <div className="content content-main">
              <div className="title-mask">
                <motion.h1
                  className='title-sans-small text-uppercase'
                  initial={{ translateY: '100%' }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 1.25 , delay: 1.15 , ease: 'anticipate' }}
                >
                  Enrico Chiaromonte
                </motion.h1>
              </div>
              <div className="description-mask">
                <motion.p
                  className='description-sans-small'
                  initial={{ translateY: '100%' }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 1.25 , delay: 1.25 , ease: 'anticipate' }}
                >
                  UI-UX Designer / Front End Developer / WordPress Expert / WooCommerce & Shopify Specialist
                </motion.p>
              </div>
              <div className="description-mask">
                <motion.p
                  className='description-sans-small'
                  initial={{ translateY: '100%' }}
                  animate={{ translateY: 0 }}
                  transition={{ duration: 1.25 , delay: 1.25 , ease: 'anticipate' }}
                >
                  Attualmente collaboro con alcune fantastiche agenzie, ma sono sempre disponibile per nuovi ed entusiasmanti progetti, pronto a mettere le mie competenze al servizio delle tue idee.<br />
                  <Link
                    className='simple-link' 
                    href="mailto:me@enricochiaromonte.it">
                    me@enricochiaromonte.it
                  </Link>
                </motion.p>
              </div>
            </div>
    );
}