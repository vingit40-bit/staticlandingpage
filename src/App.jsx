import React, { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-green-800">AgriGrow</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-green-600 transition">Projects</a>
              <a href="#blog" className="text-gray-700 hover:text-green-600 transition">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            </nav>

            <button className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
              Get Farm Consultation
            </button>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <a href="#" className="block text-gray-700 hover:text-green-600">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-green-600">About</a>
              <a href="#services" className="block text-gray-700 hover:text-green-600">Services</a>
              <a href="#projects" className="block text-gray-700 hover:text-green-600">Projects</a>
              <a href="#blog" className="block text-gray-700 hover:text-green-600">Blog</a>
              <a href="#contact" className="block text-gray-700 hover:text-green-600">Contact</a>
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-full">Get Farm Consultation</button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                🌱 #1 Agricultural Solutions Provider
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Cultivating Growth<br/>
                <span className="text-amber-400">Through Innovation</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Sustainable agriculture solutions for modern farming. We combine cutting-edge technology with time-tested farming practices to help you grow better.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Our Services
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-700 transition font-semibold backdrop-blur-sm">
                  Learn About Our Farms
                </button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 bg-green-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">SG</div>
                  <div className="w-10 h-10 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">MF</div>
                  <div className="w-10 h-10 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">EH</div>
                </div>
                <div className="text-white">
                  <div className="font-semibold">200+ Happy Farmers</div>
                  <div className="text-sm text-green-200">Trust our expertise</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">500+</div>
                      <div className="text-green-100 text-sm">Acres Farmed</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">1,200</div>
                      <div className="text-green-100 text-sm">Tons Harvested</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">25+</div>
                      <div className="text-green-100 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-white mb-2">98%</div>
                      <div className="text-green-100 text-sm">Success Rate</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-amber-500 rounded-2xl p-6 shadow-xl transform hover:scale-110 transition duration-300">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">4.9</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Agricultural Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive farming solutions tailored to maximize your yield and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition">Crop Management</h3>
              <p className="text-gray-600 mb-4">Expert guidance on crop selection, rotation, and management for optimal yields.</p>
              <span className="text-green-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">Learn More →</span>
            </div>

            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-amber-200">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition">Soil Health Analysis</h3>
              <p className="text-gray-600 mb-4">Advanced soil testing and analysis to ensure optimal growing conditions.</p>
              <span className="text-amber-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">Learn More →</span>
            </div>

            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">Precision Farming</h3>
              <p className="text-gray-600 mb-4">GPS-guided equipment and data-driven farming for maximum efficiency.</p>
              <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">Learn More →</span>
            </div>

            <div className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4.42 0 8-3.58 8-8V8zm-2 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition">Sustainable Practices</h3>
              <p className="text-gray-600 mb-4">Eco-friendly farming methods that protect the environment and future generations.</p>
              <span className="text-emerald-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">Learn More →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose AgriGrow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by farmers across the region for excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition">Expert Agronomists</h3>
              <p className="text-gray-600">Our team of certified agronomists brings decades of combined experience in agricultural science and farming practices.</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition">Advanced Technology</h3>
              <p className="text-gray-600">We leverage the latest agricultural technology, from drones to AI-powered analytics, to optimize your farming operations.</p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">Quality Produce</h3>
              <p className="text-gray-600">Our methods consistently deliver higher quality, healthier crops with better market value and nutritional content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            📞 FREE CONSULTATION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Request a Farm Consultation</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Connect with our agricultural experts to transform your farming operations
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Call Us: +1 (555) 123-4567
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-800 transition font-semibold backdrop-blur-sm">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Farming Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to successful agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">01</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition">Soil Preparation</h3>
              <p className="text-gray-600">Comprehensive soil analysis and preparation for optimal planting conditions.</p>
            </div>

            <div className="group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">02</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition">Planting</h3>
              <p className="text-gray-600">Precision planting with optimal spacing and timing for maximum yield potential.</p>
            </div>

            <div className="group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4.42 0 8-3.58 8-8V8zm-2 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">03</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition">Harvesting</h3>
              <p className="text-gray-600">Timely and efficient harvesting using modern equipment and techniques.</p>
            </div>

            <div className="group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">04</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">Distribution</h3>
              <p className="text-gray-600">Efficient supply chain management to get your produce to market quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR PROJECTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Farm Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our successful agricultural ventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                <svg className="w-32 h-32 text-white opacity-80 group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">ORGANIC</span>
                  <span className="text-gray-400 text-sm">500 Acres</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition">Organic Wheat Farm</h3>
                <p className="text-gray-600 mb-4">500 acres of certified organic wheat production using sustainable methods.</p>
                <span className="text-green-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">View Project →</span>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                <svg className="w-32 h-32 text-white opacity-80 group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">TECHNOLOGY</span>
                  <span className="text-gray-400 text-sm">10,000 sq ft</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition">Smart Greenhouse</h3>
                <p className="text-gray-600 mb-4">Climate-controlled greenhouse with automated irrigation and monitoring systems.</p>
                <span className="text-amber-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">View Project →</span>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                <svg className="w-32 h-32 text-white opacity-80 group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4.42 0 8-3.58 8-8V8zm-2 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">INNOVATION</span>
                  <span className="text-gray-400 text-sm">50 Levels</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">Vertical Farming</h3>
                <p className="text-gray-600 mb-4">Innovative vertical farming system for urban agriculture and year-round production.</p>
                <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">View Project →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team of agricultural professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="relative inline-block mb-6">
                <div className="w-36 h-36 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition">Dr. Sarah Green</h3>
              <p className="text-green-600 font-semibold mb-3">Lead Agronomist</p>
              <p className="text-gray-600 mb-4">15 years of experience in sustainable crop management and soil science.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="relative inline-block mb-6">
                <div className="w-36 h-36 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.

34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition">Michael Fields</h3>
              <p className="text-amber-600 font-semibold mb-3">Farm Operations Manager</p>
              <p className="text-gray-600 mb-4">Expert in precision farming and agricultural technology implementation.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="relative inline-block mb-6">
                <div className="w-36 h-36 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition duration-300 shadow-lg">
                  <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">Emily Harvest</h3>
              <p className="text-blue-600 font-semibold mb-3">Agricultural Consultant</p>
              <p className="text-gray-600 mb-4">Specialist in organic farming practices and certification processes.</p>
              <div className="flex justify-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <svg className="w-10 h-10 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition duration-300">500+</div>
              <div className="text-green-200 text-lg">Acres Farmed</div>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <svg className="w-10 h-10 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4.42 0 8-3.58 8-8V8zm-2 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition duration-300">1,200</div>
              <div className="text-green-200 text-lg">Tons Harvested</div>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <svg className="w-10 h-10 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition duration-300">25+</div>
              <div className="text-green-200 text-lg">Years in Business</div>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                <svg className="w-10 h-10 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition duration-300">200+</div>
              <div className="text-green-200 text-lg">Happy Farmers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR BLOG
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights and tips for modern agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                <svg className="w-32 h-32 text-white opacity-80 group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">SOIL HEALTH</span>
                  <span className="text-gray-400 text-sm">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition">Tips for Healthy Soil</h3>
                <p className="text-gray-600 mb-4">Learn the essential practices for maintaining nutrient-rich soil for better crops.</p>
                <span className="text-green-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">Read More →</span>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                <svg className="w-32 h-32 text-white opacity-80 group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">INNOVATION</span>
                  <span className="text-gray-400 text-sm">8 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition">Future of Vertical Farming</h3>
                <p className="text-gray-600 mb-4">Explore how vertical farming is revolutionizing urban agriculture.</p>
                <span className="text-amber-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">Read More →</span>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                <svg className="w-32 h-32 text-white opacity-80 group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4.42 0 8-3.58 8-8V8zm-2 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">SEASONAL</span>
                  <span className="text-gray-400 text-sm">6 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">Seasonal Crop Guide</h3>
                <p className="text-gray-600 mb-4">A comprehensive guide to planting and harvesting throughout the year.</p>
                <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition duration-300 inline-block">Read More →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our agricultural services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition">What are your sustainable farming practices?</h3>
              <p className="text-gray-600">We implement crop rotation, organic fertilizers, water conservation, and integrated pest management to ensure sustainable agriculture.</p>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition">Do you offer organic produce?</h3>
              <p className="text-gray-600">Yes, we have certified organic farms that produce a variety of crops following strict organic standards.</p>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition">How do you manage pests?</h3>
              <p className="text-gray-600">We use integrated pest management (IPM) combining biological controls, crop rotation, and minimal pesticide use when necessary.</p>
            </div>

            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition">What crops do you specialize in?</h3>
              <p className="text-gray-600">We specialize in wheat, corn, soybeans, vegetables, and specialty crops based on regional climate and market demand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              CONTACT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your farming operations? Contact us today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition" placeholder="Your name" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition" placeholder="your@email.com" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition h-32" placeholder="Tell us about your farming needs"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Send Message
                </button>
              </div>

              <div className="space-y-6">
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-green-600 transition">Address</h3>
                    <p className="text-gray-600">123 Farm Road, Agricultural District, State 12345</p>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition">Email</h3>
                    <p className="text-gray-600">info@agrigrow.com</p>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition duration-300 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition">Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold">AgriGrow</span>
              </div>
              <p className="text-gray-400">Sustainable agriculture solutions for a better tomorrow.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Crop Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Soil Analysis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Precision Farming</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Farm Road</li>
                <li>Agricultural District</li>
                <li>State 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>info@agrigrow.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgriGrow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
