import React from 'react';
import { Link } from 'react-router-dom';
import { X, Cpu, Search, TrendingUp, Share2, Mail, Shield, Building2, BookOpen, Lightbulb, Briefcase, Phone } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const services = [
    { name: "AI Media Buying", icon: Cpu, color: "#33B6E5" },
    { name: "SEO & Search", icon: Search, color: "#6B46C1" },
    { name: "Conversion Optimization", icon: TrendingUp, color: "#F05A28" },
    { name: "Social Media", icon: Share2, color: "#EC4899" },
    { name: "Email Marketing", icon: Mail, color: "#F2A51A" },
    { name: "Brand Protection", icon: Shield, color: "#34BFA3" },
  ];

  const company = [
    { name: "About Us", icon: Building2 },
    { name: "Case Studies", icon: BookOpen },
    { name: "Insights", icon: Lightbulb },
    { name: "Careers", icon: Briefcase },
    { name: "Contact", icon: Phone },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#070C18] flex flex-col p-8 transition-all duration-500 animate-in fade-in slide-in-from-right overflow-y-auto">
      <div className="flex justify-between items-center mb-10">
        <img src="https://infabio.com/infabio-logo.png" alt="Infabio" className="h-10 object-contain invert" />
        <button onClick={onClose} className="p-2.5 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition-colors">
          <X size={22} />
        </button>
      </div>

      <div className="flex-1 space-y-10">
        {/* SERVICES */}
        <div>
          <div className="text-[9px] font-black tracking-[0.5em] text-zinc-600 uppercase mb-4 pl-1">Services</div>
          <div className="space-y-1">
            {services.map((s, i) => (
              <Link
                key={i}
                to={`/service/${s.name.toLowerCase().replace(/[\s&]+/g, '-').replace(/-+/g, '-')}`}
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-zinc-800/60 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.color + '20' }}>
                  <s.icon size={15} style={{ color: s.color }} />
                </div>
                <span className="text-lg font-black text-white group-hover:text-teal-400 transition-colors tracking-tight">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-zinc-800" />

        {/* COMPANY */}
        <div>
          <div className="text-[9px] font-black tracking-[0.5em] text-zinc-600 uppercase mb-4 pl-1">Company</div>
          <div className="space-y-1">
            {company.map((c, i) => (
              <Link
                key={i}
                to={`/company/${c.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-zinc-800/60 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-zinc-800">
                  <c.icon size={15} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <span className="text-lg font-black text-white group-hover:text-purple-400 transition-colors tracking-tight">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3">
        <button className="w-full text-white py-4 rounded-2xl font-black text-sm tracking-widest uppercase bg-gradient-to-r from-purple-600 to-blue-600 shadow-2xl hover:brightness-110 transition-all">
          Get Free Audit →
        </button>
        <p className="text-center text-[10px] text-zinc-600 tracking-wider">hello@infabio.com</p>
      </div>
    </div>
  );
};

export default MobileMenu;
