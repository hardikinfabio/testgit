import React, { useState, useEffect } from 'react';
import { X, Shield, ChevronRight, CheckCircle } from 'lucide-react';
import { COLORS } from '../constants/colors';

const AuditModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', budget: '', platform: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', budget: '', platform: '' }); }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-[1.5rem] shadow-2xl"
        style={{ backgroundColor: '#0A0F1C', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: COLORS.purple + '20' }}>
              <Shield size={16} style={{ color: COLORS.purple }} />
            </div>
            <div>
              <div className="text-[8px] font-black tracking-[0.4em] uppercase" style={{ color: COLORS.teal }}>Free Intelligence Scan</div>
              <h2 className="text-base font-black tracking-tight text-white leading-none">REQUEST YOUR AUDIT</h2>
            </div>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 transition-all" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <X size={16} />
          </button>
        </div>

        <div className="h-px mx-6" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

        {/* Body */}
        <div className="px-6 py-4">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.teal + '20' }}>
                <CheckCircle size={28} style={{ color: COLORS.teal }} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight mb-1">Mission Received!</h3>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
                  Our team will get back to you within <span style={{ color: COLORS.teal }} className="font-bold">24 hours.</span>
                </p>
              </div>
              <button onClick={onClose} className="px-6 py-2 rounded-lg text-white text-xs font-bold tracking-wider transition-all hover:brightness-110" style={{ backgroundColor: COLORS.purple }}>
                CLOSE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                <Field label="Full Name" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-3">
                <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                <Field label="Company Name" name="company" type="text" placeholder="Acme Pvt. Ltd." value={form.company} onChange={handleChange} required />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-3">
                <SelectField label="Monthly Ad Budget" name="budget" value={form.budget} onChange={handleChange} required
                  options={['Under ₹50,000', '₹50K – ₹2L', '₹2L – ₹5L', '₹5L – ₹20L', '₹20L+']} />
                <SelectField label="Primary Platform" name="platform" value={form.platform} onChange={handleChange} required
                  options={['Google Ads', 'Meta (FB / Instagram)', 'Both Google & Meta', 'YouTube', 'Other']} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-black text-white text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:brightness-110 hover:scale-[1.01] disabled:opacity-70 shadow-lg mt-1"
                style={{ backgroundColor: COLORS.purple }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>SUBMIT FOR FREE AUDIT <ChevronRight size={15} /></>
                )}
              </button>

              <p className="text-center text-[9px] text-zinc-600 tracking-wider pb-1">
                🔒 100% confidential. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, name, type, placeholder, value, onChange, required }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[9px] font-black tracking-widest uppercase text-zinc-500">
      {label} {required && <span style={{ color: '#F05' }}>*</span>}
    </label>
    <input
      type={type} name={name} value={value} onChange={onChange}
      placeholder={placeholder} required={required}
      className="w-full rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none transition-all"
      style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, required, options }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[9px] font-black tracking-widest uppercase text-zinc-500">
      {label} {required && <span style={{ color: '#F05' }}>*</span>}
    </label>
    <select
      name={name} value={value} onChange={onChange} required={required}
      className="w-full rounded-lg px-3 py-2 text-xs text-white outline-none appearance-none cursor-pointer"
      style={{ backgroundColor: '#0d1424', border: '1px solid rgba(255,255,255,0.08)', color: value ? 'white' : 'rgba(255,255,255,0.3)' }}
    >
      <option value="" disabled style={{ color: 'gray' }}>Select...</option>
      {options.map((o) => <option key={o} value={o} style={{ backgroundColor: '#0d1424', color: 'white' }}>{o}</option>)}
    </select>
  </div>
);

export default AuditModal;
