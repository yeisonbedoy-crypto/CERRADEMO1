# Reorganización de Archivos de Servicios — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminar persianas-metalicas.html, crear cerraduras-inteligentes.html con copy SEO-local (Nuki/Yale/Tedee/Tarragona/Reus), y añadir botones "Más información" en los 4 cards de servicio de index.html con sus enlaces correctos, más actualizar el footer de index.html.

**Architecture:** Tres tareas independientes y secuenciales: (1) borrar el archivo obsoleto, (2) crear la nueva subpágina de servicio siguiendo la plantilla de apertura-puertas.html, (3) editar index.html para enlazar los cards y limpiar el footer. Sin tests automáticos — verificación manual por el usuario.

**Tech Stack:** HTML estático, Tailwind CSS (CDN), Google Fonts (Rubik + Inter), SVG inline (Heroicons outline)

---

## File Map

| Archivo | Acción |
|---------|--------|
| `servicios/persianas-metalicas.html` | **Eliminar** |
| `servicios/cerraduras-inteligentes.html` | **Crear** (nueva subpágina) |
| `index.html` líneas ~615–687 | **Modificar** — añadir "Más información" a cards 1, 2, 4, 5 |
| `index.html` líneas ~1196–1201 | **Modificar** — footer: quitar persianas, añadir cerraduras-inteligentes |

Archivos existentes **sin tocar**: `servicios/apertura-puertas.html`, `servicios/cambio-cerraduras.html`, `servicios/apertura-automoviles.html`.

---

### Task 1: Eliminar persianas-metalicas.html

**Files:**
- Delete: `C:\Users\Usuario\Desktop\Cerratec\servicios\persianas-metalicas.html`

- [ ] **Step 1: Borrar el archivo**

  ```bash
  rm "C:\Users\Usuario\Desktop\Cerratec\servicios\persianas-metalicas.html"
  ```

  O con PowerShell:
  ```powershell
  Remove-Item "C:\Users\Usuario\Desktop\Cerratec\servicios\persianas-metalicas.html"
  ```

  En Windows, también puedes usar la herramienta `Bash` con:
  ```bash
  rm /c/Users/Usuario/Desktop/Cerratec/servicios/persianas-metalicas.html
  ```

---

### Task 2: Crear servicios/cerraduras-inteligentes.html

**Files:**
- Create: `C:\Users\Usuario\Desktop\Cerratec\servicios\cerraduras-inteligentes.html`

**Copywriting aplicada (skill):**
- **PAS**: Problema (llevar llaves siempre, perderlas, que te las roben) → Agitación (inseguridad, dependencia total de la llave física) → Solución (Nuki/Yale/Tedee, control desde el móvil, sin obras)
- **SEO Local**: [Cerraduras inteligentes] + [Tarragona/Reus] + [barrio/zona]
- **Micro-copy de confianza**: "Sin obras", "Instalación en 30 min", "Compatible con tu cerradura actual"
- **CTA destacado**: botón de llamada y WhatsApp

