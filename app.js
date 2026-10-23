// Coordenadas [lat, lon]. El límite administrativo es el sector catastral LAS AGUAS (003103) de Catastro Bogotá. Los lugares son aproximados.
var ADMIN = [[4.60156,-74.06015],[4.60132,-74.06016],[4.60116,-74.06018],[4.60087,-74.06019],[4.60081,-74.0602],[4.60078,-74.06021],[4.60067,-74.06022],[4.60066,-74.06032],[4.60067,-74.06039],[4.60067,-74.06055],[4.60075,-74.06054],[4.60078,-74.06054],[4.60107,-74.06051],[4.60115,-74.0605],[4.60119,-74.06049],[4.60136,-74.06048],[4.60148,-74.06046],[4.60153,-74.06048],[4.60144,-74.06075],[4.60134,-74.06104],[4.60132,-74.06115],[4.60133,-74.06129],[4.60135,-74.06139],[4.60138,-74.06152],[4.60141,-74.06163],[4.60145,-74.06175],[4.60146,-74.06185],[4.6014,-74.06185],[4.60122,-74.06185],[4.60122,-74.06194],[4.6014,-74.06194],[4.60146,-74.06193],[4.60146,-74.06196],[4.60145,-74.06205],[4.60141,-74.06215],[4.60137,-74.06221],[4.60127,-74.06235],[4.60124,-74.06239],[4.60119,-74.06245],[4.60112,-74.06253],[4.60106,-74.0626],[4.60102,-74.06264],[4.60099,-74.06269],[4.60097,-74.06275],[4.60096,-74.06281],[4.60096,-74.06286],[4.60096,-74.06291],[4.60097,-74.06298],[4.60099,-74.06304],[4.601,-74.06313],[4.601,-74.06325],[4.601,-74.06326],[4.60099,-74.06335],[4.60097,-74.06351],[4.60091,-74.06362],[4.60086,-74.06373],[4.60077,-74.06387],[4.60076,-74.06392],[4.60075,-74.06393],[4.60072,-74.06398],[4.60073,-74.06403],[4.60073,-74.06412],[4.60073,-74.0642],[4.60072,-74.06428],[4.6007,-74.06436],[4.60067,-74.06443],[4.60062,-74.06449],[4.60055,-74.06456],[4.60045,-74.06465],[4.60035,-74.06474],[4.60026,-74.06479],[4.60018,-74.06486],[4.60013,-74.06493],[4.60006,-74.06504],[4.59992,-74.06528],[4.59981,-74.06536],[4.59924,-74.06582],[4.59902,-74.06587],[4.59882,-74.06586],[4.59855,-74.06582],[4.59843,-74.06582],[4.59831,-74.06585],[4.59823,-74.0659],[4.59812,-74.06651],[4.5981,-74.06663],[4.59808,-74.06666],[4.59832,-74.06676],[4.59827,-74.06694],[4.5981,-74.06729],[4.59802,-74.06744],[4.59793,-74.06754],[4.59787,-74.0676],[4.59779,-74.06764],[4.59768,-74.0677],[4.59758,-74.06774],[4.59738,-74.0678],[4.59718,-74.06789],[4.59703,-74.06797],[4.59697,-74.06803],[4.59694,-74.06806],[4.59694,-74.06808],[4.59693,-74.06811],[4.59693,-74.06814],[4.59694,-74.06815],[4.59695,-74.06817],[4.59697,-74.06819],[4.59699,-74.06821],[4.59701,-74.06822],[4.59704,-74.06822],[4.59805,-74.0679],[4.59806,-74.0679],[4.59807,-74.0679],[4.59808,-74.06789],[4.59809,-74.06789],[4.5981,-74.0679],[4.59811,-74.0679],[4.59812,-74.0679],[4.59813,-74.0679],[4.59814,-74.0679],[4.59814,-74.06791],[4.59815,-74.06791],[4.59816,-74.06791],[4.59816,-74.06792],[4.59817,-74.06792],[4.59818,-74.06792],[4.59818,-74.06793],[4.59819,-74.06793],[4.59819,-74.06794],[4.5982,-74.06794],[4.5982,-74.06795],[4.59821,-74.06795],[4.59821,-74.06796],[4.59822,-74.06796],[4.59822,-74.06797],[4.59823,-74.06798],[4.59823,-74.06799],[4.59824,-74.068],[4.59824,-74.06801],[4.59824,-74.06802],[4.59825,-74.06803],[4.59825,-74.06804],[4.59825,-74.06805],[4.59825,-74.06806],[4.59825,-74.06807],[4.59825,-74.06808],[4.59825,-74.06809],[4.59824,-74.0681],[4.59824,-74.06811],[4.59824,-74.06812],[4.59823,-74.06813],[4.59823,-74.06814],[4.59822,-74.06815],[4.59822,-74.06816],[4.59821,-74.06816],[4.59821,-74.06817],[4.59786,-74.06845],[4.59792,-74.06856],[4.59851,-74.0682],[4.59866,-74.06843],[4.59948,-74.06966],[4.59951,-74.06965],[4.59958,-74.06959],[4.59994,-74.06932],[4.60024,-74.06912],[4.60038,-74.06906],[4.60046,-74.06921],[4.6006,-74.06945],[4.60069,-74.06939],[4.60082,-74.0694],[4.60087,-74.06915],[4.60093,-74.06901],[4.60099,-74.06889],[4.60157,-74.06889],[4.60312,-74.06826],[4.60333,-74.06816],[4.60463,-74.06746],[4.60524,-74.06712],[4.60558,-74.06696],[4.60585,-74.06677],[4.60591,-74.06687],[4.60653,-74.06645],[4.6067,-74.06644],[4.60698,-74.06646],[4.60746,-74.0665],[4.60762,-74.06649],[4.60768,-74.06647],[4.60775,-74.06643],[4.60786,-74.06641],[4.6082,-74.06635],[4.60838,-74.06632],[4.60852,-74.06632],[4.60874,-74.06614],[4.60875,-74.06599],[4.60865,-74.06618],[4.60785,-74.06614],[4.6075,-74.06601],[4.60743,-74.06584],[4.60733,-74.06581],[4.60704,-74.06572],[4.60682,-74.06566],[4.60671,-74.06561],[4.60652,-74.06554],[4.60628,-74.06542],[4.60604,-74.06525],[4.60572,-74.06502],[4.60562,-74.06494],[4.60561,-74.06494],[4.60533,-74.06475],[4.60443,-74.06443],[4.60422,-74.06434],[4.60349,-74.06402],[4.60348,-74.06402],[4.60346,-74.06385],[4.60345,-74.0637],[4.60344,-74.06351],[4.60342,-74.06323],[4.6034,-74.06307],[4.60339,-74.06296],[4.60338,-74.06292],[4.60335,-74.06273],[4.60333,-74.06259],[4.60332,-74.06254],[4.6033,-74.06249],[4.60329,-74.06245],[4.60327,-74.06241],[4.60323,-74.06227],[4.60315,-74.06206],[4.60228,-74.06021],[4.60219,-74.06006],[4.60209,-74.06002],[4.602,-74.05999],[4.6019,-74.06],[4.60182,-74.06003],[4.60175,-74.06008],[4.60168,-74.06016],[4.60164,-74.06013],[4.60164,-74.06014],[4.60156,-74.06015]];
var VERACRUZ = [[4.60692,-74.0738],[4.6067,-74.07346],[4.60581,-74.07209],[4.60312,-74.06826],[4.60157,-74.06889],[4.60099,-74.06889],[4.60093,-74.06901],[4.60087,-74.06915],[4.60082,-74.0694],[4.60082,-74.06943],[4.60083,-74.0701],[4.60077,-74.07043],[4.60055,-74.07113],[4.60082,-74.07199],[4.60088,-74.0725],[4.60112,-74.07284],[4.6014,-74.07332],[4.60163,-74.0732],[4.60169,-74.07328],[4.60176,-74.07341],[4.60173,-74.07342],[4.60178,-74.0735],[4.60176,-74.07351],[4.60198,-74.07387],[4.60206,-74.07399],[4.60208,-74.07398],[4.60218,-74.07413],[4.60212,-74.07416],[4.6022,-74.0743],[4.60219,-74.07464],[4.60224,-74.07483],[4.60227,-74.07499],[4.60228,-74.07524],[4.60225,-74.07547],[4.60217,-74.07596],[4.60212,-74.07666],[4.60389,-74.0756],[4.6064,-74.0741],[4.60692,-74.0738]];
var HOME = [4.60296, -74.06948], UNI = [4.60295, -74.06496];
var ROUTE = [[4.60296,-74.06948],[4.60285,-74.06954],[4.60269,-74.06924],[4.60314,-74.06905],[4.60347,-74.06892],[4.60328,-74.06864],[4.60312,-74.06841],[4.60303,-74.06821],[4.60299,-74.06811],[4.60303,-74.0679],[4.60307,-74.06786],[4.60296,-74.06778],[4.60281,-74.06751],[4.60277,-74.06709],[4.60296,-74.0668],[4.60307,-74.06631],[4.60319,-74.06561],[4.60318,-74.06526],[4.60295,-74.06496]];
// Categorías: comida, tienda, ocio. Todas las posiciones están ubicadas; para moverlas usa "Ubicar mis lugares".
var PLACES = [
  ["Empanadas de Henry", 4.60155, -74.06768, "comida"],
  ["El Corral", 4.60334, -74.06721, "comida"],
  ["Central X", 4.60251, -74.06913, "comida"],
  ["Crepes & Waffles", 4.60298, -74.06742, "comida"],
  ["One Burrito 1", 4.60264, -74.06694, "comida"],
  ["City U", 4.60321, -74.06723, "ocio"],
  ["Arepas", 4.60268, -74.06938, "comida"],
  ["Cafetería 1", 4.60143, -74.06775, "comida"],
  ["Box Plaza", 4.60382, -74.06605, "comida"],
  ["Chick n Chips", 4.60436, -74.06535, "comida"],
  ["Frijol y Ajiacos", 4.60353, -74.06574, "comida"],
  ["Hornitos", 4.60331, -74.06674, "comida"],
  ["Doña Blanca", 4.60332, -74.0662, "comida"],
  ["Cinemateca", 4.60331, -74.06756, "ocio"],
  ["El Mono Papelería", 4.60392, -74.066, "tienda"],
  ["Olímpica", 4.60306, -74.06875, "tienda"],
  ["D1", 4.60357, -74.06816, "tienda"],
  ["Ara", 4.60328, -74.06692, "tienda"],
  ["Oxxo 1", 4.60397, -74.0672, "tienda"],
  ["Oxxo 2", 4.60359, -74.06527, "tienda"],
  ["Oxxo 3", 4.60248, -74.06873, "tienda"],
  ["One Burrito 2", 4.60361, -74.0649, "comida"],
  ["Cafetería 2", 4.602, -74.06742, "comida"],
  ["La Gata Golosa", 4.60039, -74.06311, "ocio"],
  ["Centro comercial", 4.60352, -74.0699, "tienda"]
];
// Pega aquí las coordenadas que te da el botón "Copiar coordenadas" después de dibujar.
var PERCEIVED = [[4.60237,-74.06935],[4.60309,-74.07066],[4.60444,-74.07023],[4.60406,-74.06961],[4.6035,-74.06884],[4.6044,-74.06839],[4.60391,-74.06751],[4.60466,-74.06709],[4.60429,-74.06633],[4.6049,-74.06595],[4.6046,-74.06538],[4.60394,-74.06493],[4.60347,-74.06469],[4.60328,-74.0649],[4.60286,-74.06432],[4.60216,-74.06467],[4.60181,-74.06391],[4.60145,-74.06327],[4.60119,-74.06311],[4.60095,-74.0628],[4.60114,-74.0624],[4.60019,-74.0621],[4.59955,-74.06271],[4.59915,-74.06356],[4.59998,-74.06388],[4.60059,-74.06404],[4.60083,-74.06416],[4.60045,-74.0647],[4.60002,-74.06525],[4.60022,-74.06572],[4.60068,-74.06629],[4.60094,-74.06672],[4.60119,-74.06695],[4.60136,-74.06727],[4.60119,-74.06741],[4.6012,-74.06756],[4.60134,-74.06786],[4.60142,-74.06795],[4.60213,-74.06744],[4.60236,-74.06732],[4.60263,-74.06753],[4.60291,-74.06779],[4.60299,-74.06795],[4.60291,-74.06833],[4.60227,-74.06861],[4.60206,-74.06873],[4.60221,-74.06911]];

