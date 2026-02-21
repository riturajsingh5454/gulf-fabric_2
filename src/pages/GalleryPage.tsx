
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { GALLERY_ITEMS } from '@/data/constants'
import { Play, X, MapPin, ZoomIn, Film, Image as ImageIcon } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.type === filter);

  return (
    <div className="pt-20">
      <div className="bg-dark py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-6"
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Project Showcase</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-light">
            A visual journey through our global manufacturing excellence and premium interior installations.
          </p>
        </motion.div>
      </div>

      <Section>
        {/* Filter Controls */}
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${filter === 'all' ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            All Work
          </button>
          <button 
            onClick={() => setFilter('image')}
            className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${filter === 'image' ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            <ImageIcon size={18} /> Images
          </button>
          <button 
            onClick={() => setFilter('video')}
            className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${filter === 'video' ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
          >
            <Film size={18} /> Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-xl aspect-4/3"
                onClick={() => setSelectedItem(item)}
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  {item.type === 'video' ? (
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl">
                      <Play size={32} fill="currentColor" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <ZoomIn size={32} />
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{item.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                    <MapPin size={14} className="text-accent" />
                    {item.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-dark/95 flex items-center justify-center p-6 md:p-12"
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-10"
              onClick={() => setSelectedItem(null)}
            >
              <X size={40} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full h-full flex flex-col justify-center"
            >
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-2xl">
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.url} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img 
                    src={selectedItem.url} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-contain" 
                  />
                )}
              </div>
              
              <div className="mt-8 text-center text-white">
                <h2 className="text-3xl font-serif font-bold">{selectedItem.title}</h2>
                <div className="flex items-center justify-center gap-2 text-accent mt-2">
                  <MapPin size={18} />
                  <span className="text-lg">{selectedItem.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
