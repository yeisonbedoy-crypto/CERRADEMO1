# Actualización de servicios.html — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Actualizar `servicios.html` para reflejar los 5 servicios oficiales de Cerratec (eliminando Persianas Metálicas, añadiendo Cerrajería Doméstica y Cerraduras Inteligentes con copy SEO-local) y limpiar el footer.

**Architecture:** Un único archivo, seis ediciones quirúrgicas secuenciales: meta, grid, card 3, card 4, card 5 nueva, footer. Sin tests automáticos — verificación manual por el usuario.

**Tech Stack:** HTML estático, Tailwind CSS CDN, SVG inline (Heroicons outline 24×24)

---

## File Map

| Archivo | Acción |
|---------|--------|
| `C:\Users\Usuario\Desktop\Cerratec\servicios.html` | **Modificar** — 6 ediciones |

---

### Task 1: Actualizar `<meta name="description">`

**Files:**
- Modify: `servicios.html:7`

- [ ] **Step 1: Reemplazar la meta description**

  Encontrar (línea 7):
  ```html
    <meta name="description" content="Todos los servicios de cerrajería profesional en Tarragona: apertura de puertas, cambio de cerraduras, automóviles y persianas. 24/7.">
  ```

  Reemplazar con:
  ```html
    <meta name="description" content="Todos los servicios de cerrajería profesional en Tarragona: apertura de puertas, cambio de cerraduras, cerraduras inteligentes Nuki y Yale, apertura de vehículos. Disponibles 24/7.">
  ```

---

### Task 2: Ampliar el grid a 3 columnas en escritorio

**Files:**
- Modify: `servicios.html:134`

- [ ] **Step 1: Cambiar la clase del contenedor del grid**

  Encontrar (línea 134):
  ```html
      <div class="grid md:grid-cols-2 gap-8">
  ```

  Reemplazar con:
  ```html
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  ```

---

### Task 3: Actualizar Card 3 — Apertura de Automóviles → Apertura de Vehículos

**Files:**
- Modify: `servicios.html:167-179`

**Copywriting aplicada:**
- PAS: Problema (llaves dentro del coche), Agitación (carretera o parking, sin ayuda), Solución (técnico en 20 min, sin daños)
- SEO local: [Apertura vehículos] + [Tarragona] + [carretera / parking]
- Micro-copy: "Sin daños", "Técnico en 20 min", "24h"
- Color: sky (consistente con Card 4 de index.html)

- [ ] **Step 1: Reemplazar Card 3 completa**

  Encontrar:
  ```html
        <!-- Apertura de automóviles -->
        <a href="servicios/apertura-automoviles.html" class="service-card group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
          <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors duration-200">
            <svg class="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 17l4 4 4-4m-4-5v9M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-xl text-gray-900 mb-3">Apertura de Automóviles</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-1">¿Llaves dentro del coche? Técnicos especializados en cerrajería de automoción. Abrimos todo tipo de vehículos sin rayar ni dañar la carrocería.</p>
          <div class="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
            Ver servicio
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>
  ```

  Reemplazar con:
  ```html
        <!-- Apertura de vehículos -->
        <a href="servicios/apertura-automoviles.html" class="service-card group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
          <div class="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sky-600 transition-colors duration-200">
            <svg class="w-7 h-7 text-sky-600 group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l1.5-4A2 2 0 018.4 6h7.2a2 2 0 011.9 1.4L19 11M5 11v6a1 1 0 001 1h1m10 0h1a1 1 0 001-1v-6M5 11h14m-9 7a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-xl text-gray-900 mb-3">Apertura de Vehículos</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-1">¿Llaves dentro del coche en Tarragona, un parking o en carretera? Técnico especializado en 20 min. Abrimos cualquier vehículo sin daños ni rayadas en la carrocería. Servicio 24h.</p>
          <div class="flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
            Ver servicio
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>
  ```

---

### Task 4: Reemplazar Card 4 — Persianas Metálicas → Cerrajería Doméstica

**Files:**
- Modify: `servicios.html:182-194`

**Copywriting aplicada:**
- Copy: mantenimiento, repunzonado, puertas acorazadas, copia de llaves de seguridad
- No tiene subpágina dedicada → CTA link apunta a `tel:+34632842955`
- Color: green

- [ ] **Step 1: Reemplazar Card 4 completa**

  Encontrar:
  ```html
        <!-- Persianas metálicas -->
        <a href="servicios/persianas-metalicas.html" class="service-card group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
          <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-600 transition-colors duration-200">
            <svg class="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-xl text-gray-900 mb-3">Persianas Metálicas</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-1">Reparación y apertura urgente de persianas metálicas para locales y comercios. Servicio exprés para que tu negocio no pierda ni una hora de actividad.</p>
          <div class="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
            Ver servicio
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>
  ```

  Reemplazar con:
  ```html
        <!-- Cerrajería doméstica -->
        <a href="tel:+34632842955" class="service-card group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
          <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors duration-200">
            <svg class="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-xl text-gray-900 mb-3">Cerrajería Doméstica</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-1">Repunzonado, mantenimiento y sustitución de cerraduras en puertas acorazadas. Copia de llaves de seguridad. Precios transparentes y sin desplazamiento si no lo necesitas.</p>
          <div class="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
            Consultar precio
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>
  ```

