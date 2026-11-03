@AGENTS.md

# oceanar-web

Sitio de Oceanar (oceanar.org). Next.js App Router + TypeScript + Tailwind, bilingüe es/en, desplegado en Vercel (plan Hobby, repo público).

## Comandos

- `npm run dev` — desarrollo
- `npm run check` — lint + typecheck + format:check + build (lo mismo que corre el CI; correrlo antes de abrir un PR)

## Convenciones

- Idioma de la interfaz de trabajo con el equipo: español. Código, nombres de archivos y commits: inglés (commits en Conventional Commits).
- Todo texto visible va en `src/i18n/dictionaries/{es,en}.json` con las mismas claves. Nada de texto hardcodeado en componentes.
- Rutas bajo `src/app/[lang]/`. La detección de idioma está en `src/proxy.ts`.
- Antes de usar una API de Next.js, leer la guía correspondiente en `node_modules/next/dist/docs/` (esta versión difiere de lo que se conoce).
- Nada de commits directos a `main`: rama → PR → CI verde → revisión → squash merge.
- Los diseños los define Candelaria Belén Piemonte; no inventar identidad visual (colores, tipografías, logo) sin su indicación.
