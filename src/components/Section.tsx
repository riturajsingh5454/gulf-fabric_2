
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  subtitle, 
  id, 
  className = '', 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 ${dark ? 'bg-dark text-white' : 'bg-background'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {subtitle && <span className="text-accent font-semibold tracking-widest uppercase text-sm block mb-3">{subtitle}</span>}
            {title && <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">{title}</h2>}
            <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
