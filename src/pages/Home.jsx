import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, User, Shield, Zap, TrendingUp, Target, Lock, Activity, Eye, AlertCircle, Cpu, BarChart3, Fingerprint } from 'lucide-react';
import { COLORS } from '../constants/colors';
import SectionLabel from '../components/SectionLabel';
import HeroDashboard from '../components/HeroDashboard';

const Home = ({ activeCase, setActiveCase, caseStudies }) => {
  return (
    <>

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
            {/* Floating Metric Card */}
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
                "https://afiway.com/assets/images/logo/Dark.png",
                "https://content.app-sources.com/s/432484035579470251/uploads/sushmita_ji/cropped-LOGO-1-3293830.png?format=webp",
                "https://anantamias.com/wp-content/uploads/2025/07/logo-anantam-ias.webp",
                "https://diy-assets.classplus.co/_next/image?url=https://cdn-diy-public.classplus.co/prod/ChatGPTImageNov302025094847PM_1764519536575.png&w=1920&q=75"
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

      {/* PROBLEM SECTION: VULNERABILITY */}
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
                    <ArrowRight size={20} style={{ color: prob.color }} className="rotate-45" />
                  </div>
                  <h3 className="font-black mb-4 tracking-tighter text-xl">{prob.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">{prob.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK: THE ENGINE */}
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

      {/* CASE STUDY SLIDER */}
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
              {caseStudies && caseStudies[activeCase] && (
                <img
                  src={caseStudies[activeCase].image}
                  alt={caseStudies[activeCase].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/40 via-transparent to-transparent"></div>
              <div className="absolute top-8 left-8 flex items-center gap-2 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: caseStudies[activeCase]?.accent || COLORS.blue }}></div>
                <span className="text-[9px] font-black tracking-widest text-zinc-100 uppercase">Classified Report v4.0</span>
              </div>
              <div className="absolute bottom-10 left-10 right-10 flex justify-between z-10">
                {caseStudies.map((_, idx) => (
                  <div key={idx} className="h-1 flex-1 mx-1 rounded-full transition-all duration-500" style={{ backgroundColor: activeCase === idx ? (caseStudies[idx].accent || COLORS.blue) : 'rgba(255,255,255,0.2)' }}></div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="text-[10px] font-black tracking-[0.5em] text-zinc-400 mb-8 uppercase">CLIENT: {caseStudies[activeCase]?.client}</div>
              <h3 className="text-4xl font-black mb-12 tracking-tighter leading-none" style={{ color: COLORS.dark }}>
                {caseStudies[activeCase]?.title}
              </h3>

              <div className="space-y-10 mb-16">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-1 text-[9px] font-black text-zinc-300">01</div>
                  <div className="col-span-11">
                    <div className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-2">Vulnerability</div>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed italic">"{caseStudies[activeCase]?.problem}"</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-1 text-[9px] font-black text-zinc-300">02</div>
                  <div className="col-span-11">
                    <div className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-2">MDS Tactical Solution</div>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">{caseStudies[activeCase]?.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="col-span-1 text-[9px] font-black" style={{ color: caseStudies[activeCase]?.accent }}>03</div>
                  <div className="col-span-11">
                    <div className="text-[9px] font-black tracking-widest uppercase mb-2" style={{ color: caseStudies[activeCase]?.accent }}>Mission Result</div>
                    <p className="text-lg text-zinc-900 font-black tracking-tight">{caseStudies[activeCase]?.results}</p>
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
            <p className="text-xl text-zinc-500 font-medium">A clandestine unit of data scientists and media architects dedicated to your dominance.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "ANCHAL", role: "DEFENSE ARCHITECT", color: COLORS.teal, image: "/Anchal.jpeg" },
            { name: "VIKASH", role: "INTEL COMMANDER", color: COLORS.blue, image: "/Vikash.png" },
            { name: "CHHAVI", role: "OPS DIRECTOR", color: COLORS.purple, image: "/Chhavi.jpeg" },
            { name: "TEAM MEMBER", role: "AI ENGINEER", color: COLORS.pink }
          ].map((member, i) => (
            <div key={i} className="group cursor-crosshair">
              <div className="relative mb-8 bg-zinc-50 rounded-[2rem] aspect-[4/5] overflow-hidden border border-zinc-100 transition-all group-hover:shadow-2xl">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all opacity-20 group-hover:opacity-40">
                    <User size={100} />
                  </div>
                )}
                <div className="absolute top-6 left-6 flex gap-1 z-10">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: member.color }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-200"></div>
                </div>
              </div>
              <h4 className="text-xl font-black tracking-tight mb-1">{member.name}</h4>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: member.color }}>{member.role}</div>
              <p className="text-sm text-zinc-500 leading-relaxed font-medium italic">"Deciphering market volatility with algorithmic precision."</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-40 px-8 text-center relative overflow-hidden" style={{ backgroundColor: COLORS.dark }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${COLORS.blue}, transparent)` }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionLabel color={COLORS.teal}>Initiate Protocol</SectionLabel>
          <h2 className="text-6xl lg:text-[100px] font-black text-white mb-10 tracking-tighter leading-[0.85]">
            SECURE YOUR <span className="text-gradient-primary">MARKET SHARE.</span>
          </h2>
          <p className="text-xl text-zinc-400 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            We are accepting limited scale-ready partners for our 2024 Defensive Audits. Enter your infrastructure for a system scan.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="text-white px-14 py-6 font-black rounded-2xl hover:scale-105 transition-transform text-lg shadow-2xl flex items-center gap-4" style={{ backgroundColor: COLORS.purple }}>
              GET FREE AUDIT <Target size={24} />
            </button>
            <div className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] flex items-center gap-3">
              <Lock size={14} style={{ color: COLORS.teal }} /> 256-BIT ENCRYPTED
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;