var map = L.map("map", { minZoom: 15, maxZoom: 19, maxBoundsViscosity: 0.9 }).setView([4.6005, -74.0655], 16);
map.setMaxBounds([[4.5930, -74.0790], [4.6110, -74.0520]]);
var calles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19, attribution: "&copy; colaboradores de OpenStreetMap"
}).addTo(map);
var satelite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19, attribution: "Imágenes &copy; Esri"
});

var css = getComputedStyle(document.documentElement);
function tok(n) { return css.getPropertyValue(n).trim(); }
var water = tok("--water"), brick = tok("--brick"), leaf = tok("--leaf"), vera = tok("--vera"), lim = tok("--lim");

var admin = L.polygon(ADMIN, { color: water, weight: 5, opacity: 1, fillColor: water, fillOpacity: 0.16 }).bindTooltip("Sector catastral Las Aguas (003103)");
var veracruz = L.polygon(VERACRUZ, { color: vera, weight: 5, opacity: 1, fillColor: vera, fillOpacity: 0.16 }).bindTooltip("Sector catastral La Veracruz (003109), donde vivo oficialmente");
var perceived = L.polygon(PERCEIVED.length ? PERCEIVED : [], { color: lim, weight: 5, opacity: 1, dashArray: "12 8", fillColor: lim, fillOpacity: 0.16 }).bindTooltip("Mi límite percibido");
var route = L.polyline(ROUTE, { color: "#111", weight: 5, opacity: 0.85 }).bindTooltip("Ruta a pie a la U");
var CAT = { comida: leaf, tienda: water, ocio: brick };
var placeMarkers = PLACES.map(function (p) {
  return L.circleMarker([p[1], p[2]], { radius: 8, color: "#fff", weight: 2, fillColor: CAT[p[3]], fillOpacity: 1 }).bindTooltip(p[0]);
});
function grupo(c) { return L.layerGroup(placeMarkers.filter(function (m, k) { return PLACES[k][3] === c; })); }
var comida = grupo("comida"), tiendas = grupo("tienda"), ocio = grupo("ocio");
var homeMarker = L.marker(HOME).bindTooltip("Zona de mi casa");
var uniMarker = L.marker(UNI).bindTooltip("Universidad de los Andes");
var marks = L.layerGroup([homeMarker, uniMarker]);
[admin, veracruz, perceived, route, comida, tiendas, ocio, marks].forEach(function (l) { l.addTo(map); });
L.control.layers({ "Calles": calles, "Satélite": satelite }, {
  "Las Aguas (sector oficial)": admin, "La Veracruz (sector oficial)": veracruz, "Límite percibido": perceived,
  "Ruta a la universidad": route, "Comida": comida, "Tiendas": tiendas, "Ocio, deporte y cultura": ocio, "Casa y universidad": marks
}, { collapsed: false }).addTo(map);

