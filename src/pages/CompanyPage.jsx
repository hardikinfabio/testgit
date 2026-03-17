import React from 'react';
import { useParams } from 'react-router-dom';
import { Eye, Shield, Zap, User, ArrowRight, Activity } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { COLORS } from '../constants/colors';

const CompanyPage = () => {
  const { id } = useParams();
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="bg-white min-h-screen">
      {/* 1. THE MISSION HERO */}
      <section className="pt-40 pb-24 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={COLORS.purple}>Agency Objective</SectionLabel>
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase mb-12">
            The Infabio <br /> <span className="text-gradient-primary italic">{title}.</span>
          </h1>
          <p className="text-2xl text-zinc-500 font-medium leading-relaxed border-l-4 pl-8" style={{ borderColor: COLORS.purple }}>
            We are not a traditional agency. We are a clandestine defensive layer for brands that refuse to lose market share to inefficiency and fraud.
          </p>
        </div>
      </section>

      {/* 2. CORE DNA */}
      <section className="py-32 px-8 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionLabel color={COLORS.teal}>Operational Values</SectionLabel>
          <h2 className="text-5xl font-black tracking-tighter mb-20 uppercase">Our Core DNA.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Radical Transparency", desc: "Every dollar accounted for. No hidden platform markups.", icon: Eye },
              { title: "Algorithmic Sovereignty", desc: "Owning the signals, not just the platforms.", icon: Shield },
              { title: "Velocity First", desc: "Neutralizing threats before they impact the P&L.", icon: Zap }
            ].map((dna, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center border border-zinc-700">
                  <dna.icon size={32} className="text-teal-400" />
                </div>
                <h3 className="text-2xl font-black tracking-tight">{dna.title}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">{dna.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMMAND SQUAD */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={COLORS.pink}>Squad Hierarchy</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase leading-none">THE EXPERTS BEHIND THE SHIELD.</h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed mb-10">
              Our clandestine unit consists of data architects, media buyers, and neural engineers dedicated to your brand's dominance.
            </p>
            <div className="space-y-6">
              {["15+ Years Combined Intelligence", "Custom Neural Engine Developers", "Managed $500M+ Global Spend"].map((spec, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="font-bold text-zinc-700 uppercase tracking-widest text-xs">{spec}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[COLORS.purple, COLORS.blue, COLORS.teal, COLORS.orange].map((color, i) => (
              <div key={i} className="aspect-square bg-zinc-50 rounded-[2rem] border border-zinc-100 flex items-center justify-center grayscale group hover:grayscale-0 transition-all cursor-crosshair">
                <User size={60} className="text-zinc-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL PRESENCE */}
      <section className="py-32 px-8 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel color={COLORS.blue}>Command Centers</SectionLabel>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Global Presence.</h2>
            <p className="text-zinc-500 font-black tracking-widest text-[10px] uppercase">Protecting brands across 3 continents.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { city: "Gurugram", country: "India", role: "DEFENSE HQ", desc: "Our primary neural monitoring and ad-ops center.", color: COLORS.blue },
              { city: "Jaipur", country: "India", role: "CREATIVE INTEL", desc: "Specialized in high-impact visual performance signals.", color: COLORS.orange }
            ].map((loc, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-zinc-100 shadow-xl group hover:shadow-2xl transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight">{loc.city}</h3>
                    <div className="text-zinc-400 font-bold uppercase tracking-widest text-xs mt-1">{loc.country}</div>
                  </div>
                  <div className="text-[10px] font-black tracking-widest px-4 py-2 rounded-full border border-zinc-200" style={{ color: loc.color }}>{loc.role}</div>
                </div>
                <p className="text-zinc-500 font-medium leading-relaxed mb-8">{loc.desc}</p>
                <div className="flex items-center gap-2 text-zinc-900 font-black text-sm uppercase tracking-tighter">
                  View Direction <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEFENSE METHODOLOGY */}
      <section className="py-32 px-8">
        <div className="max-w-[1000px] mx-auto text-center space-y-12">
          <SectionLabel color={COLORS.purple}>Proprietary Logic</SectionLabel>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none">How We Fight.</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-black">Pre-Click Defense</h3>
              <p className="text-zinc-500 leading-relaxed font-medium">We filter bot signals before the auction, ensuring your budget is only spent on high-intent biological users.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black">Post-Conversion Intel</h3>
              <p className="text-zinc-500 leading-relaxed font-medium">Feedback loops that tell platforms exactly which leads converted to revenue, starving the bad signals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 2026 VISION */}
      <section className="py-32 px-8 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-purple-900/10"></div>
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-10">
            <SectionLabel color={COLORS.teal}>Future Outlook</SectionLabel>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none uppercase">THE 2026 <br /> <span className="text-teal-400 italic">DOMINANCE.</span></h2>
            <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-lg">
              As AI matures, so do the threats. Our 2026 roadmap focuses on self-healing ad stacks that anticipate market volatility and competitive attacks.
            </p>
          </div>
          <div className="h-[400px] bg-zinc-900/50 rounded-[3rem] border border-zinc-800 flex items-center justify-center backdrop-blur-md">
            <Activity size={100} className="text-zinc-800 animate-pulse" />
          </div>
        </div>
      </section>

      {/* 7. CONTACT UNIT */}
      <section className="py-40 px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionLabel color={COLORS.pink}>Initiate Contact</SectionLabel>
          <h2 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none uppercase">Ready to join the <span className="italic text-zinc-300">Defense?</span></h2>
          <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto">
            We are accepting limited scale-ready partners. Enter your details for a clandestine discovery call.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="bg-zinc-900 text-white px-12 py-6 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-transform uppercase">
               Request Discovery call
             </button>
             <button className="border-2 border-zinc-100 text-zinc-500 px-12 py-6 rounded-2xl font-black text-lg hover:bg-zinc-50 transition-colors uppercase">
               Download Dossier
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
