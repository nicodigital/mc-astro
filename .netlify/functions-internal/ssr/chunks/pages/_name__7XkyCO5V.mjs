/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, u as unescapeHTML, F as Fragment, g as renderHead, h as renderSlot } from '../astro_BI7KbTsQ.mjs';
/* empty css                           */
/* empty css                           */

const $$Astro$e = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/PROYECTOS/MC/node_modules/.pnpm/astro@4.4.9/node_modules/astro/components/ViewTransitions.astro", void 0);

function getSlug(url) {

  // Removemos las diagonales al final de la URL (si las hay)
  url = url.replace(/\/+$/, '');
  
  // Dividimos la URL en partes utilizando el caracter "/"
  let parts = url.split('/');
  
  // Obtenemos el último término de la URL
  let lastTerm = parts[parts.length - 1];
  
  return lastTerm;

}

function getFirstURLTerm(url) {

    // Encuentra la posición de la primera barra después del primer "/"
    const primerSlashIndex = url.indexOf('/');

    if (primerSlashIndex !== -1) {
      
        // Encuentra la posición de la segunda barra después de la primera
        const segundoSlashIndex = url.indexOf('/', primerSlashIndex + 1);

        if (segundoSlashIndex !== -1) {
            // Si se encuentra una segunda barra
            const primerTermino = url.substring(primerSlashIndex + 1, segundoSlashIndex);
            return primerTermino;
        } else {
            // Si no hay una segunda barra
            return null;
        }
        
    } else {
        // Si no hay una barra en absoluto
        return null;
    }
    
}

function getPage( currPage, firstUrlTerm  ){
  
  let dataPage = "";

  if( currPage === '' ){
    dataPage = 'home';
  }else if( currPage != firstUrlTerm ){
    dataPage = firstUrlTerm;
  }else {
    dataPage = currPage;
  }

  return dataPage;

}

const $$Astro$d = createAstro();
const $$Brand = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Brand;
  const homeUrl = "";
  return renderTemplate`${maybeRenderHead()}<a class="brand"${addAttribute(homeUrl, "href")} data-astro-prefetch="hover" data-astro-cid-7eczacpb> <div class="xg:hidden" data-astro-cid-7eczacpb>MCD</div> <div class="hidden xg:block" data-astro-cid-7eczacpb>
M<span data-astro-cid-7eczacpb>artín</span> C<span data-astro-cid-7eczacpb>orbo</span> D<span data-astro-cid-7eczacpb>esign</span> </div> </a>`;
}, "C:/PROYECTOS/MC/src/components/Brand.astro", void 0);

const $$Astro$c = createAstro();
const $$MoreInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$MoreInfo;
  return renderTemplate`${maybeRenderHead()}<div class="more-info"> <span>+</span> <span>-</span>
Information
</div>`;
}, "C:/PROYECTOS/MC/src/components/MoreInfo.astro", void 0);

const $$Astro$b = createAstro();
const $$CurrenTime = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CurrenTime;
  let now = /* @__PURE__ */ new Date();
  let options = { timeZone: "America/Montevideo", hour12: true, hour: "2-digit", minute: "2-digit" };
  let formattedTime = now.toLocaleTimeString("en-US", options);
  return renderTemplate`${maybeRenderHead()}<span class="time block h-fit">${formattedTime}</span>`;
}, "C:/PROYECTOS/MC/src/components/CurrenTime.astro", void 0);

