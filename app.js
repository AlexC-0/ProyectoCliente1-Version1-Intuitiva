const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const leadForm = document.querySelector(".lead-form");
const feedback = document.querySelector(".form-feedback");
const productCarousel = document.querySelector(".product-carousel");
let productSlides = Array.from(document.querySelectorAll(".product-slide"));
const detailTag = document.querySelector("[data-product-detail='tag']");
const detailTitle = document.querySelector("[data-product-detail='title']");
const detailText = document.querySelector("[data-product-detail='text']");
const detailList = document.querySelector("[data-product-detail='list']");
const detailPrice = document.querySelector("[data-product-detail='price']");
const productDrawer = document.querySelector(".product-drawer");
const drawerAddButton = document.querySelector("[data-drawer-add]");
const interestSelect = document.querySelector("select[name='interest']");
const languageButton = document.querySelector(".language-button");
const languageMenu = document.querySelector("#language-menu");
const currentLang = document.querySelector(".current-lang");

const translations = {
  es: {
    "nav.solutions": "Soluciones",
    "nav.products": "Productos",
    "nav.process": "Proceso",
    "nav.docs": "Documentacion",
    "nav.cta": "Consulta tecnica",
    "hero.eyebrow": "Baterias de alto voltaje para movilidad electrica exigente",
    "hero.title": "Sistemas industriales que aceleran la integracion electrica de OEMs y fabricantes.",
    "hero.text": "Packs modulares, arquitectura multipack y soporte tecnico para autobuses, marino, agricola, vehiculos comerciales, carga movil y ferrocarril.",
    "hero.primary": "Orientar mi proyecto",
    "hero.secondary": "Explorar productos",
    "metric.energy": "Energia por pack",
    "metric.arch": "Arquitecturas nominales",
    "metric.protection": "Proteccion industrial",
    "metric.multipack": "Gestion multipack",
    "path.application": "Tengo una aplicacion",
    "path.applicationText": "Encuentra el enfoque por sector.",
    "path.products": "Quiero ver productos",
    "path.productsText": "Imagen, resumen y detalle bajo demanda.",
    "path.docs": "Necesito datos tecnicos",
    "path.docsText": "Ficha, configuracion y requisitos.",
    "path.engineering": "Quiero hablar con ingenieria",
    "path.engineeringText": "Solicitud cualificada desde el inicio.",
    "apps.eyebrow": "Aplicaciones",
    "apps.title": "Una entrada clara para cada tipo de proyecto.",
    "apps.text": "La web guia primero por necesidad industrial, no por catalogo. Asi el visitante entiende rapido si la solucion encaja con su vehiculo, potencia, energia y fase de desarrollo.",
    "apps.busTitle": "Autobuses electricos e hidrogeno",
    "apps.busText": "Arquitecturas multi-rack para vehiculos urbanos, interurbanos y chasis de diferentes longitudes.",
    "apps.busCta": "Validar integracion",
    "apps.seaTitle": "Marino electrico e hibrido",
    "apps.seaText": "Sistemas paralelizados para ferries, embarcaciones de trabajo y unidades de potencia hibridas.",
    "apps.seaCta": "Estudiar caso marino",
    "apps.agrTitle": "Agricola e industrial movil",
    "apps.agrText": "Soluciones compactas para maquinaria con altas demandas de energia, potencia y durabilidad.",
    "apps.agrCta": "Definir requisitos",
    "apps.vclTitle": "Vehiculos comerciales ligeros",
    "apps.vclText": "Formato compatible con integracion automotriz y series cortas o medias de produccion.",
    "apps.vclCta": "Solicitar orientacion",
    "apps.chargeTitle": "Estaciones de carga moviles",
    "apps.chargeText": "Packs para infraestructura semiestacionaria, eventos temporales y apoyo energetico local.",
    "apps.chargeCta": "Dimensionar energia",
    "apps.railTitle": "Ferrocarril",
    "apps.railText": "Configuraciones multipack para aplicaciones ferroviarias con necesidades energeticas elevadas.",
    "apps.railCta": "Revisar arquitectura",
    "products.eyebrow": "Productos",
    "products.title": "Primero se mira, despues se profundiza.",
    "products.text": "La version intuitiva no abruma con tablas. Presenta cada solucion como una pieza clara, atractiva y accionable; las especificaciones aparecen solo cuando el usuario las pide.",
    "products.nmcTitle": "Pack compacto de alta densidad",
    "products.lfpTitle": "Seguridad, vida util y robustez",
    "products.bmsTitle": "Control multipack centralizado",
    "products.more": "Mostrar mas",
    "products.specs": "Ver especificaciones",
    "products.add": "Incluir en consulta",
    "process.eyebrow": "Proceso guiado",
    "process.title": "De la necesidad tecnica a una propuesta viable.",
    "process.oneTitle": "Recogida de requisitos",
    "process.oneText": "Aplicacion, energia, tension, restricciones mecanicas, plazos y volumen estimado.",
    "process.twoTitle": "Validacion de integracion",
    "process.twoText": "Revisamos envolvente, montaje, comunicacion, perfil de uso y condiciones termicas.",
    "process.threeTitle": "Configuracion recomendada",
    "process.threeText": "Se propone producto, arquitectura multipack, documentacion y nivel de personalizacion.",
    "process.fourTitle": "Oferta y soporte inicial",
    "process.fourText": "El equipo tecnico-comercial acompana la primera instalacion y puesta en marcha.",
    "docs.eyebrow": "Documentacion tecnica",
    "docs.title": "Ficha tecnica, arquitectura y requisitos sin formularios confusos.",
    "docs.text": "La descarga se plantea como una oportunidad de cualificacion: menos campos irrelevantes, mas contexto util para responder mejor al proyecto.",
    "docs.cta": "Solicitar documentacion",
    "contact.eyebrow": "Consulta tecnica",
    "contact.title": "Cuentanos el proyecto y lo orientamos desde el primer contacto.",
    "contact.text": "Este formulario sustituye el contacto generico por una solicitud cualificada. El objetivo es que ventas e ingenieria reciban informacion accionable desde el primer mensaje.",
    "contact.trustOne": "Series cortas y medias",
    "contact.trustTwo": "Movilidad no automovil",
    "form.name": "Nombre",
    "form.company": "Empresa",
    "form.email": "Correo profesional",
    "form.country": "Pais",
    "form.application": "Aplicacion principal",
    "form.option": "Selecciona una opcion",
    "form.stage": "Fase del proyecto",
    "form.stageOption": "Selecciona una fase",
    "form.interest": "Interes principal",
    "form.need": "Necesidad tecnica",
    "form.placeholder": "Energia requerida, tension, plazos, volumen estimado o restricciones de integracion.",
    "form.privacy": "Acepto el tratamiento de mis datos para responder a esta solicitud.",
    "form.submit": "Enviar consulta",
    "form.mailText": "Tambien puedes escribir directamente por correo.",
    "form.mailCta": "Abrir Gmail",
    "option.bus": "Autobuses",
    "option.sea": "Marino",
    "option.agr": "Agricola",
    "option.vcl": "Vehiculos comerciales ligeros",
    "option.charge": "Estaciones de carga moviles",
    "option.rail": "Ferrocarril",
    "option.unknown": "No lo tengo cerrado",
    "option.explore": "Exploracion inicial",
    "option.design": "Diseno de vehiculo",
    "option.validation": "Validacion tecnica",
    "option.purchase": "Compra o industrializacion",
    "option.nmc": "Serie NMC",
    "option.lfp": "Serie LFP",
    "option.bms": "Supermaster BMS",
    "option.compare": "Comparar soluciones",
    "option.docs": "Documentacion tecnica",
    "footer.text": "Sistemas de baterias de alto voltaje para aplicaciones industriales de movilidad electrica.",
    "footer.mailTitle": "Contacto directo",
    "footer.apps": "Aplicaciones",
    "footer.products": "Productos",
    "footer.contact": "Contacto",
    "feedback.invalid": "Revisa los campos obligatorios para poder enviar la consulta.",
    "feedback.invalidValue": "El formulario contiene valores no contemplados. Revisa los campos marcados.",
    "feedback.sent": "Consulta preparada. En una version final se conectaria con el CRM o correo comercial.",
    "feedback.added": "Producto incluido en la consulta tecnica."
  },
  en: {
    "nav.solutions": "Solutions",
    "nav.products": "Products",
    "nav.process": "Process",
    "nav.docs": "Documentation",
    "nav.cta": "Technical enquiry",
    "hero.eyebrow": "High-voltage batteries for demanding electric mobility",
    "hero.title": "Industrial systems that speed up electric integration for OEMs and manufacturers.",
    "hero.text": "Modular packs, multipack architecture and technical support for bus, marine, agricultural, light commercial, mobile charging and rail applications.",
    "hero.primary": "Guide my project",
    "hero.secondary": "Explore products",
    "metric.energy": "Energy per pack",
    "metric.arch": "Nominal architectures",
    "metric.protection": "Industrial protection",
    "metric.multipack": "Multipack management",
    "path.application": "I have an application",
    "path.applicationText": "Find the sector approach.",
    "path.products": "I want to see products",
    "path.productsText": "Image, summary and detail on demand.",
    "path.docs": "I need technical data",
    "path.docsText": "Datasheet, configuration and requirements.",
    "path.engineering": "I want to speak with engineering",
    "path.engineeringText": "Qualified request from the first step.",
    "apps.eyebrow": "Applications",
    "apps.title": "A clear entry point for every project type.",
    "apps.text": "The site guides by industrial need before catalog browsing. Visitors quickly understand whether the solution fits their vehicle, power, energy and project stage.",
    "apps.busTitle": "Electric and hydrogen buses",
    "apps.busText": "Multi-rack architectures for urban, interurban and different chassis lengths.",
    "apps.busCta": "Validate integration",
    "apps.seaTitle": "Electric and hybrid marine",
    "apps.seaText": "Parallel systems for ferries, workboats and hybrid power units.",
    "apps.seaCta": "Review marine case",
    "apps.agrTitle": "Agricultural and mobile industrial",
    "apps.agrText": "Compact solutions for machinery with high energy, power and durability demands.",
    "apps.agrCta": "Define requirements",
    "apps.vclTitle": "Light commercial vehicles",
    "apps.vclText": "Format compatible with vehicle integration and short or medium production runs.",
    "apps.vclCta": "Request guidance",
    "apps.chargeTitle": "Mobile charging stations",
    "apps.chargeText": "Packs for semi-stationary infrastructure, temporary events and local energy support.",
    "apps.chargeCta": "Size energy",
    "apps.railTitle": "Rail",
    "apps.railText": "Multipack configurations for rail applications with high energy requirements.",
    "apps.railCta": "Review architecture",
    "products.eyebrow": "Products",
    "products.title": "Look first, go deeper second.",
    "products.text": "The intuitive version avoids overwhelming tables. It presents every solution as a clear, attractive and actionable item; specifications appear only when requested.",
    "products.nmcTitle": "Compact high-density pack",
    "products.lfpTitle": "Safety, lifetime and robustness",
    "products.bmsTitle": "Centralized multipack control",
    "products.more": "Show more",
    "products.specs": "View specifications",
    "products.add": "Include in enquiry",
    "process.eyebrow": "Guided process",
    "process.title": "From technical need to viable proposal.",
    "process.oneTitle": "Requirement intake",
    "process.oneText": "Application, energy, voltage, mechanical constraints, timing and estimated volume.",
    "process.twoTitle": "Integration validation",
    "process.twoText": "We review envelope, mounting, communication, usage profile and thermal conditions.",
    "process.threeTitle": "Recommended configuration",
    "process.threeText": "Product, multipack architecture, documentation and customization level are proposed.",
    "process.fourTitle": "Offer and initial support",
    "process.fourText": "The technical-commercial team supports the first installation and commissioning.",
    "docs.eyebrow": "Technical documentation",
    "docs.title": "Datasheet, architecture and requirements without confusing forms.",
    "docs.text": "The download becomes a qualification opportunity: fewer irrelevant fields and more useful context to answer the project properly.",
    "docs.cta": "Request documentation",
    "contact.eyebrow": "Technical enquiry",
    "contact.title": "Tell us about the project and we guide it from the first contact.",
    "contact.text": "This form replaces generic contact with a qualified request. The goal is for sales and engineering to receive actionable information from the first message.",
    "contact.trustOne": "Short and medium runs",
    "contact.trustTwo": "Non-automotive mobility",
    "form.name": "Name",
    "form.company": "Company",
    "form.email": "Professional email",
    "form.country": "Country",
    "form.application": "Main application",
    "form.option": "Select an option",
    "form.stage": "Project stage",
    "form.stageOption": "Select a stage",
    "form.interest": "Main interest",
    "form.need": "Technical need",
    "form.placeholder": "Required energy, voltage, timing, estimated volume or integration constraints.",
    "form.privacy": "I accept the processing of my data to answer this request.",
    "form.submit": "Send enquiry",
    "form.mailText": "You can also write directly by email.",
    "form.mailCta": "Open Gmail",
    "option.bus": "Buses",
    "option.sea": "Marine",
    "option.agr": "Agricultural",
    "option.vcl": "Light commercial vehicles",
    "option.charge": "Mobile charging stations",
    "option.rail": "Rail",
    "option.unknown": "Not decided yet",
    "option.explore": "Initial exploration",
    "option.design": "Vehicle design",
    "option.validation": "Technical validation",
    "option.purchase": "Purchase or industrialization",
    "option.nmc": "NMC Series",
    "option.lfp": "LFP Series",
    "option.bms": "Supermaster BMS",
    "option.compare": "Compare solutions",
    "option.docs": "Technical documentation",
    "footer.text": "High-voltage battery systems for industrial electric mobility applications.",
    "footer.mailTitle": "Direct contact",
    "footer.apps": "Applications",
    "footer.products": "Products",
    "footer.contact": "Contact",
    "feedback.invalid": "Review the required fields before sending the enquiry.",
    "feedback.invalidValue": "The form contains unsupported values. Review the marked fields.",
    "feedback.sent": "Enquiry prepared. In a final version it would connect with CRM or commercial email.",
    "feedback.added": "Product included in the technical enquiry."
  },
  eu: {
    "nav.solutions": "Soluzioak",
    "nav.products": "Produktuak",
    "nav.process": "Prozesua",
    "nav.docs": "Dokumentazioa",
    "nav.cta": "Kontsulta teknikoa",
    "hero.eyebrow": "Tentsio handiko bateriak mugikortasun elektriko zorrotzerako",
    "hero.title": "OEM eta fabrikatzaileentzako integrazio elektrikoa azkartzen duten sistema industrialak.",
    "hero.text": "Pack modularrak, multipack arkitektura eta laguntza teknikoa autobus, itsas, nekazaritza, ibilgailu komertzial, karga mugikor eta tren aplikazioetarako.",
    "hero.primary": "Nire proiektua bideratu",
    "hero.secondary": "Produktuak ikusi",
    "metric.energy": "Energia pack bakoitzeko",
    "metric.arch": "Arkitektura nominalak",
    "metric.protection": "Babes industriala",
    "metric.multipack": "Multipack kudeaketa",
    "path.application": "Aplikazio bat dut",
    "path.applicationText": "Aurkitu sektorearen ikuspegia.",
    "path.products": "Produktuak ikusi nahi ditut",
    "path.productsText": "Irudia, laburpena eta xehetasuna eskaeran.",
    "path.docs": "Datu teknikoak behar ditut",
    "path.docsText": "Fitxa, konfigurazioa eta baldintzak.",
    "path.engineering": "Ingeniaritzarekin hitz egin nahi dut",
    "path.engineeringText": "Hasieratik sailkatutako eskaera.",
    "apps.eyebrow": "Aplikazioak",
    "apps.title": "Proiektu mota bakoitzerako sarrera argia.",
    "apps.text": "Webak lehenik premia industriala gidatzen du, ez katalogoa. Bisitariak azkar ulertzen du soluzioa ibilgailuarekin, potentziarekin, energiarekin eta fasearekin bat datorren.",
    "apps.busTitle": "Autobus elektrikoak eta hidrogenokoak",
    "apps.busText": "Multi-rack arkitekturak hiri, hiriarteko eta luzera ezberdinetako xasiserako.",
    "apps.busCta": "Integrazioa balioztatu",
    "apps.seaTitle": "Itsas elektrikoa eta hibridoa",
    "apps.seaText": "Sistema paralelizatuak ferry, lan ontzi eta potentzia unitate hibridoetarako.",
    "apps.seaCta": "Itsas kasua aztertu",
    "apps.agrTitle": "Nekazaritza eta industrial mugikorra",
    "apps.agrText": "Energia, potentzia eta iraunkortasun handia behar duten makinentzako soluzio trinkoak.",
    "apps.agrCta": "Baldintzak definitu",
    "apps.vclTitle": "Ibilgailu komertzial arinak",
    "apps.vclText": "Ibilgailuen integrazioarekin eta serie labur edo ertainekin bateragarria den formatua.",
    "apps.vclCta": "Orientazioa eskatu",
    "apps.chargeTitle": "Karga estazio mugikorrak",
    "apps.chargeText": "Azpiegitura erdi-finkoetarako, aldi baterako ekitaldietarako eta tokiko energia laguntzarako packak.",
    "apps.chargeCta": "Energia dimentsionatu",
    "apps.railTitle": "Trena",
    "apps.railText": "Energia premia handiko tren aplikazioetarako multipack konfigurazioak.",
    "apps.railCta": "Arkitektura berrikusi",
    "products.eyebrow": "Produktuak",
    "products.title": "Lehenik ikusi, gero sakondu.",
    "products.text": "Bertsio intuitiboak ez du taula astunekin itotzen. Soluzio bakoitza pieza argi, erakargarri eta erabilgarri gisa aurkezten du; zehaztapenak erabiltzaileak eskatzean agertzen dira.",
    "products.nmcTitle": "Dentsitate handiko pack trinkoa",
    "products.lfpTitle": "Segurtasuna, bizitza erabilgarria eta sendotasuna",
    "products.bmsTitle": "Multipack kontrol zentralizatua",
    "products.more": "Gehiago erakutsi",
    "products.specs": "Zehaztapenak ikusi",
    "products.add": "Kontsultan gehitu",
    "process.eyebrow": "Prozesu gidatua",
    "process.title": "Premia teknikotik proposamen bideragarrira.",
    "process.oneTitle": "Baldintzak jasotzea",
    "process.oneText": "Aplikazioa, energia, tentsioa, muga mekanikoak, epeak eta aurreikusitako bolumena.",
    "process.twoTitle": "Integrazioa balioztatzea",
    "process.twoText": "Bolumena, muntaketa, komunikazioa, erabilera profila eta baldintza termikoak berrikusten ditugu.",
    "process.threeTitle": "Gomendatutako konfigurazioa",
    "process.threeText": "Produktua, multipack arkitektura, dokumentazioa eta pertsonalizazio maila proposatzen dira.",
    "process.fourTitle": "Eskaintza eta hasierako laguntza",
    "process.fourText": "Talde tekniko-komertzialak lehen instalazioa eta martxan jartzea laguntzen ditu.",
    "docs.eyebrow": "Dokumentazio teknikoa",
    "docs.title": "Fitxa teknikoa, arkitektura eta baldintzak formulario nahasirik gabe.",
    "docs.text": "Deskarga kalifikazio aukera bihurtzen da: eremu desegoki gutxiago eta testuinguru erabilgarri gehiago proiektua hobeto erantzuteko.",
    "docs.cta": "Dokumentazioa eskatu",
    "contact.eyebrow": "Kontsulta teknikoa",
    "contact.title": "Kontatu proiektua eta lehen kontaktutik bideratuko dugu.",
    "contact.text": "Formulario honek kontaktu generikoa eskaera sailkatu batekin ordezkatzen du. Helburua salmentek eta ingeniaritzak lehen mezutik informazio erabilgarria jasotzea da.",
    "contact.trustOne": "Serie labur eta ertainak",
    "contact.trustTwo": "Automobila ez den mugikortasuna",
    "form.name": "Izena",
    "form.company": "Enpresa",
    "form.email": "Laneko posta",
    "form.country": "Herrialdea",
    "form.application": "Aplikazio nagusia",
    "form.option": "Aukeratu aukera bat",
    "form.stage": "Proiektuaren fasea",
    "form.stageOption": "Aukeratu fase bat",
    "form.interest": "Interes nagusia",
    "form.need": "Premia teknikoa",
    "form.placeholder": "Behar den energia, tentsioa, epeak, aurreikusitako bolumena edo integrazio mugak.",
    "form.privacy": "Nire datuen tratamendua onartzen dut eskaera honi erantzuteko.",
    "form.submit": "Bidali kontsulta",
    "form.mailText": "Zuzenean posta elektronikoz ere idatz dezakezu.",
    "form.mailCta": "Ireki Gmail",
    "option.bus": "Autobusak",
    "option.sea": "Itsas aplikazioak",
    "option.agr": "Nekazaritza",
    "option.vcl": "Ibilgailu komertzial arinak",
    "option.charge": "Karga estazio mugikorrak",
    "option.rail": "Trena",
    "option.unknown": "Oraindik ez dut erabaki",
    "option.explore": "Hasierako esplorazioa",
    "option.design": "Ibilgailuaren diseinua",
    "option.validation": "Balioztapen teknikoa",
    "option.purchase": "Erosketa edo industrializazioa",
    "option.nmc": "NMC Seriea",
    "option.lfp": "LFP Seriea",
    "option.bms": "Supermaster BMS",
    "option.compare": "Soluzioak alderatu",
    "option.docs": "Dokumentazio teknikoa",
    "footer.text": "Tentsio handiko bateria sistemak mugikortasun elektriko industrialerako.",
    "footer.mailTitle": "Kontaktu zuzena",
    "footer.apps": "Aplikazioak",
    "footer.products": "Produktuak",
    "footer.contact": "Kontaktua",
    "feedback.invalid": "Berrikusi derrigorrezko eremuak kontsulta bidali aurretik.",
    "feedback.invalidValue": "Formularioak onartu gabeko balioak ditu. Berrikusi markatutako eremuak.",
    "feedback.sent": "Kontsulta prestatuta. Azken bertsioan CRM edo posta komertzialarekin konektatuko litzateke.",
    "feedback.added": "Produktua kontsulta teknikoan gehitu da."
  },
  fr: {
    "nav.solutions": "Solutions",
    "nav.products": "Produits",
    "nav.process": "Processus",
    "nav.docs": "Documentation",
    "nav.cta": "Demande technique",
    "hero.eyebrow": "Batteries haute tension pour mobilite electrique exigeante",
    "hero.title": "Systemes industriels qui accelerent l'integration electrique des OEM et fabricants.",
    "hero.text": "Packs modulaires, architecture multipack et support technique pour bus, marine, agricole, vehicules utilitaires, recharge mobile et ferroviaire.",
    "hero.primary": "Orienter mon projet",
    "hero.secondary": "Explorer les produits",
    "metric.energy": "Energie par pack",
    "metric.arch": "Architectures nominales",
    "metric.protection": "Protection industrielle",
    "metric.multipack": "Gestion multipack",
    "path.application": "J'ai une application",
    "path.applicationText": "Trouver l'approche par secteur.",
    "path.products": "Je veux voir les produits",
    "path.productsText": "Image, resume et detail a la demande.",
    "path.docs": "J'ai besoin de donnees techniques",
    "path.docsText": "Fiche, configuration et exigences.",
    "path.engineering": "Je veux parler a l'ingenierie",
    "path.engineeringText": "Demande qualifiee des le depart.",
    "apps.eyebrow": "Applications",
    "apps.title": "Une entree claire pour chaque type de projet.",
    "apps.text": "Le site guide d'abord par besoin industriel, pas par catalogue. Le visiteur comprend rapidement si la solution convient au vehicule, a la puissance, a l'energie et a la phase du projet.",
    "apps.busTitle": "Bus electriques et hydrogene",
    "apps.busText": "Architectures multi-rack pour vehicules urbains, interurbains et chassis de differentes longueurs.",
    "apps.busCta": "Valider l'integration",
    "apps.seaTitle": "Marine electrique et hybride",
    "apps.seaText": "Systemes parallelises pour ferries, bateaux de travail et unites de puissance hybrides.",
    "apps.seaCta": "Etudier le cas marine",
    "apps.agrTitle": "Agricole et industriel mobile",
    "apps.agrText": "Solutions compactes pour machines avec fortes exigences d'energie, de puissance et de durabilite.",
    "apps.agrCta": "Definir les exigences",
    "apps.vclTitle": "Vehicules utilitaires legers",
    "apps.vclText": "Format compatible avec l'integration vehicule et les petites ou moyennes series.",
    "apps.vclCta": "Demander une orientation",
    "apps.chargeTitle": "Stations de recharge mobiles",
    "apps.chargeText": "Packs pour infrastructure semi-stationnaire, evenements temporaires et support energetique local.",
    "apps.chargeCta": "Dimensionner l'energie",
    "apps.railTitle": "Ferroviaire",
    "apps.railText": "Configurations multipack pour applications ferroviaires a besoins energetiques eleves.",
    "apps.railCta": "Revoir l'architecture",
    "products.eyebrow": "Produits",
    "products.title": "On regarde d'abord, on approfondit ensuite.",
    "products.text": "La version intuitive evite les tableaux lourds. Chaque solution apparait comme un element clair, attractif et actionnable; les specifications n'apparaissent que sur demande.",
    "products.nmcTitle": "Pack compact haute densite",
    "products.lfpTitle": "Securite, duree de vie et robustesse",
    "products.bmsTitle": "Controle multipack centralise",
    "products.more": "Voir plus",
    "products.specs": "Voir specifications",
    "products.add": "Inclure dans la demande",
    "process.eyebrow": "Processus guide",
    "process.title": "Du besoin technique a une proposition viable.",
    "process.oneTitle": "Collecte des exigences",
    "process.oneText": "Application, energie, tension, contraintes mecaniques, delais et volume estime.",
    "process.twoTitle": "Validation de l'integration",
    "process.twoText": "Nous analysons enveloppe, montage, communication, profil d'usage et conditions thermiques.",
    "process.threeTitle": "Configuration recommandee",
    "process.threeText": "Produit, architecture multipack, documentation et niveau de personnalisation sont proposes.",
    "process.fourTitle": "Offre et support initial",
    "process.fourText": "L'equipe technique et commerciale accompagne la premiere installation et mise en service.",
    "docs.eyebrow": "Documentation technique",
    "docs.title": "Fiche technique, architecture et exigences sans formulaires confus.",
    "docs.text": "Le telechargement devient une opportunite de qualification: moins de champs inutiles et plus de contexte utile pour repondre au projet.",
    "docs.cta": "Demander documentation",
    "contact.eyebrow": "Demande technique",
    "contact.title": "Parlez-nous du projet et nous l'orientons des le premier contact.",
    "contact.text": "Ce formulaire remplace le contact generique par une demande qualifiee. L'objectif est que ventes et ingenierie recoivent une information exploitable des le premier message.",
    "contact.trustOne": "Petites et moyennes series",
    "contact.trustTwo": "Mobilite non automobile",
    "form.name": "Nom",
    "form.company": "Entreprise",
    "form.email": "Email professionnel",
    "form.country": "Pays",
    "form.application": "Application principale",
    "form.option": "Selectionner une option",
    "form.stage": "Phase du projet",
    "form.stageOption": "Selectionner une phase",
    "form.interest": "Interet principal",
    "form.need": "Besoin technique",
    "form.placeholder": "Energie requise, tension, delais, volume estime ou contraintes d'integration.",
    "form.privacy": "J'accepte le traitement de mes donnees pour repondre a cette demande.",
    "form.submit": "Envoyer la demande",
    "form.mailText": "Vous pouvez aussi ecrire directement par email.",
    "form.mailCta": "Ouvrir Gmail",
    "option.bus": "Bus",
    "option.sea": "Marine",
    "option.agr": "Agricole",
    "option.vcl": "Vehicules utilitaires legers",
    "option.charge": "Stations de recharge mobiles",
    "option.rail": "Ferroviaire",
    "option.unknown": "Pas encore defini",
    "option.explore": "Exploration initiale",
    "option.design": "Conception vehicule",
    "option.validation": "Validation technique",
    "option.purchase": "Achat ou industrialisation",
    "option.nmc": "Serie NMC",
    "option.lfp": "Serie LFP",
    "option.bms": "Supermaster BMS",
    "option.compare": "Comparer les solutions",
    "option.docs": "Documentation technique",
    "footer.text": "Systemes de batteries haute tension pour applications industrielles de mobilite electrique.",
    "footer.mailTitle": "Contact direct",
    "footer.apps": "Applications",
    "footer.products": "Produits",
    "footer.contact": "Contact",
    "feedback.invalid": "Verifiez les champs obligatoires avant d'envoyer la demande.",
    "feedback.invalidValue": "Le formulaire contient des valeurs non prevues. Verifiez les champs marques.",
    "feedback.sent": "Demande preparee. Dans une version finale, elle serait connectee au CRM ou a l'email commercial.",
    "feedback.added": "Produit inclus dans la demande technique."
  }
};

