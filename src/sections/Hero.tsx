
import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Globe, ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { BUSINESS_INFO } from '../data/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-dark flex items-center pt-20 overflow-hidden">
      {/* Background Texture & Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-accent">
            <Globe size={16} />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Exporting to 15+ Nations Worldwide</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1]">
            Global <span className="text-primary italic">FRP</span> <br />
            Powerhouse.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
            High-performance manufacturing of industrial infrastructure, play systems, and designer architectural solutions. Engineered for the world.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/products">
              <Button className="px-10 py-4 text-lg bg-primary hover:bg-accent text-white border-none shadow-2xl shadow-primary/20">
                View Catalog <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="px-10 py-4 text-lg border-white/20 text-white hover:bg-white hover:text-dark">
                Request Export Quote
              </Button>
            </Link>
          </div>

          {/* Quick Stats Overlay */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div>
              <span className="block text-3xl font-bold text-white mb-1">{BUSINESS_INFO.metrics.established}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Est. Year</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-white mb-1">{BUSINESS_INFO.metrics.capacity}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Annual Output</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-white mb-1">{BUSINESS_INFO.metrics.countries}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Global Hubs</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5 aspect-square lg:aspect-4/5">
             {/* Using a high-quality manufacturing/factory image from Unsplash for the "Hero" */}
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="Industrial Manufacturing" 
              className="w-full h-full object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-10 left-10 bg-dark/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 max-w-200px">
              <div className="flex items-center gap-2 text-primary mb-2">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">ISO Certified</span>
              </div>
              <p className="text-white text-sm font-light">Precision engineered to meet DIN/ASTM standards.</p>
            </div>
          </div>

          {/* Floating elements for depth */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0"
          ></motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl z-0"
          ></motion.div>
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 hidden xl:block">
        <span className="text-[10px] font-bold tracking-[1em] text-white/10 uppercase">Global Industry Leader</span>
      </div>
    </section>
  );
};

export default Hero;
