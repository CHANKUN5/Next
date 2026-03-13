---
trigger: always_on
---

# 📘 Convenciones del Proyecto: RV4 (Next.js + TypeScript)

Este documento centraliza las mejores prácticas de ingeniería y las reglas operativas para el desarrollo de este proyecto.

---

## 🚀 1. Guía de Ingeniería (Best Practices)

### 🏗️ Arquitectura y Modularidad
- **Estructura por Funcionalidades (Features)**: No amontones componentes en `/components`. Usa `/components/ui` para átomos (botones, inputs) y `/components/features/[feature-name]` para lógica específica de una sección.
- **Rutas Modulares**: Usa `(groups)` para agrupar rutas sin que afecte la URL.
- **Abstracción de API**: Centraliza fetch en `services/apiClient.ts`.
- **Tipado Estricto**: Prohibido el uso de `any`. Todo debe estar tipado con interfaces o tipos de TS.

### 🎨 UI y UX (Lo que NO se debe hacer)
- **Sin Spinners Globales**: Usa **Skeleton Screens** segmentados.
- **Z-Index**: No uses `z-index: 9999` ad-hoc. Usa una escala definida.
- **Lógica en JSX**: Evita ternarios anidados gigantes. Modulariza en sub-componentes.
- **HTML Semántico**: Usa etiquetas correctas (`<main>`, `<section>`, etc.) en lugar de solo `<div>`.

### 💡 Regla de Oro: Client vs Server
- **Server First**: Todo componente es de servidor por defecto.
- Usa `"use client"` **solo** si necesitas Hooks (`useState`), Event Listeners o APIS del navegador.

---

## 🤖 2. Reglas del Agente (AI Rules)

Estas reglas rigen el comportamiento del asistente de IA al generar código para este proyecto:

1.  **TypeScript Estricto**: Todo archivo nuevo debe ser `.ts` o `.tsx`.
2.  **App Router**: Uso exclusivo de la carpeta `app/`.
3.  **Modularidad Extrema**:
    - UI Atómica -> `components/ui/`
    - Lógica de Negocio -> `components/features/`
    - Servicios -> `services/`
    - Tipos -> `types/`
4.  **No Fetch en Cliente**: Priorizar fetch en Server Components.
5.  **Tailwind Only**: No crear archivos CSS externos innecesarios.
6.  **Mobile-First**: Toda UI debe ser responsiva desde el inicio.

---
## 3. Reglas del código
No poner comentarios en el código ninguno. Además del contenido debe ser en español en las vistas solamente los componentest y nuestras rutas son en ingles.

---
*Este documento es la fuente de verdad para el desarrollo del proyecto RV4.*