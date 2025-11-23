import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-black mb-2">
        {title}
      </h2>
      <div className="flex items-center justify-center mb-4">
        <span className="block w-16 h-0.5 bg-brand-gold rounded" />
      </div>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle;
