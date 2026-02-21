import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe2, ClipboardList, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../data/constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-dark py-32 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 px-6 max-w-4xl mx-auto"
        >
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Global Export Center</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 italic">Get in Touch.</h1>
          <p className="text-gray-400 text-xl font-light leading-relaxed">
            Whether you are a resort developer in the UAE or an institutional architect in Europe, our Export Division is ready to assist with your custom fabrication needs.
          </p>
        </motion.div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Contact Details & Trust Cards */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="text-4xl font-serif font-bold text-dark leading-tight flex items-center gap-4">
                Our <span className="text-primary">Regional Hubs</span>.
              </h3>
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                Connect with us for direct factory pricing and comprehensive technical specifications.
              </p>
            </div>

            {/* Support Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-background border border-gray-100 rounded-[2.5rem] shadow-xl shadow-gray-200/40 group hover:border-primary transition-all duration-500">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors"><Globe2 size={28} /></div>
                  <h5 className="font-bold text-xl mb-2 text-dark">International Sales</h5>
                  <p className="text-gray-500 text-sm mb-6">Dedicated export support for projects outside India.</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary font-bold text-sm underline underline-offset-4">{BUSINESS_INFO.email}</a>
               </div>
               <div className="p-8 bg-background border border-gray-100 rounded-[2.5rem] shadow-xl shadow-gray-200/40 group hover:border-primary transition-all duration-500">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-colors"><MessageCircle size={28} /></div>
                  <h5 className="font-bold text-xl mb-2 text-dark">Direct WhatsApp</h5>
                  <p className="text-gray-500 text-sm mb-6">Instant consultation for urgent project requirements.</p>
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="text-primary font-bold text-sm underline underline-offset-4">Open Chat Now</a>
               </div>
            </div>

            {/* Detailed Info */}
            <div className="space-y-8 border-t border-gray-100 pt-16">
               <div className="flex gap-6 items-start">
                  <div className="bg-dark p-3 rounded-xl text-primary shrink-0"><MapPin size={24} /></div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Factory Location</span>
                    <p className="text-dark font-bold text-lg leading-snug">Royal Industrial Estate, Plot 42-B, {BUSINESS_INFO.location}</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="bg-dark p-3 rounded-xl text-primary shrink-0"><Clock size={24} /></div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Response Time</span>
                    <p className="text-dark font-bold text-lg leading-snug">Technical Quotation within 24-48 Hours</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="bg-dark p-3 rounded-xl text-primary shrink-0"><ShieldCheck size={24} /></div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Quality Assurance</span>
                    <p className="text-dark font-bold text-lg leading-snug">Pre-Shipment Inspection (PSI) Available</p>
                  </div>
               </div>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
               <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">Global Headquarters Socials</h5>
               <div className="flex gap-4">
                  {SOCIAL_LINKS.map(social => (
                     <a 
                       key={social.platform}
                       href={social.url} 
                       className="p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:text-primary hover:border-primary transition-all shadow-sm"
                     >
                        <span className="font-bold text-xs uppercase tracking-widest">{social.platform}</span>
                     </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 lg:p-16 rounded-[3.5rem] shadow-2xl shadow-gray-200/60 border border-gray-100"
          >
            <h4 className="text-3xl font-serif font-bold text-dark mb-10">Request for Quote (RFQ)</h4>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Company Email</label>
                  <input type="email" placeholder="corporate@domain.com" className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Project Region</label>
                  <select className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer">
                    <option>Middle East (GCC)</option>
                    <option>European Union</option>
                    <option>South East Asia</option>
                    <option>North America</option>
                    <option>India (Domestic)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Product Category</label>
                  <select className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer">
                    <option>FRP Play Systems</option>
                    <option>Art & Statues</option>
                    <option>Commercial Planters</option>
                    <option>Industrial Infrastructure</option>
                    <option>Bulk Interior Order</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Project Details & Quantity</label>
                <textarea rows={5} placeholder="Tell us about your project requirements..." className="w-full px-6 py-5 rounded-2xl border border-gray-100 bg-gray-50/30 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>
              
              <div className="p-8 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 text-gray-500">
                  <ClipboardList size={28} className="text-primary/50 group-hover:text-primary transition-colors" />
                  <div className="text-left">
                     <span className="block font-bold text-dark text-sm">Upload Architectural Specs</span>
                     <span className="text-[10px] uppercase tracking-widest">PDF, DWG or Images (Max 50MB)</span>
                  </div>
                </div>
                <Button variant="outline" className="text-xs py-3 px-8 border-gray-300 bg-white">Browse Files</Button>
              </div>

              <Button type="submit" className="w-full py-6 text-xl bg-primary text-white hover:bg-dark shadow-2xl shadow-primary/20">
                Submit Global RFQ <Send size={22} className="ml-2" />
              </Button>
              
              <div className="flex justify-center gap-8 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                 <span className="flex items-center gap-2"><Clock size={12} /> 24h Response</span>
                 <span className="flex items-center gap-2"><ShieldCheck size={12} /> Secure Data</span>
              </div>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <div className="h-600px w-full bg-gray-200 mt-20 relative group grayscale hover:grayscale-0 transition-all duration-1000">
         <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-background via-transparent to-background"></div>
        <iframe 
          title="location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.0688975472!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71dbff1644!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;