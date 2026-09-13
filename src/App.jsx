import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import RadiatorWeldingDeepDive from './components/RadiatorWeldingDeepDive';
import ClimatizacionSection from './components/ClimatizacionSection';
import Catalog from './components/Catalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import QuoteEstimator from './components/QuoteEstimator';
import WorkshopShowcase from './components/WorkshopShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Check, ShoppingCart } from 'lucide-react';

export default function App() {
  // Carrito de compras con persistencia local
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('taller_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [selectedQuoteService, setSelectedQuoteService] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Guardar en localStorage cada vez que cambia el carrito
  useEffect(() => {
    try {
      localStorage.setItem('taller_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: qty }];
      }
    });

    showToast(`"${product.title.slice(0, 30)}..." agregado al carrito`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectServiceForQuote = (serviceTitle) => {
    setSelectedQuoteService(serviceTitle);
    const element = document.getElementById('cotizador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCatalog = () => {
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 border border-orange-500 text-white shadow-2xl animate-bounce">
          <div className="p-1 rounded-full bg-orange-500 text-white">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Navbar con badge del carrito */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onExploreCatalog={handleExploreCatalog} />

        {/* 2. Especialidades Principales */}
        <Specialties onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 3. Foco Central: Radiadores a medida, baqueteado y soldaduras en cobre/aluminio */}
        <RadiatorWeldingDeepDive />

        {/* 4. Climatización: Aire Acondicionado & Calefacción */}
        <ClimatizacionSection />

        {/* 5. Catálogo / E-Commerce de Repuestos estilo MercadoLibre/Shopify */}
        <Catalog
          onOpenModal={(prod) => setActiveProductModal(prod)}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />

        {/* 6. Cotizador Interactivo de Presupuestos */}
        <QuoteEstimator initialService={selectedQuoteService} />

        {/* 7. Métricas, Proceso de Taller y Testimonios */}
        <WorkshopShowcase />

        {/* 8. Contacto, Ubicación y Formulario */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp />

      {/* Drawer del Carrito de Compras */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Modal de Detalle de Producto */}
      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={handleAddToCart}
        isInCart={activeProductModal ? cartItems.some(i => i.id === activeProductModal.id) : false}
      />
    </div>
  );
}