- [ ] **Step 1: Crear el archivo con el siguiente contenido completo**

  Crear `C:\Users\Usuario\Desktop\Cerratec\servicios\cerraduras-inteligentes.html` con este HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cerraduras Inteligentes en Tarragona — Nuki, Yale, Tedee | Cerratec24h</title>
  <meta name="description" content="Instala tu cerradura inteligente en Tarragona y Reus. Nuki, Yale Linus, Tedee Go — sin obras, en 30 min. Control total desde el móvil. Llama ya: +34 632 84 29 55">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { heading: ['Rubik', 'sans-serif'], body: ['Inter', 'sans-serif'] },
          colors: { navy: { 900: '#0B1C2C', 800: '#0F2540', 700: '#143659', 600: '#1A4A73', 500: '#205E8F' } },
        },
      },
    }
  </script>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
    h1,h2,h3,h4,h5,h6 { font-family: 'Rubik', sans-serif; }
    .hero-bg { background: linear-gradient(135deg, #0B1C2C 0%, #1A4A73 55%, #0B1C2C 100%); position: relative; overflow: hidden; }
    .hero-bg::before { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.025' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E"); pointer-events:none; }
    @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(245,158,11,.45)} 70%{box-shadow:0 0 0 12px rgba(245,158,11,0)} 100%{box-shadow:0 0 0 0 rgba(245,158,11,0)} }
    .pulse-ring { animation: pulseRing 2s infinite; }
    .benefit-card { transition: transform .2s ease, box-shadow .2s ease; }
    .benefit-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,.08); }
    @keyframes wpPulse { 0%{box-shadow:0 0 0 0 rgba(37,211,102,.55)} 70%{box-shadow:0 0 0 14px rgba(37,211,102,0)} 100%{box-shadow:0 0 0 0 rgba(37,211,102,0)} }
    .wp-fab { position:fixed; bottom:28px; right:24px; z-index:60; width:58px; height:58px; background-color:#25D366; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; text-decoration:none; animation:wpPulse 2.2s infinite; transition:transform .2s ease,background-color .2s ease,opacity .3s ease; opacity:0; pointer-events:none; transform:scale(.85); }
    .wp-fab.visible { opacity:1; pointer-events:auto; transform:scale(1); }
    .wp-fab:hover { background-color:#1ebe5d; transform:scale(1.1); }
    .wp-fab::before { content:'Escríbenos por WhatsApp'; position:absolute; right:calc(100% + 12px); top:50%; transform:translateY(-50%); background:#1a1a1a; color:#fff; font-family:'Inter',sans-serif; font-size:12px; font-weight:500; white-space:nowrap; padding:6px 12px; border-radius:8px; opacity:0; pointer-events:none; transition:opacity .2s ease; }
    .wp-fab::after { content:''; position:absolute; right:calc(100% + 4px); top:50%; transform:translateY(-50%); border:5px solid transparent; border-left-color:#1a1a1a; opacity:0; pointer-events:none; transition:opacity .2s ease; }
    .wp-fab:hover::before,.wp-fab:hover::after { opacity:1; }
    @keyframes callPulse { 0%{box-shadow:0 0 0 0 rgba(245,158,11,.55)} 70%{box-shadow:0 0 0 14px rgba(245,158,11,0)} 100%{box-shadow:0 0 0 0 rgba(245,158,11,0)} }
    .call-fab { position:fixed; bottom:100px; right:24px; z-index:60; width:58px; height:58px; background-color:#F59E0B; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; text-decoration:none; animation:callPulse 2.2s infinite .4s; transition:transform .2s ease,background-color .2s ease,opacity .3s ease; opacity:0; pointer-events:none; transform:scale(.85); }
    .call-fab.visible { opacity:1; pointer-events:auto; transform:scale(1); }
    .call-fab:hover { background-color:#D97706; transform:scale(1.1); }
    .call-fab::before { content:'Llamar ahora — Gratis'; position:absolute; right:calc(100% + 12px); top:50%; transform:translateY(-50%); background:#1a1a1a; color:#fff; font-family:'Inter',sans-serif; font-size:12px; font-weight:500; white-space:nowrap; padding:6px 12px; border-radius:8px; opacity:0; pointer-events:none; transition:opacity .2s ease; }
    .call-fab::after { content:''; position:absolute; right:calc(100% + 4px); top:50%; transform:translateY(-50%); border:5px solid transparent; border-left-color:#1a1a1a; opacity:0; pointer-events:none; transition:opacity .2s ease; }
    .call-fab:hover::before,.call-fab:hover::after { opacity:1; }
    .mobile-cta-bar { display:none; }
    @media (max-width:767px) {
      .mobile-cta-bar { display:flex; position:fixed; bottom:0; left:0; right:0; z-index:40; transform:translateY(0); transition:transform .35s cubic-bezier(.4,0,.2,1); }
      .mobile-cta-bar.hidden-bar { transform:translateY(100%); }
      body { padding-bottom:64px; }
      .wp-fab { bottom:76px; right:16px; width:52px; height:52px; }
      .call-fab { bottom:136px; right:16px; width:52px; height:52px; }
      .wp-fab::before,.wp-fab::after,.call-fab::before,.call-fab::after { display:none; }
    }
    @media (prefers-reduced-motion:reduce) { .pulse-ring,.wp-fab,.call-fab { animation:none; } }
  </style>
</head>
<body class="bg-white text-gray-900 antialiased">

  <header class="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style="background-color:#0B1C2C;">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
      <a href="../index.html" class="flex items-center gap-2 flex-shrink-0 cursor-pointer">
        <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5" style="color:#0B1C2C;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
          </svg>
        </div>
        <span class="font-heading font-bold text-white text-lg tracking-tight">Cerratec<span class="text-amber-400">24h</span></span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-white/75">
        <a href="../servicios.html"           class="hover:text-amber-400 transition-colors duration-200">Servicios</a>
        <a href="../index.html#zona"          class="hover:text-amber-400 transition-colors duration-200">Cobertura</a>
        <a href="../index.html#testimonios"   class="hover:text-amber-400 transition-colors duration-200">Testimonios</a>
        <a href="../index.html#como-funciona" class="hover:text-amber-400 transition-colors duration-200">Cómo funciona</a>
      </nav>
      <a href="tel:+34632842955" class="pulse-ring flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-heading font-bold text-sm px-4 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer flex-shrink-0">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
        <span class="hidden sm:inline">632 84 29 55</span><span class="sm:hidden">Llamar</span>
      </a>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero-bg pt-16">
    <div class="max-w-6xl mx-auto px-4 py-20 relative z-10">
      <nav class="flex items-center gap-2 text-xs text-white/50 mb-6">
        <a href="../index.html" class="hover:text-amber-400 transition-colors">Inicio</a>
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        <a href="../servicios.html" class="hover:text-amber-400 transition-colors">Servicios</a>
        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        <span class="text-white/80">Cerraduras inteligentes</span>
      </nav>
      <div class="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2v-1a1 1 0 00-1-1H7a1 1 0 00-1 1v1a2 2 0 002 2zM12 3v1m0 16v1M4.22 4.22l.707.707M19.07 4.22l-.707.707M4 12H3m18 0h-1M7.757 16.243l-.707.707M16.95 7.05l.707-.707"/></svg>
        Smart Home
      </div>
      <h1 class="font-heading font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5 max-w-3xl">
        Cerraduras inteligentes en <span class="text-amber-400">Tarragona y Reus</span> — Nuki, Yale y Tedee
      </h1>
      <p class="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
        ¿Cansado de llevar llaves, de hacer copias o de quedarte sin acceso? En Tarragona y Reus instalamos bombines electrónicos Nuki, Yale Linus y Tedee Go sobre tu cerradura actual — <strong class="text-white">sin obras, en menos de 30 minutos</strong>. Abre tu puerta desde el móvil, con huella o con código. Precio cerrado antes de empezar.
      </p>
      <div class="flex flex-wrap gap-3 mb-10">
        <a href="tel:+34632842955" class="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-heading font-bold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
          Llamar ahora
        </a>
        <a href="https://wa.me/34632842955" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>
      <div class="flex flex-wrap gap-5 text-sm text-white/60">
        <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Instalación en 30 min</span>
        <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Sin obras ni albañilería</span>
        <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>Precio cerrado al momento</span>
      </div>
    </div>
  </section>

  <!-- BENEFITS -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="font-heading font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">Bombines electrónicos para hogares en Tarragona y Reus</h2>
        <p class="text-gray-500 text-lg max-w-xl mx-auto">Nuki, Yale Linus y Tedee Go: los tres modelos más instalados en la Costa Daurada. Compatibles con tu cerradura actual.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="benefit-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2v-1a1 1 0 00-1-1H7a1 1 0 00-1 1v1a2 2 0 002 2zM12 3v1m0 16v1M4.22 4.22l.707.707M19.07 4.22l-.707.707M4 12H3m18 0h-1M7.757 16.243l-.707.707M16.95 7.05l.707-.707"/></svg>
          </div>
          <h3 class="font-heading font-bold text-lg text-gray-900 mb-2">Control total desde el móvil</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Abre y cierra tu puerta a distancia desde la app. Da acceso temporal a familiares o técnicos en Tarragona sin necesidad de estar presente. Historial completo de aperturas en tiempo real.</p>
        </div>
        <div class="benefit-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="font-heading font-bold text-lg text-gray-900 mb-2">Sin obras — sobre tu cerradura actual</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Los bombines electrónicos Nuki, Yale y Tedee se montan sobre el cilindro existente en menos de 30 minutos. Sin taladros, sin albañiles, sin polvo. Compatible con la mayoría de puertas acorazadas de Reus y Tarragona.</p>
        </div>
        <div class="benefit-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
          <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
          </div>
          <h3 class="font-heading font-bold text-lg text-gray-900 mb-2">Acceso por huella, código o llave</h3>
          <p class="text-gray-500 text-sm leading-relaxed">Olvídate de buscar llaves. Entra con huella dactilar, código PIN o tarjeta NFC. La llave física sigue funcionando como respaldo. Ideal para pisos turísticos en Salou y Cambrils: check-in autónomo sin intercambio de llaves.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BAND -->
  <section class="py-12 bg-amber-500">
    <div class="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 class="font-heading font-extrabold text-2xl md:text-3xl text-gray-900 mb-1">¿Quieres instalar tu cerradura inteligente hoy?</h2>
        <p class="text-gray-800 text-sm">Presupuesto gratuito al momento. Instalación el mismo día en Tarragona y Reus.</p>
      </div>
      <a href="tel:+34632842955" class="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-heading font-bold px-7 py-4 rounded-xl transition-colors duration-200 whitespace-nowrap cursor-pointer">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
        632 84 29 55
      </a>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="py-20" style="background: linear-gradient(135deg,#0B1C2C 0%,#1A4A73 55%,#0B1C2C 100%);">
    <div class="max-w-3xl mx-auto px-4 text-center">
      <h2 class="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">Di adiós a las llaves físicas en Tarragona</h2>
      <p class="text-white/70 text-lg mb-8 leading-relaxed">Un técnico certificado en Nuki, Yale y Tedee puede instalarte el bombín electrónico hoy mismo. Sin obras. Precio cerrado antes de empezar. Garantía de fábrica incluida.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="tel:+34632842955" class="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-heading font-bold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
          Llamar ahora — 632 84 29 55
        </a>
        <a href="https://wa.me/34632842955" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-heading font-bold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </section>

  <footer style="background-color:#070f19;" class="text-white py-14">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
            </div>
            <span class="font-heading font-bold text-white">Cerratec<span class="text-amber-400">24h</span></span>
          </div>
          <p class="text-gray-500 text-sm italic leading-relaxed">&ldquo;Abrimos puertas, cerramos preocupaciones&rdquo;</p>
        </div>
        <div>
          <h4 class="font-heading font-semibold text-xs uppercase tracking-widest text-gray-500 mb-4">Servicios</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="../servicios/apertura-puertas.html"          class="hover:text-amber-400 transition-colors">Apertura de puertas</a></li>
            <li><a href="../servicios/cambio-cerraduras.html"         class="hover:text-amber-400 transition-colors">Cambio de cerraduras</a></li>
            <li><a href="../servicios/apertura-automoviles.html"      class="hover:text-amber-400 transition-colors">Apertura de automóviles</a></li>
            <li><a href="../servicios/cerraduras-inteligentes.html"   class="hover:text-amber-400 transition-colors">Cerraduras inteligentes</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-heading font-semibold text-xs uppercase tracking-widest text-gray-500 mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><a href="tel:+34632842955" class="flex items-center gap-2 hover:text-amber-400 transition-colors"><svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>+34 632 84 29 55</a></li>
            <li class="flex items-start gap-2"><svg class="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Tarragona, Salou, Cambrils,<br>Reus y área metropolitana</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <p>&copy; 2025 Cerratec Tarragona &mdash; Todos los derechos reservados</p>
      </div>
    </div>
  </footer>

  <div class="mobile-cta-bar" role="complementary" aria-label="Llamada rápida">
    <a href="tel:+34632842955" class="flex-1 flex items-center justify-center gap-2 bg-amber-500 text-gray-900 font-heading font-bold text-base py-4 active:bg-amber-400 cursor-pointer">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
      Llamar ahora
    </a>
    <a href="https://wa.me/34632842955" class="flex-1 flex items-center justify-center gap-2 font-heading font-bold text-base py-4 text-white active:opacity-90 cursor-pointer" style="background-color:#128c7e;">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp
    </a>
  </div>

  <a href="tel:+34632842955" id="callFab" class="call-fab" aria-label="Llamar ahora">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0B1C2C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
  </a>
  <a href="https://wa.me/34632842955" id="wpFab" class="wp-fab" aria-label="Contactar por WhatsApp" target="_blank" rel="noopener noreferrer">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>

  <script>
    var wpFab = document.getElementById('wpFab');
    var callFab = document.getElementById('callFab');
    var mobilBar = document.querySelector('.mobile-cta-bar');
    var heroHeight = window.innerHeight * 0.5;
    function updateFabs() {
      if (window.scrollY > heroHeight) {
        wpFab.classList.add('visible'); callFab.classList.add('visible');
        if (mobilBar) mobilBar.classList.add('hidden-bar');
      } else {
        wpFab.classList.remove('visible'); callFab.classList.remove('visible');
        if (mobilBar) mobilBar.classList.remove('hidden-bar');
      }
    }
    window.addEventListener('scroll', updateFabs, { passive: true });
    updateFabs();
  </script>
</body>
</html>
```

---

### Task 3: Actualizar index.html — enlaces en cards y footer

**Files:**
- Modify: `C:\Users\Usuario\Desktop\Cerratec\index.html` (cards 1, 2, 4, 5 + footer)

**Cambio de patrón en cada card:** El bloque actual `<div class="flex items-center justify-between mt-auto">` se envuelve en un `<div class="mt-auto">` y se añade un `<a>` de "Más información" debajo.

#### Card 1 — Apertura de urgencia → `servicios/apertura-puertas.html`

- [ ] **Step 1: Reemplazar el bloque inferior de Card 1**

  Encontrar (líneas ~615-618):
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Desde 120€</span>
            <span class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">24h Urgencia</span>
          </div>
        </article>
  ```

  Reemplazar con:
  ```html
          <div class="mt-auto">
            <div class="flex items-center justify-between mb-3">
              <span class="text-amber-600 font-heading font-semibold text-sm">Desde 120€</span>
              <span class="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">24h Urgencia</span>
            </div>
            <a href="servicios/apertura-puertas.html" class="flex items-center gap-1 text-sm font-heading font-semibold text-gray-500 hover:text-amber-600 transition-colors duration-200">
              Más información
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
  ```

#### Card 2 — Cambio de cerradura → `servicios/cambio-cerraduras.html`

- [ ] **Step 2: Reemplazar el bloque inferior de Card 2**

  Encontrar (líneas ~632-635):
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Presupuesto al momento</span>
            <span class="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">Seguridad</span>
          </div>
        </article>
  ```

  Reemplazar con:
  ```html
          <div class="mt-auto">
            <div class="flex items-center justify-between mb-3">
              <span class="text-amber-600 font-heading font-semibold text-sm">Presupuesto al momento</span>
              <span class="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">Seguridad</span>
            </div>
            <a href="servicios/cambio-cerraduras.html" class="flex items-center gap-1 text-sm font-heading font-semibold text-gray-500 hover:text-amber-600 transition-colors duration-200">
              Más información
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
  ```

#### Card 4 — Apertura de vehículos → `servicios/apertura-automoviles.html`

- [ ] **Step 3: Reemplazar el bloque inferior de Card 4**

  Encontrar (líneas ~666-669):
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Desde 120€</span>
            <span class="text-xs bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full font-medium">24h Urgencia</span>
          </div>
        </article>
  ```

  Reemplazar con:
  ```html
          <div class="mt-auto">
            <div class="flex items-center justify-between mb-3">
              <span class="text-amber-600 font-heading font-semibold text-sm">Desde 120€</span>
              <span class="text-xs bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full font-medium">24h Urgencia</span>
            </div>
            <a href="servicios/apertura-automoviles.html" class="flex items-center gap-1 text-sm font-heading font-semibold text-gray-500 hover:text-amber-600 transition-colors duration-200">
              Más información
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
  ```

#### Card 5 — Cerraduras inteligentes → `servicios/cerraduras-inteligentes.html`

- [ ] **Step 4: Reemplazar el bloque inferior de Card 5**

  Encontrar (líneas ~683-686):
  ```html
          <div class="flex items-center justify-between mt-auto">
            <span class="text-amber-600 font-heading font-semibold text-sm">Tecnología top</span>
            <span class="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">Smart Home</span>
          </div>
        </article>
  ```

  Reemplazar con:
  ```html
          <div class="mt-auto">
            <div class="flex items-center justify-between mb-3">
              <span class="text-amber-600 font-heading font-semibold text-sm">Tecnología top</span>
              <span class="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">Smart Home</span>
            </div>
            <a href="servicios/cerraduras-inteligentes.html" class="flex items-center gap-1 text-sm font-heading font-semibold text-gray-500 hover:text-amber-600 transition-colors duration-200">
              Más información
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
  ```

#### Footer de index.html

- [ ] **Step 5: Actualizar la lista de servicios en el footer de index.html**

  Encontrar (líneas ~1196-1201):
  ```html
            <li><a href="servicios/apertura-puertas.html"    class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Apertura de puertas</a></li>
            <li><a href="servicios/cambio-cerraduras.html"   class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Cambio de cerraduras</a></li>
            <li><a href="servicios/apertura-automoviles.html" class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Apertura de automóviles</a></li>
            <li><a href="servicios/persianas-metalicas.html" class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Persianas metálicas</a></li>
  ```

  Reemplazar con:
  ```html
            <li><a href="servicios/apertura-puertas.html"          class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Apertura de puertas</a></li>
            <li><a href="servicios/cambio-cerraduras.html"         class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Cambio de cerraduras</a></li>
            <li><a href="servicios/apertura-automoviles.html"      class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Apertura de automóviles</a></li>
            <li><a href="servicios/cerraduras-inteligentes.html"   class="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Cerraduras inteligentes</a></li>
  ```

---

## Self-Review

**Cobertura de la spec:**
- [x] Leer copywriting.md → aplicado: PAS, SEO triada, micro-copy confianza en cerraduras-inteligentes.html ✓
- [x] Eliminar persianas-metalicas.html → Task 1 ✓
- [x] Verificar apertura-automoviles.html, apertura-puertas.html, cambio-cerraduras.html presentes → no se tocan, solo se verifican existentes ✓
- [x] Crear cerraduras-inteligentes.html → Task 2, HTML completo ✓
- [x] Botón "Más información" Card 1 → `servicios/apertura-puertas.html` ✓
- [x] Botón "Más información" Card 2 → `servicios/cambio-cerraduras.html` ✓
- [x] Botón "Más información" Card 4 → `servicios/apertura-automoviles.html` ✓
- [x] Botón "Más información" Card 5 → `servicios/cerraduras-inteligentes.html` ✓
- [x] Footer index.html actualizado: quitar persianas, añadir cerraduras-inteligentes ✓
- [x] Sin tests automáticos (verificación manual por usuario) ✓

**Sin placeholders detectados.**

**Consistencia:** Los 4 bloques "Más información" son idénticos en estructura, solo cambia el `href`. Los nombres de archivo coinciden en toda la nueva subpágina.
