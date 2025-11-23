import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [reservations, setReservations] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tasteMeltCart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('tasteMeltCart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)

      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? (() => {
                const newQty = cartItem.quantity + quantity
                return newQty > 0 ? { ...cartItem, quantity: newQty } : null
              })()
            : cartItem
        ).filter(Boolean)
      } else {
        // only add when quantity is positive
        if (quantity <= 0) return prevCart
        return [...prevCart, { ...item, quantity }]
      }
    })
  }

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  // Backwards-compatible helpers used by some pages/components
  const getTotalPrice = () => getCartTotal()
  const getTotalItems = () => getCartItemCount()

  const addReservation = (reservation) => {
    setReservations(prev => [...prev, { ...reservation, id: Date.now() }])
  }

  const value = {
    cart,
    reservations,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    getTotalPrice,
    getTotalItems,
    addReservation
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