const $$Astro$a = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="container row"> <div class="col-[1/4] xg:col-[1/6]"> ${renderComponent($$result, "Brand", $$Brand, {})} </div> <div class="col-[4/9] xg:col-[6/10]"> ${renderComponent($$result, "MoreInfo", $$MoreInfo, {})} </div> <div class="col-[9/13] xg:col-[10/13] flex justify-end"> ${renderComponent($$result, "CurrenTime", $$CurrenTime, {})} </div> </header>`;
}, "C:/PROYECTOS/MC/src/layout/Header.astro", void 0);

function getHoy() {
    // Obtén la fecha actual
    const fechaActual = new Date();

    // Obtiene el día actual
    const dia = fechaActual.getDate();

    // Obtiene el mes actual (se le suma +1 porque los meses en JavaScript comienzan en 0)
    const mes = fechaActual.getMonth() + 1;

    // Obtiene el año actual
    const anio = fechaActual.getFullYear();

    // Formatea la fecha en el formato deseado
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    // Retorna la fecha formateada
    return fechaFormateada;
}

const $$Astro$9 = createAstro();
const $$FooterContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FooterContent;
  const HOY = getHoy();
  const RESPONSE = await fetch("https://martincorbo.com/api/wp-json/acf/v3/options/options");
  const OPTIONS = await RESPONSE.json();
  const CREDITS = OPTIONS.acf.credits;
  return renderTemplate`${maybeRenderHead()}<div class="footer container row"> <div class="col-[1/13] xg:col-[1/6] flex flex-col justify-between"> <h2 class="mb-2">Credits</h2> <div class="hidden md:block">© 2024 Martín Corbo</div> </div> <div class="col-[1/13] xg:col-[6/13] mb-7 md:mb-0"> <p class="mb-0"> ${CREDITS} </p> </div> <div class="col-[1/7] md:hidden">© ${HOY} Martín Corbo</div> <div class="col-[7/13] text-right md:hidden"> <a href="#top" class="underline">Back to top</a> </div> </div>`;
}, "C:/PROYECTOS/MC/src/sections/FooterContent.astro", void 0);

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentPath = Astro2.url.pathname;
  const currPage = getSlug(currentPath);
  const firstUrlTerm = getFirstURLTerm(currentPath);
  const dataPage = getPage(currPage, firstUrlTerm);
  return renderTemplate`${maybeRenderHead()}<footer> ${dataPage !== "case" && dataPage !== "pass" && renderTemplate`${renderComponent($$result, "FooterContent", $$FooterContent, {})}`} </footer>`;
}, "C:/PROYECTOS/MC/src/layout/Footer.astro", void 0);

const $$Astro$7 = createAstro();
const $$Favicon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Favicon;
  return renderTemplate`<link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#000000"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff">`;
}, "C:/PROYECTOS/MC/src/components/Favicon.astro", void 0);

const title = "AstroBox";
const description = "El mejor framework para crear sitios";
const author = {
	name: "I+D",
	url: "https://id.net.uy"
};
const image = {
	src: "/img/120x600.svg",
	alt: "AstroBox"
};
const seoGlobal = {
	title: title,
	description: description,
	author: author,
	image: image
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$Seo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title, claim, description, image, robots } = Astro2.props;
  const site = void 0;
  const baseUrl = "/";
  return renderTemplate(_a || (_a = __template(["<!-- Basic Metas --><title>", " — ", '</title><meta name="description"', "><base", ' target="_self"><!-- Canonical --><link rel="canonical"', '><!-- Open Graph --><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:url"', '><meta property="og:image:secure_url"', '><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"', '><!-- Twitter --><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><meta name="twitter:domain"', '><meta name="author"', ">", '<!-- JSON LD --><script type="application/ld+json">\n    {\n      "@context": "https://schema.org/",\n      "@type": "Website",\n      "name": "Tìtulo del snippet",\n      "url": "https//dominio.com"\n    }\n</script>'])), title, claim, addAttribute(description, "content"), addAttribute(baseUrl, "href"), addAttribute(Astro2.url, "href"), addAttribute(seoGlobal.title, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(image?.src || seoGlobal.image.src, "content"), addAttribute(image?.src || seoGlobal.image.src, "content"), addAttribute(image?.src || seoGlobal.image.src, "content"), addAttribute(image?.alt || seoGlobal.image.alt, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image?.src || seoGlobal.image.src, "content"), addAttribute(title, "content"), addAttribute(site, "content"), addAttribute(`web: [${seoGlobal.author.name}]: ${seoGlobal.author.url}`, "content"), robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`);
}, "C:/PROYECTOS/MC/src/components/Seo.astro", void 0);

const $$Astro$5 = createAstro();
const $$PreFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PreFooter;
  const RESPONSE = await fetch("https://martincorbo.com/api/wp-json/acf/v3/options/options");
  const OPTIONS = await RESPONSE.json();
  const IMPRINT = OPTIONS.acf.imprint;
  const TOUCH = OPTIONS.acf.get_touch;
  const SOCIAL = OPTIONS.acf.social;
  const currPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<section class="section container"> <div class="row section-b"> <div class="col-[1/7] xg:col-[1/6]"> <h2>Get in Touch</h2> </div> <div class="col-[7/13] xg:col-[6/10]"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(TOUCH)}` })} </div> <div class="col-[7/13] xg:col-[10/13] hidden md:block text-right"> <a${addAttribute(`${currPath}#top`, "href")} class="smooth"> Back to top</a> </div> </div> <!--/row--> <div class="row section-b"> <div class="col-[1/7] xg:col-[1/6]"> <h3 class="mb-0">Social</h3> </div> <div class="col-[7/13] xg:col-[6/9]"> <ul class="grid grid-cols-2 underline"> ${SOCIAL && SOCIAL.map((red) => renderTemplate`<li> <a${addAttribute(red.link, "href")} target="_blank" rel="noreferrer noopener"> ${red.txt} </a> </li>`)} </ul> </div> </div> <div class="row"> <div class="col-[1/7] xg:col-[1/6]"> <h2>Imprint</h2> </div> <div class="col-[7/13] xg:col-[6/10]"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(IMPRINT)}` })} </div> </div> <!--/row--> </section>`;
}, "C:/PROYECTOS/MC/src/sections/PreFooter.astro", void 0);

