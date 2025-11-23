import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react'
import GlassCard from '../components/ui/GlassCard'
import MotionWrap from '../components/ui/MotionWrap'
import PremiumButton from '../components/ui/PremiumButton'

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to backend
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-md mx-auto"
        >
          <h1 className="text-3xl font-bold text-green-800 mb-4">Reservation Confirmed!</h1>
          <p className="text-green-700 mb-4">
            Thank you for choosing TasteMelt. We'll see you on {formData.date} at {formData.time}.
          </p>
          <p className="text-sm text-green-600">
            A confirmation email has been sent to {formData.email}
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Make a Reservation
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className=""
        >
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent text-gray-800"
                    placeholder="Your full name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent text-gray-800"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent text-gray-800"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent appearance-none text-gray-800"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent text-gray-800"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Special Requests</label>
                <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent text-gray-800"
                placeholder="Any special dietary requirements or requests..."
              />
            </div>
              <PremiumButton type="submit" size="lg" className="w-full">Confirm Reservation</PremiumButton>
            </form>
          </GlassCard>
        </motion.div>

        {/* Restaurant Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Restaurant Information</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-saffron" />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p className="text-gray-600">Lunch: 12:00 PM - 3:00 PM</p>
                  <p className="text-gray-600">Dinner: 6:00 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-saffron" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-saffron" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">reservations@tastemelt.com</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-saffron text-white">
            <h3 className="text-xl font-semibold mb-2">Reservation Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>• Reservations are held for 15 minutes past the reserved time</li>
              <li>• Large parties (8+) may require a deposit</li>
              <li>• Cancellations must be made 24 hours in advance</li>
              <li>• Dietary restrictions should be noted at time of booking</li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 bg-gray-100">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-saffron">4.8</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-saffron">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}

export default Reservations
