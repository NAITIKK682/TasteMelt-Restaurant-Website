import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-brand-gold mb-4">TasteMelt</h3>
            <p className="text-gray-300 mb-4">
              Authentic Indian flavors, delivered fresh to your doorstep.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-gold">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-brand-gold">Menu</Link></li>
              <li><Link to="/reservations" className="text-gray-300 hover:text-brand-gold">Reservations</Link></li>
              <li><Link to="/offers" className="text-gray-300 hover:text-brand-gold">Offers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-gold">Contact Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-gold">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-brand-gold">Gallery</Link></li>
              <li><Link to="/admin" className="text-gray-300 hover:text-brand-gold">Admin</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-brand-gold mr-2" />
                <span className="text-gray-300">123 Spice Street, Mumbai, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-gold mr-2" />
                <span className="text-gray-300">+91 894886980</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-gold mr-2" />
                <span className="text-gray-300">info@tastemelt.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 TasteMelt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
