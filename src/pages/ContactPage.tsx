import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import {
  MessageCircle,
  Globe2,
  Clock,
  ShieldCheck,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../data/constants';

const SOCIAL_ICONS: any = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  WhatsApp: MessageCircle,
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    region: '',
    category: '',
    message: '',
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('✅ RFQ submitted successfully');
        setFormData({
          name: '',
          email: '',
          region: '',
          category: '',
          message: '',
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* HEADER */}
      <div className="bg-dark py-28 text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg">
            Our export division is ready to assist your project requirements.
          </p>
        </motion.div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT INFO */}
          <div className="space-y-12">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow">
              <div className="flex items-center gap-4 mb-4">
                <Globe2 className="text-primary" />
                <h4 className="font-bold text-xl">Multiple Country  Sales</h4>
              </div>
              <p className="text-gray-500 mb-4">
                Dedicated export and Multiple Country.
              </p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-primary font-semibold underline"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            {/* SOCIALS */}
            <div>
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Follow Us
              </h5>

              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.platform];

                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition"
                    >
                      {Icon && <Icon size={16} />}
                      <span className="text-sm font-semibold">
                        {social.platform}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h4 className="text-2xl font-serif font-bold mb-6">
              Request for Quote
            </h4>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Company Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
              />

              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200"
              >
                <option value="">Select Region</option>
                <option>Middle East (GCC)</option>
                <option>European Union</option>
                <option>South East India</option>
                <option>North India</option>
                <option>India</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Project details..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-lg bg-primary text-white"
              >
                {loading ? 'Sending...' : 'Submit RFQ'}
              </Button>

              {success && (
                <p className="text-green-600 text-sm font-semibold text-center">
                  {success}
                </p>
              )}
            </form>

            <div className="flex justify-center gap-6 text-xs text-gray-400 uppercase tracking-wider font-bold mt-6">
              <span className="flex items-center gap-1">
                <Clock size={12} /> 24h Response
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} /> Secure Data
              </span>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;