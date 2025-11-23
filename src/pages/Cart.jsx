import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/cart/CartItem'
import OrderSummary from '../components/cart/OrderSummary'
import EmptyCart from '../components/cart/EmptyCart'

const Cart = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useContext(CartContext)
  const [confirmItem, setConfirmItem] = useState(null)

  const handleIncrease = (item) => {
    addToCart(item, 1)
  }

  const handleDecrease = (item) => {
    addToCart(item, -1)
  }

  const handleRemoveRequest = (item) => {
    setConfirmItem(item)
  }

  const handleConfirmRemove = () => {
    if (confirmItem) removeFromCart(confirmItem.id)
    setConfirmItem(null)
  }

  const handleCancelRemove = () => setConfirmItem(null)

  const subtotal = getTotalPrice() || 0
  const itemsCount = getTotalItems() || 0

  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <EmptyCart />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-display font-bold mb-6 text-center">Your Cart</motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence initial={false}>
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemoveRequest}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <OrderSummary
            itemsCount={itemsCount}
            subtotal={subtotal}
            onCheckout={() => alert('Proceeding to checkout...')}
            onClear={() => clearCart()}
          />
        </div>
      </div>

      {/* Confirm remove modal (simple) */}
      <AnimatePresence>
        {confirmItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          >
            <motion.div initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }} className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Remove item</h3>
              <p className="text-sm text-gray-600 mb-4">Are you sure you want to remove <strong>{confirmItem.name}</strong> from your cart?</p>
              <div className="flex justify-end gap-3">
                <button onClick={handleCancelRemove} className="px-4 py-2 rounded-lg border">Cancel</button>
                <button onClick={handleConfirmRemove} className="px-4 py-2 rounded-lg bg-red-500 text-white">Remove</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Cart
