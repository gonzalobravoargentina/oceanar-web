# Cómo colaborar

## Flujo de trabajo

`main` es lo que está en producción (oceanar.org). **Nadie hace commit directo a `main`.**

1. Actualizá tu copia: `git switch main && git pull`.
2. Creá una rama con un nombre descriptivo: `feat/pagina-proyectos`, `fix/menu-mobile`, `docs/readme`.
3. Hacé tus cambios en commits chicos y claros.
4. Subí la rama y abrí un Pull Request hacia `main`.
5. Esperá a que pase el CI (lint, tipos, formato y build) y revisá la URL de preview que deja Vercel en el PR.
6. Alguien más revisa y aprueba. Después se hace merge (squash).

Con GitHub Desktop: _Current Branch → New Branch_, commit, _Publish branch_ y _Create Pull Request_.

## Mensajes de commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/es/):

```
feat: agrega la sección de proyectos
fix: corrige el menú en mobile
docs: actualiza el README
style: ajusta espaciados del hero
chore: actualiza dependencias
```

## Antes de abrir un PR

```bash
npm run check
```

Corre lo mismo que el CI. Si falla en tu máquina, va a fallar en el PR.

## Reglas del proyecto

- **Textos:** van en `src/i18n/dictionaries/es.json` y `en.json`, siempre en los dos idiomas.
- **Estilos:** Tailwind CSS. Los colores y fuentes de la marca se definen en `src/app/globals.css` (bloque `@theme`), no se repiten por componente.
- **Secretos:** nunca se commitean. Las variables de entorno van en `.env.local` (ignorado por git); lo que se necesita se documenta en `.env.example`.
- **Imágenes:** en `public/`, optimizadas (WebP/AVIF o SVG) y con texto alternativo (`alt`).
- **Accesibilidad:** contraste suficiente, `alt` en imágenes, navegación por teclado.