// Selfie: elige un archivo y se muestra en la página (solo en tu navegador).
var inp = document.getElementById("selfie");
if (inp) inp.addEventListener("change", function () {
  var f = inp.files && inp.files[0]; if (!f) return;
  var r = new FileReader();
  r.onload = function () { var img = new Image(); img.alt = "Selfie"; img.src = r.result; inp.parentNode.replaceChildren(img); };
  r.readAsDataURL(f);
});

// Tarjetas: al tocar una, el mapa va hasta sus puntos y los resalta un momento.
var mapEl = document.getElementById("map");
function verEnMapa(card) {
  var nombres = card.getAttribute("data-lugares").split("|");
  var ms = placeMarkers.filter(function (m, k) { return nombres.indexOf(PLACES[k][0]) !== -1; });
  if (!ms.length) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  mapEl.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  var pts = ms.map(function (m) { return m.getLatLng(); });
  if (pts.length === 1) map.flyTo(pts[0], 18, { duration: reduce ? 0 : 0.8 });
  else map.flyToBounds(L.latLngBounds(pts), { maxZoom: 18, padding: [60, 60], duration: reduce ? 0 : 0.8 });
  ms.forEach(function (m) {
    m.setStyle({ radius: 14, weight: 4, color: lim }); m.openTooltip();
    setTimeout(function () { m.setStyle({ radius: 8, weight: 2, color: "#fff" }); m.closeTooltip(); }, 3500);
  });
}
Array.prototype.forEach.call(document.querySelectorAll(".places li[data-lugares]"), function (card) {
  card.addEventListener("click", function (e) { if (e.target.tagName !== "A") verEnMapa(card); });
  card.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); verEnMapa(card); } });
});

