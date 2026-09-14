import React from 'react';
import { SHOP_CONFIG } from '../config/shopConfig';

export default function BrandLogo({ imgClassName = "h-12 w-12", showText = true }) {
  if (SHOP_CONFIG.logoUrl) {
    return (
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative p-0.5 rounded-full bg-white/95 shadow-lg shadow-orange-500/10 border border-slate-700/60 shrink-0 group-hover:border-orange-500 transition-all">
          <img 
            src={SHOP_CONFIG.logoUrl} 
            alt={SHOP_CONFIG.name} 
            className={`${imgClassName} object-contain rounded-full`} 
          />
        </div>
        {showText && (
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-orange-400 transition-colors">
                Radiadores <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Di Natale</span>
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
              Fabricación • Reparación • Soldadura Cu/Al
            </span>
          </div>
        )}
      </div>
    );
  }

  // Fallback
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-orange-500/40 shadow-lg shadow-orange-500/10 group-hover:border-orange-500 transition-all">
        <div className="flex items-center gap-[3px]">
          <div className="w-1 h-5 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="w-1 h-6 bg-cyan-400 rounded-full"></div>
          <div className="w-1 h-5 bg-orange-500 rounded-full"></div>
        </div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-black text-xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
            {SHOP_CONFIG.name}
          </span>
          <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
            Radiadores • Soldadura • A/A
          </span>
        </div>
      )}
    </div>
  );
}
