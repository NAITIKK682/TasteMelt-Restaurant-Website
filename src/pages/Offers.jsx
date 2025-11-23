import React from 'react'
import { motion } from 'framer-motion'
import { Gift, Clock, Percent } from 'lucide-react'
import offersData from '../data/offers.json'
import GlassCard from '../components/ui/GlassCard'
import MotionWrap from '../components/ui/MotionWrap'
import PremiumButton from '../components/ui/PremiumButton'

const Offers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-display font-extrabold text-center mb-8 text-gray-900"
      >
        Special Offers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        Don't miss out on our exclusive deals and limited-time offers. Great food at great prices!
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{offersData.map((offer, index) => (
          <MotionWrap key={offer.id} className="" triggerOnMount={true}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ translateY: -6 }}
              className="overflow-hidden rounded-xl"
            >
              <GlassCard className="p-0 overflow-hidden border border-gray-200 hover:border-brand-gold/30">
                <div className="relative">
                  <img
                    src={offer.image || 'https://via.placeholder.com/400x250?text=Offer+Image'}
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-saffron text-white px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}% OFF
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Valid until {offer.validUntil}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 line-through">₹{offer.originalPrice}</span>
                      <span className="text-2xl font-bold text-brand-gold ml-2">₹{offer.discountedPrice}</span>
                    </div>
                    <PremiumButton size="sm" variant="primary" aria-label={`Claim ${offer.title}`}>Claim Offer</PremiumButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </MotionWrap>
        ))}
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 rounded-lg p-8 text-center"
      >
        <GlassCard className="p-8 bg-gradient-to-r from-saffron to-deepRed text-white">
          <Gift className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4 text-white">Stay Updated with Exclusive Offers</h2>
          <p className="mb-6 max-w-md mx-auto text-white/90">
            Subscribe to our newsletter and be the first to know about new offers and special deals.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <PremiumButton className="px-6 py-3 rounded-r-lg" variant="dark">Subscribe</PremiumButton>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}

export default Offers
