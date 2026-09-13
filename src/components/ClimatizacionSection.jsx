import React from 'react';
import { 
  Snowflake, 
  Flame, 
  Search, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import { getWhatsAppLink } from '../config/shopConfig';

export default function ClimatizacionSection() {
  const features = [
    {
      title: 'Carga de Gas Ecológico R134a',
      desc: 'Pesaje exacto por balanza digital según tabla del fabricante del auto, con agregado de aceite sintético PAG para lubricar el compresor.'
    },
    {
      title: 'Detección UV de Microfugas',
      desc: 'Inyectamos trazador fluorescente de contraste que bajo luz ultravioleta revela fugas invisibles en o-rings, condensadores o mangueras.'
    },
    {
      title: 'Radiadores de Calefacción (Tablero)',
      desc: 'Si sentís olor dulce a refrigerante adentro del auto o se te empaña el parabrisas con vapor grasoso, tu radiador de calefacción está pinchado. Lo cambiamos o reparamos.'
    },
    {
      title: 'Soldadura de Cañerías y Mangueras',
      desc: 'Si una cañería de aluminio rozó contra la carrocería o el chasis y se pinchó, la soldamos en el acto sin necesidad de importar el repuesto completo.'
    }
  ];

  return (
    <section id="climatizacion" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado izquierdo: Información y detalles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Snowflake className="w-4 h-4 text-cyan-400" />
              <span>Confort & Temperatura Interior</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Calefacción y Aire Acondicionado para Todas las Marcas
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              El sistema de climatización no solo es confort, también es seguridad al desempañar los vidrios en días de lluvia o frío intenso. Diagnosticamos fallas eléctricas, pérdidas de presión y problemas de temperatura con equipos específicos.
            </p>

            {/* Grilla de 4 características */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Aviso común de falla */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-amber-400 block mb-0.5">¿Cargaste gas y a los pocos días dejó de enfriar?</strong>
                No sigas gastando en recargas vacías: significa que hay una fuga en el circuito. En el taller encontramos la pinchadura, la soldamos y te lo entregamos probado bajo presión.
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={getWhatsAppLink('Hola, necesito revisar el aire acondicionado / calefacción de mi auto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/20 transition-all"
              >
                <span>Consultar por Climatización</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Lado derecho: Tarjeta de Síntomas y Chequeo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                  AUTO-DIAGNÓSTICO
                </span>
                <h3 className="text-xl font-bold text-white mt-1">¿Qué síntoma tiene tu vehículo?</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Tira aire pero no enfría absolutamente nada</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold text-[10px]">Falta de gas / Fuga</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Enfría solo cuando vas rápido en ruta</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-bold text-[10px]">Electroventilador</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Olor dulce o humedad en la alfombra delantera</span>
                  <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold text-[10px]">Radiador Calefacción</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300">Ruido a chillido o golpeteo al prender el A/A</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[10px]">Compresor / Polea</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#cotizador"
                  className="w-full block py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-center font-bold text-xs text-white transition-all border border-slate-700"
                >
                  Pedir Turno de Revisión
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
