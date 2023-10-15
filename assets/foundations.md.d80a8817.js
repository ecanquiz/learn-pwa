import{_ as e,o as a,c as o,S as s}from"./chunks/framework.0335e7b7.js";const n="/learn-pwa/assets/foundations-1.8646c7fc.mp4",v=JSON.parse('{"title":"Fundamentos","description":"","frontmatter":{},"headers":[],"relativePath":"foundations.md","filePath":"foundations.md"}'),i={name:"foundations.md"},r=s('<h1 id="fundamentos" tabindex="-1">Fundamentos <a class="header-anchor" href="#fundamentos" aria-label="Permalink to &quot;Fundamentos&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://web.dev/learn/pwa/foundations/" target="_blank" rel="noreferrer">aquí</a></p></div><h1 id="un-fundamento-solido" tabindex="-1">Un fundamento sólido <a class="header-anchor" href="#un-fundamento-solido" aria-label="Permalink to &quot;Un fundamento sólido&quot;">​</a></h1><p>Un fundamento sólido es el requisito básico para crear excelentes PWA. Para implementar este fundamento, necesita diseñar y codificar las limitaciones de la web utilizando un par de principios:</p><ul><li><p>Utilice el móvil como limitación de enfoque. Asegúrese de que cada vista de su diseño se centre únicamente en el contenido y las interacciones esenciales.</p></li><li><p>Enfatice el contenido y la funcionalidad principal en el proceso de diseño.</p></li><li><p>Mejorar progresivamente cuando sea necesario. Empiece por crear el contenido y la funcionalidad principales de un componente con las herramientas más sencillas y disponibles. Hazlo accesible. Luego, pruebe las funciones avanzadas que le gustaría utilizar y mejore su componente con ellas.</p></li><li><p>Ofrezca una experiencia de usuario rápida y buena centrada en métricas de rendimiento web centradas en el usuario, obtenga métricas de usuario reales y mejore el rendimiento para todos sus usuarios, sin importar su conexión de red, tipo de entrada, potencia de CPU o GPU.</p></li></ul><div class="tip custom-block"><p class="custom-block-title">Nota</p><p>La accesibilidad es clave para una PWA exitosa. Siga <a href="https://web.dev/articles/pwa-checklist#:~:text=to%20cached%20content%20or%20an%20offline%20indicator%20as%20needed.-,is%20fully%20accessible" target="_blank" rel="noreferrer">estas pautas</a> para asegurarse de que cualquier persona pueda acceder a su aplicación, en cualquier lugar.</p></div><p>Si sigue estos principios y los mejora con patrones y funciones web modernos, puede crear experiencias excelentes y rápidas con diseños verdaderamente intrínsecos. Diseños que son potenciados con restricciones en lugar de píxeles, lo que permite a cada usuario acceder a su contenido y funcionalidad principal de la manera que mejor se adapte a su contexto de navegación particular.</p><h2 id="diseno-web-adaptable" tabindex="-1">Diseño web adaptable <a class="header-anchor" href="#diseno-web-adaptable" aria-label="Permalink to &quot;Diseño web adaptable&quot;">​</a></h2><p>Desde el artículo <em>A List Apart de 2010 de Ethan Marcotte</em>, <a href="https://alistapart.com/article/responsive-web-design/" target="_blank" rel="noreferrer">Responsive Web Design</a>, se ha alentado a los diseñadores y desarrolladores a crear experiencias flexibles, creando interfaces de usuario que funcionen en un espectro de tamaños de pantalla y dispositivos.</p><p>Sin embargo, en algún momento, eso se redujo a tamaños de dispositivos móviles, tabletas y computadoras de escritorio, con anchos fuertemente influenciados por los tamaños de pantalla de iOS. Con CSS moderno y un enfoque renovado en la intención original del diseño responsivo, Podemos volver a colocar el <em>squish</em> en sitios <em>squishy</em>.</p><p>El diseño web responsivo introduce tres ingredientes técnicos:</p><ul><li><em>Fluid grids</em></li><li><em>Flexible media</em></li><li><em>Media queries</em></li></ul><p>Ethan concluye que estos requisitos técnicos no son suficientes; El camino a seguir también requiere una forma diferente de pensar.</p><h2 id="el-mito-del-usuario-movil" tabindex="-1">El mito del usuario móvil <a class="header-anchor" href="#el-mito-del-usuario-movil" aria-label="Permalink to &quot;El mito del usuario móvil&quot;">​</a></h2><p>En los primeros días del diseño responsivo, se hacían suposiciones con el fin de hacer que los sitios fueran más fáciles de diseñar. Por ejemplo, las experiencias pequeñas eran para teléfonos y tenían un ancho de 320 px, las experiencias medianas eran para tabletas y tenían un ancho de 1024 px, y cualquier cosa más grande era para computadoras de escritorio. Las pantallas pequeñas tenían capacidades táctiles, las pantallas grandes no. Los usuarios de teléfonos estaban apresurados y distraídos y, por lo tanto, necesitaban una experiencia &quot;ligera&quot;.</p><p>Nada de esto es verdad; son mitos móviles perpetuados por la suposición de que las necesidades de un usuario son fundamentalmente diferentes basándose únicamente en el tamaño de la pantalla o el tipo de dispositivo. Esto no resiste el escrutinio.</p><p>Tomemos, por ejemplo, una PWA de red social que puede instalar hoy en dispositivos móviles y de escritorio. En el escritorio, muchos usuarios pueden mantener una ventana estrecha con el <em>feed</em> a un lado de la pantalla mientras trabajan, y suponer que están en un dispositivo móvil debido al ancho disponible sería incorrecto.</p><p>El mundo PWA que está fuera de la pestaña del navegador incluso está agregando nuevos desafíos al mundo del diseño responsivo, como el modo mini y el trabajo con dispositivos plegables.</p><h2 id="modo-mini" tabindex="-1">Modo mini <a class="header-anchor" href="#modo-mini" aria-label="Permalink to &quot;Modo mini&quot;">​</a></h2><p>Con una PWA instalada en un dispositivo de escritorio, una ventana puede volverse muy pequeña; más pequeño que la ventana de un navegador, más pequeño que una ventana gráfica móvil. Esto es algo nuevo en la web: podemos admitir un modo mini, una ventana que puede ser tan pequeña como 200x100 píxeles CSS.</p><p>Al crear una PWA hoy en día, es una buena idea pensar en qué ofrecer en modo mini, gracias al diseño web responsivo, como solo botones de control en un reproductor de música, información del tablero o acciones rápidas.</p><video controls><source src="'+n+'"></video><p>En el escritorio, una PWA se puede representar en una ventana más pequeña que la ventana más pequeña que haya diseñado para el navegador. Agrega un nuevo punto de interrupción para su diseño web responsivo: el modo mini.</p><h2 id="plegables-e-hibridos" tabindex="-1">Plegables e híbridos <a class="header-anchor" href="#plegables-e-hibridos" aria-label="Permalink to &quot;Plegables e híbridos&quot;">​</a></h2><p>Los dispositivos plegables e híbridos también son comunes hoy en día:</p><ul><li>Pequeños teléfonos plegables.</li><li>Dispositivos plegables que pueden usarse como teléfonos o <em>tablets</em>.</li><li>Portátiles que se pueden transformar en <em>tablets</em>.</li><li><em>Tablets</em> que pueden actuar como portátiles con teclado y <em>trackpad</em> (panel táctil).</li><li>Luego, los teléfonos se pueden convertir en computadoras de escritorio con un concentrador.</li></ul><p>Si bien el desafío existe para todos los sitios web, con una Aplicación Web Progresiva usted tiene el control y es responsable de la ventana cuando se instala la aplicación. Por tanto, tu diseño debe reaccionar y ofrecer la mejor experiencia en cada contexto.</p><div class="tip custom-block"><p class="custom-block-title">Nota</p><p>Se está volviendo común transferir la navegación de una aplicación entre dispositivos, por lo que su PWA se puede representar en un reloj inteligente después de recibir una notificación; la navegación se puede transferir a un teléfono y luego a una computadora portátil. La compatibilidad con todos los modos y dispositivos es clave para evitar la frustración del usuario.</p></div><h2 id="everything-first" tabindex="-1">Everything first <a class="header-anchor" href="#everything-first" aria-label="Permalink to &quot;Everything first&quot;">​</a></h2><p><a href="https://web.dev/learn/pwa/foundations/#everything_first" target="_blank" rel="noreferrer">https://web.dev/learn/pwa/foundations/#everything_first</a></p>',30),t=[r];function l(d,c,u,p,m,b){return a(),o("div",null,t)}const h=e(i,[["render",l]]);export{v as __pageData,h as default};