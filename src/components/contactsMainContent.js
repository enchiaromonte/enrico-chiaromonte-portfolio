import Link from 'next/link';
import { motion } from "framer-motion"

export default function ContactsMainContent() {
    return (
        <div className='content-left'>
            <div className="content content-main">
                <div className="title-mask">
                    <motion.h1
                        className='title-serif-hero'
                        initial={{ translateY: '100%' }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: 1.25 , delay: 1.25 , ease: 'anticipate' }} >
                        Hi there.
                    </motion.h1>
                </div>
                <div className="description-mask">
                    <motion.p
                        className='description-sans-small color-main'
                        initial={{ translateY: '100%' }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: 1.25 , delay: 1.15, ease: 'anticipate' }} >
                            Ti è piaciuto quello che hai visto e vuoi iniziare il tuo nuovo progetto con me? Inviami una mail.
                    </motion.p>
                </div>
                <div className="description-mask">
                    <motion.p
                        className='description-sans-small color-main'
                        initial={{ translateY: '100%' }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: 1.25 , delay: 1.15, ease: 'anticipate' }} >
                        Scrivimi a 
                        <Link 
                            className="simple-link"
                            href="mailto:me@enricochiaromonte.it">
                            me@enricochiaromonte.it
                        </Link>
                        <br />
                        Seguimi anche su  
                        <Link 
                            className="simple-link simple-link-light"
                            href="https://www.linkedin.com/in/enrico-chiaromonte-3b495067/" 
                            target='blank'>
                            Linkedin
                        </Link>
                        <br /><br />
                        Segui i miei progetti <em>&quot;alternativi&quot;</em> su 
                        <Link 
                            className="simple-link simple-link-light"
                            href="https://www.youtube.com/channel/UCkHNpy-8buQQtETFg4vcKSA" 
                            target='blank'>
                            YouTube
                        </Link> /  
                        <Link 
                            className="simple-link simple-link-light"
                            href="https://www.instagram.com/whatsbeyondthatdoor/" 
                            target='blank'>
                            Instagram
                        </Link>
                    </motion.p>
                </div>
            </div>
        </div>
    );
}