import Link from 'next/link';
import { motion } from "framer-motion"

export default function WorksHeroMenu() {
    return (
        <div className='scrolling-list works-scrolling-list'>

            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <span className='scrolling-list-item-link not-hovering'>
                Rutan
              </span>
              <div className='scrolling-list-item-spec'>
                - Design & Custom WooCommerce  
                <span className='new-badge'>
                  UPCOMING
                </span>
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <span className='scrolling-list-item-link not-hovering'>
                Eurotecna
              </span>
              <div className='scrolling-list-item-spec'>
                - Design & Wordpress + Elementor  
                <span className='new-badge'>
                  UPCOMING
                </span>
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/ambruosi-resort" className='scrolling-list-item-link'>
                Ambruosi Resort
              </Link>
              <div className='scrolling-list-item-spec'>
                - Design & Wordpress + Elementor
                <span className='new-badge'>
                  NEW
                </span>
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/spadu" className='scrolling-list-item-link'>
                Spadù
              </Link>
              <div className='scrolling-list-item-spec'>
                - Design & Wordpress + Elementor
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/sapori-di-marca" className='scrolling-list-item-link'>
                Sapori di marca
              </Link>
              <div className='scrolling-list-item-spec'>
                - Shopify E-commerce & Strategy
                <span className='new-badge'>
                  NEW
                </span>
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/grottini" className='scrolling-list-item-link'>
                Grottini
              </Link>
              <div className='scrolling-list-item-spec'>
                - Wordpress + Elementor
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/menu-di-marca" className='scrolling-list-item-link'>
                Menù di marca
              </Link>
              <div className='scrolling-list-item-spec'>
                - React.js WebAPP & Wordpress
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/vivi-massignano" className='scrolling-list-item-link'>
                Vivi Massignano
              </Link>
              <div className='scrolling-list-item-spec'>
                - Design & Custom Wordpress Admin + Elementor
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/interno-marche" className='scrolling-list-item-link'>
                Interno Marche
              </Link>
              <div className='scrolling-list-item-spec'>
                - Wordpress + Elementor
              </div>
            </motion.div>

            {/*
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/tato" className='scrolling-list-item-link'>
                Tato
              </Link>
              <div className='scrolling-list-item-spec'>
                - Interaction Design & Custom HTML/CSS + Wordpress Admin
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/ferris-bistrot" className='scrolling-list-item-link'>
                Ferri's Bistrot
              </Link>
              <div className='scrolling-list-item-spec'>
                - Design & Wordpress Dev + Elementor
              </div>
            </motion.div>
            <motion.div
              className='scrolling-list-item'
              initial={{ opacity : 0 , filter: "blur(10px)" }}
              animate={{ opacity : 1, filter: "blur(0)" }}
              transition={{ duration: 0.4 , delay: 1.5 }} >
              <Link href="/work/attico-sul-mare" className='scrolling-list-item-link'>
                Attico sul mare
              </Link>
              <div className='scrolling-list-item-spec'>
                - Design & Wordpress dev + Elementor 
              </div>
            </motion.div>
          */}
        </div>
    );
}