const productCopy = {
  es: {
    nmc: {
      tag: "Serie NMC",
      title: "Pack compacto para integraciones con poco espacio",
      summary: "Solucion de alta densidad para aplicaciones que necesitan energia en formato slim, montaje versatil y refrigeracion liquida.",
      specs: ["35 kWh por pack", "333 V o 666 V nominales", "Hasta 650 kWh en paralelo"],
      price: "Precio bajo proyecto"
    },
    lfp: {
      tag: "Serie LFP",
      title: "Pack robusto para ciclos largos y seguridad",
      summary: "Opcion orientada a vida util, estabilidad y sostenibilidad en vehiculos pesados y aplicaciones exigentes.",
      specs: ["56 kWh por pack", "335 V nominales", "Hasta 900 kWh escalables"],
      price: "Precio bajo proyecto"
    },
    bms: {
      tag: "Supermaster BMS",
      title: "Control central para sistemas multipack",
      summary: "Modulo de gestion que coordina comunicacion, seguridad y rendimiento cuando el proyecto necesita varios packs en paralelo.",
      specs: ["Gestion de 2 a 20 packs", "CANbus 2.0b - SAE J1939", "Rango operativo -40 a 105 C"],
      price: "Precio bajo proyecto"
    }
  },
  en: {
    nmc: {
      tag: "NMC Series",
      title: "Compact pack for space-limited integrations",
      summary: "High-density solution for applications that need energy in a slim format, versatile mounting and liquid cooling.",
      specs: ["35 kWh per pack", "333 V or 666 V nominal", "Up to 650 kWh in parallel"],
      price: "Project-based price"
    },
    lfp: {
      tag: "LFP Series",
      title: "Robust pack for long cycles and safety",
      summary: "Option focused on lifetime, stability and sustainability in heavy vehicles and demanding applications.",
      specs: ["56 kWh per pack", "335 V nominal", "Up to 900 kWh scalable"],
      price: "Project-based price"
    },
    bms: {
      tag: "Supermaster BMS",
      title: "Central control for multipack systems",
      summary: "Management module coordinating communication, safety and performance when a project needs several packs in parallel.",
      specs: ["2 to 20 pack management", "CANbus 2.0b - SAE J1939", "Operating range -40 to 105 C"],
      price: "Project-based price"
    }
  },
  eu: {
    nmc: {
      tag: "NMC Seriea",
      title: "Espazio gutxiko integrazioetarako pack trinkoa",
      summary: "Dentsitate handiko soluzioa, formatu slim, muntaketa moldakorra eta hozte likidoa behar duten aplikazioetarako.",
      specs: ["35 kWh pack bakoitzeko", "333 V edo 666 V nominal", "650 kWh arte paraleloan"],
      price: "Prezioa proiektuaren arabera"
    },
    lfp: {
      tag: "LFP Seriea",
      title: "Ziklo luzeetarako eta segurtasunerako pack sendoa",
      summary: "Bizitza erabilgarria, egonkortasuna eta jasangarritasuna lehenesten dituen aukera, ibilgailu astun eta aplikazio zorrotzetarako.",
      specs: ["56 kWh pack bakoitzeko", "335 V nominal", "900 kWh arte eskalagarria"],
      price: "Prezioa proiektuaren arabera"
    },
    bms: {
      tag: "Supermaster BMS",
      title: "Multipack sistemetarako kontrol zentralizatua",
      summary: "Komunikazioa, segurtasuna eta errendimendua koordinatzen dituen kudeaketa modulua, pack paraleloak behar direnean.",
      specs: ["2 eta 20 pack artean", "CANbus 2.0b - SAE J1939", "-40 eta 105 C arteko lan tartea"],
      price: "Prezioa proiektuaren arabera"
    }
  },
  fr: {
    nmc: {
      tag: "Serie NMC",
      title: "Pack compact pour integrations avec peu d'espace",
      summary: "Solution haute densite pour applications ayant besoin d'energie en format slim, montage polyvalent et refroidissement liquide.",
      specs: ["35 kWh par pack", "333 V ou 666 V nominal", "Jusqu'a 650 kWh en parallele"],
      price: "Prix selon projet"
    },
    lfp: {
      tag: "Serie LFP",
      title: "Pack robuste pour longs cycles et securite",
      summary: "Option orientee duree de vie, stabilite et durabilite pour vehicules lourds et applications exigeantes.",
      specs: ["56 kWh par pack", "335 V nominal", "Jusqu'a 900 kWh evolutifs"],
      price: "Prix selon projet"
    },
    bms: {
      tag: "Supermaster BMS",
      title: "Controle central pour systemes multipack",
      summary: "Module de gestion qui coordonne communication, securite et performance quand le projet demande plusieurs packs en parallele.",
      specs: ["Gestion de 2 a 20 packs", "CANbus 2.0b - SAE J1939", "Plage -40 a 105 C"],
      price: "Prix selon projet"
    }
  }
};

