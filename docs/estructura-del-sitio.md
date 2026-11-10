# Estructura del sitio — propuesta v1

Documento de trabajo para ordenar el sitio de Oceanar antes de escribir código. Nace de una charla de Gonzalo con Claude (2026-11-09). **Candelaria: esto es una propuesta para que la revises, la corrijas y la valides.** Nada de lo que está acá está decidido en el diseño visual.

## Objetivo

- **Qué es Oceanar para la web:** una propuesta de **experiencias oceánicas**. Es a lo que nos queremos dedicar y donde tenemos experiencia.
- **Primer lanzamiento:** que quien entra **se sienta en el mar** desde el primer segundo y, a la vez, ver lo que ya hicimos (portfolio).
- **Acción que queremos que haga quien visita:** escribirnos o pedir una experiencia.
- **Públicos:** instituciones, festivales y programadores; público general; científicos, ONG y aliados del mar; escuelas y comunidades.

## Concepto: Oceanar es un verbo

Hilo conductor del sitio, tomado del documento "Oceanar_IG" del Canva.

> **Oceanar (v.)** — del griego _Ōkeanós_ ("río que rodea la tierra") + latín _sanare_ ("curar"), con sufijo -ar (Argentina). Acto de ser y hacerse océano. Sanar desde lo profundo. Fluir como identidad. **Oceanar es poner la cultura oceánica en acción.**
>
> Yo oceano · Tú oceanas · Nosotres oceanamos · Ellas oceanan · Vos oceanas · Él oceana

El documento también define la **cultura oceánica**: sentir al océano como un ser vivo y no como un escenario, dejar que el mar enseñe cómo vivir y actuar desde ese vínculo (cuidando, creando, conectando).

Cada obra del portfolio se nombra en el Canva con una acción: _tecnología social_ (Habitar las algas), _arte sonoro_ y _experiencias inmersivas_ (Sala de Punta Ballena Avistajes), _escucha profunda_ y _colabor-acción_ (experiencia sonora para Meraki en Bioferia, con Lula Gil), _presencia_ (proyección y conversación de Anawa), _historias de mar_ (Ojos al mar). Esas acciones son el puente entre el concepto y el portfolio.

## Sensación

Inmersiva y profunda: fondos oscuros tipo mar adentro, **videos subacuáticos** a pantalla completa, sonido, ritmo lento. El video de fondo que ya está en la home va en esa línea.

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

La home es un recorrido que se baja como una inmersión. Propuesta de tramos:

1. **Entrada:** video subacuático a pantalla completa. Sobre el video, **"Oceanar (v.)"** y la conjugación que va cambiando despacio (_Yo oceano… Nosotres oceanamos…_). El sonido del mar es opcional, con un botón visible (los navegadores no permiten reproducir sonido solos).
2. **El verbo:** la definición breve y la frase "Oceanar es poner la cultura oceánica en acción".
3. **Así oceanamos:** el portfolio como acciones. Cada obra aparece con su verbo y un video subacuático corto (_escuchar_, _estar presentes_, _contar historias de mar_, _co-crear_…) que enlaza a su página en Experiencias o Proyectos.
4. **Charlas, talleres y asesorías:** "Si tenés un proyecto que apunta en ese sentido, estamos para crear y colaborar", con botón a Contacto.
5. **Pie:** contacto, Instagram (@oceanar_seresdeagua) y ubicación (Puerto Madryn, Chubut).

Para que la navegación siga clara para programadores e instituciones, el **menú usa nombres directos** (Experiencias, Charlas y talleres, Asesorías, Proyectos, Contacto). Los verbos viven en la home y como etiqueta de cada obra, no reemplazan al menú.

**Videos de la home:**

- Uno solo se carga al entrar (el de la entrada); el resto se carga cuando aparece en pantalla y se pausa al salir.
- Cada clip es corto (unos 20 s), sin audio, liviano (WebM y MP4 de respaldo) y con imagen fija mientras carga.
- Quien tiene activado "reducir movimiento" ve imágenes fijas.
- Cada imagen subacuática lleva su crédito (por ejemplo, Anawa tiene dirección de fotografía subacuática de Laura Babahekian).

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
| **Experiencias sonoras**                 | _Sonidos del mar_, _Sala sonora Punta Ballena_ (Punta Ballena Avistajes) y la experiencia sonora para Meraki en Bioferia, junto a Lula Gil.                                                            | **A definir**: dónde está el material.                                                                                                     |
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

1. ¿Dónde está el material de _Sonidos del mar_, _Sala sonora Punta Ballena_, la experiencia sonora de Meraki en Bioferia y el domo? Si no está listo, van como "próximamente".
2. **Videos subacuáticos para la home:** ¿dónde están los que tenemos (disco, Drive, otro)? ¿Cuáles son los mejores para la entrada y para cada verbo? ¿Quién filmó cada uno, para acreditarlo, y podemos usarlos todos?
3. ¿Qué charlas, talleres y asesorías se ofrecen hoy, con qué formato y ejemplos?
4. ¿A qué mail llegan las consultas? Se conecta con el pendiente del correo `@oceanar.org`.
5. ¿Mostramos año en cada obra (por ejemplo "Danza del Mar, 2023")?
6. ¿Quién pide permiso a la producción de _Ojos al mar_ para usar el tráiler?
