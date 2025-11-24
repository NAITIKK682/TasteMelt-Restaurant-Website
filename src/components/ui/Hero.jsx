import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import PremiumButton from './PremiumButton'

const Hero = ({
  title = 'Welcome to TasteMelt',
  subtitle = 'Authentic Indian flavors, delivered fresh to your doorstep',
  background = '/hero-bg.jpg'
}) => {
  const { scrollY } = useScroll()
  // subtle background move for parallax
  const y = useTransform(scrollY, [0, 600], [0, -60])

  // Typing animation state
  const [typedText, setTypedText] = useState('')
  const [typingIndex, setTypingIndex] = useState(0)

  useEffect(() => {
    const fullText = title
    const typingSpeed = 150 // ms per character
    const pauseDuration = 1500 // pause before restart

    let timeoutId

    if (typingIndex <= fullText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typingIndex))
        setTypingIndex(typingIndex + 1)
      }, typingSpeed)
    } else {
      timeoutId = setTimeout(() => {
        setTypingIndex(0)
        setTypedText('')
      }, pauseDuration)
    }

    return () => clearTimeout(timeoutId)
  }, [typingIndex, title])

  return (
    <section className="relative text-white flex items-center justify-center min-h-[90vh] overflow-hidden px-4">
      <motion.div
        className="absolute inset-0 bg-cover bg-center filter blur-[3px] origin-center"
        style={{
          backgroundImage: `url(${background})`,
          y,
          transform: 'scaleX(0.6)'
        }}
        aria-hidden
      />

      <div className="relative max-w-5xl w-full text-center z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-playfair text-[3rem] font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          {typedText}
          <span className="blinking-cursor">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="text-white font-lato text-[1.2rem] font-normal mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-[20px] justify-center w-full max-w-md"
        >
          <Link to="/menu" className="w-full sm:w-auto">
            <PremiumButton variant="primary" size="lg" className="w-full">
              Order Now
            </PremiumButton>
          </Link>
          <Link to="/reservations" className="w-full sm:w-auto">
            <PremiumButton variant="outline" size="lg" className="w-full">
              Reserve Table
            </PremiumButton>
          </Link>
        </motion.div>
      </div>

      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-start 0s infinite;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          50.01%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
