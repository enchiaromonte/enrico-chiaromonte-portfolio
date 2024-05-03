import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EntranceEffect = ({ topPositionStart , topPositionEnd }) => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='entrance-effect-holder'>
      <motion.div
        className='entrance-effect'
        initial={ false }
        animate={{ top: isVisible ? topPositionStart : topPositionEnd }}
        transition={{ duration: 1 ,  ease: 'anticipate' }}
      />
    </div>
  );
};

export default EntranceEffect;
