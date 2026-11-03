# oceanar-web

Sitio web de Oceanar — [oceanar.org](https://oceanar.org).

Next.js (App Router) · TypeScript · Tailwind CSS · desplegado en Vercel.

## Requisitos

- [Node.js](https://nodejs.org) 22 o superior (la versión de referencia está en `.nvmrc`)
- npm (viene con Node)

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrí <http://localhost:3000>. Te redirige a `/es` o `/en` según el idioma de tu navegador.

## Scripts

| Comando                | Qué hace                                         |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Servidor de desarrollo                           |
| `npm run build`        | Build de producción                              |
| `npm run lint`         | ESLint                                           |
| `npm run typecheck`    | Verificación de tipos                            |
| `npm run format`       | Formatea el código con Prettier                  |
| `npm run format:check` | Verifica el formato sin modificar                |
| `npm run check`        | Lint + tipos + formato + build (igual que el CI) |

## Estructura

```
src/
  app/[lang]/        Páginas y layout (un segmento por idioma: es, en)
  components/        Componentes compartidos (navegación, secciones)
  drawings/          Dibujos a mano (SVG) de Cande
  i18n/              Idiomas, diccionarios y mapa de URLs
    dictionaries/    es.json y en.json — acá viven los textos del sitio
    routes.ts        Slugs de cada página en cada idioma
  proxy.ts           Redirige / a /es o /en según el idioma del navegador
docs/pendientes.md   Decisiones y contenidos pendientes
```

## Idiomas

El sitio es bilingüe (español por defecto, inglés). Todo texto visible va en `src/i18n/dictionaries/es.json` y `en.json`, con las mismas claves en ambos. No escribas texto directamente en los componentes.

## Cómo colaborar

Mirá [CONTRIBUTING.md](CONTRIBUTING.md).

## Despliegue

- Cada Pull Request genera una URL de preview en Vercel.
- Al hacer merge a `main`, se despliega a producción automáticamente.

## Licencia

[MIT](LICENSE)
