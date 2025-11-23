import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Truck, Shield, ChefHat, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import PremiumButton from '../components/ui/PremiumButton';
import MotionWrap from '../components/ui/MotionWrap';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Footer from '../components/layout/Footer';
import menuData from '../data/menu.json';
import reviewsData from '../data/reviews.json';

const Home = () => {
  const specials = menuData.filter(item => item.category === 'Main Course').slice(0, 3);
  const categories = [...new Set(menuData.map(item => item.category))].slice(0, 4);

  const features = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Hot and fresh food delivered in 30 minutes'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: '100% hygienic preparation and packaging'
    },
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Authentic Indian cuisine by master chefs'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Perfect for family gatherings and celebrations'
    }
  ];

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Hero Section (component) */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="bg-saffron bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Popular Categories"
            subtitle="Explore our diverse range of authentic Indian cuisine"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Specials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Today's Specials"
            subtitle="Handpicked dishes by our master chefs"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {specials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-saffron">₹{item.price}</span>
                    <Link to={`/dish/${item.id}`}>
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Real reviews from our satisfied customers"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {reviewsData.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-saffron text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Authentic Indian Cuisine?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Order now and get your favorite dishes delivered hot and fresh to your doorstep.
            </p>
            <Link to="/menu">
              <Button variant="secondary" size="lg">
                Start Ordering
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
