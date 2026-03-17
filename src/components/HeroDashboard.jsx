import React from 'react';
import { BarChart3, Activity, Shield, Zap } from 'lucide-react';
import { COLORS } from '../constants/colors';

const HeroDashboard = () => (
  <div className="relative w-full aspect-square bg-white rounded-[3rem] border border-zinc-100 shadow-3xl overflow-hidden p-8 group">
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-white opacity-50"></div>
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-10">
        <div>
          <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Live Feed</div>
          <div className="text-xl font-black tracking-tight" style={{ color: COLORS.dark }}>Protocol Active</div>
        </div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex flex-col justify-between">
          <Activity size={20} className="text-purple-600" />
          <div>
            <div className="text-[9px] font-bold text-zinc-400 uppercase">Detection</div>
            <div className="text-lg font-black" style={{ color: COLORS.dark }}>98.2%</div>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between text-white shadow-xl">
          <Shield size={20} className="text-teal-400" />
          <div>
            <div className="text-[9px] font-bold text-zinc-500 uppercase">Shielding</div>
            <div className="text-lg font-black">Active</div>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-2xl p-6 border border-zinc-100 shadow-sm flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <BarChart3 size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="text-[9px] font-bold text-zinc-400 uppercase">ROI Multiplier</div>
              <div className="text-sm font-black" style={{ color: COLORS.dark }}>3.4x Signal Strength</div>
            </div>
          </div>
          <Zap size={16} className="text-orange-500 animate-bounce" />
        </div>
      </div>
    </div>
  </div>
);

export default HeroDashboard;
