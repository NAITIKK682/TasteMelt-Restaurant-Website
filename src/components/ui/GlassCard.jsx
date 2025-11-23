import React from 'react'

const GlassCard = ({ children, className = '', variant = 'light' }) => {
  const base = variant === 'dark' ? 'glass-panel-dark' : 'glass-panel'
  return (
    <div className={`${base} ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard
