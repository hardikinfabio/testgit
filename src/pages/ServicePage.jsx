import React from 'react';
import { useParams } from 'react-router-dom';
import { Eye, Shield, Zap, Fingerprint, Cpu, CheckCircle2, X, ChevronRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { COLORS } from '../constants/colors';

const ServicePage = () => {
  const { id } = useParams();
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <div className="bg-white min-h-screen">
      {/* 1. STRATEGIC HERO */}
      <section className="pt-40 pb-24 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={COLORS.blue}>Service Objective</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <h1 className="text-6xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase" style={{ color: COLORS.dark }}>
            {title} <span className="text-gradient-primary">Defense.</span>
          </h1>
          <p className="text-2xl text-zinc-500 font-medium leading-tight max-w-xl pb-4 border-l-4 pl-8" style={{ borderColor: COLORS.teal }}>
            Deploying autonomous marketing intelligence to neutralize budget waste and hyperscale performance in {title.toLowerCase()} environments.
          </p>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-32 px-8 bg-zinc-50/50">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel color={COLORS.purple}>Operational Scope</SectionLabel>
          <h2 className="text-5xl font-black tracking-tighter mb-20 uppercase">Tactical capabilities.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Anomaly Detection", desc: "Real-time identification of non-human traffic patterns.", icon: Eye },
              { title: "Budget Shield", desc: "Automated pausing of low-efficiency signals.", icon: Shield },
              { icon: Zap, title: "Signal Scaling", desc: "Instant amplification of winning creative variants." },
              { icon: Fingerprint, title: "Identity Verification", desc: "Cross-device validation for high-LTV users." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" style={{ backgroundColor: COLORS.purple + '15' }}>
                  <item.icon size={24} style={{ color: COLORS.purple }} />
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL FRAMEWORK */}
      <section className="py-32 px-8 text-white overflow-hidden" style={{ backgroundColor: COLORS.dark }}>
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel color={COLORS.teal}>MDS Protocol</SectionLabel>
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">DEPLOYMENT CYCLE.</h2>
              <div className="space-y-4">
                {[
                  { step: "AUDIT", desc: "Deep infrastructure scan for hidden leakage." },
                  { step: "SHIELD", desc: "Implementing pre-click defense layers." },
                  { step: "OPTIMIZE", desc: "Surgical budget re-allocation at scale." },
                  { step: "SCALE", desc: "Capitalizing on high-confidence signals." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 border-teal-500 text-teal-500">0{i + 1}</div>
                    <div>
                      <div className="font-black text-lg tracking-widest uppercase">{item.step}</div>
                      <div className="text-xs text-zinc-500 font-bold">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 flex items-center justify-center">
               <div className="relative w-full aspect-square max-w-lg">
                  <div className="absolute inset-0 border-2 border-dashed border-zinc-800 rounded-full animate-[spin_60s_linear_infinite]"></div>
                  <div className="absolute inset-12 border border-teal-500/20 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu size={120} className="text-teal-500 animate-pulse" />
                  </div>
                  {/* Rotating Orbitals */}
                  {[0, 90, 180, 270].map((deg, i) => (
                    <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"></div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEFENSE STATISTICS */}
      <section className="py-32 px-8 bg-white border-b border-zinc-100">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-16">
          {[
            { label: "AVG WASTE NEUTRALIZED", value: "34.2%", color: COLORS.pink },
            { label: "TIME TO LIFT", value: "14 DAYS", color: COLORS.blue },
            { label: "BOT TRACTION FILTERED", value: "99.9%", color: COLORS.teal }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="text-6xl lg:text-8xl font-black tracking-tighter" style={{ color: COLORS.dark }}>{stat.value}</div>
              <div className="text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: stat.color }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE ADVANTAGE */}
      <section className="py-32 px-8 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel color={COLORS.blue}>Competitive Edge</SectionLabel>
          <h2 className="text-5xl font-black tracking-tighter mb-20 uppercase">Why Defense Systems?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[3.5rem] bg-white border border-zinc-100 shadow-xl">
              <h3 className="text-3xl font-black mb-6 tracking-tight">Traditional Agencies</h3>
              <ul className="space-y-4">
                {["Passive reporting", "Reactive optimization", "Opaque data streams", "Manual bidding traps"].map((txt, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-400 font-medium">
                    <X size={18} className="text-pink-500" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 rounded-[3.5rem] bg-zinc-900 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 opacity-10 blur-[60px]"></div>
              <h3 className="text-3xl font-black mb-6 tracking-tight text-teal-400">Infabio Defense</h3>
              <ul className="space-y-4">
                {["Autonomous defense", "Predictive performance", "256-bit data clarity", "Algorithmic hyperscaling"].map((txt, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <CheckCircle2 size={18} className="text-teal-500" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTEL FAQ */}
      <section className="py-32 px-8 max-w-[900px] mx-auto">
        <SectionLabel color={COLORS.orange}>Mission Intelligence</SectionLabel>
        <h2 className="text-5xl font-black tracking-tighter mb-16 uppercase text-center">COMMON INTEL.</h2>
        <div className="space-y-6">
          {[
            { q: "How fast do we see ROI?", a: "Initial anomalies are neutralized within 72 hours. Performance scaling baseline shifts typically occur within 14-21 days of deployment." },
            { q: "Do we need to replace our team?", a: "No. Our systems integrate with your existing media unit as an elite defensive layer, empowering them with better data." },
            { q: "Can it handle multi-million budgets?", a: "MDS is built for scale. We currently defend over $50M in annual ad spend across global accounts." }
          ].map((faq, i) => (
            <details key={i} className="group border-b border-zinc-100 pb-6 cursor-pointer">
              <summary className="flex justify-between items-center list-none font-black text-xl tracking-tight transition-colors group-hover:text-teal-600">
                {faq.q}
                <ChevronRight className="transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-zinc-500 font-medium leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 7. INITIATE PROTOCOL */}
      <section className="py-24 px-8 mb-20">
        <div className="max-w-[1400px] mx-auto rounded-[4rem] bg-gradient-to-br from-indigo-900 via-zinc-900 to-black p-20 text-center relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 space-y-10">
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none uppercase">
              SECURE YOUR <br /> {title.toUpperCase()} <span className="text-teal-400">DOMAIN.</span>
            </h2>
            <p className="text-zinc-400 text-xl font-medium max-w-2xl mx-auto italic">"Every dollar undefended is a dollar lost to the bot networks."</p>
            <button className="bg-white text-zinc-900 px-14 py-6 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-transform uppercase">
              Initiate System Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
