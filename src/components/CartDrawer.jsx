import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, MessageSquare, ShieldAlert } from 'lucide-react';
import { SHOP_CONFIG, getWhatsAppLink } from '../config/shopConfig';

export default function CartDrawer({
  isOpen,
  onClose,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let text = `*¡Hola ${SHOP_CONFIG.shortName}! Quisiera consultar disponibilidad y coordinar la compra de los siguientes repuestos:*\n\n`;
    
    items.forEach((item, index) => {
      text += `${index + 1}. *${item.title}*\n`;
      text += `   • Cantidad: ${item.quantity} ${item.unit || 'unidad'}\n`;
      text += `   • Código: ${item.sku}\n`;
      text += `   • Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    text += `*TOTAL ESTIMADO: ${formatPrice(totalAmount)}*\n\n`;
    text += `¿Tienen en stock para retirar en el taller o hacer envío? ¿Pueden incluir cotización para colocarlo en mi auto?`;

    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Cabecera del Carrito */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Carrito de Repuestos</h3>
                <p className="text-xs text-slate-400">
                  {totalQuantity} {totalQuantity === 1 ? 'artículo seleccionado' : 'artículos seleccionados'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de Artículos */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">Tu carrito está vacío</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Agregá radiadores, paneles, repuestos de climatización o piezas mecánicas para solicitar cotización y stock conjunto.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-orange-400 transition-colors"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90 flex gap-3 items-center justify-between"
                >
                  {/* Foto miniatura */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-16 h-16 rounded-lg object-cover bg-slate-900 shrink-0 border border-slate-800"
                  />

                  {/* Datos */}
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-white line-clamp-1">
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 font-mono">
                      SKU: {item.sku}
                    </span>
                    <div className="text-xs font-bold text-orange-400 mt-1">
                      {formatPrice(item.price)}
                    </div>

                    {/* Controles de cantidad */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center rounded-lg bg-slate-800 border border-slate-700 overflow-hidden text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 hover:bg-slate-700 text-slate-300 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-white font-bold min-w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 hover:bg-slate-700 text-slate-300 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-slate-500 hover:text-red-400 transition-colors ml-auto"
                        title="Eliminar del carrito"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pie del Carrito con Totales y Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-slate-400 text-xs">
                  <span>Subtotal ({totalQuantity} items):</span>
                  <span>{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between text-white font-black text-lg pt-1 border-t border-slate-800">
                  <span>Total Estimado:</span>
                  <span className="text-orange-400">{formatPrice(totalAmount)}</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  * Precios sujetos a confirmación de stock. Podés solicitar envío o presupuesto de instalación en nuestro taller.
                </p>
              </div>

              {/* Botón de Enviar Pedido por WhatsApp */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-green-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Pedir / Confirmar por WhatsApp</span>
              </button>

              <div className="flex justify-between items-center text-xs">
                <button
                  onClick={onClearCart}
                  className="text-slate-500 hover:text-red-400 transition-colors"
                >
                  Vaciar carrito
                </button>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Seguir viendo repuestos
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
