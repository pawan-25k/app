import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-purple-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="bg-gradient-to-r from-lavender-200 to-white bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Your privacy and confidentiality are important to us. Learn how we protect your personal and health information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Last Updated */}
            <div className="bg-gradient-to-r from-purple-50 to-lavender-50 p-6 rounded-2xl border border-purple-100 mb-12">
              <p className="text-purple-600 font-semibold mb-2">Last Updated: January 2025</p>
              <p className="text-gray-600">
                This Privacy Policy explains how Sakthi Dental Clinic collects, uses, and protects your personal information when you visit our clinic or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Full name, address, phone number, and email address</li>
                    <li>• Date of birth and emergency contact information</li>
                    <li>• Insurance information and payment details</li>
                    <li>• Appointment scheduling and visit history</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Medical and dental history</li>
                    <li>• Treatment records and clinical notes</li>
                    <li>• X-rays, photographs, and other diagnostic images</li>
                    <li>• Prescription and medication information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-lavender-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Patient Care</h3>
                  <p className="text-gray-600">
                    To provide dental treatment, maintain health records, and communicate about your care and treatment options.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-lavender-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Appointment Management</h3>
                  <p className="text-gray-600">
                    To schedule appointments, send reminders, and manage your visit logistics and preferences.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-lavender-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Billing & Insurance</h3>
                  <p className="text-gray-600">
                    To process payments, submit insurance claims, and handle billing inquiries and financial arrangements.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-lavender-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                  <p className="text-gray-600">
                    To comply with healthcare regulations, maintain required records, and fulfill legal obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-xl mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
                    <p className="text-amber-700">
                      We never sell, rent, or trade your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">We may share your information with:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span><strong>Healthcare providers</strong> involved in your treatment or referrals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span><strong>Insurance companies</strong> for coverage verification and claims processing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span><strong>Legal authorities</strong> when required by law or court order</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span><strong>Emergency contacts</strong> in case of medical emergencies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security and Protection</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-xl mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Security Commitment</h3>
                    <p className="text-green-700">
                      We implement industry-standard security measures to protect your personal and health information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18,8A6,6 0 0,0 12,2A6,6 0 0,0 6,8V10H3V20H21V10H18V8M8,8A4,4 0 0,1 12,4A4,4 0 0,1 16,8V10H8V8Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Encrypted Storage</h3>
                  <p className="text-gray-600 text-sm">All digital records are encrypted and stored securely</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Control</h3>
                  <p className="text-gray-600 text-sm">Limited access on a need-to-know basis only</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
                  <p className="text-gray-600 text-sm">Full compliance with healthcare privacy regulations</p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-purple-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Review</h3>
                  <p className="text-gray-600">
                    You have the right to access and review your health records and request copies of your information.
                  </p>
                </div>

                <div className="bg-white border border-purple-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Request Corrections</h3>
                  <p className="text-gray-600">
                    You can request corrections to inaccurate or incomplete information in your health records.
                  </p>
                </div>

                <div className="bg-white border border-purple-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h3>
                  <p className="text-gray-600">
                    You can specify how and where we contact you regarding appointments and health matters.
                  </p>
                </div>

                <div className="bg-white border border-purple-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Restrict Information Use</h3>
                  <p className="text-gray-600">
                    You can request limitations on how we use or share your health information (subject to legal requirements).
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Privacy Questions or Concerns?</h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy or concerns about how we handle your information, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Phone: +91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Email: privacy@sakthidental.com</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Address: 123 Main Street, Hosur, Tamil Nadu 635109</span>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mt-12 text-center">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy Updates</h3>
                <p className="text-gray-600">
                  We may update this Privacy Policy periodically. Any changes will be posted on our website and, if significant, 
                  we will notify you directly. Please review this policy regularly to stay informed about how we protect your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;