const $$Astro$4 = createAstro();
const $$Information = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Information;
  const RESPONSE = await fetch("https://martincorbo.com/api/wp-json/wp/v2/pages?slug=home");
  const HOME = await RESPONSE.json();
  const ACF = HOME[0].acf;
  const ABOUT = ACF.about;
  const WORKS = ACF.work;
  const SERVICES = ACF.services;
  const CASES = ACF.case;
  return renderTemplate`<!-- INFORMATION -->${maybeRenderHead()}<section id="information" class="relative bg-yellow w-full z-[999]" style="display:none"> <div class="header container row py-3"> <div class="col-[1/4] xg:col-[1/6]"> ${renderComponent($$result, "Brand", $$Brand, {})} </div> <div class="col-[4/9] xg:col-[6/10]"> ${renderComponent($$result, "MoreInfo", $$MoreInfo, {})} </div> <div class="col-[9/13] xg:col-[10/13] flex justify-end"> ${renderComponent($$result, "CurrenTime", $$CurrenTime, {})} </div> </div> <!-- About --> <article class="container row section animate anim-on" data-anim="bottom"> <div class="xg:col-[1/6]"> <h2>About</h2> </div> <div class="col-[1/13] xg:col-[6/12]"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ABOUT)}` })} </div> </article> <!-- Experience --> <article class="container row section animate anim-on" data-anim="bottom"> <div class="xg:col-[1/6]"> <h2>Experience</h2> </div> <div class="col-[1/13] xg:col-[6/12] grid grid-cols-2 md:grid-cols-3 gap-2"> ${WORKS && WORKS.map((work) => renderTemplate`<div> <h3 class="mb-2">${work.acfe_flexible_layout_title}</h3> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(work.work_txt)}` })} </div>`)} </div> </article> <!-- Services --> <article class="container row mt-6 mt-md-0 section-b"> <div class="xg:col-[1/6]"> <h2>Services</h2> </div> <div class="col-[1/13] xg:col-[6/12] grid grid-cols-2 md:grid-cols-3 gap-2"> ${SERVICES && SERVICES.map((serv) => renderTemplate`<div> <h3 class="mb-2">${serv.acfe_flexible_layout_title}</h3> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(serv.service_txt)}` })} </div>`)} </div> </article> <!-- SELECTED CASES --> <article class="my-6 xg:my-0"> <div class="container"> <h2 class="mb-6 xg:mb-2">Selected press, awards &amp; recognition</h2> </div> <div class="table line-top w-full"> <ul> ${CASES && CASES.map((caso) => renderTemplate`<li aria-describedby="Case"> <a${addAttribute(caso.link, "href")} class="case" target="_blank" rel="noreferrer noopener"> <div class="col-[1-7] xg:col-[1/6]"> ${caso.acfe_flexible_layout_title} </div> <div class="xg:col-[6/8] hidden md:block"> ${caso.type} </div> <div class="col-[7/13] xg:col-[8/13]"> <span class="md:hidden">Article:</span> ${caso.company} </div> </a> </li>`)} </ul> </div> </article> <!-- Get in touch / Imprint --> ${renderComponent($$result, "PreFooter", $$PreFooter, {})} ${renderComponent($$result, "FooterContent", $$FooterContent, {})} </section>`;
}, "C:/PROYECTOS/MC/src/sections/Information.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentPath = Astro2.url.pathname;
  const currPage = getSlug(currentPath);
  const firstUrlTerm = getFirstURLTerm(currentPath);
  const dataPage = getPage(currPage, firstUrlTerm);
  const {
    title = "Martin Corbo Design",
    claim = "Frase Coooool!",
    description = "Descripci\xF3n de 150 caracteres",
    image,
    robots
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8">${renderComponent($$result, "Favicon", $$Favicon, {})}<meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "Seo", $$Seo, { "title": title, "claim": claim, "description": description, "image": image, "robots": robots })}<meta http-equiv="cleartype" content="on"><meta name="MobileOptimized" content="width"><meta name="HandheldFriendly" content="true"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="format-detection" content="telephone=no">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body id="top"${addAttribute(dataPage, "data-page")} data-scroll="top" data-info="off"> ${currPage !== "thanks" && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Information", $$Information, {})} ${currPage !== "thanks" && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`}  </body> </html>`;
}, "C:/PROYECTOS/MC/src/layout/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$PictureVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PictureVideo;
  const { item = "", style = "", ext = "jpeg", layout = "", anim = "" } = Astro2.props;
  let webpUrl = "";
  let itemUrl = "";
  let alt = "";
  let video = false;
  let autoplay = "";
  function cleanAlt(texto) {
    return texto.replace(/-/g, "");
  }
  if (layout == "Imagen") {
    video = false;
    itemUrl = item.img.url;
    webpUrl = itemUrl.replace(/\.(png|jpg)$/i, ".webp");
    alt = cleanAlt(item.img.title);
  } else {
    video = true;
    itemUrl = item.video_url;
  }
  if (item.autoplay) {
    autoplay = "autoplay";
  }
  return renderTemplate`${!video ? renderTemplate`${maybeRenderHead()}<picture data-astro-cid-o3knajxq><source${addAttribute(webpUrl, "srcset")} type="image/webp" data-anim="bottom" data-astro-cid-o3knajxq><source${addAttribute(itemUrl, "srcset")}${addAttribute(`image/${ext}`, "type")} data-astro-cid-o3knajxq><img${addAttribute(style, "class")}${addAttribute(itemUrl, "src")}${addAttribute(alt, "alt")} decoding="async" data-astro-cid-o3knajxq></picture>` : video && renderTemplate`<video class="w-full aspect-video" preload controls muted playsinline loop${addAttribute(itemUrl, "src")}${addAttribute(autoplay, "autoplay")} type="video/mp4" data-astro-cid-o3knajxq></video>`}`;
}, "C:/PROYECTOS/MC/src/components/PictureVideo.astro", void 0);

const $$Astro$1 = createAstro();
const $$MoreLess = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MoreLess;
  return renderTemplate`${maybeRenderHead()}<div class="toggle-info underline" data-toggle="info" data-astro-cid-be5zfk6h> <span data-astro-cid-be5zfk6h>More info</span> <span data-astro-cid-be5zfk6h>Less info</span> </div> `;
}, "C:/PROYECTOS/MC/src/components/MoreLess.astro", void 0);

function charsCodes(text) {

    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['lt', '<'],
        ['gt', '>'],
        ['#39', '\''],
        ['#039', '\''],
        ['#038', '&'],
        ['#047', '/']
    ];

    for (var i = 0; i < entities.length; i++) {
        text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
    }

    return text;

}

function types(types) {

    let typeCount = types.length;
    let result = '';

    types.forEach((t, index) => {
        if (typeCount > 0 && index !== typeCount - 1) {
            result += t.name + ', ';
        } else {
            result += t.name;
        }
    });

    return result;

}

const $$Astro = createAstro();
const prerender = false;
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  const homeUrl = "";
  const currPath = Astro2.url.pathname;
  const getPass = atob(Astro2.url.searchParams.get("p") || "");
  console.log(getPass);
  const { name } = Astro2.params;
  const response = await fetch("https://martincorbo.com/api/wp-json/wp/v2/cases");
  const getCases = await response.json();
  const currCase = getCases.find((item) => item.slug == name);
  const ACF = currCase.acf;
  const PASS = ACF.pass;
  if (PASS != getPass) {
    return Astro2.redirect("/");
  }
  const TITLE = charsCodes(currCase.title.rendered);
  const YEAR = ACF.year;
  const CLIENT = ACF.client[0].name;
  const TYPE = ACF.type;
  const DESC = ACF.desc;
  const GALLERY = ACF.gallery;
  const WEBSITE = ACF.website;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": TITLE, "claim": "Martin Corbo Design.", "description": DESC, "data-astro-cid-qi37o2ia": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="head-info animate anim-on" data-anim="bottom" data-astro-cid-qi37o2ia><div class="container row section-b items-start" data-astro-cid-qi37o2ia><div class="col-[1/13] xg:col-[1/6] mb-3 xg:mb-0" data-astro-cid-qi37o2ia><h1 data-astro-cid-qi37o2ia>${CLIENT}</h1></div><div class="col-[1/7] xg:col-[1/3]" data-astro-cid-qi37o2ia><p data-astro-cid-qi37o2ia>
Year: <br data-astro-cid-qi37o2ia>
Services:
</p></div><div class="col-[7/13] xg:col-[3/6]" data-astro-cid-qi37o2ia><p data-astro-cid-qi37o2ia>${YEAR}<br data-astro-cid-qi37o2ia>${types(TYPE)}</p></div></div><div class="container row section-b" data-astro-cid-qi37o2ia><div class="col-[1/7] xg:hidden" data-astro-cid-qi37o2ia>${renderComponent($$result2, "MoreLess", $$MoreLess, { "data-astro-cid-qi37o2ia": true })}</div>${WEBSITE && renderTemplate`<div class="col-[7/13] xg:hidden" data-astro-cid-qi37o2ia><a${addAttribute(WEBSITE, "href")} class="underline" target="_blank" rel="noreferrer noopener" data-astro-cid-qi37o2ia>
View Live site
</a></div>`}<div class="col-[1/13] xg:col-[1/5] pointer-events-none" data-astro-cid-qi37o2ia><article data-astro-cid-qi37o2ia><h2 class="xg:mb-6 hidden xg:block" data-astro-cid-qi37o2ia>Information</h2><div class="toggle-content" data-toggle="info" data-astro-cid-qi37o2ia><div class="mt-6 xg:mt-0" data-astro-cid-qi37o2ia>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(DESC)}` })}</div></div></article></div></div><div class="hidden xg:block ctr-gap-bottom" data-astro-cid-qi37o2ia><div class="container row place-content-end" data-astro-cid-qi37o2ia><div class="col-[1/13] xg:col-[1/3]" data-astro-cid-qi37o2ia><a${addAttribute(homeUrl, "href")} class="underline" data-astro-cid-qi37o2ia> Back to Index</a></div>${WEBSITE && renderTemplate`<div class="col-[7/13] xg:col-[3/6]" data-astro-cid-qi37o2ia><a${addAttribute(WEBSITE, "href")} class="underline" target="_blank" rel="noreferrer noopener" data-astro-cid-qi37o2ia>
View Live site
</a></div>`}</div></div></section><section id="Gallery" class="container row section-t ctr-gap-bottom animate anim-on" data-anim="bottom" data-astro-cid-qi37o2ia>${GALLERY && renderTemplate`<div class="gallery col-[1/13] xg:col-[6/13] grid gap-2" data-astro-cid-qi37o2ia>${GALLERY.map((item) => {
    return renderTemplate`${renderComponent($$result2, "PictureVideo", $$PictureVideo, { "item": item, "style": "animate", "ext": "webp", "layout": item.acf_fc_layout, "anim": "bottom", "data-astro-cid-qi37o2ia": true })}`;
  })}</div>`}</section><section class="md:hidden ctr-gap-top pb-10" data-astro-cid-qi37o2ia><div class="container row" data-astro-cid-qi37o2ia><div class="col-[1/7]" data-astro-cid-qi37o2ia><a${addAttribute(homeUrl, "href")} class="underline" data-astro-cid-qi37o2ia> Back to Index</a></div><div class="col-[7/13] text-right" data-astro-cid-qi37o2ia><a${addAttribute(`${currPath}#top`, "href")} class="underline" data-astro-cid-qi37o2ia> Back to top</a></div></div></section>` })}`;
}, "C:/PROYECTOS/MC/src/pages/locked/[name].astro", void 0);
const $$file = "C:/PROYECTOS/MC/src/pages/locked/[name].astro";
const $$url = "/locked/[name]";

const _name_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$name,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MoreLess as $, _name_ as _, $$PictureVideo as a, $$Layout as b, charsCodes as c, $$PreFooter as d, types as t };
