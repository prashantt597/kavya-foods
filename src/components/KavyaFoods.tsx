// src/components/KavyaFoods.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const KavyaFoods: React.FC = () => {
  const menuItems = [
    {
      name: "Kavya's Special Dum Biryani",
      description: "Aromatic basmati rice layered with tender meat, slow-cooked with exotic spices",
      price: "₹299",
      details: "Served with raita, salan, and mirchi ka salan. Available in chicken and mutton variants."
    },
    {
      name: "Butter Chicken",
      description: "Creamy tomato gravy with tender chicken pieces",
      price: "₹249",
      details: "Rich, creamy curry made with fresh cream, cashews, and aromatic spices. Best paired with naan."
    },
    {
      name: "Mutton Rogan Josh",
      description: "Classic Kashmiri style mutton curry",
      price: "₹349",
      details: "Slow-cooked mutton in a rich gravy of yogurt, caramelized onions, and traditional spices."
    },
    {
      name: "Fish Tawa Fry",
      description: "Fresh fish marinated and pan-fried to perfection",
      price: "₹279",
      details: "Fresh pomfret marinated with special spices and cooked on traditional tawa."
    },
    {
      name: "Chicken Kebab Platter",
      description: "Assorted kebabs with three different marinades",
      price: "₹399",
      details: "Includes malai kebab, hariyali kebab, and tandoori kebab with mint chutney."
    },
    {
      name: "Paneer Butter Masala",
      description: "Cottage cheese in rich tomato gravy",
      price: "₹229",
      details: "Fresh paneer in a creamy tomato gravy with house special spice blend."
    }
  ];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="min-h-screen">
      {/* Navigation - Updated colors */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-lg fixed w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-amber-600"
            >
              Kavya Foods
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Special', 'Menu', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: '#F97316' }}
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <Slider {...sliderSettings}>
          <div className="relative h-screen">
            <div 
              className="slide-content" 
              style={{
                backgroundImage: 'url("/images/hero-bg.jpg")',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-white"
                >
                  <h1 className="text-6xl font-bold mb-4 text-amber-400">
                    Welcome to Kavya Foods
                  </h1>
                  <p className="text-2xl">Experience the Royal Taste of Biryani</p>
                </motion.div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Menu Section with Enhanced Hover Effects */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Dishes</h2>
            <p className="text-gray-600">Discover our most loved delicacies</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:shadow-2xl">
                  <div className="relative h-64">
                    <img
                      src={`/images/${item.name.toLowerCase().replace(/['s\s]+/g, '-')}.jpg`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-amber-600 font-bold mt-2">{item.price}</p>
                  </div>
                  
                  {/* Hover Detail Card */}
                  {hoveredItem === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-black bg-opacity-80 p-6 flex items-center justify-center"
                    >
                      <div className="text-white text-center">
                        <h4 className="text-xl font-bold mb-4">{item.name}</h4>
                        <p className="text-sm">{item.details}</p>
                        <p className="mt-4 text-amber-400 font-bold">{item.price}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Located in the heart of Vijayanagara, Bengaluru, Kavya Foods brings you 
              the authentic taste of traditional cuisine. Our specialty lies in our 
              carefully crafted dishes, with our Dum Biryani being the crown jewel 
              of our menu.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Us</h2>
            <div className="space-y-2 text-gray-600">
              <p className="text-xl">Vijayanagara, Bengaluru</p>
              <p>Open: 11:00 AM - 11:00 PM</p>
              <p>Phone: +91 XXXXXXXXXX</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer - Updated colors */}
      <footer className="bg-amber-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Kavya Foods. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default KavyaFoods;