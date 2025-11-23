import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Menu from './pages/Menu'
import DishDetails from './pages/DishDetails'
import Cart from './pages/Cart'
import Reservations from './pages/Reservations'
import Offers from './pages/Offers'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/dish/:id" element={<DishDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
