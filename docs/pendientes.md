# Pendientes

Decisiones y contenidos que se resuelven con Cande (y Gonzalo). En el código, todo texto provisorio lleva la marca `TODO(contenido)` y se puede buscar así:

```bash
grep -rn "TODO(contenido)" src
```

## Decisiones tomadas

| Tema                  | Decisión                                                                                                                                                                                     | Fecha      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Flujo de trabajo      | Una rama y un PR por etapa, con notas y posibles conflictos. Cande lo ve primero en localhost. Se mergea solo después de la revisión con Gonzalo, y siempre preguntando antes.               | 2026-11-03 |
| Edición de contenidos | Cande no edita código: diseña y carga contenidos a través de Claude. Los datos de proyectos y audio van en archivos tipados en `src/content/`, y los textos de interfaz en los diccionarios. | 2026-11-03 |
| URLs                  | Slugs traducidos en cada idioma, iguales a las etiquetas del menú (`src/i18n/routes.ts`).                                                                                                    | 2026-11-03 |
| Categorías            | VER, ESCUCHAR y HABITAR son tipos de proyecto distintos. Cada proyecto tiene una categoría principal; algunos pueden ser transversales (por ejemplo, las exposiciones).                      | 2026-11-03 |
| Rama `prueba`         | Era una prueba y no se mergea.                                                                                                                                                               | 2026-11-03 |

## Para decidir

### Identidad y lenguaje

- [ ] Identidad visual definitiva: paleta, tipografía y logo. Hoy hay tipografía neutra (Geist) y ningún color propio.
- [ ] La conjugación poética ("yo oceano · vos oceanás · …"): ¿se mantiene como excepción o se reescribe con formas neutras?
- [ ] "Cuidando, creando, **conectando**" o "cuidando, creando, **compartiendo**".
- [ ] Nombre definitivo del método y sus textos (hoy: "Hacer como el mar").
- [ ] Cómo nombrar la red: hoy dice "Red de alianzas" (forma neutra) en lugar de "Red de aliados".
- [ ] Revisar todos los textos de interfaz de la etapa 1 (títulos, botones, frases de cierre como "¿Nos metemos al agua?"): son un primer borrador.
- [ ] Revisar la adaptación al inglés de todos los textos.

### Contenidos

- [ ] Textos finales de cada sección marcada `TODO(contenido)`.
- [ ] Equipo: apellido, rol y presentación de Gonzalo; presentación de Cande; si aparece Natalia y cómo.
- [ ] Aliados, sus logos y cómo presentarlos.
- [ ] Proyectos y sus datos (año, lugar, prácticas, aliados, créditos, material). Proyectos mencionados por Cande, sin datos todavía:
  - VER: experiencias en domo 360°, videos subacuáticos, uso de Oculus, cortometraje _Anawa_, película _Ojos al mar_, libros (_Guía de la tierra al mar_, _Matilde y Armonía_, fichas de diversidad).
  - ESCUCHAR: El Avistaje Sonoro (proyecto insignia): sala sonora, diseño de experiencias sonoras, registro de paisaje sonoro subacuático, talleres de escucha.
  - HABITAR: residencia Habitar las Algas / Kelp Roots, taller Danza al mar y, más adelante, Surf and Protect.
  - Transversales: exposiciones en el Museo de la Democracia (Rosario), el Museo Moderno (Buenos Aires) y el Ecocentro (Puerto Madryn, en proceso).
- [ ] Material real: fotos, video y audio.
- [ ] Nombres de los proyectos en inglés (por ejemplo, "El Avistaje Sonoro").

### Técnica e infraestructura

- [ ] **Material audiovisual y repositorio público.** El repo es público: todo lo que se sube a `public/` se puede descargar. Como va a haber mucho material audiovisual (y parte se vende o licencia), decidir si el repo pasa a privado y dónde se aloja el material pesado.
- [ ] **Formulario de contacto.** En la etapa 5 se diseñan solo los campos. Queda por decidir a dónde llegan los mensajes (mail, planilla, servicio).
- [ ] **Agenda.** Qué herramienta se usa y quiénes atienden las llamadas (Cande, Gonzalo, ¿Natalia?).
- [ ] **Sonido.** Si la preferencia de sonido se recuerda solo durante la visita o también la próxima vez que la persona entra al sitio.
- [ ] **Edición sin Claude.** Si en el futuro otras personas necesitan cargar proyectos sin pasar por Claude, evaluar un editor visual (CMS) gratuito conectado al repo.
- [ ] **Video de fondo.** El video del mar está solo en la rama `prueba`. Para el prototipo del inicio (etapa 2) hay que traer el archivo o reemplazarlo por material real.
- [ ] **Lanzamiento.** Al mergear cada etapa a `main`, oceanar.org pasa a mostrar el sitio en construcción en lugar de la página "Estamos trabajando en el sitio". Decidir antes del primer merge.
- [ ] Al lanzar: pasar las redirecciones de slugs a permanentes (`src/i18n/routes.ts`).
