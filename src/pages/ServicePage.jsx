import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X, ChevronRight, Cpu, Search, TrendingUp, Share2, Mail, Shield, Eye, Zap, BarChart3, Target, Lock, Activity, Layers, Repeat, MousePointer2 } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { COLORS } from '../constants/colors';

// --- AI Media Buying Content ---
const AIMediaBuyingBody = () => (
  <>
    {/* Dynamic Neural Grid Section */}
    <section className="py-24 px-8 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #33B6E5 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionLabel color="#33B6E5">Neural Bid Engine</SectionLabel>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mt-4 mb-8 uppercase">Beyond Manual<br />Control.</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[#33B6E5]/30 flex items-center justify-center flex-shrink-0 bg-[#33B6E5]/10">
                  <span className="text-[#33B6E5] font-black">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">200+ Real-time Signals</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Our AI doesn't just look at keywords. It analyzes weather, stock market shifts, local events, and competitor bid patterns in milliseconds.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-[#33B6E5]/30 flex items-center justify-center flex-shrink-0 bg-[#33B6E5]/10">
                  <span className="text-[#33B6E5] font-black">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Predictive LTV Modeling</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Bid higher for users likely to become high-value repeat customers, and ignore 'one-time' discount seekers automatically.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-12 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#33B6E5] opacity-10 blur-[80px]" />
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-black tracking-widest uppercase text-zinc-400">Signal: High Intent</span>
                </div>
                <span className="text-[#33B6E5] font-black">+42% Bid Adjustment</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700 opacity-50">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs font-black tracking-widest uppercase text-zinc-400">Signal: Bot Pattern</span>
                </div>
                <span className="text-red-500 font-black">Suppressed</span>
              </div>
              <div className="pt-8">
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#33B6E5] w-[85%] animate-pulse" />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-[10px] font-black text-zinc-500">OPTIMIZATION VELOCITY</span>
                  <span className="text-[10px] font-black text-[#33B6E5]">850 TPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The Waste Section */}
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-5xl font-black mb-16 tracking-tighter uppercase mt-4">Transparent Scaling.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: 'Avg ROAS Lift', val: '42%' },
            { label: 'Waste Removed', val: '31%' },
            { label: 'Signal Accuracy', val: '99.8%' }
          ].map((s, i) => (
            <div key={i} className="p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100">
              <div className="text-6xl font-black mb-4 text-[#33B6E5]">{s.val}</div>
              <div className="text-xs font-black tracking-widest text-zinc-400 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

// --- SEO Content ---
const SEOBody = () => (
  <>
    {/* Technical Health Section */}
    <section className="py-24 px-8 bg-zinc-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionLabel color="#6B46C1">Search Architecture</SectionLabel>
            <h2 className="text-4xl font-black tracking-tighter mt-4 mb-8 uppercase">Technical<br />Superiority.</h2>
            <p className="text-zinc-500 font-medium leading-relaxed">Most SEO agencies stop at meta tags. We rebuild your site's semantic hierarchy and technical foundation to own the search engine's understanding of your product.</p>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-zinc-100">
              <Activity className="text-[#6B46C1] mb-4" size={32} />
              <h3 className="text-xl font-black mb-3">Core Web Vitals</h3>
              <p className="text-sm text-zinc-500 font-medium">LCP, FID, and CLS optimization for the 99th percentile of users.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-zinc-100">
              <Layers className="text-[#6B46C1] mb-4" size={32} />
              <h3 className="text-xl font-black mb-3">Semantic Clusters</h3>
              <p className="text-sm text-zinc-500 font-medium">Internal linking structures that build topical authority, not just keywords.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Search Share Visualization */}
    <section className="py-24 px-8 bg-white border-y border-zinc-100">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">Market Share Defense.</h2>
        <div className="space-y-4">
          {[
            { label: 'Your Brand', w: '78%', color: '#6B46C1' },
            { label: 'Competitor A', w: '45%', color: '#d4d4d8' },
            { label: 'Competitor B', w: '32%', color: '#e5e5e5' }
          ].map((b, i) => (
            <div key={i} className="text-left">
              <div className="flex justify-between mb-2 px-4">
                <span className="text-[10px] font-black uppercase text-zinc-400">{b.label}</span>
                <span className="text-[10px] font-black uppercase text-zinc-600">Share: {b.w}</span>
              </div>
              <div className="h-10 bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100">
                <div className="h-full transition-all duration-1000" style={{ width: b.w, backgroundColor: b.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

// --- CRO Content ---
const CROBody = () => (
  <>
    {/* A/B Testing Section */}
    <section className="py-24 px-8 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <SectionLabel color="#F05A28">Testing Framework</SectionLabel>
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter mt-4 mb-8 uppercase italic underline decoration-[#F05A28] underline-offset-8">HYPOTHESIZE.<br />DEPLOY.<br />REPEAT.</h2>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-zinc-900 border-2 border-[#F05A28] rounded-[2rem] p-8 flex flex-col justify-between">
              <span className="text-[9px] font-black tracking-[0.3em] opacity-30 uppercase">Variant A</span>
              <div className="text-4xl font-black">2.4%</div>
              <p className="text-[10px] uppercase font-bold text-zinc-500">Control</p>
            </div>
            <div className="aspect-square bg-[#F05A28] rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(240,90,40,0.3)]">
              <span className="text-[9px] font-black tracking-[0.3em] opacity-60 uppercase text-white">Variant B</span>
              <div className="text-4xl font-black text-white">6.8%</div>
              <p className="text-[10px] uppercase font-bold text-white/70">Challenger</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Friction Mapping */}
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="p-10 rounded-[3rem] border border-zinc-100 hover:shadow-2xl transition-all group">
            <MousePointer2 className="text-[#F05A28] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-black mb-4 uppercase">Micro-Friction</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Identifying form fields that cause 40% drops and navigation links that go unused.</p>
          </div>
          <div className="p-10 rounded-[3rem] border border-zinc-100 hover:shadow-2xl transition-all group">
            <Target className="text-[#F05A28] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-black mb-4 uppercase">Intent Signals</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Matching landing page copy to the exact search intent that brought the user there.</p>
          </div>
          <div className="p-10 rounded-[3rem] border border-zinc-100 hover:shadow-2xl transition-all group">
            <BarChart3 className="text-[#F05A28] mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-2xl font-black mb-4 uppercase">Revenue Lift</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Measuring success in LTV and Revenue per User, not just conversion rate.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

// --- Social Media Content ---
const SocialBody = () => (
  <>
    {/* Infinite Scroll Preview */}
    <section className="py-24 px-8 bg-zinc-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <SectionLabel color="#EC4899">Creative Velocity</SectionLabel>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mt-4 mb-8 uppercase">SCROLL<br />STOPPING<br />POWER.</h2>
          <p className="text-xl text-zinc-500 font-medium mb-12">Content that feels native to the platform, designed to be shared, not just seen.</p>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-zinc-100">
               <div className="text-2xl font-black text-[#EC4899]">3.8x</div>
               <div className="text-[9px] font-black text-zinc-400 uppercase">Avg Engagement</div>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-zinc-100">
               <div className="text-2xl font-black text-[#EC4899]">5+</div>
               <div className="text-[9px] font-black text-zinc-400 uppercase">Weekly Reels</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[9/16] bg-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl animate-pulse" />
              <div className="aspect-[9/16] bg-zinc-300 rounded-[2rem] overflow-hidden shadow-2xl animate-pulse mt-12" />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#EC4899] opacity-20 blur-[60px]" />
        </div>
      </div>
    </section>
  </>
);

// --- Email Marketing Content ---
const EmailBody = () => (
  <>
    {/* Automation Flow Section */}
    <section className="py-24 px-8 bg-zinc-950 text-white">
      <div className="max-w-[1400px] mx-auto">
        <SectionLabel color="#F2A51A">Lifecycle Automation</SectionLabel>
        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mt-4 mb-16 uppercase">Revenue While<br />You Sleep.</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'TRIGGER', val: 'New Lead' },
            { label: 'WAIT', val: '5 Minutes' },
            { label: 'ACTION', val: 'Welcome Email' },
            { label: 'IF NO OPEN', val: '24hr Re-send' }
          ].map((step, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] text-center relative">
              {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-zinc-800 z-10" size={24} />}
              <div className="text-[9px] font-black tracking-widest text-zinc-500 mb-2 uppercase">{step.label}</div>
              <div className="text-xl font-bold text-[#F2A51A]">{step.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Delivery Stats */}
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase">Inbox Sovereignty.</h2>
            <p className="text-zinc-500 font-medium leading-relaxed">We manage sender reputation at the server level, ensuring your highest-value communications land in the primary inbox, not the promotions tab.</p>
            <ul className="space-y-3">
              {['Smart Segmenting', 'DMARC/DKIM/SPF Audits', 'Zero-Party Data capture'].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold">
                  <CheckCircle2 size={16} className="text-[#F2A51A]" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-10 rounded-[3rem] bg-zinc-50 border border-zinc-100 flex flex-col items-center">
               <div className="text-4xl font-black text-[#F2A51A]">99.2%</div>
               <div className="text-[10px] font-black text-zinc-400 mt-2">DELIVERABILITY</div>
            </div>
            <div className="p-10 rounded-[3rem] bg-zinc-50 border border-zinc-100 flex flex-col items-center">
               <div className="text-4xl font-black text-[#F2A51A]">42x</div>
               <div className="text-[10px] font-black text-zinc-400 mt-2">AVG ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

// --- Brand Protection Content ---
const ProtectionBody = () => (
  <>
    {/* Threat Monitor Section */}
    <section className="py-24 px-8 bg-zinc-950 text-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#34BFA3] to-transparent" />
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-12">
             <SectionLabel color="#34BFA3">Active Monitoring</SectionLabel>
             <h2 className="text-4xl lg:text-7xl font-black tracking-tighter mt-4 mb-16 uppercase">THREAT<br />INTEL.</h2>
             <div className="bg-zinc-900/80 rounded-[2.5rem] border border-zinc-800 p-8 font-mono text-xs overflow-hidden">
                <div className="flex gap-4 items-center mb-6 border-b border-zinc-800 pb-4">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                   </div>
                   <span className="text-zinc-500 uppercase tracking-widest text-[10px]">Active Defense System :: Live Log</span>
                </div>
                <div className="space-y-2">
                   <p className="text-[#34BFA3] opacity-80">[09:21:04] SCANNING GOOGLE SERP FOR "BRAND_NAME"...</p>
                   <p className="text-red-400">[09:21:05] DETECTED: UNAUTHORIZED BID BY COMPETITOR_X (BID_AMT: ₹840)</p>
                   <p className="text-zinc-500">[09:21:05] COUNTER-BID PROTOCOL INITIATED :: ADJUSTING BRAND TARGETS</p>
                   <p className="text-[#34BFA3]">[09:21:06] SCANNING META REELS FOR LOGO INFRINGEMENT...</p>
                   <p className="text-zinc-500">[09:21:08] CLEAN :: NO VIOLATIONS DETECTED</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    {/* The Shields */}
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Ad-Hijack Shield', desc: 'Stopping competitors from leeching your branded search traffic.' },
            { icon: Eye, title: 'Bot Purge', desc: 'Real-time filtering of invalid clicks that drain display budgets.' },
            { icon: Lock, title: 'Legal Bridge', desc: 'Coordinated reporting and takedown support for infringement.' },
            { icon: Repeat, title: 'Compliance Bot', desc: 'Automated dealer/reseller price monitoring 24/7.' }
          ].map((s, i) => (
            <div key={i} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:bg-[#34BFA3]/5 transition-all">
               <s.icon size={32} className="text-[#34BFA3] mb-6" />
               <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{s.title}</h3>
               <p className="text-sm text-zinc-500 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

// --- Service Data Mapping ---
const SERVICE_DATA = {
  'ai-media-buying': {
    label: 'AI-Powered Performance',
    headline: 'AI MEDIA BUYING',
    subhead: 'Stop guessing. Let the machine multiply your ROAS.',
    color: '#33B6E5',
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=2070&auto=format&fit=crop',
    body: <AIMediaBuyingBody />
  },
  'seo-search': {
    label: 'Search Dominance',
    headline: 'SEO & SEARCH',
    subhead: 'Own the search results. Defend your organic territory.',
    color: '#6B46C1',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop',
    body: <SEOBody />
  },
  'conversion-optimization': {
    label: 'Revenue Engineering',
    headline: 'CONVERSION OPTIMIZATION',
    subhead: 'Turn your existing traffic into exponential revenue.',
    color: '#F05A28',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    body: <CROBody />
  },
  'social-media': {
    label: 'Social Intelligence',
    headline: 'SOCIAL MEDIA',
    subhead: 'Build communities that convert. Not just vanity metrics.',
    color: '#EC4899',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop',
    body: <SocialBody />
  },
  'email-marketing': {
    label: 'Revenue Automation',
    headline: 'EMAIL MARKETING',
    subhead: 'Your highest ROI channel — if done right.',
    color: '#F2A51A',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2074&auto=format&fit=crop',
    body: <EmailBody />
  },
  'brand-protection': {
    label: 'Defensive Intelligence',
    headline: 'BRAND PROTECTION',
    subhead: 'Defend your brand before competitors exploit it.',
    color: '#34BFA3',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    body: <ProtectionBody />
  },
};

const ServicePage = () => {
  const { id } = useParams();
  const data = SERVICE_DATA[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-black tracking-tighter" style={{ color: COLORS.dark }}>404</h1>
          <p className="text-zinc-500 text-xl font-medium">Service not found.</p>
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-sm" style={{ color: COLORS.blue }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { label, color, headline, subhead, image, body } = data;

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION (Common Style but Unique Content) */}
      <section className="pt-36 pb-20 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={color}>{label}</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-16 items-end mt-8">
          <div>
            <h1 className="text-6xl lg:text-[80px] font-black leading-[0.85] tracking-tighter uppercase mb-8" style={{ color: COLORS.dark }}>
              {headline}<br /><span className="text-gradient-primary">DEFENSE.</span>
            </h1>
            <p className="text-2xl text-zinc-500 font-medium leading-tight max-w-xl border-l-4 pl-6" style={{ borderColor: color }}>
              {subhead}
            </p>
            <div className="flex gap-4 mt-10">
              <button className="text-white px-8 py-4 font-bold rounded-2xl flex items-center gap-2 shadow-xl hover:brightness-110 transition-all text-sm tracking-widest uppercase" style={{ backgroundColor: COLORS.dark }}>
                Get Free Audit <ArrowRight size={16} style={{ color: color }} />
              </button>
            </div>
          </div>
          <div className="relative h-[420px] rounded-[3rem] overflow-hidden shadow-2xl group">
            <img src={image} alt={headline} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* UNIQUE BODY CONTENT */}
      {body}

      {/* COMMON CTA SECTION */}
      <section className="py-20 px-8 mb-16">
        <div className="max-w-[1400px] mx-auto rounded-[4rem] p-16 text-center relative overflow-hidden text-white" style={{ background: `linear-gradient(135deg, ${COLORS.dark} 0%, #1a0533 100%)` }}>
          <div className="relative z-10 space-y-8">
            <SectionLabel color={color}>Initiate Protocol</SectionLabel>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none uppercase">
              SECURE YOUR <span style={{ color: color }}>{headline}</span><br />DOMAIN.
            </h2>
            <p className="text-zinc-400 text-xl font-medium max-w-2xl mx-auto">"Every dollar undefended is a dollar lost to inefficiency."</p>
            <button className="bg-white text-zinc-900 px-12 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-transform uppercase">
              Initiate System Audit →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
