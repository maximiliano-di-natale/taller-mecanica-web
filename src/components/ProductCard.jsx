import React from 'react';
import { ShoppingCart, Eye, MessageSquare, Check, Car } from 'lucide-react';
import { getWhatsAppLink } from '../config/shopConfig';

export default function ProductCard({ product, onOpenModal, onAddToCart, isInCart }) {
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleWhatsAppConsult = (e) => {
    e.stopPropagation();
    const msg = `Hola, estoy interesado en el repuesto: ${product.title} (Código: ${product.sku}) publicado en su web a ${formatPrice(product.price)}. ¿Tienen stock disponible?`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <div 
      onClick={() => onOpenModal(product)}
      className="group flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/60 transition-all hover:shadow-xl hover:shadow-orange-500/5 cursor-pointer overflow-hidden"
    >
      <div>
        {/* Imagen del producto con badges */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

          {/* Tag destacado (badge) */}
          {product.tag && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-lg bg-orange-600/90 text-white backdrop-blur-md shadow-md">
              {product.tag}
            </span>
          )}

          {/* Estado de stock */}
          <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-semibold rounded-full bg-slate-900/80 text-green-400 border border-green-500/30 backdrop-blur-md flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Disponible
          </span>
        </div>

        {/* Contenido */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Marca y SKU */}
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-semibold text-orange-400">{product.brand}</span>
            <span className="font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
              SKU: {product.sku}
            </span>
          </div>

          {/* Título */}
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
            {product.title}
          </h3>

          {/* Compatibilidad resumida */}
          {product.compatibleVehicles && product.compatibleVehicles.length > 0 && (
            <div className="flex items-start gap-1.5 text-xs text-slate-400">
              <Car className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1 text-[11px]">
                Apto: {product.compatibleVehicles.slice(0, 2).join(', ')}
                {product.compatibleVehicles.length > 2 ? '...' : ''}
              </span>
            </div>
          )}

          {/* Precio */}
          <div className="pt-2 flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-white">
              {formatPrice(product.price)}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">
              / {product.unit}
            </span>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2 border-t border-slate-800/80 mt-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className={`py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            isInCart
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-orange-500 hover:bg-orange-400 text-white shadow-md shadow-orange-500/20'
          }`}
        >
          {isInCart ? (
            <>
              <Check className="w-4 h-4" />
              <span>En Carrito</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              <span>Agregar</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppConsult}
          className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-green-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-slate-700"
          title="Consultar compatibilidad por WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-green-400" />
          <span>Consultar</span>
        </button>
      </div>
    </div>
  );
}
