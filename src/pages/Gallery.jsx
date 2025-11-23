import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import galleryData from '../data/gallery.json'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(galleryData.map(item => item.category))]

  const filteredImages = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % galleryData.length
    setSelectedImage(galleryData[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? galleryData.length - 1 : currentIndex - 1
    setSelectedImage(galleryData[prevIndex])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Our Gallery
      </motion.h1>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-saffron text-white'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => openModal(image)}
          >
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-end">
              <div className="p-4 text-white transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm opacity-90">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 rounded-lg p-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Gallery
