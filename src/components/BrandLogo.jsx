import React from 'react';
import { SHOP_CONFIG } from '../config/shopConfig';

export default function BrandLogo({ className = "h-10", showText = true }) {
  if (SHOP_CONFIG.logoUrl) {
    return (
      <div className="flex items-center gap-3">
        <img 
          src={SHOP_CONFIG.logoUrl} 
          alt={SHOP_CONFIG.name} 
          className={`${className} object-contain`} 
        />
        {showText && (
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-white tracking-wider uppercase leading-none">
              {SHOP_CONFIG.name}
            </span>
            <span className="text-[10px] text-orange-400 font-semibold tracking-widest uppercase mt-1">
              Radiadores • Climatización • Soldaduras
            </span>
          </div>
        )}
      </div>
    );
  }

  // Fallback moderno estilo insignia automotriz industrial
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-orange-500/40 shadow-lg shadow-orange-500/10 group-hover:border-orange-500 transition-all">
        {/* Isotipo estilizado de celdas de radiador con chispa de soldadura */}
        <div className="flex items-center gap-[3px]">
          <div className="w-1 h-5 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="w-1 h-6 bg-cyan-400 rounded-full"></div>
          <div className="w-1 h-5 bg-orange-500 rounded-full"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full blur-[1px]"></div>
      </div>
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
              {SHOP_CONFIG.shortName}
            </span>
            <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded">
              TALLER
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
            Radiadores • Soldadura • A/A
          </span>
        </div>
      )}
    </div>
  );
}
