import React from 'react'
import { Link } from 'react-router-dom'
import PremiumButton from '../ui/PremiumButton'

const EmptyCart = () => {
  return (
    <div className="max-w-xl mx-auto text-center py-20">
      <div className="mx-auto w-40 h-40 mb-6 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center shadow-lg">
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="20" r="1" fill="#b45309"/>
          <circle cx="17" cy="20" r="1" fill="#b45309"/>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold mb-2">Your cart is empty</h3>
      <p className="text-gray-500 mb-6">Looks like you haven't added anything yet. Deliciousness awaits!</p>
      <Link to="/menu">
        <PremiumButton variant="primary">Continue Shopping</PremiumButton>
      </Link>
    </div>
  )
}

export default EmptyCart
