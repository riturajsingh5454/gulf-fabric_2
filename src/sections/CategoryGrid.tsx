
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Trees, Castle, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';

const categories = [
  { 
    title: 'Play Systems', 
    image: 'https://images.unsplash.com/photo-1574680077505-6afbf649fe1f?auto=format&fit=crop&w=800&q=80',
    desc: 'School, Park & Water slides.',
    icon: <Castle size={24} />
  },
  { 
    title: 'Art & Statues', 
    image: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=800&q=80',
    desc: 'Life-size characters & animal art.',
    icon: <Landmark size={24} />
  },
  { 
    title: 'Luxury Planters', 
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    desc: 'Architectural planters for modern spaces.',
    icon: <Trees size={24} />
  },
  { 
    title: 'Infrastructure', 
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=800&q=80',
    desc: 'Cabins, Toilets & Seating solutions.',
    icon: <Box size={24} />
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <Section title="Our Core Expertise" subtitle="Global Manufacturing Excellence" id="specialties">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-450px overflow-hidden rounded-2rem cursor-pointer shadow-2xl"
          >
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/95 via-dark/40 to-transparent"></div>
            
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl text-white group-hover:bg-primary transition-colors duration-500">
              {cat.icon}
            </div>

            <div className="absolute bottom-0 left-0 p-10 w-full">
              <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-accent transition-colors">{cat.title}</h3>
              <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{cat.desc}</p>
              <Link to="/products" className="inline-flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase hover:gap-6 transition-all">
                Browse Collection <ArrowRight size={18} className="text-primary" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CategoryGrid;
