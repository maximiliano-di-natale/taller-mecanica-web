import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ExternalLink,
  Send,
  AlertCircle
} from 'lucide-react';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', note: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*CONSULTA GENERAL DESDE LA WEB*
• Nombre: ${form.name}
• Teléfono: ${form.phone}
• Mensaje: ${form.note}`;
    window.open(getWhatsAppLink(msg), '_blank');
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>Ubicación & Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Vení a Nuestro Taller o Escribinos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Estamos disponibles para recibir tu vehículo, evaluar tu radiador en banco de prueba o enviarte repuestos a cualquier punto del país.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tarjeta de Información de Contacto */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Información del Taller</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Dirección:</strong>
                  <span className="text-slate-300">{SHOP_CONFIG.contact.address}</span>
                  <span className="text-slate-400 block text-xs">{SHOP_CONFIG.contact.city}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-green-500/10 text-green-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-white block font-semibold">Teléfonos & WhatsApp:</strong>
                  <div className="text-slate-300 text-xs">
                    <span className="text-orange-400 font-bold">Línea 1 (Taller & Ventas):</span> {SHOP_CONFIG.contact.phonePrimary}
                  </div>
                  <div className="text-slate-300 text-xs">
                    <span className="text-cyan-400 font-bold">Línea 2 (Consultas & Urgencias):</span> {SHOP_CONFIG.contact.phoneSecondary}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Horarios de Atención:</strong>
                  <span className="text-slate-300 block text-xs">{SHOP_CONFIG.contact.schedule.weekdays}</span>
                  <span className="text-slate-300 block text-xs">{SHOP_CONFIG.contact.schedule.saturdays}</span>
                  <span className="text-slate-400 block text-xs">{SHOP_CONFIG.contact.schedule.sundays}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Correo Electrónico:</strong>
                  <span className="text-slate-300">{SHOP_CONFIG.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Acciones directas */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={getWhatsAppLink('Hola Radiadores Di Natale! Escribo desde la web a Línea 1.', 'primary')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-green-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Línea 1</span>
                </a>

                <a
                  href={getWhatsAppLink('Hola Radiadores Di Natale! Escribo desde la web a Línea 2.', 'secondary')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-emerald-700/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Línea 2</span>
                </a>
              </div>

              <a
                href={SHOP_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-slate-700"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Cómo llegar (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Formulario de Mensaje Rápido */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Envianos tu Consulta Directa</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              ¿Tenés dudas sobre una soldadura en aluminio, un radiador o un repuesto? Dejanos tu número y te contactamos en breve.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Teléfono / Celular de Contacto
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Ej: 11 2345-6789"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Mensaje o detalle del vehículo
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="Contanos qué necesitas..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta Ahora</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
