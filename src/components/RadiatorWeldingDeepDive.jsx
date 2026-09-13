import React from 'react';
import { 
  Flame, 
  Layers, 
  Sparkles, 
  Activity, 
  Droplet, 
  Wrench, 
  ShieldCheck, 
  ArrowRight,
  Gauge
} from 'lucide-react';
import { getWhatsAppLink } from '../config/shopConfig';

export default function RadiatorWeldingDeepDive() {
  return (
    <section id="radiadores-soldadura" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 relative overflow-hidden">
      
      {/* Resplandor industrial temático */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>El corazón de nuestro oficio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Fabricación, Reparación & Soldaduras en Cobre y Aluminio
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Donde otros te dicen <span className="text-orange-400 font-semibold">"no tiene arreglo, hay que comprar nuevo"</span>, 
            en nuestro taller fabricamos la pieza a medida o la recuperamos con soldadura de precisión.
          </p>
        </div>

        {/* 3 Columnas de Proceso Técnico */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Fabricación a Medida */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/60 p-7 space-y-5 transition-all shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Layers className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Sin Límite de Tamaño</span>
                <h3 className="text-xl font-extrabold text-white">Fabricación de Radiadores a Medida</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Armamos radiadores y paneles completos para camiones, cosechadoras, autoelevadores, grupos electrógenos, autos clásicos o de picadas.
              </p>
              
              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Paneles de Cobre y Latón:</strong>
                  Máxima disipación y facilidad de desarmado/limpieza para exigencia extrema.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Paneles de Aluminio Brazado:</strong>
                  Ultra ligeros, de alto flujo y máxima tecnología de enfriamiento.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Tanques Especiales:</strong>
                  Construcción de tanques de bronce forjado o chapa de aluminio para suprimir plásticos que se rompen.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={getWhatsAppLink('Hola, necesito cotizar la fabricación de un radiador a medida.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 font-bold text-xs flex items-center justify-center gap-2 border border-orange-500/30 transition-all"
              >
                <span>Consultar Fabricación a Medida</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Reparación y Banco de Prueba */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 p-7 space-y-5 transition-all shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Droplet className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Cero Pérdidas Garantizadas</span>
                <h3 className="text-xl font-extrabold text-white">Reparación & Banco Hidráulico</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reparamos pinchaduras, cambiamos tapas rajadas y realizamos baqueteado para que el circuito vuelva a enfriar como el primer día.
              </p>
              
              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Prueba en Batea Presurizada:</strong>
                  Sumergimos la pieza y aplicamos presión neumática de 2.5 bar para verificar que no exista micro-pérdida.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Baqueteado Profesional:</strong>
                  Desarmamos tanques y desincrustamos caño por caño con sondas de acero y químicos desengrasantes.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Recambio de Tanques Plásticos:</strong>
                  Reemplazo directo de laterales rotos con empaquetaduras nuevas de nitrilo resistente a temperatura.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={getWhatsAppLink('Hola, tengo un radiador que pierde agua / calienta y quiero repararlo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center gap-2 border border-cyan-500/30 transition-all"
              >
                <span>Diagnosticar mi Radiador</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Soldaduras Especiales Cobre y Aluminio */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 p-7 space-y-5 transition-all shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Flame className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Metales No Ferrosos</span>
                <h3 className="text-xl font-extrabold text-white">Soldadura TIG de Cobre & Aluminio</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Equipamiento de corriente alterna/continua de alta frecuencia para soldar aleaciones difíciles con penetración perfecta.
              </p>
              
              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Tapas de Cilindro & Blocks:</strong>
                  Relleno de picaduras por corrosión, pasos de agua deteriorados y roscas barridas.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Cañerías de Aire Acondicionado:</strong>
                  Unión hermética cobre-aluminio con varilla de plata y fundentes de alta acción capilar.
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <strong className="text-white block mb-0.5">Cárter, Cajas y Soportes:</strong>
                  Recuperación de piezas de fundición de aluminio partidas por golpes o vibración.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href={getWhatsAppLink('Hola, tengo una pieza en cobre o aluminio para soldar / rellenar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center gap-2 border border-amber-500/30 transition-all"
              >
                <span>Cotizar Soldadura Especial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Banner de Garantía y Confianza */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-600/20 via-slate-900 to-cyan-600/20 border border-slate-700/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Todos los trabajos de taller cuentan con garantía</h4>
              <p className="text-sm text-slate-400">
                Entregamos cada radiador reparado o fabricado probado a presión neumática. Si no queda perfecto, no se entrega.
              </p>
            </div>
          </div>
          <a
            href="#cotizador"
            className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm shrink-0 shadow-lg shadow-orange-500/20 transition-all"
          >
            Pedir Diagnóstico de Mi Vehículo
          </a>
        </div>

      </div>
    </section>
  );
}
