import SpainFlag from '../icons/spain.svg';
import UnitedStatesFlag from '../icons/united.svg';

export const languages: Record<
string,
{ code: string; name: string; flag: typeof UnitedStatesFlag }
> = {
    en: {
      code: 'en',
      name: 'English',
      flag: UnitedStatesFlag,
    },
    es: {
      code: 'es',
      name: 'Español',
      flag: SpainFlag,
    },
  };
  
  export const defaultLang = 'en';

  export const showDefaultLang = false;

  export const routes = {
    es: {
      'who-we-are': 'quienes-somos',
      'our-team': 'nuestro-equipo',
      'buy': 'comprar',
      'rent': 'alquiler',
      'contact': 'contacto',
      'blog': 'blog',
      'property': 'property',
      'property-management': 'administracion-de-propiedades',
      'maintenance-management': 'gestion-de-mantenimiento',
      'daily-assistance': 'asistencia-diaria',
      'experiences': 'experiencias',
      'tourist-plans': 'planes-turisticos',
      'land-transport': 'transporte-terrestre',
      'nautical-transport': 'transporte-nautico',
      '404': '404',
      '500':'500',
   

      
    },
    en: {
      'who-we-are': 'who-we-are',
      'our-team': 'our-team',
      'buy': 'buy',
      'rent': 'rent',
      'contact': 'contact',
      'blog': 'blog',
      'property': 'property',
      'property-management': 'property-management',
      'maintenance-management': 'maintenance-management',
      'daily-assistance': 'daily-assistance',
      'experiences': 'experiences',
      'tourist-plans': 'tourist-plans',
      'land-transport': 'land-transport',
      'nautical-transport': 'nautical-transport',
      '404': '404',
      '500':'500',
      
    }
  }

  
  export const ui = {
    en: {
        'layout.title': 'Real Estate in Cartagena | Property Sales & Management - BR Property Solutions',
        'layout.description' : 'Buy, sell or manage apartments and houses in Cartagena. Professional real estate services for property owners and investors.',
        'layout.tag': 'Tag',
        'layout.price': 'Price',
        
        


        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.buy': 'Buy',
        'nav.rent': 'Rent',
        'nav.services': 'Services',
        'nav.solution': 'Property Solutions',
        'nav.manage': 'Property Management',
        'nav.main': 'Maintenance Management and Support',
        'nav.manage-desc': 'Optimize the value of your properties with our comprehensive and personalized management.',
        'nav.concierge' : 'Luxury Concierge',
        'nav.concierge-desc': 'Enjoy exclusive and personalized experiences with our luxury concierge service.',
        'nav.short': 'Short and Long Term Rentals',
        'nav.short-desc': 'Discover our exclusive collection of short and long term rental apartments and houses, specially designed for you.',
        'nav.daily': 'Daily Assistance',
        'nav.tourist': 'Tourist Plans',
        'nav.experiences': 'Experiences',
        'nav.transport': 'Transportation',
        'nav.land': 'Land Transportation',
        'nav.nautical': 'Nautical Transportation',
        'nav.who': 'Who We Are',
        'nav.team': 'Our Team',
        'nav.contact': 'Contact',
        'nav.links': 'Useful Links',
        'nav.msg': 'Your home away home',
        'nav.terms': 'Terms & Conditions',
        'nav.accept': 'I accept',
        'nav.for': 'for processing personal data',
        'nav.privacy': 'Privacy Policy',
        'nav.pqrs': 'Q&A',
        'nav.support': 'Support',
        'nav.rights': 'All rights reserved',
        'nav.more': 'View Available Properties',

        'view.btn': 'View Property',

        'manage.title': 'Property Management for Short or Long Term Rentals',
        'manage.sub': 'We are leaders in property management for vacation and long-term rentals.',
        'manage.span': 'We take your property and',
        'manage.br' : 'investment to the next level.',
        'manage.side': 'Our expert team handles everything, from marketing to operational management, so you can maximize your income without worries.',

     
        
        'about.sub': 'Building a visionary legacy in the future of property excellence.',
        'about.side' : 'At BR Property Solutions, we believe that every journey is a unique experience and that where you stay can make that journey truly unforgettable. As providers of tourist accommodations, property sales, and boat rentals, we take pride in offering homes away from home and exceptional experiences.',
        'mission' : 'Our mission',
        'mission.title' : 'Excellence in quality, safety and service.',
        'mission.sub' : ' We are committed to providing properties and boats of the highest quality, ensuring the safety and well-being of our clients at all times. Excellence is service is our standard.',
        'vision': 'Our Vision',
        'vision.title': 'Transformating statys into timeless adventures.',
        'vision.sub': 'Becoming the leading company in providing real state services focused on the rental of tourist accomodations, local property sales, and maritime boat rentals, offering access to the most exclusive properties and boats in dream destinations, where each stay transform into a unique and unforgettable adventure.',


        'list.title' : 'Explore our featured properties',
        'list.bedrooms' : 'Bedrooms',
        'list.bathrooms': 'Bathrooms',
        'list.sale-price': 'Sell',
        'list.rent-price': 'Rent',
        'list.btn': 'Load more',
        'list.search': 'Search by title, property ID, or price.',
        'list.apply-filters': 'Apply filter',
        'list.buy': 'Explore our properties in sale',
        'list.rent': 'Explore our properties for rent',


        'centered.title': 'Who We Are',
        'centered.desc': 'Building a visionary legacy in the future of property excellence.',


        'cta.title': 'Looking to buy',
        'cta.title-01': 'an apartment in Cartagena?',
        'cta.desc': 'Leave us your information and one of our real estate advisors will contact you to show you the best opportunities.',
        'cta.desc-01': 'Contact us to receive service information',
        'cta.btn': 'Submit',
        'cta.name': 'First Name',
        'cta.lastname': 'Last Name',
        'cta.phone': 'Cellphone',
        'cta.msg-label': 'Message',
        'cta.mail': 'Email Address',
        'cta.msg': 'We respect your privacy. You can unsubscribe at any time.',
        'cta.privacy': 'I accept the terms and conditions.',
        
        "prop.sale": "Selling price",
        "prop.rent": "Rental price",
        "prop.btn": "View Property",

        "read": 'Read Article',
        'options':'Select a Service',
        "date": 'Date',

        "team.title": "Our Team",
        "team.desc": "Meet the people who make your experience unique.",
        "team.rep": "Sales Representative",
        'team.why':'Why choose us?',
        'team.why-des':'Unmatched variety, quality, and personalized service',
        'team.var':'Variety of Properties',
        'team.var-des':'We offer diverse options tailored to your needs.',
        'team.qa':'Quality Standards',
        'team.qa-des':'We guarantee excellence in every service.',
        'team.ps': 'Personalized Service',
        'team.ps-des': 'Your satisfaction is our priority.',
        
        "contact.title": "Leave us a message",
        "contact.desc": "Let's do something great together.",
        'contact.msg' : 'I agree to the privacy policy.',
        "contact.btn": "Submit",
        "contact.cancel": "Cancel",
        "contact.book": "Send Information",

        "book.now" : 'Book Service Now',

        "nautical.title": "Nautical Transport Services",
        "nautical.desc":"Immerse yourself in an unparalleled nautical experience with our exclusive private maritime transportation service, where luxury meets adventure on every wave. Our distinguished fleet of state-of-the-art catamarans, elegant yachts, and sports boats stands ready to transport you to paradise destinations with maximum comfort and safety.",
        "nautical.title-1": "Special offers",
        "nautical.subtitle-1": "Catamaran",
        "nautical.content-1": "Sail with stability and space in our state-of-the-art catamarans, perfect for unforgettable celebrations and events.",
        "nautical.title-2": "More reserved",
        "nautical.subtitle-2": "Yatchs",
        "nautical.content-2": "Immerse yourself in luxury and sophistication aboard our yachts, ideal for private getaways and VIP experiences.",
        "nautical.title-3": "Economical",
        "nautical.subtitle-3": "Boats",
        "nautical.content-3": "Enjoy versatility and access to hidden corners of the sea in our boats, designed for adventure and comfort.",

        "land.title": "Land Transport Services",
        "land.car":"Automobile",
        "land.desc": 'Choose excellence on wheels: our premium vans, SUVs, and cars await you.',
        "land.long": 'Experience mobility excellence with our private special transportation service, exclusively designed to meet your most demanding needs. Our modern Vans, SUVs, and luxury cars, equipped with the finest amenities and driven by professional chauffeurs, guarantee a safe, punctual, and comfortable journey for any occasion.',

        'proper.one': 'Professional Marketing',
        'one.desc': 'We use a combination of online distribution channels such as Airbnb, Vrbo, Booking, social media, website, and digital marketing strategies to reach a broad audience of travelers.',
        'proper.two': 'Reservation Management',
        'two.desc': 'We handle all reservations, from the initial communication with guests to the seamless coordination of check-ins and check-outs.',
        'proper.three': 'Maintenance and Cleaning',
        'three.desc': 'We coordinate professional cleaning services and preventive maintenance to ensure your property remains in optimal condition.',
        'proper.four': 'Customer Support',
        'four.desc': 'We offer 24/7 customer support to quickly respond to guests questions or needs during their stay.',

        'main.sub': 'We are leaders in the administrative and operational management of properties, ensuring that your investment is in the best hands.',
        'main.one': 'Payment of Public Services.',
        'main.two': 'Assistance in co-owners meetings.',
        'main.three': 'Assistance in preventive and corrective maintenance.',
        'main.four': 'Monthly cleaning.',
        'main.five': 'Assistance in unforeseen events.',
        'main.six': 'Professionals in Comprehensive Services.',
        'main.span': 'We simplify your management',
        'main.br': 'and maximize your peace of mind.',
        'main.side': 'Our comprehensive and personalized approach ensures efficiency and attention to every detail, from maintenance to service supervision.',

        'filter.title' : 'Advanced Search',
        'filter.type' : 'Property Type',
        'filter.all-type' : 'All types',
        'filter.price' : 'Price Range',
        'filter.bed' : 'Bedrooms',
        'filter.bath' : 'Bathrooms',
        'filter.any' : 'Any',
        'filter.label-comercial': 'Commercial',
        'filter.label-residential': 'Residential',
        'filter.label-project': 'Project',
        'filter.label-mix': 'Mix use',


        'hero.title': 'Short & Long Term Rentals in Cartagena Apartments and Houses',
        'hero.desc': 'Short and long term rental apartments and houses in Cartagena. Professionally managed properties with personalized local service.',
        'hero.btn': 'View Properties for Rent',

        'hero2.title': 'Apartments and Houses for Sale in Cartagena',
        'hero2.desc': 'Buy or sell apartments and houses in Cartagena with professional real estate guidance and local market expertise.',
        'hero2.btn': 'View Properties for Sale',

        'sale.title': 'Properties for sale in Cartagena',
        'sale.desc': 'Browse apartments and houses for sale in Cartagena and find your ideal property',
        'sale.btn' : 'See all properties for sale',

        'rent.title': 'Available properties for rent in Cartagena',
        'rent.desc': 'Discover apartments and houses for rent in Cartagena, ideal for short or long term stays with trusted local management.',
        'rent.btn': 'See all properties for rent',

        'silver': 'Silver Plan',
        'gold': 'Gold Plan',
        'plans.price': 'Prices may vary depending on the season.',
        'plans.title': 'Tourist Packages in Cartagena',
        'plans.desc': 'Explore the best tourist packages in Cartagena and enjoy exclusive beaches with boat transportation, welcome cocktails, lunch, and premium facility access. Choose from Éteka Beach, Bora Bora Club, or Islabela for a unique experience with live music, water activities, and total relaxation.',

        'feat.transport': 'Maritime transport',
        'feat.cocktail': 'Welcome cocktail',
        'feat.facilities': 'Use of facilities',
        'feat.amenities': 'Amenities',
        'feat.pool':'Pool',
        'feat.lunch': 'Lunch',
        'feat.sunbed': 'Sun lounger or beach bed',
        'feat.champ': 'Champagne glass',

        'exp.desc':'Dive into the local culinary scene with our exclusive reservation service. Our experts carefully select the best restaurants and bars, tailoring them to your gastronomic preferences, budget, and personal style. From high-end dining establishments to hidden local culinary gems, we guarantee an unforgettable dining experience.',  

        'exp.andres': 'Enjoy the vibrant and colorful essence of Andrés Cartagena, an extension of the gastronomic paradise.',
        'exp.celele': 'A cozy restaurant offering local specialties, with seafood and snacks among its highlights.',
        'exp.unica': 'Experience an authentic and high-quality culinary journey that will surprise you at La Única.',
        'exp.cande': 'An elegant venue filled with greenery, serving traditional regional cuisine with frequent live entertainment.',
        'exp.niku': 'A restaurant that blends the best of Japanese, Peruvian, Latin, and Spanish cuisine, along with sushi specialties',
        'exp.juan': 'A relaxed spot to enjoy tapas, seafood, and meats, complemented by desserts and an extensive wine selection.',


        'daily.desc': 'We transform your daily routine into a seamless luxury experience. Our team of specialist assistants handles every detail, from coordinating appointments and complex management to resolving everyday tasks. We use cutting-edge technology and an exclusive network of contacts to ensure that each request is resolved with precision, discretion, and elegance.',     

              
        'daily.hosp': 'Day-to-Day Assistance',
        'hops.desc': 'We transform your daily routine into a luxury experience, managing every detail with precision and elegance.',
        'daily.event' : 'Private Events',
        'event.desc': 'We design and execute exclusive events that reflect your unique style, from conception to the final note.',
        'daily.get': 'Getaways & Leisure',
        'get.desc': 'Creating personalized travel experiences that exceed your expectations, blending luxury, adventure, and well-being.',
        'daily.ticket':'Ticketing',
        'ticket.desc': 'Get preferred access to the most exclusive events, with VIP reservations and hard-to-get tickets.',       


        
    },


    es: {
        'layout.title' : 'Inmobiliaria en Cartagena | Venta y Administración de Propiedades - BR Property Solutions',
        'layout.description': 'Compra, vende o administra apartamentos y casas en Cartagena. Asesoría inmobiliaria profesional para propietarios e inversionistas.',
        'layout.tag': 'Etiqueta',
        'layout.price': 'Precio',

        'nav.home': 'Inicio',
        'nav.about': 'Nosotros',
        'nav.buy': 'Comprar',
        'nav.rent': 'Alquilar',
        'nav.services': 'Servicios',
        'nav.solution': 'Soluciones Inmobiliarias',
        'nav.manage': 'Administración de propiedades',
        'nav.main': 'Gestión y Soporte de Mantenimiento.',
        'nav.manage-desc': 'Optimiza el valor de tus inmuebles con nuestra gestión integral y personalizada.',
        'nav.concierge' : 'Conserjería de Lujo',
        'nav.concierge-desc': 'Disfruta de experiencias exclusivas y personalizadas con nuestro servicio de conserjería de lujo.',
        'nav.short': 'Alquileres a corto y largo plazo',
        'nav.short-desc': 'Descubre nuestra exclusiva colección de apartamentos y casas de alquiler a corto y largo plazo, diseñadas especialmente para ti.',
        'nav.daily': 'Asistencia diaria',
        'nav.tourist': 'Planes turisticos',
        'nav.experiences': 'Experiencias',
        'nav.transport': 'Transporte',
        'nav.land': 'Transporte Terrestre',
        'nav.nautical': 'Transporte Nautico',
        'nav.who': 'Quiénes Somos',
        'nav.team': 'Nuestro Equipo',
        'nav.contact': 'Contacto',
        'nav.links': 'Enlaces útiles',
        'nav.msg': 'Tu hogar lejos de casa',
        'nav.terms': 'Términos y Condiciones',
        'nav.accept': 'Acepto',
        'nav.for': 'para el procesamiento de datos personales',
        'nav.privacy': 'Política de Privacidad',
        'nav.pqrs': 'PQRS',
        'nav.support': 'Soporte',
        'nav.rights': 'Todos los derechos reservados',
        'nav.more': 'Ver propiedades disponibles',

        'view.btn': 'Ver Propiedad',

        'manage.title': 'Administración de propiedades para rentas cortas',
        'manage.sub': 'Somos líderes en la administración de propiedades para rentas vacacionales y a largo plazo',
        'manage.span': 'Llevamos tu propiedad y',
        'manage.br' : 'tu inversión a otro nivel.',
        'manage.side': 'Nuestro equipo experto se encarga de todo, desde la comercialización hasta la gestión operativa, para que puedas maximizar tus ingresos sin preocupaciones.',

        'about.sub': 'Construyendo un legado visionario en el futuro de la excelencia en propiedad.',
        'about.side' : 'En BR Property Solutions, creemos que cada viaje es una experiencia única y que el lugar donde te hospedas puede convertir ese viaje en algo verdaderamente inolvidable. Como proveedores de alojamientos turísticos, ventas de propiedades y renta de botes, nos enorgullece ofrecer hogares lejos de casa y experiencias excepcionales.',
        'mission' : 'Nuestra Misión',
        'mission.title' : 'Excelencia en calidad, seguridad y servicio.',
        'mission.sub' : 'Nos comprometemos a ofrecer propiedades y botes de la más alta calidad, asegurando la seguridad y el bienestar de nuestros clientes en todo momento. La excelencia en el servicio es nuestro estándar.',
        'vision': 'Nuestra Vision',
        'vision.title': 'Transformando estancias en aventuras eternas.',
        'vision.sub': ' Convertirnos en la empresa líder en la prestación de servicios inmobiliarios enfocados en Alquiler de alojamientos turísticos, venta de propiedades locales y renta de embarcaciones marítimas, proporcionando acceso a las propiedades y botes más exclusivos en destinos de ensueño, donde cada estancia se transforma en una aventura única e inolvidable',

        'list.title' : 'Explora nuestras propiedades destacadas',
        'list.buy': 'Explora nuestras propiedades en venta',
        'list.rent': 'Explora nuestras propiedades en renta',
        'list.sale-price': 'Venta',
        'list.rent-price': 'Renta',
        'list.btn': 'Cargar más',
        'list.search': 'Busca por Zona, ID de propiedad o Ubicacion',
        'list.bedrooms' : 'Habitaciones',
        'list.bathrooms': 'Baños',
        'list.apply-filters': 'Aplicar filtro',

        'centered.title': 'Quiénes somos',
        'centered.desc': 'Construyendo un legado visionario en el futuro de la excelencia en propiedad.',

        'cta.title': '¿Buscas comprar',
        'cta.title-01': 'apartamento en Cartagena?',
        'cta.desc': 'Déjanos tus datos y uno de nuestros asesores inmobiliarios te contactará para mostrarte las mejores oportunidades.',
        'cta.desc-01': 'Contactanos para recibir actualizaciones',
        'cta.btn': 'Enviar',
        'cta.name': 'Nombre',
        'cta.lastname': 'Apellido',
        'cta.phone': 'Teléfono',
        'cta.msg-label': 'Mensaje',
        'cta.mail': 'Correo electrónico',
        'cta.msg': 'Respetamos tu privacidad. Puedes darte de baja en cualquier momento.',
        'cta.privacy': 'Acepto los términos y condiciones.',
        
        "prop.sale": 'Precio de venta',
        "prop.rent": 'Precio de alquiler',
        "prop.btn": 'Ver propiedad',      


        "read": 'Leer Articulo',
        'options':'Seleccionar Servicio',
        "date": 'Fecha',

        "team.title": "Nuestro Equipo",
        "team.desc": "Conoce a las personas que hacen posible que tu experiencia sea única.",
        "team.rep": "Representante de ventas",
        'team.why':'¿Por qué elegirnos?',
        'team.why-des':'Variedad, calidad y servicio personalizado incomparables',
        'team.var':'Variedad de Propiedades',
        'team.var-des':'Ofrecemos diversas opciones adaptadas a tus necesidades.',
        'team.qa':'Estándares de Calidad',
        'team.qa-des':'Garantizamos la excelencia en cada servicio.',
        'team.ps': 'Servicio Personalizado',
        'team.ps-des': 'Tu satisfacción es nuestra prioridad.',

        "contact.title": "Déjanos un mensaje",
        "contact.desc": "Hagamos algo grandioso juntos.",
        'contact.msg' : 'Estoy de acuerdo con la política de privacidad.',
        "contact.btn": "Enviar",
        "contact.cancel": "Cancelar",
        "contact.book": "Enviar Informacion",

        "book.now" : 'Reservar Servicio Ahora',

        "nautical.title": "Servicios de Transporte Nautico",
        "nautical.desc": "Sumérjase en una experiencia náutica incomparable con nuestro exclusivo servicio de transporte marítimo privado, donde el lujo se encuentra con la aventura en cada ola. Nuestra distinguida flota de catamaranes de última generación, yates elegantes y botes deportivos está lista para transportarle a destinos paradisíacos con el máximo confort y seguridad. ",
        "nautical.title-1": "Ofertas Especiales",
        "nautical.subtitle-1": "Catamarán",
        "nautical.content-1": "Navega con estabilidad y espacio en nuestros catamaranes de última generación, ideales para celebraciones y eventos inolvidables.",
        "nautical.title-2": "Más reservados",
        "nautical.subtitle-2": "Yates",
        "nautical.content-2": "Sumérgete en el lujo y la sofisticación a bordo de nuestros yates, perfectos para escapadas privadas y experiencias VIP.",
        "nautical.title-3": "Económicos",
        "nautical.subtitle-3": "Botes",
        "nautical.content-3": "Disfruta de la versatilidad y el acceso a rincones escondidos del mar en nuestros botes, diseñados para la aventura y el confort.",

        "land.title": "Servicios de Transporte Terrestre",
        "land.car":"Automóvil",
        "land.desc": 'Elija excelencia sobre ruedas: nuestras vans, SUVs y automóviles premium le esperan.',
        "land.long": 'Experimente la excelencia en movilidad con nuestro servicio de transporte especial privado, diseñado exclusivamente para satisfacer sus necesidades más exigentes. Nuestras modernas Vans, SUVs y automóviles de lujo, equipados con las mejores comodidades y conducidos por choferes profesionales, garantizan un viaje seguro, puntual y confortable para cualquier ocasión. ',

        'proper.one': 'Comercialización Profesional',
        'one.desc': 'Utilizamos una combinación de canales de distribución en línea como Airbnb,Vrbo, booking, redes sociales, página web y estrategias de marketing digital para llegar a una amplia audiencia de viajeros.',
        'proper.two': 'Gestión de reserva',
        'two.desc': 'Nos encargamos de todas las reservas, desde la comunicación inicial con los huéspedes hasta la coordinación de check-ins y check-outs sin problemas.',
        'proper.three': 'Mantenimiento y limpieza',
        'three.desc': 'Coordinamos servicios de limpieza profesional y mantenimiento preventivo para garantizar que tu propiedad se mantenga en condiciones óptimas.',
        'proper.four': 'Asistencia al cliente',
        'four.desc': 'Ofrecemos atención al cliente 24/7 para responder rápidamente a las preguntas o necesidades de los huéspedes durante su estancia.',

        'main.sub': 'Somos líderes en la gestión administrativa y operativa de propiedades, asegurando que su inversión esté en las mejores manos.',
        'main.one': 'Pagos de Servicios Publicos.',
        'main.two': 'Asistencia en reuniones de copropietarios.',
        'main.three': 'Asistencia en mantenimientos preventivos y correctivos.',
        'main.four': 'Aseo mensual.',
        'main.five': 'Asistencia en casos fortuitos.',
        'main.six': 'Profesionales en Servicios Integrales.',
        'main.span': 'Simplificamos su gestión',
        'main.br': 'maximizamos su tranquilidad',
        'main.side': 'Nuestro enfoque integral y personalizado garantiza la eficiencia y el cuidado de cada detalle, desde el mantenimiento hasta la supervisión de servicios.',

        'filter.title' : 'Busqueda avanzada',
        'filter.type' : 'Tipo de propiedad',
        'filter.all-type' : 'Todos',
        'filter.price' : 'Rango de precio',
        'filter.bed' : 'Habitaciones',
        'filter.bath' : 'Baños',
        'filter.any' : 'Cualquier',
         'filter.label-comercial': 'Comercial',
        'filter.label-residential': 'Residencial',
        'filter.label-project': 'Proyecto',
        'filter.label-mix': 'Mixto',
        

        'hero.title': 'Alquiler de Apartamentos y Casas en Cartagena Corto y Largo Plazo',
        'hero.desc': 'Apartamentos y casas en alquiler en Cartagena para estancias cortas o largas. Propiedades seleccionadas con gestión profesional y atención personalizada.',
        'hero.btn': 'Explorar Propiedades en renta',

        
        'hero2.title': 'Venta de Apartamentos y Casas en Cartagena',
        'hero2.desc': 'Compra o vende propiedades en Cartagena con asesoría inmobiliaria profesional. Acompañamiento completo para propietarios e inversionistas.',
        'hero2.btn': 'Explorar Propiedades en Venta',

        'sale.title': 'Propiedades en venta disponibles en Cartagena',
        'sale.desc': 'Descubre apartamentos y casas en venta en Cartagena y encuentra la propiedad ideal para ti.',
        'sale.btn' : 'Ver propiedades en venta',

        'rent.title': 'Propiedades en renta disponibles en Cartagena',
        'rent.desc': 'Descubre apartamentos y casas en alquiler en Cartagena para estancias cortas o largas, con gestión profesional y atención local.',
        'rent.btn': 'Ver todas las propiedades en alquiler',

        'silver': 'Plan Plata',
        'gold': 'Plan Oro',
        'plans.price': 'Los precios pueden variar según la temporada.',
        'plans.title': 'Descubre los Mejores Planes Turísticos en Cartagena',
        'plans.desc' : 'Explora los mejores paquetes turísticos en Cartagena y disfruta de playas exclusivas con transporte marítimo, cócteles de bienvenida, almuerzo y acceso a instalaciones premium. Elige entre Éteka Beach, Bora Bora Club o Islabela para una experiencia única con música en vivo, actividades acuáticas y relajación total',

        'feat.transport': 'Transporte marítimo',
        'feat.cocktail': 'Cóctel de bienvenida',
        'feat.facilities': 'Uso de instalaciones',
        'feat.amenities': 'Comodidades',
        'feat.pool':'Piscina',
        'feat.lunch': 'Almuerzo',
        'feat.sunbed': 'Asoleadora o beachbed',
        'feat.champ': 'Copa de champaña',

        'exp.desc': 'Sumérgete en la escena culinaria local con nuestro servicio de reservas exclusivas. Nuestros expertos seleccionan cuidadosamente los mejores restaurantes y bares, adaptándolos a tus preferencias gastronómicas, presupuesto y estilo personal. Desde restaurantes de alta cocina hasta joyas culinarias locales ocultas, garantizamos una experiencia gastronómica inolvidable.',
        'exp.andres': 'Disfruta de la esencia vibrante y colorida de Andrés Cartagena, una extensión del paraíso gastronómico.',
        'exp.celele': 'Un acogedor restaurante que ofrece especialidades locales, con mariscos y bocadillos entre sus opciones destacadas.',
        'exp.unica': 'Vive una experiencia única que resalta la autenticidad y excelencia culinaria en cada plato.',
        'exp.cande': 'Un elegante espacio lleno de vegetación donde se sirve comida típica de la región, acompañado de espectáculos en vivo con frecuencia.',
        'exp.niku': 'Un restaurante que fusiona lo mejor de la cocina japonesa, peruana, latina, española y el arte del sushi.',
        'exp.juan': 'Un espacio relajado para disfrutar de tapas, mariscos y carnes, complementados con postres y una extensa selección de vinos.',
     
        'daily.desc': 'Transformamos tu día a día en una experiencia de lujo sin complicaciones. Nuestro equipo de asistentes especialistas se encarga de cada detalle, desde la coordinación de citas y gestiones complejas hasta la resolución de tareas cotidianas. Utilizamos tecnología de vanguardia y una red exclusiva de contactos para garantizar que cada solicitud se resuelva con precisión, discreción y elegancia.',

        'daily.hosp': 'Asistencia Diaria',
        'hops.desc': 'Transformamos tu rutina diaria en una experiencia de lujo, gestionando cada detalle con precisión y elegancia.',
        'daily.event' : 'Eventos Privados',
        'event.desc': 'Diseñamos y ejecutamos eventos exclusivos que reflejan tu estilo único, desde la concepción hasta la última nota.',
        'daily.get': 'Escapadas y Ocio',
        'get.desc': 'Creamos experiencias de viaje personalizadas que superan tus expectativas, combinando lujo, aventura y bienestar.',
        'daily.ticket':'Emisión de Entradas/Boletos',
        'ticket.desc': 'Acceso preferencial a los eventos más exclusivos, con reservaciones VIP y entradas difíciles de conseguir.',
     },
  } as const;

 