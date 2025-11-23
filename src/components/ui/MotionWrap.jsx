import React from 'react'
import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const MotionWrap = ({ children, className = '', delay = 0, triggerOnMount = false }) => (
  <motion.div
    initial="hidden"
    {...(triggerOnMount
      ? { animate: 'visible' }
      : { whileInView: 'visible', viewport: { once: true, amount: 0.15 } }
    )}
    transition={{ duration: 0.7, delay }}
    variants={fadeUp}
    className={className}
  >
    {children}
  </motion.div>
)

export default MotionWrap
