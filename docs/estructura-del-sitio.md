# Estructura del sitio — propuesta v1

Documento de trabajo para ordenar el sitio de Oceanar antes de escribir código. Nace de una charla de Gonzalo con Claude (2026-11-09). **Candelaria: esto es una propuesta para que la revises, la corrijas y la valides.** Nada de lo que está acá está decidido en el diseño visual.

## Objetivo

- **Primer lanzamiento:** mostrar lo que ya hicimos (portfolio).
- **Acción que queremos que haga quien visita:** escribirnos o pedir una experiencia.
- **Públicos:** instituciones, festivales y programadores; público general; científicos, ONG y aliados del mar; escuelas y comunidades.

## Sensación

Inmersiva y profunda: fondos oscuros tipo mar adentro, video a pantalla completa, sonido, ritmo lento. El video de fondo que ya está en la home va en esa línea.

## Mapa del sitio

```
Home (inmersiva)
├── Experiencias
│   ├── Danza del Mar        (el cortometraje es Anawa)
│   ├── Ojos al mar          (largometraje documental, coproducción)
│   ├── Experiencias sonoras (Sonidos del mar, Sala sonora Punta Ballena)
│   └── Videos 360 y domo inmersivo
├── Charlas y talleres
├── Asesorías                (empresas y ONG, cultura oceánica)
├── Proyectos                (Habitar las algas, Océano de historias, Guía de campo)
└── Contacto                 ("Llevá el mar a tu lugar")
```

Quedan **fuera por ahora**: página "Nosotros", blog o novedades.

## Contenido por sección

### Home

- Video de océano de fondo (ya hecho).
- Frase de marca. En el Canva: "Inspiración, conexión y movimiento para la cultura oceánica".
- Entradas a las secciones principales, una experiencia destacada y botón de contacto siempre visible.

### Experiencias

Cada experiencia tiene su propia página, con:

- fotos y video,
- audio o sonido del mar (cuando corresponda),
- descripción, ficha técnica y equipo,
- bloque "cómo llevarla a tu lugar" con botón de contacto.

| Experiencia                              | Qué es                                                                                                                                                                                                 | Material                                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Danza del Mar** (cortometraje _Anawa_) | Proyecto propio; el cortometraje subacuático de la Patagonia argentina es _Anawa: momento de regresar al océano_.                                                                                      | Canal YouTube @oceanar: _Anawa_ (15:34), "El proyecto", "Pequeño encuentro en el mar Patagónico", "Backstage Anawa". Créditos en el Canva. |
| **Ojos al mar**                          | Largometraje documental de Victoria Bornaz, película de apertura del Patagonia Eco Film Fest 2024. Oceanar figura como coproductora; el equipo filmó imágenes subacuáticas y participa de la película. | Tráiler en el canal del festival. **Pedir permiso a la producción** para usarlo y acordar el crédito.                                      |
| **Experiencias sonoras**                 | _Sonidos del mar_ y _Sala sonora Punta Ballena_.                                                                                                                                                       | **A definir**: dónde está el material.                                                                                                     |
| **Videos 360 y domo inmersivo**          | Audiovisuales inmersivos 360 y domo.                                                                                                                                                                   | **A definir.** Hay un video 360 en @HabitarAlgas (_Aula de Mar 360° · Cabo Raso 2026_).                                                    |

### Charlas y talleres

Una página corta con dos bloques: qué charlas y talleres damos, a quién y cómo contratarlos. Ejemplo de charla ya grabada: "ANAWA & La Danza del Mar" (Jornadas de Arte, Ciencia e Investigación, @oceanar).

### Asesorías

Página aparte para empresas y ONG: asesoramiento en cultura oceánica. Hace falta definir qué servicios concretos se ofrecen y ejemplos de trabajos.

### Proyectos

Tarjetas con descripción corta de nuestro rol y botón "Visitar sitio". Cada proyecto ya tiene su propio sitio, no se duplica su contenido.

| Proyecto                               | Nuestro rol                                                                                     | Enlace                                                                                                |
| -------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Habitar las algas**                  | Gestión y realización de dos residencias científico-artísticas.                                 | https://www.habitaralgas.com/ · YouTube @HabitarAlgas                                                 |
| **Océano de historias**                | Asesoría de contenido del libro infantil, creación de la web y todo el apoyo digital del libro. | https://www.oceanodehistorias.com/                                                                    |
| **Guía de campo para explorar el mar** | Contenido científico y material audiovisual (Albatros).                                         | https://albatros.com.ar/productos/guia-de-campo-para-explorar-el-mar/ (sin parámetros de seguimiento) |

### Contacto

Siempre accesible desde el menú y al final de cada experiencia. Falta definir el destino (ver preguntas abiertas).

## Decisiones técnicas propuestas

- **Videos:** incrustados desde YouTube en modo privacidad ampliada, con miniatura que carga el reproductor recién al hacer clic. No se suben al repo (límite de transferencia del hosting gratuito). Los fondos cortos y livianos sí pueden vivir en `public/`.
- **Contenido:** cada experiencia y proyecto como archivo de datos en el repo, en español e inglés con las mismas claves. Sin CMS por ahora.
- **Idiomas:** `/es` y `/en`. Pendiente decidir si las direcciones de las páginas se traducen (`/es/experiencias` y `/en/experiences`) o son iguales en ambos.
- **Marca:** el Canva "Fuentes para web" (paleta 2022) tiene los colores `#48A7B5`, `#0B5A6D`, `#1F2F36` y las tipografías Montserrat, Oswald, Playfair Display y Amsterdam One. **No se fija en el código hasta que Candelaria lo confirme.**

## Preguntas abiertas

Para Candelaria:

1. ¿La paleta y las tipografías del Canva siguen vigentes para la web?
2. ¿Cómo imaginás la home y la navegación (menú fijo, menú que se abre, etc.)?
3. ¿Hay material gráfico (fotos, logos, ilustraciones) listo para cada experiencia?

Para Gonzalo:

1. ¿Dónde está el material de _Sonidos del mar_, _Sala sonora Punta Ballena_ y el domo? Si no está listo, van como "próximamente".
2. ¿Qué charlas, talleres y asesorías se ofrecen hoy, con qué formato y ejemplos?
3. ¿A qué mail llegan las consultas? Se conecta con el pendiente del correo `@oceanar.org`.
4. ¿Mostramos año en cada obra (por ejemplo "Danza del Mar, 2023")?
5. ¿Quién pide permiso a la producción de _Ojos al mar_ para usar el tráiler?
