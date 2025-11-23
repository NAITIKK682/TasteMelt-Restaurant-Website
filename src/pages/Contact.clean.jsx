import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Button from '../components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to backend
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Contact Us
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
            >
              <Send className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
              <p className="text-green-700">
                Thank you for contacting us. We'll get back to you soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-saffron mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                    123 Flavor Street<br />
                    Spice District<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-saffron" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 8948866980</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-saffron" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@tastemelt.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-saffron mt-1" />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <div className="text-gray-600">
                    <p>Monday - Friday: 12:00 PM - 10:00 PM</p>
                    <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map iframe embed */}
          <div className="rounded-lg overflow-hidden shadow-md h-64">
            <iframe
              title="Mumbai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60256.648410083054!2d72.83707729265062!3d19.07609894311601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63ea703b989%3A0x9e8b9efa5d45c0fd!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690448641234!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Quick Contact */}
          <div className="bg-saffron text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
            <p className="mb-4">
              For urgent inquiries or reservations, call us directly or use our live chat.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">📞 Emergency: +91 7972569918</p>
              <p className="font-semibold">💬 Live Chat: Available 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
