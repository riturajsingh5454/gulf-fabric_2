import React from 'react';
import Hero from '../sections/Hero';
import Section from '../components/Section';
import CategoryGrid from '../sections/CategoryGrid';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Factory, Globe, Ship, Award, ShieldCheck, Box, Zap, ChevronRight, PackageCheck, Truck } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '@/data/constants';

const HomePage: React.FC = () => {
  // Select featured advertisements from our collection
  const advertisements = [
    PRODUCTS.find(p => p.id === 'p-0'),
    PRODUCTS.find(p => p.id === 's-17'),
    PRODUCTS.find(p => p.id === 'pl-2'),
    PRODUCTS.find(p => p.id === 'i-29'),
    PRODUCTS.find(p => p.id === 'p-21'),
    PRODUCTS.find(p => p.id === 'e-24'),
  ].filter(Boolean);

  return (
    <div>
      <Hero />
      
      {/* Global Trust Banner */}
      <div className="bg-dark py-12 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 border-r border-white/10">
            <div className="text-primary"><Award size={32} /></div>
            <div>
              <span className="block text-white font-bold text-xl">{BUSINESS_INFO.metrics.established}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Year Established</span>
            </div>
          </div>
          <div className="flex items-center gap-4 border-r border-white/10">
            <div className="text-primary"><Globe size={32} /></div>
            <div>
              <span className="block text-white font-bold text-xl">{BUSINESS_INFO.metrics.countries}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Export Nations</span>
            </div>
          </div>
          <div className="flex items-center gap-4 border-r border-white/10">
            <div className="text-primary"><Factory size={32} /></div>
            <div>
              <span className="block text-white font-bold text-xl">{BUSINESS_INFO.metrics.capacity}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Annual Output</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-primary"><ShieldCheck size={32} /></div>
            <div>
              <span className="block text-white font-bold text-xl">100%</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">ISO Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Heritage Section */}
      <Section title="Precision Engineering Excellence" subtitle="Our Core Manufacturing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square border-8 border-white"
              >
                <img src="img-19.png" alt="Mechanism" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square mt-12 border-8 border-white"
              >
                <img src="img-10.png" alt="Fabrication" className="w-full h-full object-cover" />
              </motion.div>
            </div>
            {/* Absolute badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-10 rounded-full flex flex-col items-center justify-center w-44 h-44 shadow-2xl border-8 border-background">
               <span className="text-4xl font-bold">14+</span>
               <span className="text-[10px] font-bold uppercase tracking-widest">Years</span>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-4xl font-serif font-bold text-dark leading-tight">Engineering the Future of <br /><span className="text-primary italic">FRP Composite Solutions</span>.</h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              At Gulf Fabrication, we leverage advanced Fiberglass Reinforced Plastics (FRP) to create durable, aesthetic, and industrial-grade modules. From massive play systems to precision infrastructure cabins, our fabrication process meets the world's most stringent safety standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                 <div className="bg-primary/10 p-4 rounded-2xl text-primary h-fit"><Zap size={24} /></div>
                 <div>
                   <h5 className="font-bold text-dark mb-1">Durability</h5>
                   <p className="text-gray-500 text-sm">Engineered for extreme UV and moisture resistance.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="bg-primary/10 p-4 rounded-2xl text-primary h-fit"><PackageCheck size={24} /></div>
                 <div>
                   <h5 className="font-bold text-dark mb-1">Bespoke Molding</h5>
                   <p className="text-gray-500 text-sm">Custom tool-room for unique project dimensions.</p>
                 </div>
              </div>
            </div>

            <Link to="/about" className="inline-block mt-4">
              <Button variant="outline" className="border-dark text-dark px-10 py-4 hover:bg-dark hover:text-white">
                Learn About Our Process <ChevronRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <CategoryGrid />

      {/* Featured Collection Advertisement */}
      <Section title="The Global Collection" subtitle="Industrial Gallery" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advertisements.map((item, idx) => (
            <motion.div
              key={item?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-4/5 overflow-hidden relative">
                <img 
                  src={item?.imageUrl} 
                  alt={item?.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-8 left-8 bg-primary text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                  {item?.category}
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors">{item?.title}</h4>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed font-light">{item?.description}</p>
                <Link to="/products">
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-dark py-4 text-xs tracking-widest font-bold">
                    View Technical Specs
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 text-center">
           <Link to="/gallery">
             <Button className="bg-primary text-white px-16 py-5 text-xl shadow-2xl shadow-primary/30">
                Explore Full Global Portfolio
             </Button>
           </Link>
        </div>
      </Section>

      {/* Global Supply Chain Section */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark leading-tight">
              Seamless <span className="text-primary italic">Global Logistics</span> <br /> from Our Factory to You.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We manage the entire export lifecycle for our international B2B partners. From shock-resistant industrial crating to customs documentation support, our team ensures your systems arrive ready for installation.
            </p>
            <div className="space-y-6 pt-4">
               <div className="flex items-start gap-6">
                  <div className="text-primary shrink-0 pt-1"><Truck size={32} /></div>
                  <div>
                    <h5 className="font-bold text-dark text-xl mb-1">Ocean Freight Specialization</h5>
                    <p className="text-gray-500 text-sm">Direct fulfillment to major ports across Europe, the GCC, and Asia.</p>
                  </div>
               </div>
               <div className="flex items-start gap-6">
                  <div className="text-primary shrink-0 pt-1"><Ship size={32} /></div>
                  <div>
                    <h5 className="font-bold text-dark text-xl mb-1">Export-Grade Crating</h5>
                    <p className="text-gray-500 text-sm">Specialized reinforced packaging for heavy-duty composite modules.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
               alt="Shipping and Logistics" 
               className="rounded-[3rem] relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white"
             />
          </div>
        </div>
      </Section>

      {/* Final Call to Action */}
      <div className="bg-dark py-32 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
             Initiate Your <br /><span className="text-primary italic">Global Partnership</span>.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
             Connect with our Export Division for a technical consultation and direct B2B proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <Link to="/contact">
              <Button className="bg-primary text-white hover:bg-accent px-16 py-6 text-xl shadow-2xl">
                Request Export Quote
              </Button>
            </Link>
            <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-dark px-16 py-6 text-xl">
                WhatsApp Direct RFQ
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;