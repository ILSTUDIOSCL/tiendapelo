/* ======================================================
   BELLE ATELIER — script.js
   Toda la data y la lógica del catálogo vive acá.
   Para agregar productos nuevos: solo suma objetos al
   arreglo `productos`. El resto de la página se genera solo.
   ====================================================== */

/* -------- 1. CONFIGURACIÓN -------- */
// Cambia este número para redirigir todas las consultas de WhatsApp.
const NUMERO_WHATSAPP = "56912345678";

/* -------- 2. DATA DE CATEGORÍAS (icono + color de swatch) -------- */
const categorias = [
  {
    nombre: "Maquillaje",
    color: "#F8D7E8",
    icono: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 2h4l1 4-3 12a2 2 0 0 1-4 0L4 6l5-4Z"/><path d="M9 6h5"/></svg>`
  },
  {
    nombre: "Skincare",
    color: "#F7F2EC",
    icono: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2c4 5 7 8.5 7 12.5A7 7 0 0 1 5 14.5C5 10.5 8 7 12 2Z"/></svg>`
  },
  {
    nombre: "Cabello",
    color: "#ECECEC",
    icono: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4v16M4 6h14M4 10h14M4 14h14M4 18h14"/></svg>`
  },
  {
    nombre: "Perfumes",
    color: "#F8D7E8",
    icono: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 2h4v3h-4z"/><path d="M9 5h6l2 3v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-3Z"/><path d="M7 12h10"/></svg>`
  },
  {
    nombre: "Uñas",
    color: "#F7F2EC",
    icono: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 3h6l3 5-6 13L4 8Z"/><path d="M9.5 8h5"/></svg>`
  },
  {
    nombre: "Accesorios",
    color: "#ECECEC",
    icono: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`
  }
];

/* -------- 3. DATA DE PRODUCTOS -------- */
// Estructura de referencia:
// { id, nombre, marca, categoria, precio, precioAnterior, stock, imagen, descripcion, nuevo, destacado }
const productos = [
  { id:1,  nombre:"Base Líquida HD",            marca:"Maybelline", categoria:"Maquillaje", precio:14990, precioAnterior:18990, stock:15, imagen:"img/base-liquida-hd.jpg",      descripcion:"Cobertura natural de larga duración.",                 nuevo:false, destacado:true  },
  { id:2,  nombre:"Paleta de Sombras Nude",      marca:"Natura",     categoria:"Maquillaje", precio:12990, precioAnterior:null,  stock:8,  imagen:"img/paleta-sombras-nude.jpg",   descripcion:"12 tonos tierra de alta pigmentación.",                nuevo:true,  destacado:true  },
  { id:3,  nombre:"Labial Mate Terracota",       marca:"L'Bel",      categoria:"Maquillaje", precio:8990,  precioAnterior:null,  stock:0,  imagen:"img/labial-mate-terracota.jpg", descripcion:"Fórmula mate de fijación 12 horas.",                   nuevo:false, destacado:false },
  { id:4,  nombre:"Rubor en Polvo Durazno",      marca:"Maybelline", categoria:"Maquillaje", precio:7990,  precioAnterior:9990,  stock:20, imagen:"img/rubor-durazno.jpg",         descripcion:"Acabado luminoso, ideal piel mixta.",                  nuevo:false, destacado:false },
  { id:5,  nombre:"Sérum Vitamina C 30ml",       marca:"The Ordinary", categoria:"Skincare", precio:16990, precioAnterior:null, stock:12, imagen:"img/serum-vitamina-c.jpg",      descripcion:"Ilumina y unifica el tono de la piel.",                nuevo:true,  destacado:true  },
  { id:6,  nombre:"Crema Hidratante Ácido Hialurónico", marca:"Cetaphil", categoria:"Skincare", precio:13990, precioAnterior:16990, stock:18, imagen:"img/crema-hialuronico.jpg", descripcion:"Hidratación profunda 24 horas, no comedogénica.",     nuevo:false, destacado:true  },
  { id:7,  nombre:"Protector Solar FPS 50",      marca:"Isdin",      categoria:"Skincare",   precio:15990, precioAnterior:null,  stock:10, imagen:"img/protector-solar-fps50.jpg", descripcion:"Textura ligera, sin dejar residuo blanco.",            nuevo:false, destacado:false },
  { id:8,  nombre:"Agua Micelar 400ml",          marca:"Bioderma",   categoria:"Skincare",   precio:11990, precioAnterior:14990, stock:25, imagen:"img/agua-micelar.jpg",          descripcion:"Desmaquilla y limpia en un solo paso.",                nuevo:false, destacado:false },
  { id:9,  nombre:"Shampoo Reparador 500ml",     marca:"Pantene",    categoria:"Cabello",    precio:6990,  precioAnterior:null,  stock:30, imagen:"img/shampoo-reparador.jpg",     descripcion:"Repara puntas abiertas y da brillo.",                  nuevo:false, destacado:false },
  { id:10, nombre:"Aceite Capilar de Argán",     marca:"Kerastase",  categoria:"Cabello",    precio:19990, precioAnterior:24990, stock:6,  imagen:"img/aceite-argan.jpg",          descripcion:"Nutrición intensa para cabello dañado.",               nuevo:true,  destacado:true  },
  { id:11, nombre:"Plancha de Cabello Cerámica", marca:"Philips",    categoria:"Cabello",    precio:29990, precioAnterior:null,  stock:0,  imagen:"img/plancha-ceramica.jpg",      descripcion:"Alisado profesional en un solo paso.",                 nuevo:false, destacado:false },
  { id:12, nombre:"Eau de Parfum Fleur Blanche", marca:"L'Bel",      categoria:"Perfumes",   precio:24990, precioAnterior:29990, stock:9,  imagen:"img/perfume-fleur-blanche.jpg", descripcion:"Notas florales con fondo amaderado.",                  nuevo:false, destacado:true  },
  { id:13, nombre:"Perfume Mujer Amber Oud",     marca:"Esika",      categoria:"Perfumes",   precio:21990, precioAnterior:null,  stock:14, imagen:"img/perfume-amber-oud.jpg",     descripcion:"Ámbar y oud, aroma envolvente y duradero.",            nuevo:true,  destacado:false },
  { id:14, nombre:"Esmalte de Uñas Gel Rosa Nude", marca:"OPI",      categoria:"Uñas",       precio:6990,  precioAnterior:null,  stock:22, imagen:"img/esmalte-rosa-nude.jpg",     descripcion:"Secado rápido, brillo de larga duración.",             nuevo:false, destacado:false },
  { id:15, nombre:"Kit de Manicure 8 piezas",    marca:"Beter",      categoria:"Uñas",       precio:9990,  precioAnterior:12990, stock:11, imagen:"img/kit-manicure.jpg",          descripcion:"Set completo en estuche de viaje.",                   nuevo:false, destacado:false },
  { id:16, nombre:"Neceser de Viaje Rosa",       marca:"Belle Atelier", categoria:"Accesorios", precio:11990, precioAnterior:null, stock:17, imagen:"img/neceser-rosa.jpg",       descripcion:"Organizador de maquillaje, resistente al agua.",       nuevo:true,  destacado:false },
  { id:17, nombre:"Set de Brochas Profesional",  marca:"Beter",      categoria:"Accesorios", precio:17990, precioAnterior:21990, stock:5,  imagen:"img/set-brochas.jpg",          descripcion:"12 brochas de cerdas suaves con estuche.",            nuevo:false, destacado:true  },
  { id:18, nombre:"Espejo de Aumento LED",       marca:"Belle Atelier", categoria:"Accesorios", precio:13990, precioAnterior:null, stock:0,  imagen:"img/espejo-led.jpg",         descripcion:"Luz regulable para maquillaje de precisión.",          nuevo:false, destacado:false }
];

/* -------- 4. TESTIMONIOS -------- */
const testimonios = [
  { nombre:"Javiera R.", ciudad:"Santiago",     estrellas:5, texto:"Pedí por WhatsApp y me respondieron altiro. El sérum de vitamina C llegó perfecto y súper bien embalado." },
  { nombre:"Camila T.",  ciudad:"Viña del Mar", estrellas:5, texto:"Encontré la paleta que buscaba hace meses. La atención fue súper cercana, se nota que aman lo que venden." },
  { nombre:"Antonia S.", ciudad:"Concepción",   estrellas:4, texto:"Excelente calidad de producto y el envío llegó antes de lo esperado. Ya hice mi segundo pedido." }
];

/* -------- 5. PREGUNTAS FRECUENTES -------- */
const preguntas = [
  { p:"¿Cómo compro un producto del catálogo?", r:"Elige el producto que te interesa y presiona “Consultar por WhatsApp”. Te escribiremos para confirmar stock, forma de pago y despacho." },
  { p:"¿Hacen envíos a todo Chile?", r:"Sí, despachamos a todo el país por courier. También puedes retirar en nuestra tienda en Providencia, Santiago." },
  { p:"¿Los productos son originales?", r:"Todos nuestros productos son 100% originales y adquiridos directamente con marcas y distribuidores autorizados." },
  { p:"¿Qué medios de pago aceptan?", r:"Transferencia, tarjetas de crédito/débito y efectivo en retiro por tienda. Coordinamos el pago directamente por WhatsApp." },
  { p:"¿Puedo cambiar un producto si no me gusta?", r:"Sí, tienes 7 días desde la recepción para cambios, siempre que el producto no haya sido usado y conserve su empaque original." }
];

/* -------- 6. ESTADO DE FILTROS -------- */
let estado = { busqueda: "", categoria: "", marca: "", precio: "" };

/* ============================================================
   UTILIDADES
   ============================================================ */
function formatoCLP(valor){
  return valor.toLocaleString("es-CL", { style:"currency", currency:"CLP", maximumFractionDigits:0 });
}

// Genera una imagen de respaldo (SVG en degradé de marca) si la foto real
// del producto no está disponible en /img — así el catálogo nunca se ve roto.
function placeholderSVG(nombre, categoria){
  const paletas = {
    "Maquillaje": ["#F8D7E8", "#E8AFCB"],
    "Skincare":   ["#F7F2EC", "#E3D6C8"],
    "Cabello":    ["#ECECEC", "#D8D0D0"],
    "Perfumes":   ["#F8D7E8", "#D9A6B9"],
    "Uñas":       ["#F7F2EC", "#E8AFCB"],
    "Accesorios": ["#ECECEC", "#C9BEC5"]
  };
  const [c1, c2] = paletas[categoria] || ["#F7F2EC", "#ECECEC"];
  const iniciales = nombre.split(" ").slice(0,2).map(p=>p[0]).join("").toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#g)"/>
      <circle cx="200" cy="180" r="70" fill="rgba(255,255,255,.35)"/>
      <text x="200" y="198" font-family="Georgia, serif" font-size="52" font-weight="500"
        fill="#222222" text-anchor="middle">${iniciales}</text>
      <text x="200" y="330" font-family="Helvetica, sans-serif" font-size="16" letter-spacing="2"
        fill="#22222299" text-anchor="middle">${categoria.toUpperCase()}</text>
    </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function armarMensajeWhatsApp(producto){
  const lineas = [
    "Hola, me interesa el producto:",
    "",
    `💄 ${producto.nombre}`,
    `Precio: ${formatoCLP(producto.precio)}`,
    "",
    "¿Está disponible?"
  ];
  return lineas.join("\n");
}

function linkWhatsApp(mensaje){
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

/* ============================================================
   RENDER: CATEGORÍAS
   ============================================================ */
function renderCategorias(){
  const cont = document.getElementById("catGrid");
  cont.innerHTML = categorias.map(cat => `
    <div class="cat-card fade-in" data-categoria="${cat.nombre}" tabindex="0" role="button" aria-label="Filtrar por ${cat.nombre}">
      <span class="cat-icon" style="--cat-color:${cat.color}">${cat.icono}</span>
      <span class="cat-name">${cat.nombre}</span>
    </div>
  `).join("");

  cont.querySelectorAll(".cat-card").forEach(card => {
    const activar = () => {
      const filtro = document.getElementById("filtroCategoria");
      filtro.value = card.dataset.categoria;
      estado.categoria = card.dataset.categoria;
      aplicarFiltros();
      document.getElementById("catalogo").scrollIntoView({ behavior:"smooth" });
    };
    card.addEventListener("click", activar);
    card.addEventListener("keypress", e => { if(e.key === "Enter") activar(); });
  });
}

/* ============================================================
   RENDER: TARJETA DE PRODUCTO
   ============================================================ */
function tarjetaProducto(p){
  const agotado = p.stock === 0;
  const oferta = p.precioAnterior && p.precioAnterior > p.precio;

  let badgesHTML = "";
  if(agotado) badgesHTML += `<span class="badge badge-agotado">Agotado</span>`;
  else{
    if(p.nuevo) badgesHTML += `<span class="badge badge-nuevo">Nuevo</span>`;
    if(oferta) badgesHTML += `<span class="badge badge-oferta">Oferta</span>`;
  }

  const mensaje = armarMensajeWhatsApp(p);

  return `
    <article class="producto-card fade-in" data-id="${p.id}">
      <div class="producto-media">
        <div class="badges">${badgesHTML}</div>
        <img src="${p.imagen}" alt="${p.nombre} — ${p.marca}" loading="lazy"
             onerror="this.onerror=null; this.src='${placeholderSVG(p.nombre, p.categoria)}';">
      </div>
      <div class="producto-body">
        <span class="producto-marca">${p.marca}</span>
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-desc">${p.descripcion}</p>
        <div class="producto-precios">
          <span class="precio">${formatoCLP(p.precio)}</span>
          ${oferta ? `<span class="precio-anterior">${formatoCLP(p.precioAnterior)}</span>` : ""}
        </div>
        <span class="producto-stock ${agotado ? "agotado" : ""}">${agotado ? "Sin stock por ahora" : `${p.stock} unidades disponibles`}</span>
        ${agotado
          ? `<button class="btn-whatsapp" disabled style="opacity:.55; cursor:not-allowed;">No disponible</button>`
          : `<a class="btn-whatsapp" target="_blank" rel="noopener" href="${linkWhatsApp(mensaje)}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20l1.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg>
              Consultar por WhatsApp
            </a>`
        }
      </div>
    </article>
  `;
}

/* ============================================================
   RENDER: GRID DE PRODUCTOS (con filtros)
   ============================================================ */
function productosFiltrados(){
  return productos.filter(p => {
    const texto = `${p.nombre} ${p.marca} ${p.categoria}`.toLowerCase();
    const coincideBusqueda = texto.includes(estado.busqueda.toLowerCase());
    const coincideCategoria = !estado.categoria || p.categoria === estado.categoria;
    const coincideMarca = !estado.marca || p.marca === estado.marca;

    let coincidePrecio = true;
    if(estado.precio){
      const [min, max] = estado.precio.split("-").map(Number);
      coincidePrecio = p.precio >= min && p.precio <= max;
    }
    return coincideBusqueda && coincideCategoria && coincideMarca && coincidePrecio;
  });
}

function renderProductos(){
  const lista = productosFiltrados();
  const grid = document.getElementById("productosGrid");
  const contador = document.getElementById("contador");
  const sinResultados = document.getElementById("sinResultados");

  contador.textContent = `Mostrando ${lista.length} producto${lista.length === 1 ? "" : "s"}`;

  if(lista.length === 0){
    grid.innerHTML = "";
    sinResultados.hidden = false;
  }else{
    sinResultados.hidden = true;
    grid.innerHTML = lista.map(tarjetaProducto).join("");
  }
  observarFadeIn();
}

/* ============================================================
   RENDER: DESTACADOS
   ============================================================ */
function renderDestacados(){
  const cont = document.getElementById("destacadosGrid");
  const lista = productos.filter(p => p.destacado);
  cont.innerHTML = lista.map(p => `
    <article class="destacado-card fade-in">
      <div class="destacado-media">
        <img src="${p.imagen}" alt="${p.nombre} — ${p.marca}" loading="lazy"
             onerror="this.onerror=null; this.src='${placeholderSVG(p.nombre, p.categoria)}';">
      </div>
      <div class="destacado-body">
        <span class="producto-marca">${p.marca}</span>
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-desc">${p.descripcion}</p>
        <div class="producto-precios">
          <span class="precio">${formatoCLP(p.precio)}</span>
          ${p.precioAnterior ? `<span class="precio-anterior">${formatoCLP(p.precioAnterior)}</span>` : ""}
        </div>
        <a class="btn-whatsapp" target="_blank" rel="noopener" href="${linkWhatsApp(armarMensajeWhatsApp(p))}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20l1.05-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg>
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  `).join("");
}

/* ============================================================
   RENDER: TESTIMONIOS
   ============================================================ */
function renderTestimonios(){
  const cont = document.getElementById("testimoniosGrid");
  cont.innerHTML = testimonios.map(t => `
    <div class="testimonio-card fade-in">
      <div class="estrellas">${"★".repeat(t.estrellas)}${"☆".repeat(5 - t.estrellas)}</div>
      <p class="testimonio-texto">“${t.texto}”</p>
      <div class="testimonio-autor">
        <span class="avatar">${t.nombre[0]}</span>
        <div>
          <strong>${t.nombre}</strong>
          <span>${t.ciudad}</span>
        </div>
      </div>
    </div>
  `).join("");
}

/* ============================================================
   RENDER: FAQ (ACORDEÓN)
   ============================================================ */
function renderFAQ(){
  const cont = document.getElementById("accordion");
  cont.innerHTML = preguntas.map((f, i) => `
    <div class="accordion-item" data-index="${i}">
      <button class="accordion-trigger" aria-expanded="false">
        ${f.p}
        <span class="plus" aria-hidden="true"></span>
      </button>
      <div class="accordion-panel">
        <p>${f.r}</p>
      </div>
    </div>
  `).join("");

  cont.querySelectorAll(".accordion-item").forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    trigger.addEventListener("click", () => {
      const abierto = item.classList.contains("open");
      cont.querySelectorAll(".accordion-item.open").forEach(other => {
        other.classList.remove("open");
        other.querySelector(".accordion-panel").style.maxHeight = null;
        other.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
      });
      if(!abierto){
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ============================================================
   FILTROS: poblar selects dinámicamente
   ============================================================ */
function poblarFiltros(){
  const selCategoria = document.getElementById("filtroCategoria");
  const selMarca = document.getElementById("filtroMarca");

  const categoriasUnicas = [...new Set(productos.map(p => p.categoria))].sort();
  const marcasUnicas = [...new Set(productos.map(p => p.marca))].sort();

  categoriasUnicas.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    selCategoria.appendChild(opt);
  });
  marcasUnicas.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m; opt.textContent = m;
    selMarca.appendChild(opt);
  });
}

function aplicarFiltros(){
  document.getElementById("filtroCategoria").value = estado.categoria;
  renderProductos();
}

/* ============================================================
   EVENTOS: buscador, filtros, limpiar
   ============================================================ */
function initBuscadorYFiltros(){
  const buscador = document.getElementById("buscador");
  const filtroCategoria = document.getElementById("filtroCategoria");
  const filtroMarca = document.getElementById("filtroMarca");
  const filtroPrecio = document.getElementById("filtroPrecio");
  const limpiar = document.getElementById("limpiarFiltros");

  buscador.addEventListener("input", e => { estado.busqueda = e.target.value; renderProductos(); });
  filtroCategoria.addEventListener("change", e => { estado.categoria = e.target.value; renderProductos(); });
  filtroMarca.addEventListener("change", e => { estado.marca = e.target.value; renderProductos(); });
  filtroPrecio.addEventListener("change", e => { estado.precio = e.target.value; renderProductos(); });

  limpiar.addEventListener("click", () => {
    estado = { busqueda:"", categoria:"", marca:"", precio:"" };
    buscador.value = ""; filtroCategoria.value = ""; filtroMarca.value = ""; filtroPrecio.value = "";
    renderProductos();
  });
}

/* ============================================================
   UI: menú hamburguesa
   ============================================================ */
function initMenu(){
  const btn = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("mainNav");
  btn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("open");
    btn.classList.toggle("open", abierto);
    btn.setAttribute("aria-expanded", abierto);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }));
}

/* ============================================================
   UI: modo oscuro (con persistencia)
   ============================================================ */
function initDarkMode(){
  const toggle = document.getElementById("darkModeToggle");
  const guardado = localStorage.getItem("belle-theme");
  if(guardado === "dark"){ document.documentElement.setAttribute("data-theme", "dark"); }

  toggle.addEventListener("click", () => {
    const actual = document.documentElement.getAttribute("data-theme");
    const nuevo = actual === "dark" ? "light" : "dark";
    if(nuevo === "dark"){ document.documentElement.setAttribute("data-theme", "dark"); }
    else{ document.documentElement.removeAttribute("data-theme"); }
    localStorage.setItem("belle-theme", nuevo);
  });
}

/* ============================================================
   UI: botón volver arriba
   ============================================================ */
function initBackToTop(){
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 480);
  });
  btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

/* ============================================================
   UI: animaciones fade-in al hacer scroll
   ============================================================ */
let observer;
function observarFadeIn(){
  if(!observer){
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold:0.12 });
  }
  document.querySelectorAll(".fade-in:not(.visible)").forEach(el => observer.observe(el));
}

/* ============================================================
   WHATSAPP FLOTANTE + FOOTER
   ============================================================ */
function initWhatsAppGlobal(){
  const mensajeGeneral = "Hola, quiero información sobre sus productos.";
  const url = linkWhatsApp(mensajeGeneral);
  document.getElementById("whatsappFloat").href = url;
  document.getElementById("footerWhatsapp").href = url;
  document.getElementById("footerWhatsappText").href = url;
}

/* ============================================================
   INICIALIZACIÓN GENERAL
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("anioActual").textContent = new Date().getFullYear();

  renderCategorias();
  poblarFiltros();
  renderProductos();
  renderDestacados();
  renderTestimonios();
  renderFAQ();

  initBuscadorYFiltros();
  initMenu();
  initDarkMode();
  initBackToTop();
  initWhatsAppGlobal();
  observarFadeIn();
});
