import React from 'react';
import { 
  Flame, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  MessageSquare, 
  Wrench, 
  ChevronUp 
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Marca y Especialidad */}
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-xs text-slate-400 leading-relaxed">
              Taller mecánico integral especializado en fabricación y reparación de radiadores, soldaduras en cobre y aluminio, calefacción y aire acondicionado automotor.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-orange-400 font-semibold">
              <Flame className="w-3.5 h-3.5" />
              <span>Oficio y tecnología en metales no ferrosos</span>
            </div>
          </div>

          {/* Col 2: Accesos Rápidos */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-orange-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-orange-400 transition-colors">Especialidades</a></li>
              <li><a href="#radiadores-soldadura" className="hover:text-orange-400 transition-colors">Fabricación de Radiadores & Soldadura</a></li>
              <li><a href="#climatizacion" className="hover:text-orange-400 transition-colors">Aire Acondicionado & Calefacción</a></li>
              <li><a href="#catalogo" className="hover:text-orange-400 transition-colors text-orange-400 font-semibold">Tienda de Repuestos</a></li>
              <li><a href="#cotizador" className="hover:text-orange-400 transition-colors">Cotizador Online</a></li>
              <li><a href="#contacto" className="hover:text-orange-400 transition-colors">Contacto & Ubicación</a></li>
            </ul>
          </div>

          {/* Col 3: Repuestos Principales */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Repuestos & Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Radiadores de Agua</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Paneles Cobre / Latón a Medida</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Condensadores de A/A</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Electroventiladores</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Soldadura TIG de Tapas y Blocks</a></li>
              <li><a href="#catalogo" className="hover:text-white transition-colors">Líquidos Refrigerantes Orgánicos</a></li>
            </ul>
          </div>

          {/* Col 4: Contacto Inmediato */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Atención de Urgencia</h4>
            <p className="text-xs text-slate-400">
              ¿Problemas de temperatura con tu auto o maquinaria? Comunicate de inmediato con el jefe de taller:
            </p>
            <a
              href={getWhatsAppLink('Hola, tengo una consulta de urgencia por temperatura de mi vehículo.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs transition-all shadow-md shadow-green-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp de Guardia</span>
            </a>
            <div className="text-[11px] text-slate-500 pt-1">
              {SHOP_CONFIG.contact.address} • Tel: {SHOP_CONFIG.contact.phone}
            </div>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {SHOP_CONFIG.name}. Todos los derechos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
          >
            <span>Volver arriba</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
