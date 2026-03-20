import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, MapPin, Mail, Phone, Send,
  Eye, Shield, Zap, Activity, Briefcase, ChevronRight,
  TrendingUp, Users, Globe, Award, BookOpen, Lightbulb,
  Clock, Star, Target, BarChart3
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { COLORS } from '../constants/colors';

/* ─────────────────────────────────── ABOUT US ─────────── */
const AboutUs = () => (
  <div className="bg-white min-h-screen">
    {/* Hero */}
    <section className="pt-36 pb-20 px-8 max-w-[1400px] mx-auto">
      <SectionLabel color={COLORS.purple}>Who We Are</SectionLabel>
      <div className="grid lg:grid-cols-12 gap-16 items-end mt-8">
        <div className="lg:col-span-7">
          <h1 className="text-6xl lg:text-[90px] font-black leading-[0.85] tracking-tighter uppercase mb-8" style={{ color: COLORS.dark }}>
            THE INFABIO<br /><span className="text-gradient-primary italic">MISSION.</span>
          </h1>
          <p className="text-xl text-zinc-500 font-medium leading-relaxed border-l-4 pl-6 max-w-xl" style={{ borderColor: COLORS.purple }}>
            We are not a traditional agency. We are an autonomous marketing defense system — built for brands that refuse to lose market share to inefficiency and fraud.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {[
            { value: '₹500M+', label: 'Ad Spend Managed' },
            { value: '150+', label: 'Brands Defended' },
            { value: '34%', label: 'Avg Waste Eliminated' },
            { value: '42%', label: 'Avg ROAS Lift' },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-50 rounded-[2rem] p-6 text-center border border-zinc-100 hover:shadow-xl transition-all">
              <div className="text-3xl font-black mb-1" style={{ color: COLORS.purple }}>{stat.value}</div>
              <div className="text-[9px] font-black tracking-widest text-zinc-400 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core DNA */}
    <section className="py-24 px-8 text-white relative overflow-hidden" style={{ backgroundColor: COLORS.dark }}>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: `linear-gradient(to left, ${COLORS.purple}, transparent)` }} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <SectionLabel color={COLORS.teal}>Our Core DNA</SectionLabel>
        <h2 className="text-5xl font-black tracking-tighter uppercase mt-4 mb-16">What Drives Us.</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Eye, title: 'Radical Transparency', desc: 'Every rupee accounted for. No hidden markups. No smoke and mirrors. Just data.', color: COLORS.blue },
            { icon: Shield, title: 'Algorithmic Sovereignty', desc: 'We own your signals — not platforms. Your brand\'s data drives your competitive edge.', color: COLORS.purple },
            { icon: Zap, title: 'Velocity First', desc: 'Threats are neutralized before they impact your P&L. Speed is our weapon.', color: COLORS.teal },
          ].map((dna, i) => (
            <div key={i} className="p-8 rounded-[2rem] border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition-all">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: dna.color + '20' }}>
                <dna.icon size={26} style={{ color: dna.color }} />
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">{dna.title}</h3>
              <p className="text-zinc-400 font-medium leading-relaxed text-sm">{dna.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-24 px-8 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <SectionLabel color={COLORS.pink}>Our Story</SectionLabel>
          <h2 className="text-5xl font-black tracking-tighter uppercase mt-4 mb-8">Born from frustration.<br />Built for results.</h2>
          <div className="space-y-5 text-zinc-500 font-medium leading-relaxed">
            <p>Infabio was founded after watching brands hemorrhage budgets to bots, bad data, and algorithm volatility — while agencies focused on billing hours, not outcomes.</p>
            <p>We built the Marketing Defense System (MDS) — a proprietary framework that treats your ad budget as a protected asset, not an experiment.</p>
            <p>Today, we defend over ₹500M in annual ad spend across D2C, EdTech, FinTech, and B2B brands across India.</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { year: '2020', title: 'Founded', desc: 'Infabio launches with a single mission: eliminate invisible ad waste.' },
            { year: '2022', title: 'MDS v1.0', desc: 'Marketing Defense System deployed for first 10 enterprise clients.' },
            { year: '2023', title: 'AI Layer', desc: 'Proprietary neural bidding engine reduces average CPA by 38%.' },
            { year: '2026', title: 'Today', desc: '150+ brands defended. ₹500M+ in annual ad spend under protection.' },
          ].map((ev, i) => (
            <div key={i} className="flex gap-6 p-5 rounded-2xl border border-zinc-100 hover:shadow-lg transition-all">
              <div className="text-[10px] font-black tracking-widest text-zinc-300 w-10 pt-1">{ev.year}</div>
              <div>
                <div className="font-black text-zinc-900 mb-1">{ev.title}</div>
                <div className="text-sm text-zinc-500 font-medium">{ev.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16 px-8 bg-zinc-50">
      <div className="max-w-[1400px] mx-auto text-center">
        <SectionLabel color={COLORS.teal}>The Squad</SectionLabel>
        <h2 className="text-5xl font-black tracking-tighter uppercase mt-4 mb-6">The People Behind the Shield.</h2>
        <p className="text-zinc-500 font-medium mb-12 max-w-xl mx-auto">A clandestine unit of data scientists, media architects, and conversion engineers dedicated to your dominance.</p>
        <Link to="/" className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-2xl text-white" style={{ backgroundColor: COLORS.dark }}>
          Meet the Team on Home Page <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

/* ─────────────────────────────── CASE STUDIES ─────────── */
const CaseStudies = () => {
  const cases = [
    {
      client: 'Alpha Logistics', industry: 'Logistics', color: COLORS.blue,
      problem: 'Hidden bot farms draining search budgets with 85% bounce rates.',
      solution: 'Deployed MDS bot suppression layer + neural bid sculpting on Google Ads.',
      result: '+42% ROAS in 30 days', metric: '₹40K/mo waste eliminated',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    },
    {
      client: 'V-Fintech', industry: 'FinTech', color: COLORS.purple,
      problem: 'Attribution blindness causing overspend on non-performing signals.',
      solution: 'Neural Attribution Engine + server-side conversion tracking rebuild.',
      result: '₹1.2M annual waste saved', metric: '+89% lead quality score',
      image: 'https://tse1.mm.bing.net/th/id/OIP.3xwt2G9KD3DYBUrgh8aqKwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      client: 'EduScale', industry: 'EdTech', color: COLORS.teal,
      problem: 'High CPL making Meta campaigns unprofitable despite strong product.',
      solution: 'Audience re-architecture + creative signal scaling for lookalike expansion.',
      result: 'CPL reduced by 58%', metric: '+3.8x enrollment rate',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    },
    {
      client: 'RetailFusion', industry: 'D2C E-commerce', color: COLORS.orange,
      problem: 'ROAS stagnation at 1.8x despite increasing budget pressure.',
      solution: 'Cross-channel attribution fix + dynamic product ad restructure.',
      result: 'ROAS scaled to 5.2x', metric: '+210% revenue in 60 days',
      image: 'https://images.unsplash.com/photo-1601599561213-832382fd07ba?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-36 pb-16 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={COLORS.teal}>Intelligence Reports</SectionLabel>
        <h1 className="text-6xl lg:text-[90px] font-black leading-[0.85] tracking-tighter uppercase mt-6 mb-4" style={{ color: COLORS.dark }}>
          CASE<br /><span className="text-gradient-primary italic">STUDIES.</span>
        </h1>
        <p className="text-xl text-zinc-500 font-medium max-w-xl">Real brands. Real budgets. Real results. No fabricated screenshots.</p>
      </section>

      <section className="pb-24 px-8 max-w-[1400px] mx-auto">
        <div className="space-y-8">
          {cases.map((c, i) => (
            <div key={i} className="group grid lg:grid-cols-12 rounded-[3rem] overflow-hidden border border-zinc-100 hover:shadow-2xl transition-all">
              <div className="lg:col-span-4 relative min-h-[280px] overflow-hidden bg-zinc-900">
                <img src={c.image} alt={c.client} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1500" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-[9px] font-black tracking-widest uppercase mb-1" style={{ color: c.color }}>{c.industry}</div>
                  <div className="text-2xl font-black text-white tracking-tight">{c.client}</div>
                </div>
              </div>
              <div className="lg:col-span-8 p-10 bg-white flex flex-col justify-between">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-2">01 / Problem</div>
                    <p className="text-sm text-zinc-600 font-medium italic">"{c.problem}"</p>
                  </div>
                  <div>
                    <div className="text-[9px] font-black tracking-widest text-zinc-400 uppercase mb-2">02 / Solution</div>
                    <p className="text-sm text-zinc-600 font-medium">{c.solution}</p>
                  </div>
                  <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100">
                    <div className="text-[9px] font-black tracking-widest uppercase mb-2" style={{ color: c.color }}>03 / Result</div>
                    <div className="text-xl font-black tracking-tight">{c.result}</div>
                    <div className="text-xs text-zinc-400 font-bold mt-1">{c.metric}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ────────────────────────────────── INSIGHTS ─────────── */
const Insights = () => {
  const posts = [
    { tag: 'Bot Defense', color: COLORS.pink, title: 'How Bot Networks Stole ₹2.4 Crore From This Brand\'s Budget', time: '8 min read', date: 'Mar 2026', excerpt: 'A forensic breakdown of the exact bot traffic patterns we detected in a mid-scale D2C brand and how the MDS shield neutralized them.' },
    { tag: 'AI Bidding', color: COLORS.blue, title: 'Why Platform Smart Bidding Fails — And What To Do Instead', time: '6 min read', date: 'Feb 2026', excerpt: 'Google and Meta want you to trust their algorithms. Here\'s the data on why an AI layer on top outperforms native smart bidding by 31%.' },
    { tag: 'Attribution', color: COLORS.purple, title: 'The Attribution Crisis of 2025: How Cookieless Environments Break Reporting', time: '10 min read', date: 'Feb 2026', excerpt: 'With third-party cookies gone, most reporting is lying to you. Here\'s how to rebuild attribution using first-party signals.' },
    { tag: 'CRO', color: COLORS.orange, title: '7 Micro-Friction Points Killing Your Landing Page Conversions', time: '5 min read', date: 'Jan 2026', excerpt: 'From form field ordering to CTA copy psychology — the small elements causing big revenue leaks on your highest-traffic pages.' },
    { tag: 'SEO', color: COLORS.teal, title: 'Topical Authority in 2026: How to Dominate Semantic Search', time: '12 min read', date: 'Jan 2026', excerpt: 'Google\'s understanding of content has evolved. Here\'s how to restructure your content architecture around semantic topic clusters.' },
    { tag: 'Social Media', color: '#EC4899', title: 'Meta Ads in 2026: The Creative Velocity Strategy That Scaled 3x ROAS', time: '7 min read', date: 'Dec 2025', excerpt: 'Broad targeting + high creative velocity is the new playbook. Here\'s the exact posting frequency and format breakdown.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-36 pb-16 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={COLORS.orange}>Intelligence Briefings</SectionLabel>
        <h1 className="text-6xl lg:text-[90px] font-black leading-[0.85] tracking-tighter uppercase mt-6 mb-4" style={{ color: COLORS.dark }}>
          INSIGHTS &<br /><span className="text-gradient-primary italic">INTEL.</span>
        </h1>
        <p className="text-xl text-zinc-500 font-medium max-w-xl">Classified knowledge drops on ad defense, AI bidding, and performance scaling. No fluff.</p>
      </section>

      <section className="pb-24 px-8 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="group border border-zinc-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
              <div className="h-3 w-full" style={{ backgroundColor: post.color }} />
              <div className="p-8">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: post.color, backgroundColor: post.color + '15' }}>{post.tag}</span>
                  <span className="text-[9px] text-zinc-400 font-bold tracking-wider">{post.date}</span>
                </div>
                <h3 className="text-lg font-black tracking-tight mb-4 leading-snug group-hover:underline">{post.title}</h3>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase" style={{ color: post.color }}>
                  <Clock size={12} /> {post.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ─────────────────────────────────── CAREERS ─────────── */
const Careers = () => {
  const roles = [
    { title: 'Senior Performance Media Buyer', type: 'Full-Time', location: 'Gurugram', dept: 'Media', color: COLORS.blue },
    { title: 'Data Scientist – Attribution Modeling', type: 'Full-Time', location: 'Remote (India)', dept: 'AI & Data', color: COLORS.purple },
    { title: 'SEO Strategist', type: 'Full-Time', location: 'Jaipur', dept: 'Search', color: COLORS.teal },
    { title: 'Creative Strategist – Paid Social', type: 'Contract', location: 'Remote', dept: 'Creative', color: COLORS.pink },
    { title: 'Sales Development Representative', type: 'Full-Time', location: 'Gurugram', dept: 'Sales', color: COLORS.orange },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-36 pb-16 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={COLORS.blue}>Join the Unit</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-16 items-end mt-8 mb-16">
          <div>
            <h1 className="text-6xl lg:text-[90px] font-black leading-[0.85] tracking-tighter uppercase mb-8" style={{ color: COLORS.dark }}>
              CAREERS AT<br /><span className="text-gradient-primary italic">INFABIO.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed border-l-4 pl-6 max-w-xl" style={{ borderColor: COLORS.blue }}>
              We hire operators, not spectators. If you're obsessed with performance data and building defensible systems — you belong here.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Users, label: '45+ Team Members', color: COLORS.blue },
              { icon: Globe, label: 'Remote Friendly', color: COLORS.teal },
              { icon: Award, label: 'Performance Bonuses', color: COLORS.purple },
            ].map((perk, i) => (
              <div key={i} className="bg-zinc-50 rounded-[2rem] p-6 text-center border border-zinc-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: perk.color + '15' }}>
                  <perk.icon size={18} style={{ color: perk.color }} />
                </div>
                <div className="text-[10px] font-black tracking-widest text-zinc-500 uppercase leading-tight">{perk.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black tracking-tight mb-6 uppercase">Open Positions</h2>
          <div className="space-y-3">
            {roles.map((role, i) => (
              <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-zinc-100 hover:shadow-xl hover:border-zinc-200 transition-all cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-2 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: role.color }} />
                  <div>
                    <div className="font-black text-lg tracking-tight">{role.title}</div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ color: role.color, backgroundColor: role.color + '15' }}>{role.dept}</span>
                      <span className="text-xs text-zinc-400 font-bold">{role.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  <span className="text-xs font-bold text-zinc-400 border border-zinc-200 px-3 py-1 rounded-full">{role.type}</span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 group-hover:bg-zinc-900 group-hover:border-zinc-900 transition-all">
                    <ArrowRight size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 text-white" style={{ backgroundColor: COLORS.dark }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <SectionLabel color={COLORS.teal}>Don't See Your Role?</SectionLabel>
          <h2 className="text-4xl font-black tracking-tighter uppercase">We Hire for Talent, Not Just Openings.</h2>
          <p className="text-zinc-400 font-medium">Send your resume and a note on what you'd build. We read every application.</p>
          <a href="mailto:hello@infabio.com" className="inline-flex items-center gap-3 bg-white text-zinc-900 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform">
            <Mail size={18} /> hello@infabio.com
          </a>
        </div>
      </section>
    </div>
  );
};

/* ──────────────────────────────────── CONTACT ─────────── */
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-36 pb-20 px-8 max-w-[1400px] mx-auto">
        <SectionLabel color={COLORS.pink}>Initiate Contact</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-20 items-start mt-8">
          <div>
            <h1 className="text-6xl lg:text-[80px] font-black leading-[0.85] tracking-tighter uppercase mb-8" style={{ color: COLORS.dark }}>
              LET'S BUILD<br />YOUR<br /><span className="text-gradient-primary italic">DEFENSE.</span>
            </h1>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-10 max-w-md">We're accepting limited scale-ready partners for Q2 2026. Request a discovery call and we'll audit your ad infrastructure for free.</p>
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@infabio.com', href: 'mailto:hello@infabio.com' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: MapPin, label: 'HQ', value: 'Gurugram, Haryana, India', href: '#' },
              ].map((contact, i) => (
                <a key={i} href={contact.href} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: COLORS.pink + '15' }}>
                    <contact.icon size={18} style={{ color: COLORS.pink }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black tracking-widest text-zinc-400 uppercase">{contact.label}</div>
                    <div className="font-bold text-zinc-800 group-hover:underline">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-zinc-50 rounded-[3rem] p-10 border border-zinc-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.teal + '20' }}>
                  <CheckCircle2 size={32} style={{ color: COLORS.teal }} />
                </div>
                <h3 className="text-2xl font-black tracking-tight">Message Received!</h3>
                <p className="text-zinc-500 text-sm max-w-xs">Our team will reach out within <span style={{ color: COLORS.teal }} className="font-bold">24 hours</span>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-black tracking-tight mb-6">Send a Message</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith' },
                    { label: 'Email', name: 'email', type: 'email', placeholder: 'john@company.com' },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-[9px] font-black tracking-widest uppercase text-zinc-400">{f.label}</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required
                        className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-zinc-200 outline-none focus:border-zinc-400 transition-all" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black tracking-widest uppercase text-zinc-400">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                    className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-zinc-200 outline-none focus:border-zinc-400 transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black tracking-widest uppercase text-zinc-400">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your brand and current marketing challenges..."
                    className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-zinc-200 outline-none focus:border-zinc-400 transition-all resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-2xl font-black text-white text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-lg"
                  style={{ backgroundColor: COLORS.dark }}>
                  {loading ? 'Sending...' : <><Send size={16} /> SEND MESSAGE</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─────────────────────────────── ROUTER ─────────── */
const CompanyPage = () => {
  const { id } = useParams();

  const pages = {
    'about-us': <AboutUs />,
    'case-studies': <CaseStudies />,
    'insights': <Insights />,
    'careers': <Careers />,
    'contact': <Contact />,
  };

  const page = pages[id];

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-black tracking-tighter" style={{ color: COLORS.dark }}>404</h1>
          <p className="text-zinc-500 text-xl font-medium">Page not found.</p>
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-sm" style={{ color: COLORS.blue }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return page;
};

export default CompanyPage;
