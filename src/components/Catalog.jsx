import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Package, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown,
  PhoneForwarded,
  Sparkles
} from 'lucide-react';
import { CATEGORIAS, REPUESTOS } from '../data/repuestos';
import ProductCard from './ProductCard';
import { getWhatsAppLink } from '../config/shopConfig';

export default function Catalog({ 
  onOpenModal, 
  onAddToCart, 
  cartItems = [] 
}) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high'

  // Filtrado y búsqueda
  const filteredProducts = useMemo(() => {
    let list = REPUESTOS.filter((item) => {
      const matchCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = !query || (
        item.title.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        (item.compatibleVehicles && item.compatibleVehicles.some(v => v.toLowerCase().includes(query))) ||
        item.description.toLowerCase().includes(query)
      );

      return matchCategory && matchSearch;
    });

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else {
      // featured first
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <section id="catalogo" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado del Catálogo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Package className="w-4 h-4 text-orange-400" />
              <span>Tienda & Catálogo de Repuestos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Repuestos del Automotor & Radiadores
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Radiadores nuevos y a medida, paneles, condensadores de aire, electroventiladores y piezas de mecánica. Si no encontrás tu modelo, consultanos y lo fabricamos o pedimos.
            </p>
          </div>

          {/* Selector de orden */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <ArrowUpDown className="w-3.5 h-3.5" /> Ordenar:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-white text-xs rounded-xl px-3 py-2 outline-none focus:border-orange-500 cursor-pointer"
            >
              <option value="featured">Destacados del taller</option>
              <option value="price-low">Menor precio</option>
              <option value="price-high">Mayor precio</option>
            </select>
          </div>
        </div>

        {/* Barra de Búsqueda y Filtros */}
        <div className="space-y-4 mb-8">
          {/* Input de búsqueda estilo MercadoLibre */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por repuesto, código SKU, modelo de auto (ej. Gol, Ranger, Corsa, Hilux)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Categorías (Pills con scroll horizontal) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIAS.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 border border-orange-400'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contador de resultados */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>
            Mostrando <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'resultado' : 'resultados'}
            {searchQuery && ` para "${searchQuery}"`}
          </span>

          {(searchQuery || selectedCategory !== 'todos') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="text-orange-400 hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" /> Limpiar filtros
            </button>
          )}
        </div>

        {/* Grilla de Productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenModal={onOpenModal}
                onAddToCart={onAddToCart}
                isInCart={isInCart(prod.id)}
              />
            ))}
          </div>
        ) : (
          /* Estado vacío */
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Package className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white">No encontramos repuestos que coincidan con tu búsqueda</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Recordá que en el taller <strong>fabricamos radiadores a medida</strong> y disponemos de stock directo de fábrica para marcas nacionales e importadas.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink(`Hola, busco un repuesto que no encontré en el catálogo: "${searchQuery}". ¿Tienen disponibilidad o lo pueden fabricar?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 transition-all"
              >
                <PhoneForwarded className="w-4 h-4" />
                <span>Consultar por WhatsApp si lo conseguimos</span>
              </a>
            </div>
          </div>
        )}

        {/* Banner Inferior de Atención Especializada */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                ¿Necesitás colocar el repuesto o un presupuesto para flota / empresa?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Instalamos en nuestro propio taller con garantía de mano de obra y realizamos presupuestos corporativos.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink('Hola! Quisiera consultar por precios mayoristas o colocación en taller de repuestos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs sm:text-sm shrink-0 shadow-lg shadow-green-600/20 transition-all flex items-center gap-2"
          >
            <span>Consultar Colocación & Descuentos</span>
          </a>
        </div>

      </div>
    </section>
  );
}
