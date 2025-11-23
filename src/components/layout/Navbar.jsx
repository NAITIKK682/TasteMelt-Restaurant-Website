import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { CartContext } from '../../context/CartContext'
import PremiumButton from '../ui/PremiumButton'

const Navbar = () => {
  const { getCartItemCount } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/reservations', label: 'Reservations' },
    { to: '/offers', label: 'Offers' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
    { to: '/admin', label: 'Admin' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#1f1f1f]/95 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto grid grid-cols-3 items-center gap-4 px-4 h-14">
        {/* Logo (left) */}
        <div className="col-start-1 flex items-center">
          <Link to="/" className="text-2xl md:text-3xl font-display font-extrabold text-amber-400 hover:text-amber-300 transition-colors">
            TasteMelt
          </Link>
        </div>

        {/* Center navigation (center) */}
<div className="col-start-2 justify-self-center hidden md:flex items-center space-x-5">
          {navLinks.filter(link => link.to !== '/reservations').map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative text-white/90 hover:text-amber-300 px-2 py-1 text-sm font-medium transition-transform transform-gpu hover:-translate-y-0.5"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-brand-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" style={{width: '100%'}} />
            </Link>
          ))}
        </div>

        {/* Right icons & CTA (right) */}
<div className="col-start-3 flex items-center justify-end space-x-5">
          <div className="hidden md:block">
            <Link to="/reservations">
              <PremiumButton variant="outline" size="sm">Reserve</PremiumButton>
            </Link>
          </div>

          <Link to="/cart" className="relative p-2 md:p-3">
            <ShoppingCart className="h-6 w-6 text-white/90 hover:text-brand-gold transition-colors" />
            {getCartItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-saffron text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                {getCartItemCount()}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-[#1f1f1f]/95 backdrop-blur-md overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-white/90 hover:text-amber-300 px-3 py-2 text-base font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link to="/reservations" onClick={() => setIsOpen(false)}>
              <PremiumButton variant="outline" size="md">Reserve</PremiumButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
