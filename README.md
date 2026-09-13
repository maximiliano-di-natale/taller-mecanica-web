# Web Oficial & Catálogo de Repuestos del Taller Mecánico

Sitio web profesional, rápido y responsive para taller de mecánica integral, especializado en **fabricación y reparación de radiadores**, **soldaduras especiales en cobre y aluminio**, **calefacción y aire acondicionado automotor**, y **mecánica general**, con módulo integrado de **catálogo / e-commerce de repuestos automotor** (estilo MercadoLibre / Shopify con pedidos directos a WhatsApp).

---

## 🚀 Inicio Rápido

Para poner en marcha la web en tu computadora:

```bash
# 1. Ingresar a la carpeta del proyecto
cd C:\Users\PC\.gemini\antigravity\scratch\taller-mecanica-web

# 2. Instalar dependencias (si aún no se instalaron)
npm install

# 3. Iniciar el servidor de desarrollo local
npm run dev
```

La página estará visible en tu navegador en: **`http://localhost:3000`**

Para generar la versión lista para subir a internet (Vercel, Netlify, etc.):
```bash
npm run build
```

---

## 🛠️ Cómo Personalizar tu Taller (Configuración Rápida)

Todo lo relacionado con los datos de tu empresa está centralizado en un solo archivo:
👉 **`src/config/shopConfig.js`**

### 1. Cambiar Teléfono de WhatsApp, Dirección y Horarios
Abrí `src/config/shopConfig.js` y modificá los campos:
```javascript
contact: {
  whatsappNumber: "54911xxxxxxxx", // Tu número de WhatsApp real con código de país (sin el +)
  whatsappDisplay: "+54 9 11 xxxx-xxxx",
  phone: "(011) 4xxx-xxxx",
  email: "tuempresa@taller.com",
  address: "Tu calle y altura, Ciudad",
  ...
}
```

### 2. Poner tu Logo cuando lo tengas
1. Copiá la imagen de tu logo en la carpeta **`public/`** (por ejemplo: `public/mi-logo.png`).
2. En `src/config/shopConfig.js`, cambiá la línea:
```javascript
logoUrl: "/mi-logo.png", // En lugar de null
```
¡Listo! La web reemplazará automáticamente la insignia provisoria por tu logo oficial en el encabezado y pie de página.

### 3. Agregar o Modificar Repuestos en la Tienda
Todos los repuestos, precios, descripciones y compatibilidades están en:
👉 **`src/data/repuestos.js`**

Podés agregar o cambiar los precios en pesos, fotos, códigos de pieza (SKU) y modelos de autos compatibles.

---

## 📱 Características Incluidas

- **Sección Hero de Alto Impacto:** Resalta la fabricación a medida y las soldaduras técnicas.
- **Especialidades:** Tarjetas técnicas para radiadores, soldaduras TIG Cu/Al, climatización y mecánica general.
- **Sección Detallada de Radiadores & Soldaduras:** Explica la prueba hidráulica en batea, baqueteado caño por caño y soldadura de tapas/blocks de aluminio.
- **Climatización Automotor:** Auto-diagnóstico de fallas en aire acondicionado y calefacción con detección UV de pérdidas.
- **Catálogo E-Commerce:**
  - Buscador inteligente en tiempo real por nombre, SKU o modelo de vehículo.
  - Filtros por categoría (Radiadores, Climatización, Mecánica, Fluidos, etc.).
  - Ficha interactiva de producto con fotos y compatibilidad.
  - Carrito de compras que genera automáticamente el pedido detallado con cálculo de totales para enviar por WhatsApp en 1 clic.
- **Cotizador Interactivo de Presupuestos:** Formulario para que el cliente elija el trabajo y vehículo, generando una solicitud instantánea por WhatsApp.
- **Botón Flotante de WhatsApp:** Con mensaje de atención para consultas inmediatas o envío de fotos de piezas rotas.
