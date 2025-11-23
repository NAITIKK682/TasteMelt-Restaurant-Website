import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Plus, Minus, ChevronDown } from 'lucide-react'
import { CartContext } from '../context/CartContext'
import menuData from '../data/menu.json'
import GlassCard from '../components/ui/GlassCard'
import MotionWrap from '../components/ui/MotionWrap'
import PremiumButton from '../components/ui/PremiumButton'

const Menu = () => {
  const { addToCart, cart } = useContext(CartContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [dietFilter, setDietFilter] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['All', ...new Set(menuData.map(item => item.category))]
  const diets = ['All', 'Veg', 'Non-Veg', 'Jain']

  const filteredMenu = menuData
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      const matchesDiet = dietFilter === 'All' || item.diet === dietFilter
      return matchesSearch && matchesCategory && matchesDiet
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  const getItemQuantity = (id) => {
    const item = cart.find(item => item.id === id)
    return item ? item.quantity : 0
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <MotionWrap>
        <h1 className="text-4xl font-display font-extrabold text-center mb-6">Our Menu</h1>
      </MotionWrap>

      {/* Filters and Search */}
      <MotionWrap className="mb-8" delay={0.1}>
        <GlassCard className="p-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-600" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-12 py-2 bg-transparent text-gray-800 placeholder-gray-500 border border-gray-200 rounded-full focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow"
              />
            </div>

            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full px-4 py-2 bg-transparent text-gray-800 border border-gray-200 rounded-full focus:ring-2 focus:ring-brand-gold"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={dietFilter}
                onChange={(e) => setDietFilter(e.target.value)}
                className="appearance-none w-full px-4 py-2 bg-transparent text-gray-800 border border-gray-200 rounded-full focus:ring-2 focus:ring-brand-gold"
              >
                {diets.map(diet => (
                  <option key={diet} value={diet}>{diet}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full px-4 py-2 bg-transparent text-gray-800 border border-gray-200 rounded-full focus:ring-2 focus:ring-brand-gold"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </GlassCard>
      </MotionWrap>

      {/* Menu Items */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredMenu.map(item => (
          <MotionWrap key={item.id} className="" triggerOnMount={true}>
            <motion.div initial={null} whileHover={{ translateY: -6 }} className="overflow-hidden rounded-xl">
              <GlassCard className="p-0 overflow-hidden border border-white/10 hover:border-brand-gold/20 hover:shadow-lg">
                <img
                  src={item.image || 'https://via.placeholder.com/300x200?text=Dish+Image'}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.diet === 'Veg' ? 'bg-green-100 text-green-800' :
                      item.diet === 'Non-Veg' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.diet}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-gold font-bold text-lg">₹{item.price}</span>
                    <div className="flex items-center space-x-3">
                      {getItemQuantity(item.id) > 0 && (
                        <>
                          <button
                            onClick={() => addToCart(item, -1)}
                            className="p-1 bg-gray-100 rounded-full hover:bg-gray-200"
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <Minus className="h-4 w-4 text-gray-700" />
                          </button>
                          <span className="font-semibold text-gray-800">{getItemQuantity(item.id)}</span>
                        </>
                      )}
                      <PremiumButton
                        onClick={() => addToCart(item, 1)}
                        size="sm"
                        className="flex items-center space-x-2"
                        variant="primary"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <Plus className="h-4 w-4 text-brand-black" />
                        <span className="text-brand-black">Add</span>
                      </PremiumButton>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </MotionWrap>
        ))}
      </motion.div>
    </div>
  )
}

export default Menu
