import React, { useState } from 'react';
import { X, ShoppingCart, MessageSquare, Check, Car, Shield, Truck, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../config/shopConfig';

export default function ProductModal({ product, onClose, onAddToCart, isInCart }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleWhatsAppConsult = () => {
    const total = formatPrice(product.price * quantity);
    const msg = `Hola! Vengo desde la página web y quiero consultar por:
• Producto: ${product.title}
• Código: ${product.sku}
• Cantidad: ${quantity}
• Precio estimado: ${total}

¿Tienen disponibilidad y realizan envíos o colocación en el taller?`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Imagen grande */}
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-video md:aspect-square border border-slate-800">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-lg bg-orange-600 text-white shadow">
                    {product.tag}
                  </span>
                )}
              </div>
              
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>Garantía de Taller Especializado</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <Truck className="w-4 h-4" />
                  <span>Envíos a todo el país o retiro en mostrador</span>
                </div>
              </div>
            </div>

            {/* Información y Compra */}
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{product.brand}</span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">SKU: {product.sku}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {product.title}
                </h2>
              </div>

              {/* Precio */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-baseline justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs text-slate-400 ml-1.5">/ {product.unit}</span>
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/30 px-2.5 py-1 rounded-full">
                  Stock Disponible
                </span>
              </div>

              {/* Descripción */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Descripción</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Puntos destacados */}
              {product.features && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Especificaciones</h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-400 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Compatibilidad */}
              {product.compatibleVehicles && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Vehículos Compatibles</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.compatibleVehicles.map((veh, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                        {veh}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Selector de cantidad y acciones */}
              <div className="pt-3 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300">Cantidad:</span>
                  <div className="flex items-center rounded-lg bg-slate-800 border border-slate-700 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-slate-700 text-white font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-sm font-bold text-white min-w-10 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-slate-700 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      onAddToCart(product, quantity);
                    }}
                    className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      isInCart
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/20'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{isInCart ? 'Actualizar en Carrito' : 'Agregar al Carrito'}</span>
                  </button>

                  <button
                    onClick={handleWhatsAppConsult}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-green-600/20 text-white hover:text-green-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-slate-700"
                  >
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    <span>Consultar por WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
