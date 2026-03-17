import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const links = [
    { name: "Services", sub: ["AI Media Buying", "SEO & Search", "Conversion Optimization", "Social Media", "Email Marketing", "Brand Protection"] },
    { name: "Company", sub: ["About Us", "Case Studies", "Insights", "Careers", "Contact"] }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-900 flex flex-col p-8 transition-all duration-500 animate-in fade-in slide-in-from-right overflow-y-auto">
      <div className="flex justify-between items-center mb-12">
        <img src="https://infabio.com/infabio-logo.png" alt="Infabio" className="h-10 object-contain invert" />
        <button onClick={onClose} className="p-3 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition-colors">
          <X size={28} />
        </button>
      </div>

      <div className="space-y-8 flex-1">
        {links.map((link, i) => (
          <div key={i} className="space-y-4">
            {link.sub ? (
              <>
                <div className="text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase">{link.name}</div>
                <div className="grid grid-cols-1 gap-4">
                  {link.sub.map((sub, j) => (
                    <Link 
                      key={j} 
                      to={`/service/${sub.toLowerCase().replace(/ /g, '-')}`} 
                      onClick={onClose}
                      className="text-2xl font-black text-white hover:text-teal-400 transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link 
                to={link.href} 
                onClick={onClose}
                className="text-4xl font-black text-white hover:text-purple-400 tracking-tighter"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-800">
        <button className="w-full text-white py-5 rounded-2xl font-black text-sm tracking-widest uppercase bg-gradient-to-r from-purple-600 to-blue-600 shadow-2xl">
          Get Free Audit
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
