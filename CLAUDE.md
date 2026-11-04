@AGENTS.md

# oceanar-web

Sitio de Oceanar (oceanar.org). Next.js App Router + TypeScript + Tailwind, bilingüe es/en, desplegado en Vercel (plan Hobby, repo público).

## Comandos

- `npm run dev` — desarrollo
- `npm run check` — lint + typecheck + format:check + build (lo mismo que corre el CI; correrlo antes de abrir un PR)

## Convenciones

- Idioma de la interfaz de trabajo con el equipo: español. Código, nombres de archivos y commits: inglés (commits en Conventional Commits).
- Todo texto visible va en `src/i18n/dictionaries/{es,en}.json` con las mismas claves. Nada de texto hardcodeado en componentes.
- Rutas bajo `src/app/[lang]/<clave>/`, con la carpeta nombrada por su clave interna en inglés. Los slugs públicos de cada idioma se definen solo en `src/i18n/routes.ts` (de ahí salen los rewrites/redirects de `next.config.ts`); los enlaces se arman siempre con `href(lang, clave)`. La detección de idioma está en `src/proxy.ts`.
- Textos de interfaz en los diccionarios; datos estructurados (proyectos, audio, aliados) en `src/content/`, con campos bilingües `{ es, en }`.
- Lo que falta de contenido va con la marca visible `TODO(contenido)` y se anota en `docs/pendientes.md`. No inventar datos.
- Antes de usar una API de Next.js, leer la guía correspondiente en `node_modules/next/dist/docs/` (esta versión difiere de lo que se conoce).
- Nada de commits directos a `main`: rama → PR → CI verde → revisión → squash merge.
- Cada PR describe lo que se hizo y explicita cualquier conflicto posible. Cande lo revisa en localhost y después con Gonzalo. **Nunca mergear sin pedido explícito**, ni activar auto-merge.
- Cande no edita código: diseña y carga contenidos a través de Claude.
- Los diseños los define Candelaria Belén Piemonte; no inventar identidad visual (colores, tipografías, logo) sin su indicación. Lo visual provisorio se centraliza en `src/app/globals.css`. Fotos y dibujos: los originales viven fuera del repo (`../material-oceanar`); `node scripts/optimize-media.mjs ../material-oceanar` genera las versiones web en `public/images/` (solo las listadas en el script).
