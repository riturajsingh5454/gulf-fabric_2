
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { PRODUCTS, BUSINESS_INFO } from '@/data/constants';
import Button from '../components/Button';
import { Filter, MessageCircle, Globe, ChevronRight, PackageCheck } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Play Systems' | 'Art & Statues' | 'Planters' | 'Infrastructure' | 'Furniture' | 'Event Decor'>('All');
  
  const categories: ('All' | 'Play Systems' | 'Art & Statues' | 'Planters' | 'Infrastructure' | 'Furniture' | 'Event Decor')[] = 
    ['All', 'Play Systems', 'Art & Statues', 'Planters', 'Infrastructure', 'Furniture', 'Event Decor'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const handleWhatsAppInquiry = (productName: string, category: string) => {
    const message = encodeURIComponent(
      `Hello Gulf Fabrication Team, I am interested in the "${productName}" from your ${category} collection.\n\n` +
      `Could you please provide:\n` +
      `- Specific pricing for this item\n` +
      `- Estimated lead times for delivery\n` +
      `- Technical specifications or catalog if available\n\n` +
      `Thank you!`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="bg-dark py-24 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 px-6"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             <Globe className="text-primary" size={20} />
             <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Excellence in FRP Manufacturing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">Product Catalog</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Premium industrial-grade solutions crafted for durability, aesthetics, and international standards.
          </p>
        </motion.div>
      </div>

      <Section>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          <div className="hidden md:flex items-center gap-2 text-gray-400 mr-4">
            <Filter size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                filter === cat 
                ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                className="masonry-item group bg-white rounded-2rem overflow-hidden shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-4/5">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-dark px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-primary text-white p-2.5 rounded-full shadow-lg" title="Export Quality Ready">
                      <PackageCheck size={18} />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-dark group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed text-sm font-light">
                    {product.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-50">
                    <Button 
                      onClick={() => handleWhatsAppInquiry(product.title, product.category)}
                      className="w-full bg-[#25D366] hover:bg-[#1ebd59] border-none shadow-md shadow-[#25D366]/10 text-white rounded-2xl flex items-center justify-center gap-3"
                    >
                      <MessageCircle size={20} />
                      <span className="font-bold text-sm tracking-wide uppercase">Inquire via WhatsApp</span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-xl font-light">No products found in this category.</p>
            <Button variant="outline" className="mt-6" onClick={() => setFilter('All')}>Clear Filter</Button>
          </div>
        )}
      </Section>

      {/* Trust Banner */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
             <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Globe size={32} />
             </div>
             <div>
               <h4 className="font-bold text-xl">Global Logistics Support</h4>
               <p className="text-gray-500">We handle shipping to 50+ countries worldwide.</p>
             </div>
           </div>
           <div className="flex flex-wrap gap-4">
             {BUSINESS_INFO.globalReach.map(r => (
               <span key={r} className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-xs font-bold text-gray-500">{r}</span>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
