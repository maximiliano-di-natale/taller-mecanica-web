// Base de datos inicial de Repuestos y Servicios para el E-Commerce / Catálogo
export const CATEGORIAS = [
  { id: 'todos', name: 'Todos los Productos y Repuestos' },
  { id: 'radiadores', name: 'Radiadores & Paneles Térmicos' },
  { id: 'calefaccion-aire', name: 'Climatización & Calefacción (A/A)' },
  { id: 'refrigeracion', name: 'Electroventiladores & Termostatos' },
  { id: 'soldaduras-servicios', name: 'Servicios de Fabricación & Soldadura' },
  { id: 'mecanica-general', name: 'Mecánica General & Frenos/Susp.' },
  { id: 'fluidos', name: 'Líquidos Refrigerantes & Insumos' },
];

export const REPUESTOS = [
  {
    id: 'rad-001',
    title: 'Radiador de Agua Aluminio Reforzado VW Gol Trend / Voyage / Fox',
    category: 'radiadores',
    sku: 'RAD-VW-742',
    brand: 'Nacional / Calidad OEM',
    price: 94500,
    unit: 'unidad',
    inStock: true,
    featured: true,
    compatibleVehicles: ['VW Gol Trend (2008-2022)', 'VW Voyage', 'VW Fox', 'VW Suran 1.6 8v'],
    description: 'Radiador de agua con panel de aluminio de alta disipación térmica y tanques de polímero reforzado con fibra de vidrio. Probado a 2.5 bar de presión en banco de prueba hidráulico.',
    features: ['Panel de aluminio brazado', 'Aletas micro-ranuradas de alta eficiencia', 'Garantía de 12 meses por defecto de fabricación'],
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
    tag: 'Más Vendido'
  },
  {
    id: 'rad-002',
    title: 'Fabricación de Panel de Radiador Cobre y Latón a Medida (Agrícola / Camión)',
    category: 'soldaduras-servicios',
    sku: 'FAB-MEDIDA-CU',
    brand: 'Fabricación Propia en Taller',
    price: 240000,
    unit: 'presupuesto base',
    inStock: true,
    featured: true,
    compatibleVehicles: ['Tractores', 'Cosechadoras', 'Camiones Pesados', 'Autos Clásicos / Hot Rods'],
    description: 'Fabricamos paneles y radiadores completos en cobre y latón soldado a estaño/plata con serpentinas de alto caudal. Ideal para trabajo pesado, competición o vehículos clásicos sin repuesto comercial.',
    features: ['100% Cobre y Bronce de primera calidad', 'Construcción artesanal reforzada', 'Diseño a plano o muestra física'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    tag: 'Especialidad del Taller'
  },
  {
    id: 'rad-003',
    title: 'Radiador de Agua Chevrolet Corsa Classic / Fun 1.4 - 1.6 c/s Aire',
    category: 'radiadores',
    sku: 'RAD-GM-219',
    brand: 'Mahle / Valeo Grade',
    price: 88000,
    unit: 'unidad',
    inStock: true,
    featured: false,
    compatibleVehicles: ['Chevrolet Corsa 1.4 / 1.6', 'Corsa Classic (2000-2016)', 'Suzuki Fun'],
    description: 'Radiador con paso de caudal optimizado. Máxima resistencia a la corrosión por fluidos refrigerantes.',
    features: ['Montaje directo sin adaptaciones', 'Incluye tapón de purga y soporte sensor'],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    tag: 'En Stock'
  },
  {
    id: 'rad-004',
    title: 'Radiador Ford Ranger 2.8 / 3.0 / 3.2 Tdci Powerstroke',
    category: 'radiadores',
    sku: 'RAD-FOR-901',
    brand: 'Reforzado Heavy Duty',
    price: 185000,
    unit: 'unidad',
    inStock: true,
    featured: true,
    compatibleVehicles: ['Ford Ranger 2.8 TGV', 'Ford Ranger 3.0 Powerstroke', 'Ford Ranger 3.2 Tdci'],
    description: 'Radiador de alta resistencia mecánica especialmente preparado para exigencia todoterreno y remolque.',
    features: ['Laterales reforzados contra vibraciones', 'Tratamiento anticorrosión de fábrica'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
    tag: 'Alta Resistencia'
  },
  {
    id: 'aire-001',
    title: 'Condensador de Aire Acondicionado Peugeot 208 / 2008 / Citroën C3',
    category: 'calefaccion-aire',
    sku: 'COND-PSA-405',
    brand: 'Denso Technology',
    price: 135000,
    unit: 'unidad',
    inStock: true,
    featured: true,
    compatibleVehicles: ['Peugeot 208 (2012-2023)', 'Peugeot 2008', 'Citroën C3', 'Citroën C3 Aircross'],
    description: 'Condensador con filtro deshidratador incorporado. Flujo paralelo de microcanales de aluminio que asegura enfriamiento ultra rápido del habitáculo.',
    features: ['Filtro secador integrado', 'Aluminio con soldadura brazing homogénea'],
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
    tag: 'Climatización'
  },
  {
    id: 'aire-002',
    title: 'Radiador de Calefacción Interior Fiat Palio / Siena / Strada / Idea',
    category: 'calefaccion-aire',
    sku: 'CAL-FIA-118',
    brand: 'Magneti Marelli Alternative',
    price: 59000,
    unit: 'unidad',
    inStock: true,
    featured: false,
    compatibleVehicles: ['Fiat Palio Fire 1.3 / 1.4', 'Fiat Siena', 'Fiat Strada', 'Fiat Idea'],
    description: 'Radiador para caja evaporadora de calefacción. Caudal continuo para restablecer el calor rápido en días fríos.',
    features: ['Dimensiones exactas a la unidad de fábrica', 'Acoples rápidos originales'],
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80',
    tag: 'Calefacción'
  },
  {
    id: 'sold-001',
    title: 'Servicio de Soldadura TIG en Aluminio para Tapa de Cilindros y Block',
    category: 'soldaduras-servicios',
    sku: 'SRV-SOLD-ALU',
    brand: 'Servicio Especializado de Taller',
    price: 65000,
    unit: 'desde / presupuesto',
    inStock: true,
    featured: true,
    compatibleVehicles: ['Todo tipo de motores Nafteros y Diésel'],
    description: 'Relleno de picaduras por corrosión, rajaduras térmicas, anclajes de roscas y planos de tapa de cilindro mediante proceso TIG con gas Argón puro y aporte de aleación AlSi / AlMg.',
    features: ['Penetración y fusión libre de poros', 'Control con líquidos penetrantes', 'Ideal para tapas carcomidas por refrigerantes de mala calidad'],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    tag: 'Soldadura de Precisión'
  },
  {
    id: 'sold-002',
    title: 'Reconstrucción y Soldadura de Cañerías de Aire Acondicionado Cobre/Aluminio',
    category: 'soldaduras-servicios',
    sku: 'SRV-SOLD-CAN',
    brand: 'Servicio Especializado de Taller',
    price: 45000,
    unit: 'servicio',
    inStock: true,
    featured: false,
    compatibleVehicles: ['Línea liviana, utilitarios y camiones'],
    description: 'Reparación de tubos rozados, flexibles pinchados, uniones cobre-aluminio con soldadura de plata o varilla de aleación eutéctica con fundente especial.',
    features: ['Elimina pérdidas de gas refrigerante', 'Ahorro de hasta un 70% frente al repuesto importado'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
    tag: 'Ahorro & Reparación'
  },
  {
    id: 'ref-001',
    title: 'Electroventilador Completo con Encausador Toyota Hilux 2.5 / 3.0',
    category: 'refrigeracion',
    sku: 'ELEC-TOY-550',
    brand: 'Denso Tech',
    price: 172000,
    unit: 'unidad',
    inStock: true,
    featured: false,
    compatibleVehicles: ['Toyota Hilux 2005-2015', 'Toyota Hilux SW4'],
    description: 'Conjunto de motor eléctrico blindado, aspas balanceadas dinámicamente y deflector plástico de alta rigidez.',
    features: ['Operación silenciosa', 'Bajo consumo eléctrico en altas RPM'],
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80',
    tag: 'Refrigeración'
  },
  {
    id: 'ref-002',
    title: 'Cuerpo Termostático Metálico Completo Renault Clio / Kangoo 1.2 16v D4F',
    category: 'refrigeracion',
    sku: 'TERM-REN-312',
    brand: 'Solución Antifuga Metálica',
    price: 52000,
    unit: 'unidad',
    inStock: true,
    featured: false,
    compatibleVehicles: ['Renault Clio 2 1.2 16v', 'Renault Kangoo 1.2', 'Renault Twingo 16v'],
    description: 'Cuerpo de aluminio fundido reforzado que soluciona definitivamente el problema de deformación y pérdidas de las cajas termostáticas plásticas originales.',
    features: ['Nunca más deformaciones plásticas', 'Incluye bulbo sensor y termostato calibrado a 89°C'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80',
    tag: 'Solución Definitiva'
  },
  {
    id: 'mec-001',
    title: 'Kit de Distribución + Bomba de Agua Renault Sandero / Logan / Duster 1.6 16v K4M',
    category: 'mecanica-general',
    sku: 'DIST-REN-16V',
    brand: 'Gates / Dolz OEM',
    price: 168000,
    unit: 'kit completo',
    inStock: true,
    featured: false,
    compatibleVehicles: ['Renault Sandero 1.6 16v', 'Renault Duster 1.6 16v', 'Renault Kangoo K4M', 'Renault Mégane 1.6'],
    description: 'Kit compuesto por correa dentada HNBR reforzada, tensor automático, rodillo guía y bomba de agua con turbina metálica.',
    features: ['Vida útil 60.000 km / 4 años', 'Opción de colocación en nuestro taller con garantía escrita'],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    tag: 'Mantenimiento'
  },
  {
    id: 'liq-001',
    title: 'Líquido Refrigerante Anticorrosivo Concentrado Orgánico Rosa (Bidón 5L)',
    category: 'fluidos',
    sku: 'LIQ-ORG-5L',
    brand: 'Glicol Puro Grado Aeronáutico / Automotor',
    price: 28500,
    unit: 'bidón 5L',
    inStock: true,
    featured: true,
    compatibleVehicles: ['Apto para radiadores de aluminio, cobre y bronce'],
    description: 'Fórmula de aditivos carboxílicos OAT libre de nitritos, aminas y fosfatos. Protege contra la cavitación, eleva el punto de ebullición a 128°C (en circuito presurizado) y evita la electrólisis del aluminio.',
    features: ['Protege radiadores y tapas de cilindro contra corrosión', 'Apto todas las marcas'],
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80',
    tag: 'Cuidado del Motor'
  }
];

export const SERVICIOS_TALLER = [
  {
    id: 'fab-radiadores',
    icon: 'Hammer',
    title: 'Fabricación de Radiadores a Medida',
    highlight: 'Nuestra Mayor Especialidad',
    description: 'Diseñamos y construimos radiadores especiales para vehículos clásicos, máquinas viales, tractores, camiones pesados y vehículos de competición. Paneles de cobre/latón o aluminio de alta transferencia.',
    items: [
      'Construcción artesanal sobre muestra o plano técnico',
      'Cálculo de caudal y filas para autos con problemas de temperatura',
      'Paneles de serpentina reforzada para servicio extrapesado',
      'Tanques de bronce forjado o aluminio con soldadura continua'
    ],
    accentColor: 'from-orange-500 to-amber-600'
  },
  {
    id: 'rep-radiadores',
    icon: 'ShieldCheck',
    title: 'Reparación & Desobstrucción de Radiadores',
    highlight: 'Diagnóstico en Banco',
    description: 'Diagnóstico inmediato de pérdidas, cambio de tanques plásticos deteriorados, baqueteado químico para destapar paneles obstruidos y prueba final de hermeticidad.',
    items: [
      'Prueba hidráulica por inmersión neumática',
      'Cambio de tanques de plástico por piezas nuevas o metálicas',
      'Soldadura de pinchaduras en celdas de aluminio y cobre',
      'Limpieza química de sarro y óxido interno'
    ],
    accentColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'soldadura-cu-al',
    icon: 'Flame',
    title: 'Soldaduras Especiales de Cobre y Aluminio',
    highlight: 'Técnica de Precisión TIG / Oxiacetilénica',
    description: 'Soldamos materiales no ferrosos de alta complejidad donde otros talleres no se arriesgan. Relleno de tapas de cilindro comidas por óxido, blocks rajados, cárteres y cañerías.',
    items: [
      'Soldadura TIG con atmósfera inerte de gas Argón',
      'Soldadura autógena con aleaciones de plata y fundentes desoxidantes',
      'Relleno de cámaras de combustión y pasos de agua corroídos',
      'Reparación de soportes, cajas de cambio partidas y carcasas'
    ],
    accentColor: 'from-amber-500 to-orange-600'
  },
  {
    id: 'climatizacion-ac',
    icon: 'Snowflake',
    title: 'Aire Acondicionado & Calefacción Automotor',
    highlight: 'Confort Todo el Año',
    description: 'Servicio integral del sistema de climatización del habitáculo. Reparamos fugas de gas, cambiamos compresores, condensadores y radiadores de calefacción que pierden agua.',
    items: [
      'Carga de gas refrigerante ecológico R134a con báscula digital',
      'Inyección de contraste UV para detección microscópica de fugas',
      'Cambio de radiador de calefacción de torpedo / tablero',
      'Reparación y bobinado de poleas magnéticas de compresor'
    ],
    accentColor: 'from-sky-500 to-blue-600'
  },
  {
    id: 'mecanica-general',
    icon: 'Wrench',
    title: 'Mecánica General & Mantenimiento Preventivo',
    highlight: 'Atención Integral',
    description: 'Cuidamos la mecánica completa de tu auto con instrumental moderno y repuestos garantizados. Atendemos todas las marcas y modelos.',
    items: [
      'Cambio de kit de distribución y bombas de agua',
      'Frenos completos: pastillas, discos, cintas y líquido',
      'Tren delantero, extremos, bujes, rótulas y amortiguadores',
      'Cambio de embrague, fluidos, filtros y service general'
    ],
    accentColor: 'from-slate-600 to-slate-800'
  }
];

export const TESTIMONIOS = [
  {
    name: 'Carlos Mendoza',
    vehicle: 'Toyota Hilux 3.0',
    comment: 'Tenía una fisura en el radiador y en varios lugares me dijeron que no se podía reparar y me cobraban una fortuna por uno nuevo. En el taller me lo soldaron y reforzaron en el día. Unos genios totales.',
    rating: 5,
    tag: 'Soldadura de Radiador'
  },
  {
    name: 'Mariano Rossi',
    vehicle: 'Ford Falcon 1978 (Clásico)',
    comment: 'Me fabricaron un radiador a medida en 3 filas de cobre para el motor 221 que siempre calentaba en verano. Ahora viajo por la ruta al mediodía con 38 grados y la temperatura ni se mueve. Impecable trabajo artesanal.',
    rating: 5,
    tag: 'Fabricación a Medida'
  },
  {
    name: 'Valeria Gómez',
    vehicle: 'Peugeot 208',
    comment: 'No me andaba el aire acondicionado ni la calefacción. Me diagnosticaron con luz UV una manguera pinchada, la soldaron y me cargaron el gas. Excelente precio y muy transparentes en la explicación.',
    rating: 5,
    tag: 'Aire Acondicionado'
  }
];
