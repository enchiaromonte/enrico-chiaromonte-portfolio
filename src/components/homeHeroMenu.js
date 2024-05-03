import Link from 'next/link';
import { motion } from "framer-motion"

export default function HomeHeroMenu() {
    return (
        <nav className='hero-menu'>
            <motion.div
                initial={{ opacity : 0 , filter: "blur(10px)" }}
                animate={{ opacity : 1, filter: "blur(0)" }}
                transition={{ duration: 0.4 , delay: 1.5 }} >
                <Link 
                    href="/works" 
                    className='menu-item text-uppercase'>
                  WORKS
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity : 0 , filter: "blur(10px)" }}
                animate={{ opacity : 1, filter: "blur(0)" }}
                transition={{ duration: 0.4 , delay: 1.52 ,  }} >
                <Link 
                    href="/about" 
                    className='menu-item text-uppercase'>
                    ABOUT
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity : 0 , filter: "blur(10px)" }}
                animate={{ opacity : 1, filter: "blur(0)" }}
                transition={{ duration: 0.4 , delay: 1.54 }}>
                <Link 
                    href="/extra" 
                    className='menu-item text-uppercase' >
                    EXTRA
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity : 0 , filter: "blur(10px)" }}
                animate={{ opacity : 1, filter: "blur(0)" }}
                transition={{ duration: 0.4 , delay: 1.56 }} >
                <Link 
                    href="/contatti" 
                    className='menu-item text-uppercase'>
                    CONTATTI
                </Link>
            </motion.div>
        </nav>
    );
}