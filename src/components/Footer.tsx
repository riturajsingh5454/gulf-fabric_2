
import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SOCIAL_LINKS } from '@/data/constants';

const Footer: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <Instagram size={20} />;
      case 'Facebook': return <Facebook size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'YouTube': return <Youtube size={20} />;
      case 'WhatsApp': return <MessageCircle size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-dark text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Branding */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Hammer size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-serif tracking-tight leading-none">
                Gulf Fabrication<span className="text-primary">.</span>
              </span>
              <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase mt-1">Manufacturer & Exporter</span>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg font-light">
            Crafting premium interior solutions for the global market. Excellence in every grain, shipped from India to the world.
          </p>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.platform}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:border-primary transition-all duration-300"
                aria-label={social.platform}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>

        {/* Global Hubs */}
        <div>
          <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-primary"></span> Global Reach
          </h4>
          <ul className="space-y-4 text-gray-400">
            {BUSINESS_INFO.globalReach.map(reach => (
              <li key={reach} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                {reach}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-primary"></span> Expertise
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/products" className="hover:text-primary transition-colors">Bespoke Wooden Doors</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Precision Window Systems</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Modular Interior Units</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Bulk Export Orders</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-primary"></span> Contact
          </h4>
          <div className="flex items-start gap-4 text-gray-400 group">
            <MapPin className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
            <p>Export Division, Industrial Estate, {BUSINESS_INFO.location}</p>
          </div>
          <div className="flex items-center gap-4 text-gray-400 group">
            <Phone className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={20} />
            <p>{BUSINESS_INFO.phone}</p>
          </div>
          <div className="flex items-center gap-4 text-gray-400 group">
            <Mail className="text-primary shrink-0 group-hover:scale-110 transition-transform" size={20} />
            <p className="break-all">{BUSINESS_INFO.email}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Export</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
