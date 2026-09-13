import React from 'react';
import { 
  ShieldCheck, 
  Flame, 
  Snowflake, 
  Wrench, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Package,
  PhoneCall
} from 'lucide-react';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function Hero({ onExploreCatalog }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Luces de fondo decorativas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje Principal */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag destacado */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Fabricación Propia • Reparaciones de Alta Precisión</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Expertos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Radiadores</span>,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Climatización</span> y Soldaduras Especiales
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Mecánica general del automotor, calefacción y aire acondicionado. 
              <strong> Fabricamos y reparamos radiadores a medida</strong>, y realizamos 
              <strong> soldaduras técnicas en cobre y aluminio</strong> para blocks, tapas y cañerías que otros no se animan a reparar.
            </p>

            {/* Micro-puntos de confianza */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Pruebas en banco</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Garantía escrita</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Diagnóstico rápido</span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <a
                href="#cotizador"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-base shadow-xl shadow-orange-500/25 transition-all hover:scale-[1.02]"
              >
                <span>Pedir Presupuesto Gratis</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#catalogo"
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-100 hover:text-orange-400 font-bold text-base transition-all"
              >
                <Package className="w-5 h-5 text-orange-400" />
                <span>Ver Tienda de Repuestos</span>
              </a>
            </div>

            {/* Enlace telefónico rápido */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <PhoneCall className="w-4 h-4 text-green-400" />
              <span>¿Tenés una urgencia con la temperatura de tu vehículo? Atendemos consultas al <strong className="text-slate-200">{SHOP_CONFIG.contact.phone}</strong></span>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Visual de Pilares Técnicos */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-950 p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-5">
              
              {/* Encabezado de la tarjeta */}
              <div className="flex items-center justify-between border-b border-slate-700/70 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400 pl-2">
                    SERVICIOS CERTIFICADOS
                  </span>
                </div>
                <span className="text-xs text-orange-400 font-bold">100% Calidad Taller</span>
              </div>

              {/* 4 Pilares interactivos */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-orange-500/30 flex items-start gap-3.5 hover:border-orange-500 transition-colors">
                  <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Fabricación & Reparación de Radiadores</h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Paneles de cobre/latón y aluminio. Reconstrucción total, baqueteado y pruebas hidráulicas a presión.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-amber-500/30 flex items-start gap-3.5 hover:border-amber-500 transition-colors">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Soldaduras Especiales Cobre y Aluminio</h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Tapas de cilindro carcomidas, blocks rajados, cárter, soportes y tubos de climatización.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/30 flex items-start gap-3.5 hover:border-cyan-500 transition-colors">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Snowflake className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Aire Acondicionado & Calefacción</h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Carga ecológica R134a, detección UV de fugas microscópicas, cambio de radiadores internos de calefacción.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-700/60 flex items-start gap-3.5 hover:border-slate-500 transition-colors">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Mecánica General del Automotor</h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Distribución, frenos, tren delantero, bombas de agua, suspensiones y afinación con escaneo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pie de tarjeta con métricas de taller */}
              <div className="pt-2 grid grid-cols-2 gap-2 text-center border-t border-slate-800 text-xs">
                <div className="bg-slate-900/80 p-2 rounded-lg">
                  <span className="block font-black text-orange-400 text-base">+25 Años</span>
                  <span className="text-slate-400 text-[11px]">En el oficio</span>
                </div>
                <div className="bg-slate-900/80 p-2 rounded-lg">
                  <span className="block font-black text-cyan-400 text-base">Banco Hidráulico</span>
                  <span className="text-slate-400 text-[11px]">100% probado</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
