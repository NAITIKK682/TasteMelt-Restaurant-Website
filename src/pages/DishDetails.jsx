import React, { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Plus, Minus, ArrowLeft, Heart, Share2 } from 'lucide-react'
import { CartContext } from '../context/CartContext'
import menuData from '../data/menu.json'
import GlassCard from '../components/ui/GlassCard'
import MotionWrap from '../components/ui/MotionWrap'
import PremiumButton from '../components/ui/PremiumButton'

const DishDetails = () => {
  const { id } = useParams()
  const { addToCart, cart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const dish = menuData.find(item => item.id === parseInt(id))

  if (!dish) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Dish Not Found</h1>
        <p className="text-gray-600 mb-8">The dish you're looking for doesn't exist.</p>
        <Link to="/menu">
          <Button>Back to Menu</Button>
        </Link>
      </div>
    )
  }

  const relatedDishes = menuData
    .filter(item => item.category === dish.category && item.id !== dish.id)
    .slice(0, 3)

  const getItemQuantity = () => {
    const item = cart.find(item => item.id === dish.id)
    return item ? item.quantity : 0
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(dish, 1)
    }
    setQuantity(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Link to="/menu" className="inline-flex items-center text-saffron hover:text-deepRed transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Menu
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <GlassCard className="p-0 overflow-hidden">
            <img
              src={dish.image || 'https://via.placeholder.com/600x400?text=Dish+Image'}
              alt={dish.name}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full ${
                  isFavorite ? 'bg-red-500 text-white' : 'bg-white/10 text-gray-200'
                } hover:scale-110 transition-transform`}
                aria-pressed={isFavorite}
                aria-label={isFavorite ? 'Remove favorite' : 'Add to favorites'}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-white/10 text-gray-200 rounded-full hover:scale-110 transition-transform" aria-label="Share dish">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-3 py-1 text-xs rounded-full ${
                dish.diet === 'Veg' ? 'bg-green-100 text-green-800' :
                dish.diet === 'Non-Veg' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {dish.diet}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                {dish.category}
              </span>
            </div>
            <h1 className="text-4xl font-display font-extrabold mb-4 text-gray-900">{dish.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-400">(4.8)</span>
              </div>
              <span className="text-2xl font-bold text-brand-gold">₹{dish.price}</span>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{dish.description}</p>
          </div>

          {/* Quantity Selector */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quantity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4 text-gray-700" />
                </button>
                <span className="px-4 py-3 font-semibold text-gray-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4 text-gray-700" />
                </button>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                Total: ₹{dish.price * quantity}
              </div>
            </div>
          </GlassCard>

          {/* Add to Cart */}
          <div className="space-y-4">
            <PremiumButton
              onClick={handleAddToCart}
              size="lg"
              className="w-full"
              variant="primary"
            >
              Add to Cart - ₹{dish.price * quantity}
            </PremiumButton>

            {getItemQuantity() > 0 && (
              <div className="text-center text-green-400 font-semibold">
                {getItemQuantity()} {getItemQuantity() === 1 ? 'item' : 'items'} in cart
              </div>
            )}

            <Link to="/cart" className="block">
              <PremiumButton variant="outline" className="w-full">
                View Cart
              </PremiumButton>
            </Link>
          </div>

          {/* Nutritional Info */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Nutritional Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <span className="text-gray-400">Calories:</span>
                <span className="font-semibold ml-2">450 kcal</span>
              </div>
              <div>
                <span className="text-gray-400">Protein:</span>
                <span className="font-semibold ml-2">25g</span>
              </div>
              <div>
                <span className="text-gray-400">Carbs:</span>
                <span className="font-semibold ml-2">35g</span>
              </div>
              <div>
                <span className="text-gray-400">Fat:</span>
                <span className="font-semibold ml-2">18g</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Related Dishes */}
      {relatedDishes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedDishes.map(relatedDish => (
              <Link key={relatedDish.id} to={`/dish/${relatedDish.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={relatedDish.image || 'https://via.placeholder.com/300x200?text=Dish'}
                    alt={relatedDish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{relatedDish.name}</h3>
                    <p className="text-gray-600 mb-2">{relatedDish.description.slice(0, 60)}...</p>
                    <p className="text-saffron font-bold">₹{relatedDish.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default DishDetails
