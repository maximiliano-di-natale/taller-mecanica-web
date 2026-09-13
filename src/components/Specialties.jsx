import React from 'react';
import { 
  Hammer, 
  ShieldCheck, 
  Flame, 
  Snowflake, 
  Wrench, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICIOS_TALLER } from '../data/repuestos';
import { getWhatsAppLink } from '../config/shopConfig';

const iconMap = {
  Hammer: Hammer,
  ShieldCheck: ShieldCheck,
  Flame: Flame,
  Snowflake: Snowflake,
  Wrench: Wrench,
};

export default function Specialties({ onSelectServiceForQuote }) {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            <span>Servicios de Taller Especializado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestras Especialidades Principales
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Combinamos décadas de oficio artesanal en metales no ferrosos con instrumental de diagnóstico automotriz moderno.
          </p>
        </div>

        {/* Grilla de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICIOS_TALLER.map((servicio) => {
            const IconComponent = iconMap[servicio.icon] || Wrench;
            return (
              <div 
                key={servicio.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-7 border border-slate-800 hover:border-orange-500/60 transition-all hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1"
              >
                <div>
                  {/* Encabezado con Ícono y Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-800 text-orange-400 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {servicio.highlight}
                    </span>
                  </div>

                  {/* Título y Descripción */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2.5">
                    {servicio.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {servicio.description}
                  </p>

                  {/* Lista de características */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                    {servicio.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acciones del servicio */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectServiceForQuote && onSelectServiceForQuote(servicio.title)}
                    className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Cotizar este trabajo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Hola, quisiera consultar un presupuesto para el servicio de: ${servicio.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-green-600/20 text-slate-300 hover:text-green-400 transition-all border border-slate-700"
                    title="Consultar por WhatsApp"
                  >
                    <span className="text-xs font-semibold">WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
