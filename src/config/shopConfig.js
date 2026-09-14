// Configuración central oficial de Radiadores Di Natale
export const SHOP_CONFIG = {
  name: "Radiadores Di Natale",
  shortName: "Di Natale",
  fullName: "Radiadores Di Natale - Taller Mecánico & Climatización",
  subtitle: "Fabricación y Reparación de Radiadores • Soldaduras Cobre y Aluminio • Climatización & Mecánica",
  
  // Logo oficial del taller
  logoUrl: "/logo-dinatale-clean.png", 
  
  contact: {
    // Línea 1 (Ventas, Presupuestos y Taller)
    phonePrimary: "261 554-5389",
    whatsappPrimary: "5492615545389",
    whatsappDisplayPrimary: "+54 9 261 554-5389",

    // Línea 2 (Atención al Cliente, Consultas y Guardia)
    phoneSecondary: "261 554-5423",
    whatsappSecondary: "5492615545423",
    whatsappDisplaySecondary: "+54 9 261 554-5423",

    // Datos generales de contacto y ubicación
    whatsappNumber: "5492615545389",
    whatsappDisplay: "+54 9 261 554-5389",
    phone: "(261) 554-5389 / (261) 554-5423",
    email: "radiadoresdinatale@gmail.com",
    address: "Calle O'Brien 746",
    neighborhood: "Guaymallén",
    postalCode: "CP 5519",
    city: "Guaymallén, Mendoza, Argentina",
    fullAddress: "Calle O'Brien 746, CP 5519, Guaymallén, Mendoza",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Calle+O%27Brien+746,+Guaymall%C3%A9n,+Mendoza",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Calle+O%27Brien+746,+Guaymall%C3%A9n,+Mendoza&t=&z=16&ie=UTF8&iwloc=&output=embed",
    schedule: {
      weekdays: "Lunes a Viernes: 8:00 a 18:30 hs",
      saturdays: "Sábados: 8:30 a 13:00 hs",
      sundays: "Domingos: Cerrado (Consultas por WhatsApp)"
    }
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  },

  stats: [
    { value: "+25", label: "Años de Trayectoria Di Natale" },
    { value: "+10.000", label: "Radiadores Fabricados y Reparados" },
    { value: "100%", label: "Garantía en Soldaduras Cobre y Aluminio" },
    { value: "4.9★", label: "Recomendación de Nuestros Clientes" },
  ]
};

// Función para armar enlaces directos a WhatsApp (permite alternar entre línea 1 y 2)
export const getWhatsAppLink = (message, line = 'primary') => {
  const number = line === 'secondary' 
    ? SHOP_CONFIG.contact.whatsappSecondary 
    : SHOP_CONFIG.contact.whatsappPrimary;
  
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message || `Hola Radiadores Di Natale, me comunico desde la página web para hacer una consulta.`);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};
