import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Linkedin, Twitter, Instagram, MapPin, Mail } from 'lucide-react';
import MobileMenu from '../components/MobileMenu';
import { COLORS } from '../constants/colors';

const MainLayout = ({ children, isMenuOpen, setIsMenuOpen }) => (
  <div className="min-h-screen bg-white font-sans selection:text-white" style={{ color: COLORS.dark }}>
    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    {/* ANNOUNCEMENT BAR */}
    <div className="text-white py-2.5 overflow-hidden flex items-center text-[10px] font-bold tracking-[0.2em] uppercase w-full" style={{ backgroundColor: COLORS.dark }}>
      <div className="animate-scroll flex whitespace-nowrap min-w-max">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-24 px-12">
            <span className="opacity-70">ROAS PROTECTION: <span style={{ color: COLORS.teal }}>ACTIVE</span></span>
            <span className="cursor-pointer hover:text-teal-400 transition-colors">SAVE YOUR AD BUDGET — NEUTRALIZE BOT FRAUD — GROW YOUR BUSINESS →</span>
            <span className="opacity-70 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
              SYSTEM STATUS: OPTIMIZED
            </span>
          </div>
        ))}
      </div>
    </div>
    
    {/* HEADER */}
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100 px-8 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src="https://infabio.com/infabio-logo.png" alt="Infabio" className="h-10 md:h-12 object-contain" />
      </Link>
      <div className="flex items-center gap-8">
        <div className="h-6 w-px bg-zinc-200 hidden md:block"></div>
        <button className="text-white px-7 py-3 text-[11px] font-bold tracking-widest rounded-full shadow-lg hover:brightness-110 transition-all uppercase" style={{ backgroundColor: COLORS.purple }}>
          Get Audit
        </button>
        <button onClick={() => setIsMenuOpen(true)} className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </nav>

    {children}

    {/* FOOTER */}
    <footer className="py-20 px-8 text-white border-t border-zinc-800" style={{ backgroundColor: '#0A0F1C' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-zinc-800/50">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img src="https://infabio.com/infabio-about.png" alt="Infabio" className="h-10 object-contain w-auto max-w-[180px]" />
              <div className="h-8 w-px bg-zinc-800 hidden md:block"></div>
              <span className="font-black text-lg tracking-tighter uppercase leading-none text-gradient-primary">
                Marketing Defense<br />System
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              AI-powered marketing defense system protecting brands from budget waste.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center hover:bg-zinc-700 transition-all">
                  <Icon size={18} className="text-zinc-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-8 tracking-wider">Services</h4>
            <ul className="space-y-4">
              {["AI Media Buying", "SEO & Search", "Conversion Optimization", "Social Media", "Email Marketing", "Brand Protection"].map((item, i) => (
                <li key={i}>
                  <Link to={`/service/${item.toLowerCase().replace(/ /g, '-')}`} className="text-zinc-400 hover:text-white text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-8 tracking-wider">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Case Studies", "Insights", "Careers", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link to={`/company/${item.toLowerCase().replace(/ /g, '-')}`} className="text-zinc-400 hover:text-white text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-8 tracking-wider">Global Presence</h4>
            <ul className="space-y-8">
              {[{ city: "Gurugram, India", detail: "Command Center", color: "#33B6E5" }, { city: "Jaipur, India", detail: "Creative Division", color: "#F2A51A" }].map((loc, i) => (
                <li key={i} className="flex gap-3">
                  <MapPin size={18} style={{ color: loc.color }} className="shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider">{loc.city}</div>
                    <div className="text-xs text-zinc-500 mt-1">{loc.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-500 font-black tracking-[0.3em] uppercase">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Mail size={14} className="text-teal-500" />
            <span>hello@infabio.com</span>
          </div>
          <div>© 2026 Marketing Defense. All rights reserved</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default MainLayout;
