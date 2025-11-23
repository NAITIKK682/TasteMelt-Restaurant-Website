import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, ChefHat, Heart, Star } from 'lucide-react'
import chefsData from '../data/chefs.json'

const About = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: ChefHat, value: '50+', label: 'Expert Chefs' },
    { icon: Heart, value: '4.9/5', label: 'Customer Rating' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Authentic Flavors',
      description: 'We use traditional recipes passed down through generations, combined with the finest ingredients.'
    },
    {
      icon: Users,
      title: 'Family Tradition',
      description: 'TasteMelt has been serving families for over 15 years, creating memorable dining experiences.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every dish is prepared with care, using only the freshest ingredients and authentic spices.'
    },
    {
      icon: Clock,
      title: 'Timeless Service',
      description: 'From our warm hospitality to our efficient service, we ensure every guest feels special.'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">About TasteMelt</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Where tradition meets innovation. For over 15 years, we've been serving authentic Indian cuisine
          that brings families together and creates unforgettable memories.
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid lg:grid-cols-2 gap-12 mb-16"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              TasteMelt was born from a passion for authentic Indian cuisine and a dream to share
              the rich flavors of India with the world. Founded in 2010 by Naitik Kushwaha & Viral Maru,
              our journey began in a small kitchen with big dreams.
            </p>
            <p>
              What started as a family-run restaurant has grown into a beloved dining destination,
              known for our commitment to quality, authenticity, and exceptional service. Every dish
              we serve carries the essence of traditional Indian cooking, carefully preserved and
              presented with modern flair.
            </p>
            <p>
              Today, TasteMelt continues to honor our roots while embracing innovation. We source
              the finest ingredients, train our chefs in time-honored techniques, and create an
              atmosphere where every guest feels like family.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src='/chefs/taste-melt-story.jpg'
            alt="TasteMelt Story"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-saffron to-deepRed text-white rounded-lg p-8 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="space-y-2"
            >
              <stat.icon className="h-8 w-8 mx-auto" />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Special</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <value.icon className="h-12 w-12 text-saffron mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chefs Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Master Chefs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {chefsData.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{chef.name}</h3>
                <p className="text-saffron font-semibold mb-3">{chef.role}</p>
                <p className="text-gray-600 mb-4">{chef.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {chef.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="text-center bg-gray-50 rounded-lg p-12"
      >
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          To preserve and celebrate India's culinary heritage while creating innovative dining experiences
          that bring people together. We believe that great food has the power to create lasting memories
          and strengthen communities.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <Star className="h-8 w-8 text-saffron mx-auto mb-2" />
            <div className="font-semibold">Authenticity</div>
          </div>
          <div className="text-center">
            <Heart className="h-8 w-8 text-saffron mx-auto mb-2" />
            <div className="font-semibold">Quality</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-saffron mx-auto mb-2" />
            <div className="font-semibold">Community</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
