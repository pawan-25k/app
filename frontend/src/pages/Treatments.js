import React, { useState } from 'react';

const Treatments = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const treatments = [
    {
      id: 1,
      name: 'Dental Cleaning',
      category: 'preventive',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      ),
      description: 'Professional teeth cleaning to remove plaque, tartar, and stains for optimal oral health.',
      features: ['Plaque removal', 'Tartar cleaning', 'Polishing', 'Fluoride treatment']
    },
    {
      id: 2,
      name: 'Dental Implants',
      category: 'restorative',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      description: 'Permanent tooth replacement solution using titanium implants for natural-looking results.',
      features: ['Titanium implants', 'Crown placement', 'Bone grafting', 'Healing monitoring']
    },
    {
      id: 3,
      name: 'Root Canal Treatment',
      category: 'endodontic',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      description: 'Pain-free root canal therapy to save infected teeth and eliminate dental pain.',
      features: ['Digital X-rays', 'Pain management', 'Infection removal', 'Tooth restoration']
    },
    {
      id: 4,
      name: 'Orthodontic Braces',
      category: 'orthodontic',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 12L12 9.5 16.5 12 12 14.5 7.5 12zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
        </svg>
      ),
      description: 'Comprehensive orthodontic treatment to straighten teeth and improve bite alignment.',
      features: ['Metal braces', 'Ceramic braces', 'Clear aligners', 'Regular adjustments']
    },
    {
      id: 5,
      name: 'Teeth Whitening',
      category: 'cosmetic',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      description: 'Professional teeth whitening for a brighter, more confident smile in just one visit.',
      features: ['In-office whitening', 'Take-home kits', 'Stain removal', 'Long-lasting results']
    },
    {
      id: 6,
      name: 'Dental Veneers',
      category: 'cosmetic',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      description: 'Thin porcelain shells custom-made to cover the front of teeth for a perfect smile.',
      features: ['Porcelain veneers', 'Custom design', 'Color matching', 'Minimal preparation']
    },
    {
      id: 7,
      name: 'Pediatric Dentistry',
      category: 'pediatric',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      description: 'Specialized dental care for children in a fun, comfortable, and anxiety-free environment.',
      features: ['Child-friendly approach', 'Preventive care', 'Behavior management', 'Parent education']
    },
    {
      id: 8,
      name: 'Tooth Extraction',
      category: 'surgical',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      ),
      description: 'Safe and comfortable tooth removal procedures including wisdom teeth extraction.',
      features: ['Simple extractions', 'Surgical extractions', 'Wisdom teeth removal', 'Post-care guidance']
    },
    {
      id: 9,
      name: 'Dentures',
      category: 'restorative',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      description: 'Custom-fitted full or partial dentures to restore function and appearance.',
      features: ['Full dentures', 'Partial dentures', 'Immediate dentures', 'Denture repairs']
    },
    {
      id: 10,
      name: 'Dental Fillings',
      category: 'restorative',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      description: 'Tooth-colored composite fillings to restore cavities and maintain natural appearance.',
      features: ['Composite fillings', 'Amalgam fillings', 'Ceramic inlays', 'Same-day treatment']
    },
    {
      id: 11,
      name: 'Gum Disease Treatment',
      category: 'periodontal',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 12L12 9.5 16.5 12 12 14.5 7.5 12zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
        </svg>
      ),
      description: 'Comprehensive treatment for gingivitis and periodontitis to restore gum health.',
      features: ['Deep cleaning', 'Scaling', 'Root planing', 'Maintenance therapy']
    },
    {
      id: 12,
      name: 'Dental Crowns',
      category: 'restorative',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      description: 'Protective crowns to restore damaged teeth and improve strength and appearance.',
      features: ['Porcelain crowns', 'Metal crowns', 'Zirconia crowns', 'Same-day crowns']
    },
    {
      id: 13,
      name: 'Oral Surgery',
      category: 'surgical',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      ),
      description: 'Advanced oral surgical procedures performed with precision and care.',
      features: ['Tooth extractions', 'Bone grafting', 'Socket preservation', 'Biopsy procedures']
    },
    {
      id: 14,
      name: 'TMJ Treatment',
      category: 'specialized',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      description: 'Treatment for temporomandibular joint disorders to relieve jaw pain and dysfunction.',
      features: ['Diagnosis', 'Night guards', 'Therapy', 'Pain management']
    },
    {
      id: 15,
      name: 'Emergency Dental Care',
      category: 'emergency',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      description: '24/7 emergency dental services for urgent dental problems and pain relief.',
      features: ['24/7 availability', 'Pain relief', 'Trauma care', 'Immediate treatment']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Treatments', count: treatments.length },
    { id: 'preventive', name: 'Preventive', count: treatments.filter(t => t.category === 'preventive').length },
    { id: 'restorative', name: 'Restorative', count: treatments.filter(t => t.category === 'restorative').length },
    { id: 'cosmetic', name: 'Cosmetic', count: treatments.filter(t => t.category === 'cosmetic').length },
    { id: 'orthodontic', name: 'Orthodontic', count: treatments.filter(t => t.category === 'orthodontic').length },
    { id: 'surgical', name: 'Surgical', count: treatments.filter(t => t.category === 'surgical').length },
    { id: 'pediatric', name: 'Pediatric', count: treatments.filter(t => t.category === 'pediatric').length }
  ];

  const filteredTreatments = activeCategory === 'all' 
    ? treatments 
    : treatments.filter(treatment => treatment.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4087576/pexels-photo-4087576.jpeg" 
            alt="Modern dental equipment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-purple-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-lavender-200 to-white bg-clip-text text-transparent">Treatments</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive dental services using advanced technology and gentle techniques for patients of all ages.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                    : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border border-purple-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {treatment.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {treatment.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {treatment.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {treatment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-lavender-50 rounded-3xl p-8 md:p-12 shadow-soft-lg border border-purple-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experienced dental team to discuss the best treatment options for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book Consultation
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;