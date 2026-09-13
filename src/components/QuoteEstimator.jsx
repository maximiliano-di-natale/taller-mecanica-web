import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  Car, 
  Wrench, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  Clock
} from 'lucide-react';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function QuoteEstimator({ initialService = '' }) {
  const [formData, setFormData] = useState({
    serviceType: initialService || 'Fabricación de Radiador a Medida',
    carBrand: '',
    carModel: '',
    carYear: '',
    description: '',
    urgency: 'normal'
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Fabricación de Radiador a Medida (Cobre o Aluminio)',
    'Reparación / Pérdida de Radiador (Prueba Hidráulica)',
    'Soldadura Especial en Aluminio (Tapa de Cilindro / Block)',
    'Soldadura en Cobre / Latón / Cañerías',
    'Aire Acondicionado (Carga de gas, fuga UV, compresor)',
    'Calefacción (Pérdida en habitáculo o no calienta)',
    'Mecánica General (Distribución, frenos, suspensión)',
    'Otro / Consulta de Repuesto'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const msg = `*SOLICITUD DE PRESUPUESTO - WEB ${SHOP_CONFIG.shortName}*
----------------------------------------
🔧 *Servicio requerido:* ${formData.serviceType}
🚗 *Vehículo:* ${formData.carBrand || 'No especificado'} ${formData.carModel || ''} (Año: ${formData.carYear || 'S/D'})
⚠️ *Urgencia:* ${formData.urgency === 'urgente' ? '🚨 URGENTE' : 'Normal / En la semana'}
📝 *Detalle del problema / requerimiento:*
${formData.description || 'Sin descripción adicional'}

¿Podrían indicarme costo estimado o disponibilidad de turno para revisarlo?`;

    window.open(getWhatsAppLink(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="cotizador" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Presupuesto Rápido y Sin Cargo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Cotizá tu Reparación, Fabricación o Repuesto
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Completá los datos de tu vehículo y te responderemos con el diagnóstico preliminar y costo estimado en el acto.
          </p>
        </div>

        {/* Formulario */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <form onSubmit={handleWhatsAppSend} className="space-y-6">
            
            {/* Tipo de Servicio */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. ¿Qué tipo de trabajo o repuesto necesitás?
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              >
                {serviceOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Datos del Vehículo */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Datos de tu Vehículo / Máquina
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    name="carBrand"
                    value={formData.carBrand}
                    onChange={handleChange}
                    placeholder="Marca (ej. Ford, VW, John Deere)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    placeholder="Modelo (ej. Ranger 3.0, Gol 1.6)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="carYear"
                    value={formData.carYear}
                    onChange={handleChange}
                    placeholder="Año (ej. 2015, Clásico 1974)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Descripción del problema o medida */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Describí el síntoma, daño o medidas del radiador
              </label>
              <textarea
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Ejemplo: 'Pierde agua por el tanque de plástico superior', 'Necesito un radiador de 3 filas de cobre para adaptar', 'La tapa de cilindro tiene una picadura en el plano'..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>

            {/* Nivel de urgencia */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="font-bold text-slate-300">Urgencia:</span>
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="radio"
                  name="urgency"
                  value="normal"
                  checked={formData.urgency === 'normal'}
                  onChange={handleChange}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span>Normal / Planificado</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-orange-400 font-semibold">
                <input
                  type="radio"
                  name="urgency"
                  value="urgente"
                  checked={formData.urgency === 'urgente'}
                  onChange={handleChange}
                  className="text-orange-500 focus:ring-orange-500"
                />
                <span>🚨 Vehículo parado / Urgente</span>
              </label>
            </div>

            {/* Botón de Envío */}
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 hover:from-green-500 hover:to-emerald-500 text-white font-extrabold text-base shadow-xl shadow-green-600/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.01]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enviar y Cotizar al Instante por WhatsApp</span>
              </button>

              <p className="text-center text-xs text-slate-400">
                Al hacer clic se abrirá WhatsApp con todos los datos ordenados para que el jefe de taller te responda de inmediato.
              </p>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
