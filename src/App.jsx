import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, User, PieChart, Shield, Zap, TrendingUp, Target, Lock, Activity, Eye, AlertCircle, CheckCircle2, Globe, Cpu, FileText, BarChart3, Fingerprint, Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react';

const COLORS = {
  purple: '#8A3FA0',
  blue: '#33B6E5',
  teal: '#34BFA3',
  orange: '#F2A51A',
  pink: '#E56E6B',
  dark: '#1F2937',
  lightGray: '#E6E6E6',
  white: '#FFFFFF'
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PlaceholderBox = ({ className = "", label = "Placeholder", icon: Icon, color = COLORS.purple }) => (
  <div className={`flex flex-col items-center justify-center rounded-2xl p-6 relative group transition-all border border-zinc-200 overflow-hidden bg-white ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 opacity-20" style={{ backgroundColor: color }}></div>
    {Icon && <Icon size={40} strokeWidth={1.5} className="mb-3" style={{ color: color }} />}
    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-center leading-tight mb-1 text-zinc-400">{label}</span>
  </div>
);

const SectionLabel = ({ children, color = COLORS.teal }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full border bg-white shadow-sm" style={{ borderColor: color + '40', color: color }}>
    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
    {children}
  </div>
);

const HeroDashboard = () => {
  const [dataPoints, setDataPoints] = useState(Array(15).fill(40));
  const [roi, setRoi] = useState(31.4);
  const [threats, setThreats] = useState(14592);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const next = [...prev.slice(1), 30 + Math.random() * 65];
        return next;
      });
      setRoi(prev => +(prev + (Math.random() > 0.5 ? 0.3 : -0.2)).toFixed(1));
      setThreats(prev => prev + Math.floor(Math.random() * 9 + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white border border-zinc-200 p-2 rounded-[2.5rem] shadow-2xl overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="bg-zinc-900 rounded-[2rem] p-6 lg:p-8 aspect-[4/5] flex flex-col relative overflow-hidden group">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20 transition-transform duration-[10s] group-hover:scale-110" style={{ backgroundImage: 'radial-gradient(#33B6E5 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent pointer-events-none"></div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full animate-pulse shadow-[0_0_8px_rgba(229,110,107,0.6)]" style={{ backgroundColor: COLORS.pink }}></div>
            <div className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(242,165,26,0.6)]" style={{ backgroundColor: COLORS.orange }}></div>
            <div className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(52,191,163,0.6)]" style={{ backgroundColor: COLORS.teal }}></div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[9px] font-black text-red-400 tracking-widest uppercase shadow-red-500/50">Live Scan</span>
          </div>
        </div>

        {/* Live Counters */}
        <div className="space-y-4 relative z-10 flex-1 flex flex-col">
          {/* Main Stat */}
          <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5 backdrop-blur-md relative overflow-hidden group-hover:border-zinc-700 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full"></div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-2 flex items-center gap-2">
              <Zap size={14} style={{ color: COLORS.teal }} className="opacity-80" />
              Capital Defended
            </div>
            <div className="text-4xl lg:text-5xl font-black text-white tracking-tighter tabular-nums drop-shadow-lg">
              ${(threats * 12.4).toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <div className="mt-3 text-[10px] text-teal-400 flex items-center gap-1.5 font-bold tracking-wider uppercase border border-teal-500/20 bg-teal-500/10 w-max px-2 py-1 rounded-md">
              <TrendingUp size={12} /> Optimization Active
            </div>
          </div>

          {/* Dynamic Bar Chart */}
          <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5 backdrop-blur-md flex-1 flex flex-col relative group-hover:border-zinc-700 transition-colors mx-auto w-full min-h-[140px] overflow-hidden">
            {/* Scanner line effect */}
            <div className="absolute inset-0 border-t border-blue-400/30 w-full h-px opacity-60 scanner-line shadow-[0_0_12px_rgba(59,130,246,0.6)] z-20"></div>
            <style>{`
               @keyframes scan {
                 0% { transform: translateY(-100%); }
                 100% { transform: translateY(1500%); }
               }
               .scanner-line {
                 animation: scan 2.5s linear infinite;
               }
             `}</style>
            <div className="text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3 flex justify-between relative z-10">
              <span>Traffic Analysis</span>
              <span className="text-blue-400 animate-pulse flex items-center gap-1"><Cpu size={12} /> Analyzing</span>
            </div>
            <div className="flex-1 flex items-end justify-between gap-1 relative z-10 h-full">
              {dataPoints.map((val, i) => (
                <div key={i} className="w-full bg-zinc-800/50 rounded-t-sm relative transition-colors h-full" style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <div
                    className="w-full rounded-t-sm transition-all duration-700 ease-out"
                    style={{
                      height: `${val}%`,
                      background: val > 75 ? `linear-gradient(to top, ${COLORS.dark}, ${COLORS.pink})` : `linear-gradient(to top, ${COLORS.blue}40, ${COLORS.blue})`
                    }}>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-4 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center gap-3 group-hover:border-zinc-700 transition-colors relative overflow-hidden">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-400 shrink-0">
                <Shield size={16} className="drop-shadow-[0_0_8px_rgba(138,63,160,0.8)]" />
              </div>
              <div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-[0.2em] font-bold mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">Bots Blocked</div>
                <div className="text-lg font-black text-white tabular-nums">{threats.toLocaleString()}</div>
              </div>
            </div>
            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-4 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center gap-3 group-hover:border-zinc-700 transition-colors relative overflow-hidden">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-500/20 text-teal-400 shrink-0">
                <Activity size={16} className="drop-shadow-[0_0_8px_rgba(52,191,163,0.8)]" />
              </div>
              <div>
                <div className="text-[9px] text-zinc-400 uppercase tracking-[0.2em] font-bold mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">ROAS Lift</div>
                <div className="text-lg font-black text-white tabular-nums text-teal-300">+{roi.toFixed(1)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const ServicePage = () => {
  const { id } = useParams();
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="pt-32 pb-20 px-8 max-w-[1400px] mx-auto min-h-screen">
      <SectionLabel color={COLORS.blue}>Service Objective</SectionLabel>
      <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-12 uppercase" style={{ color: COLORS.dark }}>
        {title} <span className="text-gradient-primary">Defense.</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-2xl text-zinc-500 font-medium leading-relaxed">
            Advanced algorithmic {title.toLowerCase()} strategies designed to neutralize waste and hyperscale your winning signals in the most competitive environments.
          </p>
          <div className="grid gap-6">
            {["Autonomous Optimization", "Fraud Neutralization", "Premium Attribution", "Predictive Signal Scaling"].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-6 rounded-2xl border border-zinc-100 bg-zinc-50/50">
                <CheckCircle2 className="text-teal-500" size={24} />
                <span className="font-bold text-zinc-700 tracking-wide">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-900 rounded-[3rem] p-12 flex flex-col justify-center border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full"></div>
          <SectionLabel color={COLORS.teal}>MDS Internal Intel</SectionLabel>
          <h3 className="text-4xl font-black text-white mb-8 tracking-tighter">Ready to Deploy?</h3>
          <p className="text-zinc-400 mb-10 text-lg leading-relaxed">Our clandestine unit of architects is ready to scan your infrastructure for {title.toLowerCase()} leakage.</p>
          <button className="text-white px-10 py-5 font-black rounded-2xl text-sm tracking-widest uppercase self-start" style={{ backgroundColor: COLORS.purple }}>
            Initiate Tactical Scan
          </button>
        </div>
      </div>
    </div>
  );
};

const CompanyPage = () => {
  const { id } = useParams();
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="pt-32 pb-20 px-8 max-w-[1000px] mx-auto min-h-screen">
      <SectionLabel color={COLORS.purple}>Operational Intel</SectionLabel>
      <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-10 uppercase" style={{ color: COLORS.dark }}>
        The Infabio <span className="text-gradient-primary italic">{title}.</span>
      </h1>
      <div className="prose prose-xl text-zinc-500 font-medium leading-relaxed space-y-8">
        <p>
          Infabio is not just a marketing agency; it is a defensive layer for elite brands. We operate in the shadows of the ad platforms, detecting and neutralizing inefficiencies that cost brands millions.
        </p>
        <div className="p-10 rounded-[3rem] bg-zinc-900 text-white border border-zinc-800 shadow-2xl">
          <h2 className="text-4xl font-black mb-6 tracking-tighter" style={{ color: COLORS.teal }}>Our Mission.</h2>
          <p className="text-zinc-400 text-lg">To provide performance marketing teams with a cybernetic shield that guarantees Every Dollar Defended, Every Lead Verified, and Every Signal Optimized.</p>
        </div>
      </div>
    </div>
  );
};

const Home = ({ activeCase, setActiveCase, caseStudies }) => {
  return (
    <>
      <style>{`
        .selection\\:bg-purple-custom::selection { background-color: ${COLORS.purple}; }
        .bg-gradient-primary { background: linear-gradient(135deg, ${COLORS.purple}, ${COLORS.blue}); }
        .text-gradient-primary { background: linear-gradient(135deg, ${COLORS.purple}, ${COLORS.blue}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .border-animation-container {
          position: relative;
          border-radius: 1.5rem;
          padding: 2px;
          overflow: hidden;
          background: transparent;
          transition: all 0.3s ease;
        }
        .border-animation-container::before {
          content: '';
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, transparent 60%, var(--border-glow, #33B6E5));
          animation: rotate-slow 4s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        .border-animation-container:hover::before {
          opacity: 1;
        }
        .border-animation-content {
          position: relative;
          z-index: 10;
          height: 100%;
          width: 100%;
        }
      `}</style>
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 px-8 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10 relative z-10">
            <SectionLabel color={COLORS.purple}>Operational Objective</SectionLabel>
            <h1 className="text-6xl lg:text-[110px] font-black leading-[0.85] tracking-tighter" style={{ color: COLORS.dark }}>
              DEFEND YOUR <span style={{ color: COLORS.blue }}>GROWTH.</span><br />
              <span className="text-gradient-primary italic">MULTIPLY ROI.</span>
            </h1>
            <p className="text-2xl text-zinc-500 max-w-xl leading-snug font-medium border-l-4 pl-6" style={{ borderColor: COLORS.teal }}>
              Autonomous marketing intelligence that detects ad leakage, neutralizes bot fraud, and scales your winning signals.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <button className="text-white px-10 py-5 font-bold rounded-2xl flex items-center gap-3 shadow-2xl hover:translate-y-[-2px] transition-all" style={{ backgroundColor: COLORS.dark }}>
                INITIATE AUDIT <ArrowRight size={20} style={{ color: COLORS.teal }} />
              </button>
              <button className="border-2 px-10 py-5 font-bold rounded-2xl hover:bg-zinc-50 transition-colors text-zinc-500" style={{ borderColor: COLORS.lightGray }}>
                VIEW CASE FILES
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 blur-[120px] opacity-20" style={{ background: `radial-gradient(circle, ${COLORS.purple}, ${COLORS.blue})` }}></div>
            <HeroDashboard />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-zinc-100 flex items-center gap-4 z-20 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden group" style={{ backgroundColor: COLORS.teal + '15' }}>
                <div className="absolute inset-0 bg-teal-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <TrendingUp style={{ color: COLORS.teal }} className="relative z-10" />
              </div>
              <div>
                <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Live Efficiency</div>
                <div className="text-2xl font-black tabular-nums" style={{ color: COLORS.dark }}>+31.4% Lift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 border-y border-zinc-100" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row flex-wrap lg:items-center justify-between gap-12">
            <span className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.4em] whitespace-nowrap text-center lg:text-left">Integrated with elite stacks</span>
            <div className="flex flex-wrap gap-10 md:gap-14 items-center justify-center lg:justify-end flex-1">
              {[
                "https://www.rockman.in/wp-content/uploads/2019/06/logo.png",
                "https://www.oxxy.in/image/oxxy_logo.png",
                "https://riagupta.com/wp-content/uploads/2025/04/wishtune-logo.png",
                "https://beta.ananthamprojects.com/assets/transparentlogowhite-BoxRJ4id.png",
                "https://content.app-sources.com/s/432484035579470251/uploads/Caliber/cropped-Calibar-Tech-Logo-8560830.png?format=webp"
              ].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Partner Logo ${i + 1}`}
                  className={`h-7 md:h-10 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer ${logo.includes('transparentlogowhite') ? 'invert' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-32 px-8" style={{ backgroundColor: COLORS.lightGray + '40' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <SectionLabel color={COLORS.pink}>Threat Assessment</SectionLabel>
              <h2 className="text-5xl font-black leading-tight tracking-tight mb-8">WHERE YOUR CAPITAL IS BEING NEUTRALIZED.</h2>
            </div>
            <div className="p-10 rounded-[2.5rem] text-white shadow-2xl" style={{ backgroundColor: COLORS.dark }}>
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle style={{ color: COLORS.pink }} />
                <span className="font-bold tracking-widest text-[10px] uppercase opacity-70">Active Alert: Intelligence Failure</span>
              </div>
              <p className="text-xl text-zinc-300 font-medium leading-relaxed">Most brands lose 25-40% of their ad spend to bot inflation, attribution blindness, and algorithm burnout. We call this <span style={{ color: COLORS.pink }}>"The Invisible Tax."</span></p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "BOT LEAKAGE", desc: "Non-human traffic and bot-filled funnels draining Q4 budgets.", color: COLORS.pink },
              { title: "DATA BLINDNESS", desc: "Cookie-less environments leading to massive attribution gaps.", color: COLORS.orange },
              { title: "ALGO BURNOUT", desc: "Platform stagnation where frequency kills your ROI.", color: COLORS.purple },
              { title: "BID INEFFICIENCY", desc: "Overpaying for low-intent signals that never convert.", color: COLORS.blue },
              { title: "FUNNEL FRICTION", desc: "Post-click drops resulting in expensive wasted interest.", color: COLORS.teal },
              { title: "STEALTH RIVALS", desc: "Competitors sniping your branded keywords undetected.", color: COLORS.dark }
            ].map((prob, i) => (
              <div key={i} className="border-animation-container group hover:shadow-2xl transition-all" style={{ '--border-glow': prob.color }}>
                <div className="border-animation-content bg-white p-10 rounded-[1.4rem] h-full flex flex-col border border-zinc-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: prob.color + '15' }}>
                    <X size={20} style={{ color: prob.color }} />
                  </div>
                  <h3 className="font-black mb-4 tracking-tighter text-xl">{prob.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK SECTION */}
      <section className="py-32 text-white relative overflow-hidden" style={{ backgroundColor: COLORS.dark }}>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" style={{ background: `linear-gradient(to left, ${COLORS.blue}, transparent)` }}></div>
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <SectionLabel color={COLORS.blue}>Proprietary Protocol</SectionLabel>
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">THE MDS<br />CYBERNETIC CYCLE.</h2>
              <div className="space-y-4">
                {[
                  { step: "DETECT", desc: "Scanning 200+ signals for waste and fraud.", color: COLORS.pink },
                  { step: "DEFEND", desc: "Neutralizing inefficiency with AI shields.", color: COLORS.orange },
                  { step: "OPTIMIZE", desc: "Surgical budget allocation for scale.", color: COLORS.blue },
                  { step: "MULTIPLY", desc: "Aggregating wins to dominate market share.", color: COLORS.teal }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all bg-zinc-900/50">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm border-2" style={{ borderColor: item.color, color: item.color }}>0{i + 1}</div>
                    <div>
                      <div className="font-black text-lg tracking-widest">{item.step}</div>
                      <div className="text-xs text-zinc-500 font-bold">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="h-full min-h-[500px] bg-zinc-900 rounded-[3rem] border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                <img
                  src="https://ik4.es/wp-content/uploads/2026/01/ia-para-detectar-fraudes-senales-y-limites.png"
                  alt="AI Fraud Detection Logic"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center px-6">
                  <div className="w-16 h-1 bg-teal-500 mb-6 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,191,163,0.5)]"></div>
                  <SectionLabel color={COLORS.teal}>Proprietary Neural Engine</SectionLabel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionLabel color={COLORS.purple}>Intelligence Reports</SectionLabel>
              <h2 className="text-5xl font-black tracking-tighter italic">DECRYPTING PERFORMANCE.</h2>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)} className="p-4 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => setActiveCase((prev) => (prev + 1) % caseStudies.length)} className="p-4 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="bg-white border-2 border-zinc-100 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
            <div className="lg:w-1/2 relative bg-zinc-900 overflow-hidden group">
              <img src={caseStudies[activeCase].image} alt={caseStudies[activeCase].title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
              <div className="absolute top-8 left-8 flex items-center gap-2 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-[9px] font-black tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: caseStudies[activeCase].accent }}></div>
                Classified Report v4.0
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="text-[10px] font-black tracking-[0.5em] text-zinc-400 mb-8 uppercase">CLIENT: {caseStudies[activeCase].client}</div>
              <h3 className="text-4xl font-black mb-12 tracking-tighter leading-none">{caseStudies[activeCase].title}</h3>
              <div className="space-y-10 mb-16">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-1 text-[9px] font-black text-zinc-300">01</div>
                  <div className="col-span-11">
                    <div className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-2">Vulnerability</div>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed italic">"{caseStudies[activeCase].problem}"</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="col-span-1 text-[9px] font-black" style={{ color: caseStudies[activeCase].accent }}>03</div>
                  <div className="col-span-11">
                    <div className="text-[9px] font-black tracking-widest uppercase mb-2" style={{ color: caseStudies[activeCase].accent }}>Mission Result</div>
                    <p className="text-lg text-zinc-900 font-black tracking-tight">{caseStudies[activeCase].results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto border-t border-zinc-100">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <SectionLabel color={COLORS.teal}>Operational Intel</SectionLabel>
            <h2 className="text-5xl font-black tracking-tighter leading-none mb-6">THE SQUAD BEHIND THE SYSTEM.</h2>
            <p className="text-xl text-zinc-500 font-medium">A clandestine unit dedicated to your dominance.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {["Anchal", "Vikash", "OP", "Chhavi"].map((name, i) => (
            <div key={i} className="group cursor-crosshair">
              <div className="relative mb-8 bg-zinc-50 rounded-[2rem] aspect-[4/5] overflow-hidden border border-zinc-100 transition-all group-hover:shadow-2xl flex items-center justify-center opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100">
                 <User size={100} className="text-zinc-300" />
              </div>
              <h4 className="text-xl font-black tracking-tight mb-1 uppercase">{name}</h4>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-zinc-400">Tactical Specialist</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 px-8 text-center relative overflow-hidden" style={{ backgroundColor: COLORS.dark }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionLabel color={COLORS.teal}>Initiate Protocol</SectionLabel>
          <h2 className="text-6xl lg:text-[100px] font-black text-white mb-10 tracking-tighter leading-[0.85]">
            SECURE YOUR <span className="text-gradient-primary">MARKET SHARE.</span>
          </h2>
          <button className="text-white px-14 py-6 font-black rounded-2xl hover:scale-105 transition-transform text-lg shadow-2xl uppercase bg-gradient-to-r from-purple-600 to-blue-600">
            Get Free Audit
          </button>
        </div>
      </section>
    </>
  );
};

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

const App = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const caseStudies = [
    {
      client: "NEO-FINANCE GLOBAL",
      title: "Neutralizing $4M Annual Ad Waste",
      problem: "Massive bot-driven lead inflation causing sales team friction and budget drainage.",
      solution: "Deployed MDS Bot-Shield and Neural Bidding to filter traffic at the pre-click layer.",
      results: "+42% SQL quality improvement; -28% CPA within 60 days.",
      accent: COLORS.purple,
      image: "https://totempool.com/wp-content/uploads/2022/07/case-study_f4d16a7af18e4599d24d8120fd0d4c66_2000-930x620.jpg"
    },
    {
      client: "AXON E-COMMERCE",
      title: "Scaling Beyond the $50M Ceiling",
      problem: "Plateaued ROAS due to cross-channel attribution blindness and audience saturation.",
      solution: "Implemented MDS Attribution Engine to re-allocate spend toward high-LTV signals.",
      results: "3.2x ROAS increase; Scaled monthly spend from $1.2M to $4.5M profitably.",
      accent: COLORS.blue,
      image: "https://graphicfolks.com/wp-content/uploads/2025/12/powerful-marketing-case-studies.jpg"
    },
    {
      client: "QUANTUM SAAS",
      title: "Winning the Bidding War",
      problem: "Aggressive competitors driving up CPCs by 200% on core keyword clusters.",
      solution: "MDS Stealth Bidding protocols used to capture low-intent volume the competition ignored.",
      results: "-60% CPC reduction; 15% increase in market share dominance.",
      accent: COLORS.teal,
      image: "https://tse1.mm.bing.net/th/id/OIP.hFVZ7O3dgQ7km-T-OqV43QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <Router>
      <ScrollToTop />
      <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <Routes>
          <Route path="/" element={<Home activeCase={activeCase} setActiveCase={setActiveCase} caseStudies={caseStudies} />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/company/:id" element={<CompanyPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;