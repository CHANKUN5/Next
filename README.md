# RV4 System - The Sovereign Engineering Manual

![Next.js 15](https://img.shields.io/badge/Next.js-15.0.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript Strict](https://img.shields.io/badge/TypeScript-5.x_Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind 4](https://img.shields.io/badge/Tailwind_CSS-v4_Beta-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node 20](https://img.shields.io/badge/Node-v20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Architecture feature](https://img.shields.io/badge/Architecture-Feature_Driven-FFD700?style=for-the-badge&logo=codeforces&logoColor=black)

Bienvenido al manual maestro de ingeniería del sistema **RV4**. Este documento no es solo una introducción, sino una especificación técnica profunda del ecosistema, diseñada para garantizar que cada línea de código sea escalable, segura y estéticamente superior.

---

## 🏛️ 1. Filosofía de Arquitectura

RV4 abandona los patrones monolíticos para adoptar una arquitectura **Feature-Driven (Basada en Funcionalidades)**. Este enfoque desacopla la lógica de negocio de la infraestructura del framework, permitiendo que el equipo escale el producto sin generar deuda técnica masiva.

### 🧩 Diagrama de Interconexión de Capas

```mermaid
graph TD
    subgraph Client_Space [Capa del Cliente]
        U((Usuario)) -->|Interactúa| B[Navegador]
    end

    subgraph Entry_Point [App Layer - Infraestructura]
        B -->|URL Route| R[src/app]
        R -->|Route Group| RG["(main)/"]
        RG -->|Importa| FV[Feature View]
    end

    subgraph Business_Logic [Domain Layer - Lógica]
        FV -->|Query/Mutation| H{src/hooks}
        H -->|Logic Flow| FV
        FV -->|Agrega| IC[Feature Components]
    end

    subgraph Atomic_Design [Visual Layer - Átomos]
        IC -->|Usa| C[src/components]
        C -->|UI| UI[Atoms]
        C -->|Layout| L[Molds]
        C -->|Feedback| FB[Reaction]
    end

    subgraph Infrastructure [Data Layer - Soporte]
        H -->|Requests| S[src/services]
        S -->|Proxy| RH[Route Handlers]
        RH -->|Security| DB[(External API)]
    end

    style FV fill:#B2914B,stroke:#000,color:#000
    style H fill:#2e2f35,stroke:#B2914B,color:#fff
```

---

## 📂 2. Especificación de Directorios (`src/`)

### � `src/app/` - Capa de Enrutamiento
Nex.js 15 App Router. Esta carpeta es **puramente estructural**.
- **`(main)/`**: Route Group para páginas que comparten el `Sidebar`. Mantiene los paths dinámicos limpios.
- **`layout.tsx`**: El "Root Shell". Inyecta fuentes, estilos globales y el `ClientLayout`.
- **`error.tsx`** & **`not-found.tsx`**: Manejadores de errores globales integrados con la feature de errores.

### 📁 `src/features/` - El Núcleo de Dominio
Cada subdirectorio representa una **entidad de negocio** completa.
- **`home/`**: Página de aterrizaje y onboarding.
- **`dashboard/`**: Orquestación de métricas complejas.
- **`projects/`**: Gestión de recursos dinámicos.
- **`errors/`**: Centralización de la experiencia de usuario ante fallos.

### � `src/components/` - Presentación Atómica
- **`ui/`**: Componentes sin estado (stateless) y de propósito general.
- **`layout/`**: Define la arquitectura visual de la página (Sidebar, Navbar).
- **`feedback/`**: Componentes de estado de transición (Spinners, Modales, Alerts).

### 📁 `src/hooks/` - Cerebro de la Aplicación
Abstracciones de lógica reactiva. Ninguna lógica compleja debe vivir directamente dentro de un componente UI.

---

## ⚓ 3. Deep Dive: Sistema de Hooks

Los hooks en RV4 son el nexo entre la interfaz y la lógica de datos. Cumplen con el principio de responsabilidad única.

### 🪝 `useSidebar`
Maneja el comportamiento del centro de navegación.
- **Estado**: Boolean (collapsed/expanded).
- **Métodos**: `toggle()`, `collapse()`, `expand()`.
- **Persistencia**: Futura implementación con `localStorage`.

### 🪝 `useFetch<T>`
Motor de peticiones HTTP estandarizado.
- **Estados**: `loading`, `error`, `data`, `empty`.
- **Tipado**: Genérico estricto para asegurar la integridad de los datos recibidos.
- **Diagrama de Ciclo de Vida**:

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading: execute()
    Loading --> Success: API Res (200)
    Loading --> Error: API Err (!200)
    Success --> Empty: Array.length === 0
    Error --> Loading: retry()
    Empty --> Loading: refetch()
```

### 🪝 `useForm<T>`
Controlador de formularios tipado.
- **Validación**: Integra esquemas de validación manuales o con librerías.
- **Envío**: Maneja el estado `isSubmitting` para prevenir múltiples clicks.

---

## 🛡️ 4. Estándares de Ingeniería y TypeScript

### � Naming Conventions
- **Componentes**: PascalCase (`MainButton.tsx`).
- **Hooks**: camelCase con prefijo 'use' (`useProjectData.ts`).
- **Vistas**: Sufijo 'View' (`DashboardView.tsx`).
- **Estilos**: Lowercase con guiones (`main-container`).

### 🔧 TypeScript Strict Mode
El proyecto corre bajo `strict: true`.
- Prohibido el uso de `any`.
- Uso obligatorio de interfaces para Props.
- Tipado de eventos de React (`ChangeEvent`, `FormEvent`).

---

## 🎨 5. Sistema de Diseño (UX/UI Evolution)

### 🖋️ Tipografía: Be Vietnam Pro
Elegida por su equilibrio entre modernidad tecnológica y legibilidad corporativa.
- **Primary**: Weight 900 (Headers).
- **Secondary**: Weight 400 (Body).
- **Numbers**: Weight 700 (Metrics).

### 🌑 Paleta de Colores (Elite Dark)
- `Background`: `#121316` - Reducción de fatiga visual.
- `Accent`: `#B2914B` (Brand Gold) - Denota exclusividad y métricas positivas.
- `Alerts`:
  - Success: `emerald-400`
  - Warning: `amber-400`
  - Error: `rose-400`

---

## 🔄 6. Flujo de Datos y Seguridad (Proxy Pattern)

Para blindar nuestra arquitectura, implementamos el patrón **Backend for Frontend (BFF)** mediante Route Handlers.

```mermaid
sequenceDiagram
    participant User as 👤 Usuario
    participant Client as 🖥️ Client Component
    participant API as 🛡️ Route Handler (Server)
    participant Backend as ☁️ Backend (Node/Go)

    User->>Client: Clic en "Crear Proyecto"
    Client->>Client: Valida Campos (useForm)
    Client->>API: HTTP POST /api/projects
    Note over API: Valida Cookie JTW (HttpOnly)
    API->>Backend: Forward request (Add Secret Key)
    Backend-->>API: 201 Created
    API-->>Client: JSON Response
    Client->>User: Feedback Positivo (Alert)
```

---

## ❌ 7. Reglas de Código Innegociables

1.  **Zero Emojis**: La interfaz es 100% iconográfica (Lucide).
2.  **Archivos Cortos**: Si un archivo supera las 150 líneas, debe ser factorizado.
3.  **Comentarios**: El código debe ser autodocumentado. No se permiten comentarios descriptivos redundantes.
4.  **Tailwind-Only**: El uso de CSS archivos externos está limitado a `globals.css` para configuración base.
5.  **Server Components First**: Todo componente nace como Server Component a menos que necesite hooks o eventos.

---

## 🚀 8. Guía de Inicio Rápido para Desarrolladores

### Configuración Inicial
```bash
git clone <repo-url>
npm install
npm run dev
```

### Cómo crear un nuevo flujo
1.  **Definir Dominio**: Crea `src/features/nuevo-flujo/`.
2.  **Crear Vista**: Implementa `NuevoFlujoView.tsx`.
3.  **Vincular Ruta**: Crea `src/app/(main)/nuevo-flujo/page.tsx`.
4.  **Aislar Lógica**: Extrae hooks a `src/hooks/useNuevoFlujo.ts`.

---

## 📈 9. Roadmap de Optimización (Fases Futuras)

| Fase | Objetivo | Tecnología |
| :--- | :--- | :--- |
| **01** | Arquitectura Base | Next.js 15 + Core Features |
| **02** | Data Management | Server Actions + Cache Revalidation |
| **03** | User Security | JWT httpOnly + Middleware |
| **04** | Performance | Image Optimization + Dynamic Imports |

---
*Este manual es la fuente de verdad del proyecto RV4. Cualquier desviación de estos principios debe ser aprobada por el Comité de Arquitectura.*
