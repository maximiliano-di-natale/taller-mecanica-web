import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Wrench, 
  CheckCircle2, 
  Star, 
  Flame, 
  Search, 
  ThumbsUp 
} from 'lucide-react';
import { SHOP_CONFIG } from '../config/shopConfig';
import { TESTIMONIOS } from '../data/repuestos';

export default function WorkshopShowcase() {
  const steps = [
    {
      number: '01',
      title: 'Recepción & Diagnóstico',
      desc: 'Analizamos la pérdida o falla en banco de prueba hidráulico o mediante detector ultravioleta.'
    },
    {
      number: '02',
      title: 'Presupuesto Transparente',
      desc: 'Te explicamos si conviene reparar, soldar o fabricar nuevo, con costo claro y sin sorpresas.'
    },
    {
      number: '03',
      title: 'Mano de Obra Calificada',
      desc: 'Soldadura TIG en aluminio/cobre de alta precisión, baqueteado o mecanizado según norma técnica.'
    },
    {
      number: '04',
      title: 'Control Final & Garantía',
      desc: 'Re-prueba neumática a 2.5 bar de presión para asegurar estanqueidad 100% antes de entregártelo.'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Estadísticas de Confianza */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {SHOP_CONFIG.stats.map((st, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                {st.value}
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {st.label}
              </p>
            </div>
          ))}
        </div>

        {/* Cómo trabajamos (4 pasos) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Metodología de Trabajo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              ¿Cómo trabajamos en nuestro taller?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Procesos rigurosos para que tu vehículo o maquinaria no vuelva a tener problemas de temperatura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3">
                <span className="text-4xl font-black text-slate-800 font-mono">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Opiniones de Clientes Reales */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Clientes Satisfechos
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Lo que opinan quienes confiaron su vehículo
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIOS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-white">{t.name}</h5>
                    <span className="text-[11px] text-slate-400">{t.vehicle}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-orange-400 font-semibold border border-slate-700">
                    {t.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
