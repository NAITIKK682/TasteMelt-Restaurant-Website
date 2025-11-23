import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, IndianRupee } from 'lucide-react';

const FoodCard = ({ item, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {item.isVeg ? 'VEG' : 'NON-VEG'}
          </span>
        </div>
        {item.spiceLevel && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
              {item.spiceLevel}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <IndianRupee className="h-4 w-4 text-gray-700" />
            <span className="text-lg font-bold text-gray-900">{item.price}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{item.rating || 4.5}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{item.preparationTime || '20-25'} mins</span>
          </div>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-saffron text-white px-4 py-2 rounded-lg hover:bg-deep-red transition-colors font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
