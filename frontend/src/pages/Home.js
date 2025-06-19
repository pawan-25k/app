import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/Banner Images/Banner-img-1.jpg';
import banner2 from '../assets/Banner Images/Banner-img-2.jpg';
import banner3 from '../assets/Banner Images/Banner-img-3.jpg';
import banner4 from '../assets/Banner Images/Dr Anupriya.jpg';
import icon1 from '../assets/Amenities-Icons/icon-parking.png';
import icon2 from '../assets/Amenities-Icons/icon-wheel-chair.png';
import icon3 from '../assets/Amenities-Icons/icon-doctors.png';
import icon4 from '../assets/Amenities-Icons/icon-city-center.png';
import icon5 from '../assets/Amenities-Icons/icon-pickup.png';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      ),
      title: 'Tooth Extraction',
      description: 'Safe and painless tooth removal procedures'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Dentures',
      description: 'Custom-fitted dentures for natural comfort'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Dental Fillings',
      description: 'Advanced composite fillings that match your teeth'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      ),
      title: 'Dental Cleaning',
      description: 'Professional cleaning for optimal oral health'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Teeth Whitening',
      description: 'Brighten your smile with safe whitening treatments'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Braces',
      description: 'Orthodontic treatment for perfect alignment'
    }
  ];

 const testimonials = [
  {
    name: "Manisha M",
    text: "The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.",
    rating: 5
  },
  {
    name: "Arun Kumar",
    text: "I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I've recommended Sakthi Dental Clinic to my entire family.",
    rating: 5
  },
  {
    name: "Revathi S",
    text: "Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.",
    rating: 5
  }
];

  const facilities = [
    {
      icon: (
        <img 
      src={icon1}
      alt="Free Parking" 
      className="w-6 h-6 object-contain"
    />
      ),
      title: "Free Parking",
      description: "Ample parking space available"
    },
    {
      icon: (
        <img 
      src={icon3}
      alt="Daily Doctors" 
      className="w-6 h-6 object-contain"
    />
      ),
      title: "Daily Doctors",
      description: "Experienced doctors available every day"
    },
    {
      icon: (
         <img 
      src={icon2}
      alt="Wheelchair Access" 
      className="w-6 h-6 object-contain"
    />
      ),
      title: "Wheelchair Access",
      description: "Fully accessible for all patients"
    },
    {
      icon: (
        <img 
      src={icon4}
      alt="Modern Equipment" 
      className="w-6 h-6 object-contain"
    />
      ),
      title: "Modern Equipment",
      description: "State-of-the-art dental technology"
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "All-in-One Care",
      description: "Comprehensive dental services under one roof for the entire family"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Experienced Doctors",
      description: "20+ years of specialized experience in women and children's dental care"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 12L12 9.5 16.5 12 12 14.5 7.5 12zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
        </svg>
      ),
      title: "Patient-Centric Approach",
      description: "Gentle, comfortable care tailored to each patient's unique needs"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Technology-Driven Services",
      description: "Modern equipment and advanced techniques for superior treatment outcomes"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={banner1} 
            alt="Sakthi Dental Clinic Interior"
            className="w-full h-full object-cover opacity-100"
          />
         
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-bounce-gentle"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse-slow"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Specialized Dental Care for{" "}
              <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Women, Children & Families
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience gentle, professional dental care in a warm, welcoming environment designed for your family's comfort and health.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl min-w-[200px]"
              >
                Fix an Appointment
              </Link>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Emergency Dental Support
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Welcome Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft-lg border border-purple-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You are always in safe hands
            </h2>
            <p className="text-xl text-purple-700 font-medium">
              We are ready to help, anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-purple-600">Sakthi Dental?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, compassion, and cutting-edge technology to deliver exceptional dental care for women, children, and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border border-purple-100"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care services designed to keep your family's smiles healthy and beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border border-purple-100"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/treatments"
                  className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/treatments"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Facilities Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Modern <span className="text-purple-600">Clinic</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed for your comfort and the highest quality of care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Clinic Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={banner2} 
                  alt="Modern Dental Chair and Equipment"
                  className="w-full h-48 object-cover rounded-xl shadow-soft"
                />
                <img 
                  src={banner1}
                  alt="Clean Waiting Area"
                  className="w-full h-48 object-cover rounded-xl shadow-soft"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={banner3} 
                  alt="Professional Dental Office"
                  className="w-full h-48 object-cover rounded-xl shadow-soft"
                />
                <img 
                  src={banner4}
                  alt="Advanced Dental Technology"
                  className="w-full h-48 object-cover rounded-xl shadow-soft"
                />
              </div>
            </div>

            {/* Facility Features */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                World-Class Facilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100"
                  >
                    <div className="text-purple-600 flex-shrink-0">
                      {facility.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {facility.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-purple-600">Patients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read about the experiences of families who trust us with their dental care.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-soft-lg border border-purple-100">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="text-lg font-semibold text-purple-600">
                  — {testimonials[currentTestimonial].name}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-purple-600 scale-125'
                      : 'bg-purple-200 hover:bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;