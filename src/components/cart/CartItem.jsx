import React from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus, Trash2 } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const price = (item.price * item.quantity).toFixed(0)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="overflow-hidden"
    >
      <GlassCard className="rounded-xl p-4 flex items-center gap-4 shadow-soft transition-shadow">
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-white/6">
          <img
            src={item.image || 'https://via.placeholder.com/160x120?text=Dish'}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/160x120?text=Dish' }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
          {item.description && <p className="text-sm text-gray-500 truncate">{item.description}</p>}
          <div className="mt-2 text-sm text-gray-600">₹{item.price} each</div>
        </div>

        <div className="flex flex-col items-end space-y-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onDecrease(item)}
              className="w-9 h-9 rounded-lg bg-white border border-white/8 text-gray-700 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition"
              aria-label={`Decrease ${item.name}`}
            >
              <Minus className="w-4 h-4" />
            </button>

            <motion.span
              key={item.quantity}
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="min-w-[36px] text-center font-medium"
            >
              {item.quantity}
            </motion.span>

            <button
              onClick={() => onIncrease(item)}
              className="w-9 h-9 rounded-lg bg-amber-400 text-white flex items-center justify-center hover:bg-amber-500 active:scale-95 transition"
              aria-label={`Increase ${item.name}`}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">₹{price}</div>
            <button
              onClick={() => onRemove(item)}
              className="mt-2 inline-flex items-center gap-2 text-red-500 hover:text-red-600"
              aria-label={`Remove ${item.name}`}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default CartItem
