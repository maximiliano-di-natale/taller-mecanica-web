import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip de ayuda */}
      {showTooltip && (
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
          {/* Triangulito indicador */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-slate-900 border-r border-b border-slate-700 rotate-45"></div>
        </div>
      )}

      {/* Botón flotante */}
      <a
        href={getWhatsAppLink('Hola! Me comunico desde la web para hacer una consulta sobre un trabajo en mi vehículo.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-extrabold shadow-2xl shadow-green-500/40 hover:scale-105 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-transparent" />
        <span className="text-sm hidden sm:inline">WhatsApp Taller</span>
      </a>
    </div>
  );
}