---

### Task 5: Añadir Card 5 — Cerraduras Inteligentes (nueva)

**Files:**
- Modify: `servicios.html:195-197` (añadir después del cierre del último `</a>` y antes del cierre `</div>` del grid)

**Copywriting aplicada (skill):**
- PAS: Problema (llaves físicas, perder acceso), Solución (Nuki/Yale/Tedee, control remoto, sin obras)
- SEO local: [Cerraduras inteligentes] + [Tarragona] + [control desde el móvil]
- Micro-copy: "Sin obras", "30 min", "Nuki · Yale · Tedee"
- Color: orange (consistente con Card 5 de index.html)

- [ ] **Step 1: Insertar Card 5 antes del cierre del grid**

  Encontrar:
  ```html
      </div>
    </div>
  </section>

  <!-- BENEFITS -->
  ```

  Reemplazar con:
  ```html
        <!-- Cerraduras inteligentes -->
        <a href="servicios/cerraduras-inteligentes.html" class="service-card group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
          <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-200">
            <svg class="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2v-1a1 1 0 00-1-1H7a1 1 0 00-1 1v1a2 2 0 002 2zM12 3v1m0 16v1M4.22 4.22l.707.707M19.07 4.22l-.707.707M4 12H3m18 0h-1M7.757 16.243l-.707.707M16.95 7.05l.707-.707"/>
            </svg>
          </div>
          <h3 class="font-heading font-bold text-xl text-gray-900 mb-3">Cerraduras Inteligentes</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-1">Instalamos Nuki, Yale Linus y Tedee Go en Tarragona sin obras, en 30 min. Abre con el móvil, huella o código. Olvídate de llevar llaves — controla tu puerta desde cualquier lugar.</p>
          <div class="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
            Ver servicio
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </div>
        </a>

      </div>
    </div>
  </section>

  <!-- BENEFITS -->
  ```

---

### Task 6: Actualizar footer — reemplazar persianas por cerraduras-inteligentes

**Files:**
- Modify: `servicios.html:280-284`

- [ ] **Step 1: Reemplazar la lista de servicios en el footer**

  Encontrar:
  ```html
            <li><a href="servicios/apertura-puertas.html"     class="hover:text-amber-400 transition-colors">Apertura de puertas</a></li>
            <li><a href="servicios/cambio-cerraduras.html"    class="hover:text-amber-400 transition-colors">Cambio de cerraduras</a></li>
            <li><a href="servicios/apertura-automoviles.html" class="hover:text-amber-400 transition-colors">Apertura de automóviles</a></li>
            <li><a href="servicios/persianas-metalicas.html"  class="hover:text-amber-400 transition-colors">Persianas metálicas</a></li>
  ```

  Reemplazar con:
  ```html
            <li><a href="servicios/apertura-puertas.html"          class="hover:text-amber-400 transition-colors">Apertura de puertas</a></li>
            <li><a href="servicios/cambio-cerraduras.html"         class="hover:text-amber-400 transition-colors">Cambio de cerraduras</a></li>
            <li><a href="servicios/apertura-automoviles.html"      class="hover:text-amber-400 transition-colors">Apertura de vehículos</a></li>
            <li><a href="servicios/cerraduras-inteligentes.html"   class="hover:text-amber-400 transition-colors">Cerraduras inteligentes</a></li>
  ```

---

## Self-Review

**Cobertura de la spec:**
- [x] Identificar archivo: `servicios.html` localizado y leído ✓
- [x] Eliminar "Persianas Metálicas": Task 4 elimina card y enlace ✓
- [x] Añadir "Cerraduras Inteligentes" con Nuki/Yale/control remoto/modernidad/seguridad: Task 5 ✓
- [x] "Apertura de Vehículos" con descripción de urgencia en carretera: Task 3, copy actualizado ✓
- [x] Consistencia de menús — 5 servicios oficiales en grid: Tasks 3+4+5 = 5 cards ✓
- [x] Footer actualizado: Task 6 ✓
- [x] Meta description: Task 1 ✓

**Los 5 servicios oficiales en el grid tras aplicar el plan:**
1. Apertura de Puertas (card 1, amber) → `servicios/apertura-puertas.html`
2. Cambio de Cerraduras (card 2, blue) → `servicios/cambio-cerraduras.html`
3. Apertura de Vehículos (card 3, sky) → `servicios/apertura-automoviles.html`
4. Cerrajería Doméstica (card 4, green) → `tel:+34632842955`
5. Cerraduras Inteligentes (card 5, orange) → `servicios/cerraduras-inteligentes.html`

**Sin placeholders detectados.**

**Consistencia:** Los colores y SVG de las nuevas cards son idénticos a los usados en index.html para los mismos servicios. El CTA de Cerrajería Doméstica apunta a `tel:` porque no existe subpágina dedicada.
