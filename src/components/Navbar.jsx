import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingCart, 
  MessageSquare,
  Wrench,
  Flame,
  Snowflake,
  Package,
  ExternalLink
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Especialidades', href: '#servicios' },
    { name: 'Radiadores & Soldaduras', href: '#radiadores-soldadura' },
    { name: 'Climatización & A/A', href: '#climatizacion' },
    { name: 'Catálogo de Repuestos', href: '#catalogo', isShop: true },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80 transition-all">
      {/* Barra superior de información rápida */}
      <div className="hidden lg:block bg-slate-900/90 border-b border-slate-800 text-xs text-slate-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a 
              href={SHOP_CONFIG.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-orange-400 transition-colors group cursor-pointer"
              title="Abrir ubicación en Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-orange-400 group-hover:scale-110 transition-transform" />
              <span>{SHOP_CONFIG.contact.fullAddress}</span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-orange-500/20 text-[10px] text-orange-400 font-bold border border-orange-500/30 ml-1 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <span>Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{SHOP_CONFIG.contact.schedule.weekdays}</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={getWhatsAppLink('Hola Radiadores Di Natale! Me comunico desde la web (Línea 1).', 'primary')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>Línea 1: <strong>{SHOP_CONFIG.contact.phonePrimary}</strong></span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={getWhatsAppLink('Hola Radiadores Di Natale! Me comunico desde la web (Línea 2).', 'secondary')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>Línea 2: <strong>{SHOP_CONFIG.contact.phoneSecondary}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <BrandLogo />
        </a>

        {/* Menú Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                link.isShop 
                  ? 'text-orange-400 hover:bg-orange-500/10 font-bold flex items-center gap-1.5' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              {link.isShop && <Package className="w-4 h-4 text-orange-400" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-3">
          {/* Botón Carrito de Compras */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrito de repuestos"
            className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-700/70 text-slate-200 hover:text-orange-400 hover:border-orange-500/50 transition-all flex items-center gap-2 group"
          >
            <ShoppingCart className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-xs font-bold text-slate-200">Repuestos</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Botón directo Google Maps */}
          <a
            href={SHOP_CONFIG.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-orange-500/50 text-slate-200 hover:text-orange-400 text-xs font-bold transition-all shadow-sm group"
            title="Abrir ubicación en Google Maps (Calle O'Brien 746, Guaymallén)"
          >
            <MapPin className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>Cómo Llegar</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          {/* Botón rápido WhatsApp */}
          <a
            href={getWhatsAppLink('Hola, necesito cotizar un trabajo para mi vehículo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-sm font-bold shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar Turno</span>
          </a>

          {/* Botón Hamburguesa móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Menú móvil"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                link.isShop 
                  ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' 
                  : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <a
              href={getWhatsAppLink('Hola Radiadores Di Natale! Quisiera consultar por un presupuesto (Línea 1).', 'primary')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Línea 1: {SHOP_CONFIG.contact.phonePrimary}</span>
            </a>
            <a
              href={getWhatsAppLink('Hola Radiadores Di Natale! Quisiera consultar por un presupuesto (Línea 2).', 'secondary')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Línea 2: {SHOP_CONFIG.contact.phoneSecondary}</span>
            </a>
            <a
              href={SHOP_CONFIG.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-orange-400 hover:text-white font-bold text-xs text-center"
            >
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>Ver Ubicación en Google Maps (O'Brien 746) ↗</span>
            </a>
            <div className="text-center text-xs text-slate-400 pt-1">
              {SHOP_CONFIG.contact.fullAddress}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
