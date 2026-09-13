// Configuración central de la empresa / taller mecánico
// Podés editar aquí el nombre, teléfonos, dirección y el logo una vez que lo tengas listo.

export const SHOP_CONFIG = {
  name: "TERMOMECÁNICA & RADIADORES",
  shortName: "TermoMecánica",
  subtitle: "Fabricación de Radiadores • Soldaduras Especiales • Climatización & Mecánica General",
  
  // Una vez que tengas los archivos de tus logos, guardalos en /public/ (ej. /public/logo.png)
  // y cambiá acá la ruta. Si dejás null, la web usará un isotipo técnico profesional automático.
  logoUrl: null, 
  
  contact: {
    whatsappNumber: "5491100000000", // Reemplazar con el número real (con código de país sin +)
    whatsappDisplay: "+54 9 11 0000-0000",
    phone: "(011) 4000-0000",
    email: "contacto@taller-radiadores.com",
    address: "Av. Automotor 2450, Zona Industrial",
    city: "Buenos Aires, Argentina",
    googleMapsUrl: "https://maps.google.com",
    schedule: {
      weekdays: "Lunes a Viernes: 8:00 a 18:30 hs",
      saturdays: "Sábados: 8:30 a 13:00 hs",
      sundays: "Domingos: Cerrado (Guardia de urgencias por WhatsApp)"
    }
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  },

  stats: [
    { value: "+25", label: "Años de Experiencia" },
    { value: "+10.000", label: "Radiadores Reparados y Fabricados" },
    { value: "100%", label: "Garantía en Soldaduras Cu/Al" },
    { value: "4.9★", label: "Opinión de Nuestros Clientes" },
  ]
};

// Función auxiliar para armar enlaces directos a WhatsApp con mensaje codificado
export const getWhatsAppLink = (message) => {
  const cleanNumber = SHOP_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message || `Hola ${SHOP_CONFIG.shortName}, me comunico desde la página web para hacer una consulta.`);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};
