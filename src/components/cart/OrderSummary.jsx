import React from 'react'
import GlassCard from '../ui/GlassCard'
import PremiumButton from '../ui/PremiumButton'

const OrderSummary = ({ itemsCount = 0, subtotal = 0, delivery = 50, taxRate = 0.18, onCheckout, onClear }) => {
  const tax = Math.round(subtotal * taxRate)
  const total = subtotal + delivery + tax

  return (
    <GlassCard className="rounded-2xl p-6 bg-white/80 backdrop-blur-md">
      <h2 className="text-2xl font-display font-bold mb-4 text-gray-900">Order Summary</h2>

      <div className="space-y-3 text-gray-700 mb-6">
        <div className="flex justify-between">
          <span>Items ({itemsCount})</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹{delivery}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{tax}</span>
        </div>
      </div>

      <div className="border-t border-dashed border-gray-200 pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-xl font-bold">₹{total}</span>
        </div>
      </div>

      <div className="space-y-3">
        <PremiumButton className="w-full" size="lg" variant="primary" onClick={onCheckout}>Proceed to Checkout</PremiumButton>
        <button onClick={onClear} className="w-full text-sm text-red-500 hover:text-red-600">Clear Cart</button>
      </div>
    </GlassCard>
  )
}

export default OrderSummary
