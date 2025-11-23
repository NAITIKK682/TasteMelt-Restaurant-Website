import React from 'react'

/**
 * PremiumButton
 * - Props:
 *   - variant: 'primary' | 'secondary' | 'outline' (visual style)
 *   - size: 'sm' | 'md' | 'lg'
 *   - iconLeft / iconRight: React node for icons
 *   - loading: boolean to show spinner and disable interaction
 *   - ...rest: native button props
 */
const PremiumButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  iconLeft = null,
  iconRight = null,
  loading = false,
  disabled = false,
  type = 'button',
  ...rest
}) => {
  const isDisabled = disabled || loading

  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-transform active:scale-95'

  const variants = {
    primary: 'bg-brand-gold text-brand-black hover:brightness-95 focus-visible:ring-brand-gold/30',
    secondary: 'bg-transparent border border-white/10 text-white hover:bg-white/5 focus-visible:ring-white/10',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5 focus-visible:ring-white/10',
    dark: 'bg-brand-black text-brand-white hover:brightness-110 focus-visible:ring-brand-black/30'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm h-9',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 py-4 text-lg h-12'
  }

  const disabledClasses = isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:shadow-md'

  return (
    <button
      type={type}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${disabledClasses} ${className} transition-shadow duration-200`}
      {...rest}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      )}

      {!loading && iconLeft && <span className="-ml-1">{iconLeft}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {!loading && iconRight && <span className="-mr-1">{iconRight}</span>}
    </button>
  )
}

export default PremiumButton
