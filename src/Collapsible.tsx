import React, {ReactNode, useState} from 'react';

import {motion, AnimatePresence} from "framer-motion";

interface IProps {
  title: string,
  children: ReactNode,
}

const Collapsible: React.FC <IProps> = ({
  title = 'click me',
  children}
) => {

  const [isVisible, setIsVisible] = useState(true)

  const handleVisibility = () =>{
    setIsVisible(!isVisible)
  }

  return (
    <>
      <div
        onClick={handleVisibility}
        style={{width: '300px', padding: '0.8rem 1.2rem', backgroundColor: '#ddd', border: '1px solid #ddd'}}
      >
        {title}
      </div>
      <AnimatePresence initial={false}>
        {
          isVisible && (
            <motion.div
              initial={{height: 0}}
              animate={{height: 'auto'}}
              exit={{height: 0}}
              style={{overflow: 'hidden', border: '1px solid #ddd'}}
              transition={{duration: 0.5}}
            >
              <div style={{width: '300px', padding: '0.8rem 1.2rem'}}>
                {children}
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default Collapsible;