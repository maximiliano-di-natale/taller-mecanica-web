import React, { useState } from 'react';
import { MessageSquare, X, Phone } from 'lucide-react';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Menú desplegable para elegir entre Línea 1 o Línea 2 */}
      {showMenu && (
        <div className="bg-slate-900/95 border border-slate-700 text-slate-100 p-4 rounded-2xl shadow-2xl space-y-3 min-w-[260px] animate-fadeIn backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Radiadores Di Natale
            </span>
            <button 
              onClick={() => setShowMenu(false)} 
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={getWhatsAppLink('Hola Radiadores Di Natale! Me comunico a Línea 1 desde la página web.', 'primary')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-green-600/20 border border-green-500/40 hover:bg-green-600/30 text-white text-xs font-semibold transition-all group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 group-hover:scale-125 transition-transform"></div>
              <div>
                <div className="font-bold text-green-400">Línea 1 (Taller & Ventas)</div>
                <div className="text-[11px] text-slate-300">{SHOP_CONFIG.contact.phonePrimary}</div>
              </div>
            </a>

            <a
              href={getWhatsAppLink('Hola Radiadores Di Natale! Me comunico a Línea 2 desde la página web.', 'secondary')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-cyan-600/20 border border-cyan-500/40 hover:bg-cyan-600/30 text-white text-xs font-semibold transition-all group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></div>
              <div>
                <div className="font-bold text-cyan-400">Línea 2 (Consultas & Urgencias)</div>
                <div className="text-[11px] text-slate-300">{SHOP_CONFIG.contact.phoneSecondary}</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Tooltip de ayuda */}
      {showTooltip && !showMenu && (
        <div className="relative bg-slate-900 border border-slate-700 text-slate-100 p-3 rounded-2xl shadow-2xl max-w-xs text-xs flex items-start gap-2.5 animate-bounce">
          <div>
            <span className="font-bold text-green-400 block mb-0.5">¿Consultas por un radiador o soldadura?</span>
            <span className="text-slate-300">Mandanos una foto o tu consulta por WhatsApp y te cotizamos al toque.</span>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar mensaje de ayuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-slate-900 border-r border-b border-slate-700 rotate-45"></div>
        </div>
      )}

      {/* Botón flotante principal */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-extrabold shadow-2xl shadow-green-500/40 hover:scale-105 transition-all cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-transparent" />
        <span className="text-sm hidden sm:inline">WhatsApp Taller</span>
      </button>
    </div>
  );
}
