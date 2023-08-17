import{_ as e,v as a,b as s,R as o}from"./chunks/framework.a7c22432.js";const y=JSON.parse('{"title":"Requisitos mínimos de PWA","description":"","frontmatter":{},"headers":[],"relativePath":"pwa-for-vite/minimal-requirements.md","filePath":"pwa-for-vite/minimal-requirements.md"}'),r={name:"pwa-for-vite/minimal-requirements.md"},n=o(`<h1 id="requisitos-minimos-de-pwa" tabindex="-1">Requisitos mínimos de PWA <a class="header-anchor" href="#requisitos-minimos-de-pwa" aria-label="Permalink to &quot;Requisitos mínimos de PWA&quot;">​</a></h1><p>Con el paso anterior solo se logró mostrar el &quot;icono de instalación&quot; en los navegadores compatibles. Sin embargo, se deben incluir más opciones de configuración para cumplir con los requisitos mínimos de PWA antes de implementarla en producción o al probar su compilación en local. Como crear el Manifiesto y el Trabajador de Servicio cuando crea su aplicación web.</p><h2 id="registrar-el-trabajador-de-servicio" tabindex="-1">Registrar el Trabajador de Servicio <a class="header-anchor" href="#registrar-el-trabajador-de-servicio" aria-label="Permalink to &quot;Registrar el Trabajador de Servicio&quot;">​</a></h2><p>El <a href="https://vite-pwa-org.netlify.app/guide/register-service-worker.html#register-service-worker" target="_blank" rel="noreferrer">complemento <code>vite-plugin-pwa</code> registrará el <strong><em>service worker</em></strong> automáticamente</a> para usted, utilizando la opción de configuración <code>injectRegister</code> (optional).</p><p>Si desea configurar la opción del complemento <code>injectRegister</code>:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VitePWA</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-pwa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">VitePWA</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">injectRegister</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>La opción de configuración del complemento <code>injectRegister</code> controlará cómo registrar el <strong><em>service worker</em></strong> en su aplicación:</p><ul><li><a href="https://vite-pwa-org.netlify.app/guide/register-service-worker.html#inline-registration" target="_blank" rel="noreferrer"><code>inline</code></a>: inyecta un <em>script</em> de registro simple, en línea en el punto de entrada de la aplicación.</li><li><a href="https://vite-pwa-org.netlify.app/guide/register-service-worker.html#script-registration" target="_blank" rel="noreferrer"><code>script</code></a>: inyecta una etiqueta de script en el encabezado con el <strong><em>service worker</em></strong> en un registro simple generado</li><li><a href="https://vite-pwa-org.netlify.app/guide/register-service-worker.html#manual-registration" target="_blank" rel="noreferrer"><code>null</code></a> (manual): no hace nada, deberá registrar el <strong><em>service worker</em></strong> usted mismo o importar cualquiera de los módulos virtuales expuestos por el complemento</li><li><a href="https://vite-pwa-org.netlify.app/guide/register-service-worker.html#auto-registration" target="_blank" rel="noreferrer"><code>auto</code></a> (valor predeterminado): depende de si usa alguno de los módulos virtuales expuestos por el complemento, no hará nada o cambiará al modo <code>script</code></li></ul><p>Puede encontrar más información sobre los módulos virtuales expuestos por el complemento en la sección <a href="https://vite-pwa-org.netlify.app/frameworks/" target="_blank" rel="noreferrer">Frameworks</a>.</p><h2 id="precache-del-trabajador-de-servicio" tabindex="-1">Precache del Trabajador de Servicio <a class="header-anchor" href="#precache-del-trabajador-de-servicio" aria-label="Permalink to &quot;Precache del Trabajador de Servicio&quot;">​</a></h2><p>Los <a href="https://vite-pwa-org.netlify.app/guide/#service-worker" target="_blank" rel="noreferrer"><strong><em>Service Worker</em></strong></a> actúan como servidores proxy que interceptan solicitudes entre el navegador y el servidor.</p><p>Dado que vamos a agregar PWA a su aplicación, debemos configurar el <strong><em>service worker</em></strong> para que su aplicación pueda funcionar sin conexión. Para hacer esto, debemos configurar el manifiesto de precaché del <strong><em>service worker</em></strong>, que incluirá todos los recursos de su aplicación (básicamente, debemos indicarle al <strong><em>service worker</em></strong> qué recursos almacenar en el almacenamiento de caché para que pueda usarse para la <code>network requests interception</code> y cuando la aplicación esté fuera de línea).</p><div class="tip custom-block"><p class="custom-block-title">Intercepción de solicitudes de red</p><p>También puede configurar cómo controlar la <code>network requests interception</code> para cualquiera de los recursos de su aplicación.</p><p>Puede encontrar más información en <a href="https://developer.chrome.com/docs/workbox/caching-strategies-overview/#caching-strategies" target="_blank" rel="noreferrer">Workbox - Estrategias de almacenamiento en caché</a>.</p></div><p>Una vez que la aplicación registra al <strong><em>service worker</em></strong>, el navegador intentará instalarlo descargando todos los recursos en el manifiesto de precaché del <strong><em>service worker</em></strong>. Una vez que el navegador haya descargado y almacenado todos los recursos en el almacenamiento de caché, intentará activar el <strong><em>service worker</em></strong> para tomar el control de la aplicación.</p><div class="tip custom-block"><p class="custom-block-title">CONSEJO</p><p>El navegador solo descargará todos los recursos en el manifiesto de precaché del <strong><em>service worker</em></strong> si el <strong><em>service worker</em></strong> no está instalado (la primera vez que el usuario visita su aplicación) o si hay una nueva versión de su aplicación (si cambia algún recurso en su aplicación, el <strong><em>service worker</em></strong> también cambiará una vez que cree la aplicación, ya que su manifiesto de precaché se modifica para incluir sus cambios).</p><p>En cualquier caso, el navegador siempre descargará todos los recursos en un subproceso en segundo plano y no en el subproceso principal del navegador, de esta manera las personas pueden usar la aplicación mientras el navegador intenta instalar el <strong><em>service worker</em></strong>.</p><p>Puede consultar este sitio web o el <a href="https://vueuse.org/" target="_blank" rel="noreferrer">sitio de documentos de VueUse</a> en una ventana privada, simplemente abra la pestaña <code>Network</code> en las <em><strong>dev tools</strong></em>_ antes de visitar los sitios: el navegador comenzará a descargar todos los recursos mientras navega por el sitio.</p></div><h2 id="manifiesto-de-precache" tabindex="-1">Manifiesto de Precaché <a class="header-anchor" href="#manifiesto-de-precache" aria-label="Permalink to &quot;Manifiesto de Precaché&quot;">​</a></h2><p>Dado que el complemento <code>vite-plugin-pwa</code> usa la biblioteca de node <a href="https://developer.chrome.com/docs/workbox/modules/workbox-build/" target="_blank" rel="noreferrer">workbox-build</a> para compilar el <strong><em>service worker</em></strong>, solo incluirá recursos <code>css</code>, <code>js</code> y <code>html</code> en el precaché del manifiesto (verifique la entrada <code>globPatterns</code> en <a href="https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-GlobPartial" target="_blank" rel="noreferrer">GlobPartial</a>).</p><p>La biblioteca de node <code>workbox-build</code> está basada en archivos, es decir, atravesará la carpeta de salida de compilación de su aplicación. <code>Vite</code> generará su compilación en la carpeta <code>dist</code> y, por lo tanto, <code>workbox-build</code> recorrerá la carpeta <code>dist</code> agregando todos los recursos que se encuentran en ella al manifiesto de precaché del <strong><em>service worker</em></strong>.</p><p>Si necesita incluir otros tipos de recursos, deberá agregarlos a la entrada <code>globPatterns</code>. Según la <code>strategy</code> establecida en la configuración del complemento <code>vite-plugin-pwa</code>, deberá agregarlo en la opción de configuración <code>workbox</code> o <code>injectManifest</code>.</p><p>Por ejemplo, si necesita agregar recursos <code>ico</code>, <code>png</code> y <code>svg</code> en el ejemplo de la sección <a href="https://vite-pwa-org.netlify.app/guide/#configuring-vite-plugin-pwa" target="_blank" rel="noreferrer">Configuración de vite-plugin-pwa - Guía</a>, deberá agregar <code>globPatterns</code> en la entrada de la <code>workbox</code>, ya que estamos usando el <code>vite-plugin-pwa</code> predeterminado <em>strategy</em> (<code>generateSW</code>):</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VitePWA</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-pwa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">VitePWA</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">      registerType: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">autoUpdate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">workbox</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">globPatterns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**/*.{js,css,html,ico,png,svg}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="pwa-minimal-requirements" tabindex="-1">PWA Minimal Requirements <a class="header-anchor" href="#pwa-minimal-requirements" aria-label="Permalink to &quot;PWA Minimal Requirements&quot;">​</a></h2><p><a href="https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point" target="_blank" rel="noreferrer">https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point</a></p><h2 id="punto-de-entrada" tabindex="-1">Punto de Entrada <a class="header-anchor" href="#punto-de-entrada" aria-label="Permalink to &quot;Punto de Entrada&quot;">​</a></h2><p><a href="https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point" target="_blank" rel="noreferrer">https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point</a></p><p>Para que su aplicación PWA sea instalable (uno de los requisitos), deberá modificar el punto de entrada de su aplicación, agregar algunas entradas mínimas a su manifiesto de aplicación web, permitir que los motores de búsqueda rastreen todas las páginas de su aplicación y configurar su servidor correctamente (solo para producción, en local puede usar la dependencia y el nodo https-localhost).</p>`,26),l=[n];function t(i,c,p,d,m,u){return a(),s("div",null,l)}const D=e(r,[["render",t]]);export{y as __pageData,D as default};