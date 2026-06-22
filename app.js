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
const guideButton = document.querySelector("[data-guide-submit]");
const guideFeedback = document.querySelector(".guide-feedback");
const guideApplication = document.querySelector("#guide-application");
const guideStage = document.querySelector("#guide-stage");
const guideInterest = document.querySelector("#guide-interest");
const carouselButtons = Array.from(document.querySelectorAll("[data-carousel]"));
const scrollTopButton = document.querySelector(".scroll-top");
const processTrigger = document.querySelector(".process-trigger");
const processPanel = document.querySelector("#proceso");
const processClose = document.querySelector(".process-close");
const processLinks = Array.from(document.querySelectorAll("a[href='#proceso']"));
const productOrder = ["nmc", "lfp", "bms"];

const translations = {
  es: {
    "nav.solutions": "Soluciones",
    "nav.products": "Productos",
    "nav.process": "Proceso",
    "nav.docs": "Documentacion",
    "nav.cta": "Consulta tecnica",
    "nav.openMenu": "Abrir menu",
    "nav.top": "Volver al inicio",
    "lang.select": "Seleccionar idioma",
    "lang.es": "ES Espanol",
    "lang.en": "EN English",
    "lang.eu": "EU Euskara",
    "lang.fr": "FR Francais",
    "hero.eyebrow": "Baterias de alto voltaje para movilidad electrica exigente",
    "hero.title": "Sistemas HV claros para integrar sin rodeos.",
    "hero.text": "Packs modulares, control multipack y soporte tecnico para aplicaciones industriales de movilidad electrica.",
    "hero.primary": "Orientar mi proyecto",
    "hero.secondary": "Explorar productos",
    "metric.energy": "Energia por pack",
    "metric.arch": "Arquitecturas nominales",
    "metric.protection": "Proteccion industrial",
    "metric.multipack": "Gestion multipack",
    "guide.eyebrow": "Ruta guiada",
    "guide.title": "Tres decisiones para llegar al siguiente paso.",
    "guide.text": "Elige aplicacion, fase e interes. La web prepara la consulta y evita pasos innecesarios.",
    "guide.cta": "Preparar consulta",
    "guide.empty": "Selecciona al menos una opcion para preparar la consulta.",
    "guide.done": "Consulta orientada. Hemos trasladado tus opciones al formulario.",
    "apps.eyebrow": "Aplicaciones",
    "apps.title": "Una entrada clara para cada tipo de proyecto.",
    "apps.text": "Primero se elige el entorno de uso. Despues se orienta la solucion y la consulta.",
    "apps.busTitle": "Autobuses electricos e hidrogeno",
    "apps.busText": "Multi-rack para urbano e interurbano.",
    "apps.seaTitle": "Marino electrico e hibrido",
    "apps.seaText": "Packs en paralelo para ferries y trabajo marino.",
    "apps.agrTitle": "Agricola e industrial movil",
    "apps.agrText": "Energia robusta para maquinaria movil.",
    "apps.vclTitle": "Vehiculos comerciales ligeros",
    "apps.vclText": "Formato para integracion y series cortas.",
    "apps.chargeTitle": "Estaciones de carga moviles",
    "apps.chargeText": "Apoyo energetico temporal o semiestacionario.",
    "apps.railTitle": "Ferrocarril",
    "apps.railText": "Multipack para alta demanda energetica.",
    "products.eyebrow": "Productos",
    "products.title": "Primero se mira, despues se profundiza.",
    "products.text": "La ficha aparece solo cuando el usuario la solicita. Antes, manda la imagen y la decision rapida.",
    "products.nmcTitle": "Pack compacto de alta densidad",
    "products.lfpTitle": "Seguridad, vida util y robustez",
    "products.bmsTitle": "Control multipack centralizado",
    "products.more": "Mostrar mas",
    "products.specs": "Ver especificaciones",
    "products.add": "Incluir en consulta",
    "process.eyebrow": "Proceso guiado",
    "process.open": "Abrir proceso guiado",
    "process.close": "Cerrar proceso guiado",
    "process.title": "Como navegar esta version y llegar a una consulta util.",
    "process.oneTitle": "Entrada rapida al proyecto",
    "process.oneText": "La ruta guiada permite elegir aplicacion, fase e interes sin leer toda la web. Esos datos pasan al formulario para que el usuario no repita informacion y llegue antes a una consulta tecnica concreta.",
    "process.twoTitle": "Exploracion por aplicaciones",
    "process.twoText": "La seccion de aplicaciones ordena los casos principales: bus, marino, agricola, vehiculo comercial, carga movil y ferrocarril. Sirve para que un visitante no tecnico identifique su entorno de uso en pocos segundos.",
    "process.threeTitle": "Productos sin saturar",
    "process.threeText": "El carrusel muestra primero imagenes y solo despliega especificaciones cuando el usuario lo pide. Asi se evita convertir la version intuitiva en una ficha tecnica pesada y se mantiene la navegacion limpia.",
    "process.fourTitle": "Consulta y documentacion",
    "process.fourText": "La consulta tecnica recoge datos minimos pero validos: contacto, empresa, aplicacion, fase, interes y necesidad. Despues se solicita documentacion con contexto, para que la respuesta comercial y tecnica sea mas precisa.",
    "docs.eyebrow": "Documentacion tecnica",
    "docs.title": "Datos tecnicos cuando ya hay contexto.",
    "docs.text": "La documentacion se solicita con una consulta breve para responder con informacion util.",
    "docs.cta": "Solicitar documentacion",
    "contact.eyebrow": "Consulta tecnica",
    "contact.title": "Cuentanos el proyecto y lo orientamos desde el primer contacto.",
    "contact.text": "Un formulario corto para que ventas e ingenieria reciban lo importante desde el primer mensaje.",
    "contact.trustOne": "Series cortas y medias",
    "contact.trustTwo": "Movilidad no automovil",
    "form.name": "Nombre",
    "form.company": "Empresa",
    "form.email": "Correo profesional",
    "form.country": "Pais",
    "form.application": "Aplicacion principal",
    "form.option": "Selecciona",
    "form.stage": "Fase del proyecto",
    "form.stageOption": "Selecciona fase",
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
    "nav.openMenu": "Open menu",
    "nav.top": "Back to top",
    "lang.select": "Select language",
    "lang.es": "ES Spanish",
    "lang.en": "EN English",
    "lang.eu": "EU Basque",
    "lang.fr": "FR French",
    "hero.eyebrow": "High-voltage batteries for demanding electric mobility",
    "hero.title": "Clear HV systems for direct integration.",
    "hero.text": "Modular packs, multipack control and technical support for industrial electric mobility applications.",
    "hero.primary": "Guide my project",
    "hero.secondary": "Explore products",
    "metric.energy": "Energy per pack",
    "metric.arch": "Nominal architectures",
    "metric.protection": "Industrial protection",
    "metric.multipack": "Multipack management",
    "guide.eyebrow": "Guided route",
    "guide.title": "Three decisions to reach the next step.",
    "guide.text": "Choose application, stage and interest. The page prepares the request and removes unnecessary steps.",
    "guide.cta": "Prepare enquiry",
    "guide.empty": "Select at least one option to prepare the enquiry.",
    "guide.done": "Enquiry guided. Your choices have been moved into the form.",
    "apps.eyebrow": "Applications",
    "apps.title": "A clear entry point for every project type.",
    "apps.text": "First choose the usage environment. Then the solution and request become easier to guide.",
    "apps.busTitle": "Electric and hydrogen buses",
    "apps.busText": "Multi-rack for urban and intercity use.",
    "apps.seaTitle": "Electric and hybrid marine",
    "apps.seaText": "Parallel packs for ferries and marine work.",
    "apps.agrTitle": "Agricultural and mobile industrial",
    "apps.agrText": "Robust energy for mobile machinery.",
    "apps.vclTitle": "Light commercial vehicles",
    "apps.vclText": "Format for integration and short runs.",
    "apps.chargeTitle": "Mobile charging stations",
    "apps.chargeText": "Temporary or semi-stationary energy support.",
    "apps.railTitle": "Rail",
    "apps.railText": "Multipack for high energy demand.",
    "products.eyebrow": "Products",
    "products.title": "Look first, go deeper second.",
    "products.text": "The datasheet appears only when requested. First come the image and the quick decision.",
    "products.nmcTitle": "Compact high-density pack",
    "products.lfpTitle": "Safety, lifetime and robustness",
    "products.bmsTitle": "Centralized multipack control",
    "products.more": "Show more",
    "products.specs": "View specifications",
    "products.add": "Include in enquiry",
    "process.eyebrow": "Guided process",
    "process.open": "Open guided process",
    "process.close": "Close guided process",
    "process.title": "How this version guides users toward a useful enquiry.",
    "process.oneTitle": "Fast project entry",
    "process.oneText": "The guided route lets visitors choose application, stage and interest without reading the whole page. Those choices move into the form so users do not repeat themselves and reach a concrete technical enquiry faster.",
    "process.twoTitle": "Application-based exploration",
    "process.twoText": "The applications section groups the main use cases: bus, marine, agricultural, commercial vehicle, mobile charging and rail. It helps non-technical visitors identify their operating environment in seconds.",
    "process.threeTitle": "Products without overload",
    "process.threeText": "The carousel shows images first and reveals specifications only when requested. This keeps the intuitive version away from heavy datasheets and preserves a clean browsing flow.",
    "process.fourTitle": "Enquiry and documentation",
    "process.fourText": "The technical enquiry collects minimal but valid data: contact, company, application, stage, interest and need. Documentation is requested with context so the commercial and technical response can be more precise.",
    "docs.eyebrow": "Technical documentation",
    "docs.title": "Technical data once there is context.",
    "docs.text": "Documentation is requested through a short enquiry so the answer can be useful.",
    "docs.cta": "Request documentation",
    "contact.eyebrow": "Technical enquiry",
    "contact.title": "Tell us about the project and we guide it from the first contact.",
    "contact.text": "A short form so sales and engineering receive the important details from the first message.",
    "contact.trustOne": "Short and medium runs",
    "contact.trustTwo": "Non-automotive mobility",
    "form.name": "Name",
    "form.company": "Company",
    "form.email": "Professional email",
    "form.country": "Country",
    "form.application": "Main application",
    "form.option": "Select",
    "form.stage": "Project stage",
    "form.stageOption": "Select stage",
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
    "nav.openMenu": "Ireki menua",
    "nav.top": "Itzuli hasierara",
    "lang.select": "Aukeratu hizkuntza",
    "lang.es": "ES Gaztelania",
    "lang.en": "EN Ingelesa",
    "lang.eu": "EU Euskara",
    "lang.fr": "FR Frantsesa",
    "hero.eyebrow": "Tentsio handiko bateriak mugikortasun elektriko zorrotzerako",
    "hero.title": "HV sistema argiak integrazio zuzenerako.",
    "hero.text": "Pack modularrak, multipack kontrola eta laguntza teknikoa mugikortasun elektriko industrialerako.",
    "hero.primary": "Nire proiektua bideratu",
    "hero.secondary": "Produktuak ikusi",
    "metric.energy": "Energia pack bakoitzeko",
    "metric.arch": "Arkitektura nominalak",
    "metric.protection": "Babes industriala",
    "metric.multipack": "Multipack kudeaketa",
    "guide.eyebrow": "Ibilbide gidatua",
    "guide.title": "Hiru erabaki hurrengo urratsera iristeko.",
    "guide.text": "Aukeratu aplikazioa, fasea eta interesa. Webak kontsulta prestatzen du eta pauso alferrikakoak kentzen ditu.",
    "guide.cta": "Kontsulta prestatu",
    "guide.empty": "Aukeratu gutxienez aukera bat kontsulta prestatzeko.",
    "guide.done": "Kontsulta bideratuta. Zure aukerak formularioan sartu dira.",
    "apps.eyebrow": "Aplikazioak",
    "apps.title": "Proiektu mota bakoitzerako sarrera argia.",
    "apps.text": "Lehenik erabilera-ingurunea aukeratzen da. Gero soluzioa eta kontsulta errazago bideratzen dira.",
    "apps.busTitle": "Autobus elektrikoak eta hidrogenokoak",
    "apps.busText": "Multi-rack hiriko eta hiriarteko erabilerarako.",
    "apps.seaTitle": "Itsas elektrikoa eta hibridoa",
    "apps.seaText": "Pack paraleloak ferry eta itsas lanetarako.",
    "apps.agrTitle": "Nekazaritza eta industrial mugikorra",
    "apps.agrText": "Energia sendoa makineria mugikorrerako.",
    "apps.vclTitle": "Ibilgailu komertzial arinak",
    "apps.vclText": "Integraziorako eta serie laburretarako formatua.",
    "apps.chargeTitle": "Karga estazio mugikorrak",
    "apps.chargeText": "Aldi baterako edo erdi-finkoko energia laguntza.",
    "apps.railTitle": "Trena",
    "apps.railText": "Energia eskaera handirako multipack.",
    "products.eyebrow": "Produktuak",
    "products.title": "Lehenik ikusi, gero sakondu.",
    "products.text": "Fitxa erabiltzaileak eskatzean agertzen da. Lehenik irudia eta erabaki azkarra.",
    "products.nmcTitle": "Dentsitate handiko pack trinkoa",
    "products.lfpTitle": "Segurtasuna, bizitza erabilgarria eta sendotasuna",
    "products.bmsTitle": "Multipack kontrol zentralizatua",
    "products.more": "Gehiago erakutsi",
    "products.specs": "Zehaztapenak ikusi",
    "products.add": "Kontsultan gehitu",
    "process.eyebrow": "Prozesu gidatua",
    "process.open": "Ireki prozesu gidatua",
    "process.close": "Itxi prozesu gidatua",
    "process.title": "Bertsio honek erabiltzailea kontsulta erabilgarri batera nola eramaten duen.",
    "process.oneTitle": "Proiektuaren sarrera azkarra",
    "process.oneText": "Ibilbide gidatuak aplikazioa, fasea eta interesa aukeratzeko aukera ematen du web osoa irakurri gabe. Aukera horiek formulariora pasatzen dira informazioa ez errepikatzeko.",
    "process.twoTitle": "Aplikazioen araberako esplorazioa",
    "process.twoText": "Aplikazioen atalak erabilera kasu nagusiak biltzen ditu: autobusa, itsasoa, nekazaritza, ibilgailu komertziala, karga mugikorra eta trena.",
    "process.threeTitle": "Produktuak gainkargarik gabe",
    "process.threeText": "Karruselak lehenik irudiak erakusten ditu eta zehaztapenak erabiltzaileak eskatzen dituenean zabaltzen ditu. Horrela nabigazioa garbi mantentzen da.",
    "process.fourTitle": "Kontsulta eta dokumentazioa",
    "process.fourText": "Kontsulta teknikoak gutxieneko datu baliagarriak jasotzen ditu: kontaktua, enpresa, aplikazioa, fasea, interesa eta beharra. Dokumentazioa testuinguruarekin eskatzen da.",
    "docs.eyebrow": "Dokumentazio teknikoa",
    "docs.title": "Datu teknikoak testuingurua dagoenean.",
    "docs.text": "Dokumentazioa kontsulta labur baten bidez eskatzen da erantzuna erabilgarria izan dadin.",
    "docs.cta": "Dokumentazioa eskatu",
    "contact.eyebrow": "Kontsulta teknikoa",
    "contact.title": "Kontatu proiektua eta lehen kontaktutik bideratuko dugu.",
    "contact.text": "Formulario laburra, salmentek eta ingeniaritzak lehen mezutik garrantzitsuena jaso dezaten.",
    "contact.trustOne": "Serie labur eta ertainak",
    "contact.trustTwo": "Automobila ez den mugikortasuna",
    "form.name": "Izena",
    "form.company": "Enpresa",
    "form.email": "Laneko posta",
    "form.country": "Herrialdea",
    "form.application": "Aplikazio nagusia",
    "form.option": "Aukeratu",
    "form.stage": "Proiektuaren fasea",
    "form.stageOption": "Aukeratu fasea",
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
    "nav.openMenu": "Ouvrir le menu",
    "nav.top": "Retour en haut",
    "lang.select": "Choisir la langue",
    "lang.es": "ES Espagnol",
    "lang.en": "EN Anglais",
    "lang.eu": "EU Basque",
    "lang.fr": "FR Francais",
    "hero.eyebrow": "Batteries haute tension pour mobilite electrique exigeante",
    "hero.title": "Systemes HV clairs pour integration directe.",
    "hero.text": "Packs modulaires, controle multipack et support technique pour applications industrielles de mobilite electrique.",
    "hero.primary": "Orienter mon projet",
    "hero.secondary": "Explorer les produits",
    "metric.energy": "Energie par pack",
    "metric.arch": "Architectures nominales",
    "metric.protection": "Protection industrielle",
    "metric.multipack": "Gestion multipack",
    "guide.eyebrow": "Parcours guide",
    "guide.title": "Trois decisions pour atteindre l'etape suivante.",
    "guide.text": "Choisissez application, phase et interet. La page prepare la demande et evite les etapes inutiles.",
    "guide.cta": "Preparer la demande",
    "guide.empty": "Selectionnez au moins une option pour preparer la demande.",
    "guide.done": "Demande orientee. Vos choix ont ete ajoutes au formulaire.",
    "apps.eyebrow": "Applications",
    "apps.title": "Une entree claire pour chaque type de projet.",
    "apps.text": "On choisit d'abord l'environnement d'usage. Ensuite la solution et la demande deviennent plus faciles a orienter.",
    "apps.busTitle": "Bus electriques et hydrogene",
    "apps.busText": "Multi-rack pour urbain et interurbain.",
    "apps.seaTitle": "Marine electrique et hybride",
    "apps.seaText": "Packs paralleles pour ferries et travail marin.",
    "apps.agrTitle": "Agricole et industriel mobile",
    "apps.agrText": "Energie robuste pour machines mobiles.",
    "apps.vclTitle": "Vehicules utilitaires legers",
    "apps.vclText": "Format pour integration et petites series.",
    "apps.chargeTitle": "Stations de recharge mobiles",
    "apps.chargeText": "Support energetique temporaire ou semi-stationnaire.",
    "apps.railTitle": "Ferroviaire",
    "apps.railText": "Multipack pour forte demande energetique.",
    "products.eyebrow": "Produits",
    "products.title": "On regarde d'abord, on approfondit ensuite.",
    "products.text": "La fiche apparait seulement sur demande. D'abord l'image et la decision rapide.",
    "products.nmcTitle": "Pack compact haute densite",
    "products.lfpTitle": "Securite, duree de vie et robustesse",
    "products.bmsTitle": "Controle multipack centralise",
    "products.more": "Voir plus",
    "products.specs": "Voir specifications",
    "products.add": "Inclure dans la demande",
    "process.eyebrow": "Processus guide",
    "process.open": "Ouvrir le processus guide",
    "process.close": "Fermer le processus guide",
    "process.title": "Comment cette version guide vers une demande utile.",
    "process.oneTitle": "Entree rapide du projet",
    "process.oneText": "Le parcours guide permet de choisir application, phase et interet sans lire toute la page. Ces choix passent dans le formulaire pour eviter les repetitions et accelerer la demande technique.",
    "process.twoTitle": "Exploration par applications",
    "process.twoText": "La section applications regroupe les cas principaux: bus, marine, agricole, vehicule utilitaire, recharge mobile et ferroviaire. Elle aide un visiteur non technique a se reperer vite.",
    "process.threeTitle": "Produits sans surcharge",
    "process.threeText": "Le carrousel montre d'abord les images et ouvre les specifications seulement sur demande. La navigation reste claire et la version intuitive ne devient pas une fiche technique lourde.",
    "process.fourTitle": "Demande et documentation",
    "process.fourText": "La demande technique recueille les donnees minimales mais utiles: contact, entreprise, application, phase, interet et besoin. La documentation est demandee avec contexte.",
    "docs.eyebrow": "Documentation technique",
    "docs.title": "Donnees techniques quand le contexte existe.",
    "docs.text": "La documentation est demandee avec une courte demande pour fournir une reponse utile.",
    "docs.cta": "Demander documentation",
    "contact.eyebrow": "Demande technique",
    "contact.title": "Parlez-nous du projet et nous l'orientons des le premier contact.",
    "contact.text": "Un formulaire court pour que ventes et ingenierie recoivent l'essentiel des le premier message.",
    "contact.trustOne": "Petites et moyennes series",
    "contact.trustTwo": "Mobilite non automobile",
    "form.name": "Nom",
    "form.company": "Entreprise",
    "form.email": "Email professionnel",
    "form.country": "Pays",
    "form.application": "Application principale",
    "form.option": "Selectionner",
    "form.stage": "Phase du projet",
    "form.stageOption": "Selectionner phase",
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
  fields: new Set(["website", "name", "company", "email", "country", "application", "stage", "interest", "message", "privacy"]),
  application: new Set(["bus", "sea", "agr", "vcl", "charge", "rail", "unknown"]),
  stage: new Set(["explore", "design", "validation", "purchase"]),
  interest: new Set(["nmc", "lfp", "bms", "compare", "docs"]),
  privacy: new Set(["accepted"]),
  email: {
    max: 160,
    pattern: /^[^\s@<>(){}[\]"'`]+@[^\s@<>(){}[\]"'`]+\.[^\s@<>(){}[\]"'`]{2,}$/i
  },
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

function validateEmailField(element) {
  const value = element.value.trim();
  return value.length <= formRules.email.max && element.validity.valid && formRules.email.pattern.test(value);
}

function isEditableControl(element) {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
}

function clearFieldState(element) {
  element.setCustomValidity("");
  element.removeAttribute("aria-invalid");
}

function markFieldInvalid(element, message = getText("feedback.invalidValue")) {
  element.setCustomValidity(message);
  element.setAttribute("aria-invalid", "true");
}

function validateLeadForm(form) {
  let firstInvalid = null;
  const controls = Array.from(form.elements).filter(isEditableControl);

  controls.forEach(clearFieldState);

  const unexpected = controls.find((element) => element.name && !formRules.fields.has(element.name));
  if (unexpected) {
    markFieldInvalid(unexpected);
    return { valid: false, firstInvalid: unexpected };
  }

  const website = form.elements.website;
  if (website && website.value.trim() !== "") {
    return { valid: false, firstInvalid: null };
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
    [email, validateEmailField(email)],
    [country, validateTextField(country, formRules.country)],
    [application, formRules.application.has(application.value)],
    [stage, formRules.stage.has(stage.value)],
    [interest, formRules.interest.has(interest.value)],
    [message, validateTextField(message, formRules.message)],
    [privacy, privacy.checked && formRules.privacy.has(privacy.value)]
  ];

  checks.forEach(([element, valid]) => {
    if (!valid) {
      markFieldInvalid(element);
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
    slide.setAttribute("aria-current", isActive ? "true" : "false");
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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getText(element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });

  if (currentLang) currentLang.textContent = selectedLanguage.toUpperCase();
  if (processTrigger && processPanel) {
    const isOpen = processPanel.classList.contains("is-open");
    processTrigger.setAttribute("aria-label", getText(isOpen ? "process.close" : "process.open"));
  }
  if (selectedProduct && productDrawer && !productDrawer.hidden) showProductDrawer(selectedProduct);
}

function startCarousel() {
  productCarousel?.classList.remove("is-paused");
}

function stopCarousel() {
  productCarousel?.classList.add("is-paused");
}

function moveCarousel(direction) {
  const currentIndex = Math.max(0, productOrder.indexOf(activeProduct));
  const nextIndex = (currentIndex + direction + productOrder.length) % productOrder.length;
  const nextProduct = productOrder[nextIndex];
  stopCarousel();
  setActiveProduct(nextProduct);
  if (selectedProduct && productDrawer && !productDrawer.hidden) {
    showProductDrawer(nextProduct);
  }
  window.setTimeout(startCarousel, 2600);
}

function setLeadValue(name, value) {
  if (!leadForm || !value || !leadForm.elements[name]) return;
  leadForm.elements[name].value = value;
  leadForm.elements[name].setCustomValidity("");
}

function applyGuideSelection() {
  if (!leadForm) return;
  const application = guideApplication?.value || "";
  const stage = guideStage?.value || "";
  const interest = guideInterest?.value || "";

  if (!application && !stage && !interest) {
    if (guideFeedback) guideFeedback.textContent = getText("guide.empty");
    return;
  }

  setLeadValue("application", application);
  setLeadValue("stage", stage);
  setLeadValue("interest", interest);

  if (productOrder.includes(interest)) {
    showProductDrawer(interest);
  }

  if (guideFeedback) guideFeedback.textContent = getText("guide.done");
  if (feedback) feedback.textContent = getText("guide.done");
  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateScrollTopVisibility() {
  if (!scrollTopButton) return;
  scrollTopButton.classList.toggle("is-visible", window.scrollY > 520);
}

function setProcessPanel(open) {
  if (!processPanel || !processTrigger) return;
  processPanel.classList.toggle("is-open", open);
  processPanel.setAttribute("aria-hidden", String(!open));
  processTrigger.setAttribute("aria-expanded", String(open));
  processTrigger.setAttribute("aria-label", getText(open ? "process.close" : "process.open"));

  if (open) {
    processPanel.focus({ preventScroll: true });
  } else {
    processTrigger.focus({ preventScroll: true });
  }
}

async function sendLeadForm(form) {
  if (window.location.protocol === "file:") {
    return { ok: true, message: getText("feedback.sent"), fields: [] };
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });
    const payload = await response.json().catch(() => ({}));
    return {
      ok: response.ok && payload.ok !== false,
      message: payload.message || (response.ok ? getText("feedback.sent") : getText("feedback.invalid")),
      fields: Array.isArray(payload.fields) ? payload.fields : []
    };
  } catch {
    return { ok: true, message: getText("feedback.sent"), fields: [] };
  }
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

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    moveCarousel(button.dataset.carousel === "next" ? 1 : -1);
  });
});

if (drawerAddButton) {
  drawerAddButton.addEventListener("click", () => {
    if (!selectedProduct || !interestSelect) return;
    interestSelect.value = selectedProduct;
    if (feedback) feedback.textContent = getText("feedback.added");
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (guideButton) {
  guideButton.addEventListener("click", applyGuideSelection);
}

if (processTrigger && processPanel) {
  processTrigger.addEventListener("click", () => {
    setProcessPanel(!processPanel.classList.contains("is-open"));
  });
}

if (processClose) {
  processClose.addEventListener("click", () => setProcessPanel(false));
}

processLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setProcessPanel(true);
  });
});

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

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  if (!event.target.closest(".language-widget") && languageMenu && languageButton) {
    languageMenu.classList.remove("is-open");
    languageButton.setAttribute("aria-expanded", "false");
  }
  if (
    !event.target.closest(".process-widget") &&
    !event.target.closest("a[href='#proceso']") &&
    processPanel &&
    processTrigger &&
    processPanel.classList.contains("is-open")
  ) {
    setProcessPanel(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (mainNav && menuButton) {
    mainNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
  if (languageMenu && languageButton) {
    languageMenu.classList.remove("is-open");
    languageButton.setAttribute("aria-expanded", "false");
  }
  if (processPanel && processPanel.classList.contains("is-open")) {
    setProcessPanel(false);
  }
});

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
  updateScrollTopVisibility();
}

if (leadForm && feedback) {
  leadForm.addEventListener("input", (event) => {
    if (isEditableControl(event.target)) {
      clearFieldState(event.target);
    }
  });

  leadForm.addEventListener("change", (event) => {
    if (isEditableControl(event.target)) {
      clearFieldState(event.target);
    }
  });

  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = validateLeadForm(leadForm);

    if (!result.valid || !leadForm.checkValidity()) {
      feedback.textContent = result.valid ? getText("feedback.invalid") : getText("feedback.invalidValue");
      result.firstInvalid?.focus();
      leadForm.reportValidity();
      return;
    }

    feedback.textContent = "";
    const response = await sendLeadForm(leadForm);

    if (!response.ok) {
      response.fields.forEach((field) => {
        if (leadForm.elements[field]) {
          markFieldInvalid(leadForm.elements[field], response.message);
        }
      });
      feedback.textContent = response.message || getText("feedback.invalid");
      leadForm.reportValidity();
      return;
    }

    feedback.textContent = response.message || getText("feedback.sent");
    leadForm.reset();
    Array.from(leadForm.elements).filter(isEditableControl).forEach(clearFieldState);
  });
}

setupInfiniteCarousel();
applyLanguage("es");
setActiveProduct("nmc", false);
startCarousel();
