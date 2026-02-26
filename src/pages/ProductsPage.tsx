import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { PRODUCTS, BUSINESS_INFO } from '@/data/constants';
import Button from '../components/Button';
import { Filter, MessageCircle, Globe, PackageCheck } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState<
    | 'All'
    | 'Play Systems'
    | 'Art & Statues'
    | 'Planters'
    | 'Infrastructure'
    | 'Furniture'
    | 'Event Decor'
  >('All');

  const categories = [
    'All',
    'Play Systems',
    'Art & Statues',
    'Planters',
    'Infrastructure',
    'Furniture',
    'Event Decor',
  ] as const;

  const filteredProducts =
    filter === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  const handleWhatsAppInquiry = (
    productName: string,
    category: string
  ) => {
    const message = encodeURIComponent(
      `Hello Gulf Fabrication Team, I am interested in the "${productName}" from your ${category} collection.\n\nPlease share pricing, lead time and technical details.\n\nThank you.`
    );

    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className="pt-20 bg-linear-to-b from-gray-50 to-white min-h-screen">
      {/* ================= HEADER ================= */}
      <div className="bg-dark py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 px-6"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="text-primary" size={20} />
            <span className="text-accent font-bold tracking-[0.35em] uppercase text-xs">
              Premium FRP Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
            Product Catalog
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Engineered for durability. Designed for visual excellence.
          </p>
        </motion.div>
      </div>

      <Section>
        {/* ================= FILTERS ================= */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          <div className="hidden md:flex items-center gap-2 text-gray-400 mr-4">
            <Filter size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Filter
            </span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                filter === cat
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
      
                {/* ===== IMAGE (STRICT UNIFORM) ===== */}
<div className="relative w-full h-55 overflow-hidden bg-gray-100">
  <img
    src={product.imageUrl}
    alt={product.title}
    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    loading="lazy"
  />

  {/* category badge */}
  <div className="absolute top-3 left-3">
    <span className="bg-white/95 text-gray-800 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
      {product.category}
    </span>
  </div>

  {/* verified icon */}
  <div className="absolute top-3 right-3">
    <div className="bg-primary text-white p-2 rounded-full shadow-md">
      <PackageCheck size={14} />
    </div>
  </div>
</div>

                {/* ===== CONTENT ===== */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-serif font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-500 mb-6 leading-relaxed text-sm line-clamp-3">
                    {product.description}
                  </p>

                  {/* ===== WHATSAPP BUTTON ===== */}
                  <div className="mt-auto">
                    <button
                      onClick={() =>
                        handleWhatsAppInquiry(
                          product.title,
                          product.category
                        )
                      }
                      className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition-all duration-300
                      bg-linear-to-r from-[#25D366] to-[#1ebe5d]
                      hover:from-[#1ebe5d] hover:to-[#17a34a]
                      shadow-md hover:shadow-lg
                      hover:-translate-y-1px] active:scale-[0.98]"
                    >
                      <MessageCircle size={16} />
                      <span className="tracking-wide text-xs uppercase">
                        Inquiry On WhatsApp
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ================= EMPTY STATE ================= */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-xl font-light">
              No products found in this category.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setFilter('All')}
            >
              Clear Filter
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
};

export default ProductsPage;