// Cifras: se calculan con los mismos datos del mapa.
function metros(p, q) { return map.distance(p, q); }
var dist = 0; for (var d = 0; d < ROUTE.length - 1; d++) dist += metros(ROUTE[d], ROUTE[d + 1]);
var set = function (id, v) { var e = document.getElementById(id); if (e) e.textContent = v; };
set("st-lugares", PLACES.length);
set("st-comida", PLACES.filter(function (p) { return p[3] === "comida"; }).length);
set("st-dist", Math.round(dist / 10) * 10 + " m");

// Herramienta para ubicar lugares: elige uno en la lista y haz clic en el mapa.
var placePanel = document.getElementById("place-panel"), tool = document.getElementById("tool"), pout = document.getElementById("place-code");
if (placePanel && /[?&]ubicar/.test(location.search)) {
placePanel.hidden = false; map.getContainer().style.cursor = "crosshair";
tool.innerHTML = PLACES.map(function (p, i) { return '<option value="p' + i + '">' + p[0] + '</option>'; }).join("") +
  '<option value="home">Zona de mi casa</option><option value="uni">Universidad de los Andes</option><option value="route">Ruta (clic en cada giro)</option>';
tool.addEventListener("change", function () {
  if (tool.value === "route") { ROUTE = [HOME, UNI]; route.setLatLngs(ROUTE); pcode(); }
});
function r5(n) { return +n.toFixed(5); }
function pcode() {
  pout.value = "var HOME = " + JSON.stringify([r5(HOME[0]), r5(HOME[1])]) + ", UNI = " + JSON.stringify([r5(UNI[0]), r5(UNI[1])]) + ";\n" +
    "var ROUTE = " + JSON.stringify(ROUTE.map(function (q) { return [r5(q[0]), r5(q[1])]; })) + ";\n" +
    "var PLACES = " + JSON.stringify(PLACES.map(function (p) { return [p[0], r5(p[1]), r5(p[2]), p[3]]; })) + ";";
}
map.on("click", function (e) {
  if (placePanel.hidden) return;
  var ll = [e.latlng.lat, e.latlng.lng], v = tool.value;
  if (v === "home") { HOME = ll; homeMarker.setLatLng(ll); ROUTE[0] = ll; }
  else if (v === "uni") { UNI = ll; uniMarker.setLatLng(ll); ROUTE[ROUTE.length - 1] = ll; }
  else if (v === "route") { ROUTE.splice(ROUTE.length - 1, 0, ll); }
  else { var i = +v.slice(1); PLACES[i][1] = ll[0]; PLACES[i][2] = ll[1]; placeMarkers[i].setLatLng(ll); }
  route.setLatLngs(ROUTE); pcode();
});
document.getElementById("copy-place").addEventListener("click", function () {
  pout.select();
  try { navigator.clipboard.writeText(pout.value); } catch (e) { document.execCommand("copy"); }
});
pcode();
}