let selectedLanguage = "es";
let selectedProduct = null;
let activeProduct = "nmc";

function setupInfiniteCarousel() {
  if (!productCarousel || productCarousel.dataset.loopReady === "true") return;

  productSlides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    clone.dataset.clone = "true";
    productCarousel.appendChild(clone);
  });

  productCarousel.dataset.loopReady = "true";
  productSlides = Array.from(document.querySelectorAll(".product-slide"));
}

function getText(key) {
  return translations[selectedLanguage][key] || translations.es[key] || "";
}

const formRules = {
  fields: new Set(["name", "company", "email", "country", "application", "stage", "interest", "message", "privacy"]),
  application: new Set(["bus", "sea", "agr", "vcl", "charge", "rail", "unknown"]),
  stage: new Set(["explore", "design", "validation", "purchase"]),
  interest: new Set(["nmc", "lfp", "bms", "compare", "docs"]),
  privacy: new Set(["accepted"]),
  name: {
    min: 2,
    max: 80,
    pattern: /^[\p{L}\p{M} .'-]+$/u
  },
  company: {
    min: 2,
    max: 120,
    pattern: /^[\p{L}\p{M}0-9 .,&()/-]+$/u
  },
  country: {
    min: 0,
    max: 80,
    pattern: /^[\p{L}\p{M} .'-]*$/u
  },
  message: {
    min: 0,
    max: 1200,
    pattern: /^[^<>{}[\]`]*$/
  }
};

function isValidLength(value, rule) {
  const length = value.trim().length;
  return length >= rule.min && length <= rule.max;
}

function validateTextField(element, rule) {
  const value = element.value.trim();
  if (!isValidLength(value, rule)) return false;
  return rule.pattern.test(value);
}

function isEditableControl(element) {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
}

function validateLeadForm(form) {
  let firstInvalid = null;
  const controls = Array.from(form.elements).filter(isEditableControl);

  controls.forEach((element) => element.setCustomValidity(""));

  const unexpected = controls.find((element) => element.name && !formRules.fields.has(element.name));
  if (unexpected) {
    unexpected.setCustomValidity(getText("feedback.invalidValue"));
    return { valid: false, firstInvalid: unexpected };
  }

  const data = new FormData(form);
  for (const key of data.keys()) {
    if (!formRules.fields.has(key)) return { valid: false, firstInvalid: null };
  }

  const name = form.elements.name;
  const company = form.elements.company;
  const email = form.elements.email;
  const country = form.elements.country;
  const application = form.elements.application;
  const stage = form.elements.stage;
  const interest = form.elements.interest;
  const message = form.elements.message;
  const privacy = form.elements.privacy;

  const checks = [
    [name, validateTextField(name, formRules.name)],
    [company, validateTextField(company, formRules.company)],
    [email, email.value.trim().length <= 160 && email.validity.valid],
    [country, validateTextField(country, formRules.country)],
    [application, formRules.application.has(application.value)],
    [stage, formRules.stage.has(stage.value)],
    [interest, formRules.interest.has(interest.value)],
    [message, validateTextField(message, formRules.message)],
    [privacy, privacy.checked && formRules.privacy.has(privacy.value)]
  ];

  checks.forEach(([element, valid]) => {
    if (!valid) {
      element.setCustomValidity(getText("feedback.invalidValue"));
      if (!firstInvalid) firstInvalid = element;
    }
  });

  return { valid: !firstInvalid, firstInvalid };
}

function setActiveProduct(productKey, shouldCenter = true) {
  activeProduct = productKey || "nmc";

  productSlides.forEach((slide) => {
    const isActive = slide.dataset.product === activeProduct;
    slide.classList.toggle("is-active", isActive);
  });
}

function showProductDrawer(productKey) {
  if (!detailTag || !detailTitle || !detailText || !detailList || !productDrawer || !detailPrice) return;
  if (!productCopy[selectedLanguage][productKey]) return;

  selectedProduct = productKey;
  setActiveProduct(productKey);

  const copy = productCopy[selectedLanguage][productKey];
  detailTag.textContent = copy.tag;
  detailTitle.textContent = copy.title;
  detailText.textContent = copy.summary;
  detailPrice.textContent = copy.price;
  detailList.replaceChildren();

  copy.specs.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    detailList.appendChild(li);
  });

  productDrawer.hidden = false;
}

function resetDetail() {
  if (!productDrawer) return;
  productDrawer.hidden = true;
}

function applyLanguage(lang) {
  selectedLanguage = translations[lang] ? lang : "es";
  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getText(element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getText(element.dataset.i18nPlaceholder);
    if (value) element.setAttribute("placeholder", value);
  });

  if (currentLang) currentLang.textContent = selectedLanguage.toUpperCase();
  if (selectedProduct && productDrawer && !productDrawer.hidden) showProductDrawer(selectedProduct);
}

function startCarousel() {
  productCarousel?.classList.remove("is-paused");
}

function stopCarousel() {
  productCarousel?.classList.add("is-paused");
}

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (productCarousel) {
  productCarousel.addEventListener("mouseover", (event) => {
    if (!(event.target instanceof Element)) return;
    const slide = event.target.closest(".product-slide");
    if (!slide) return;
    stopCarousel();
    setActiveProduct(slide.dataset.product);
  });

  productCarousel.addEventListener("mouseleave", () => window.setTimeout(startCarousel, 450));

  productCarousel.addEventListener("focusin", (event) => {
    if (!(event.target instanceof Element)) return;
    const slide = event.target.closest(".product-slide");
    if (!slide) return;
    stopCarousel();
    setActiveProduct(slide.dataset.product);
  });

  productCarousel.addEventListener("focusout", () => window.setTimeout(startCarousel, 450));

  productCarousel.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest("[data-action]");
    if (!button) return;

    const product = button.dataset.product;
    const action = button.dataset.action;

    if (action === "add" && interestSelect) {
      interestSelect.value = product;
      if (feedback) feedback.textContent = getText("feedback.added");
      document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    showProductDrawer(product);
  });
}

if (drawerAddButton) {
  drawerAddButton.addEventListener("click", () => {
    if (!selectedProduct || !interestSelect) return;
    interestSelect.value = selectedProduct;
    if (feedback) feedback.textContent = getText("feedback.added");
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (languageButton && languageMenu) {
  languageButton.addEventListener("click", () => {
    const isOpen = languageMenu.classList.toggle("is-open");
    languageButton.setAttribute("aria-expanded", String(isOpen));
  });

  languageMenu.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    applyLanguage(target.dataset.lang);
    languageMenu.classList.remove("is-open");
    languageButton.setAttribute("aria-expanded", "false");
  });
}

if (leadForm && feedback) {
  leadForm.addEventListener("input", (event) => {
    if (isEditableControl(event.target)) {
      event.target.setCustomValidity("");
    }
  });

  leadForm.addEventListener("change", (event) => {
    if (isEditableControl(event.target)) {
      event.target.setCustomValidity("");
    }
  });

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = validateLeadForm(leadForm);

    if (!result.valid || !leadForm.checkValidity()) {
      feedback.textContent = result.valid ? getText("feedback.invalid") : getText("feedback.invalidValue");
      result.firstInvalid?.focus();
      leadForm.reportValidity();
      return;
    }

    feedback.textContent = getText("feedback.sent");
    leadForm.reset();
  });
}

setupInfiniteCarousel();
applyLanguage("es");
setActiveProduct("nmc", false);
startCarousel();
