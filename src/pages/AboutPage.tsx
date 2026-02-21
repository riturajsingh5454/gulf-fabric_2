
import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { TIMELINE } from '../data/constants';
import { Award, Compass, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Workshop"
        />
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Our Legacy
          </motion.h1>
          <p className="text-accent text-xl max-w-2xl mx-auto font-light">Building foundations of excellence since 2010</p>
        </div>
      </div>

      <Section title="Our Vision & Mission" subtitle="Beyond Craftsmanship">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Target size={32} /></div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">To deliver exceptional interior and architectural solutions that blend traditional aesthetics with contemporary technology.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Compass size={32} /></div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">To be the global benchmark for luxury wooden doors and custom interior manufacturing.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary"><Award size={32} /></div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Core Values</h4>
                <p className="text-gray-600 leading-relaxed">Integrity, Innovation, and Impeccable Detail. We don't just build furniture; we build heirlooms.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517646331032-9e8563c520a1?auto=format&fit=crop&w=800&q=80" 
              className="rounded-3xl shadow-2xl" 
              alt="Team at work"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-10 rounded-3xl hidden lg:block">
              <span className="text-5xl font-bold block">14+</span>
              <span className="text-sm font-medium tracking-widest uppercase">Years of Mastery</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title="The Royal Journey" subtitle="Our Timeline" dark>
        <div className="max-w-4xl mx-auto relative py-10">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700 z-0"></div>
          
          <div className="space-y-24">
            {TIMELINE.map((event, idx) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 relative z-10 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2 text-center md:text-right px-4">
                  <div className={`md:flex flex-col ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-4xl font-bold text-primary block mb-2">{event.year}</span>
                    <h4 className="text-2xl font-bold mb-4">{event.title}</h4>
                    <p className="text-gray-400 max-w-sm ml-auto mr-auto md:ml-0 md:mr-0">{event.description}</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-primary border-4 border-dark absolute left-1/2 -translate-x-1/2 top-0 md:top-auto"></div>
                <div className="w-full md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
