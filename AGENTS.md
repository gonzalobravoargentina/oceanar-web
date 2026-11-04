<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cómo trabajamos en oceanar-web

Lo que sigue vale para cualquier agente (Claude Code, Codex u otro) y se
suma a las convenciones técnicas de `CLAUDE.md`. Son criterios de Cande
(Candelaria Belén Piemonte, diseño y contenidos) aprendidos trabajando con
Claude en otro sitio; se escriben acá para no tener que repetirlos en cada
conversación. Cuando ella fije un criterio nuevo, se agrega a este archivo.

## Quién hace qué

- **Cande** decide la identidad visual, los contenidos y qué se construye.
  No edita código: todo pasa por el agente, que le explica las decisiones
  en términos de diseño y en español, no en opciones técnicas.
- **Gonzalo** se ocupa de lo técnico (infraestructura, CI, despliegue) y
  revisa los PR con Cande antes de unirlos.
- **El agente** recomienda como experto en UX/UI, pero no decide por
  ella. Lo técnico que no cambia lo que se ve lo resuelve solo; lo que
  cambia lo que se ve, lo pregunta.

## Antes de escribir código

- **Conversar primero.** Una idea se discute antes de abrir rama. Si hace
  falta verla funcionando, se muestra como prototipo (imagen de la página
  real con el cambio, o una rama local descartable) antes de integrarla.
- **Solo lo pedido.** No implementar ningún cambio visual, de texto, de
  animación o de material que Cande no haya pedido de forma explícita.
  «Sin preferencia» o una respuesta vacía no es un sí: preguntar de nuevo
  o esperar.
- **Cambiar solo el detalle nombrado.** Lo que ella ya aprobó queda fijo.
  Si pide ajustar algo dentro de una sección, no rediseñar la sección.
- **Una idea, no sumar piezas.** Antes de un cambio grande en una página,
  acordar un solo hilo (una metáfora, un objeto, un lenguaje visual) y
  mostrarlo como storyboard de la página entera, en escritorio y celular.
  Preferir transformar lo que existe antes que agregar secciones; restar
  tanto como se suma. Un cambio a la vez.
- **Propuestas con dimensión.** Nunca proponer solo texto. Cada propuesta
  describe qué dice, cómo se mueve, cómo se ve, qué recurso gráfico usa y
  cómo se distribuye en celular y en escritorio.
- **Profundidad, no eslóganes.** En lo conceptual, escribir primero el
  texto real y discutir su profundidad antes de diseñar. Términos
  correctos con poesía, no frases cortas vacías ni tono grandilocuente.
- **Revisar el material ya usado.** Antes de proponer fotos o videos,
  mirar lo que ya está en el sitio (también cuadros de los videos) para no
  proponer algo repetido.

## Estética

- **Nada de recursos «de IA».** Sin rayita o filete antes de los rótulos,
  sin numeración decorativa 01 / 02 / 03, sin bordes redondeados por
  defecto, sin velos ni gradientes de color sobre las fotos, sin líneas
  finas decorativas bajo los títulos.
- **Lo que prefiere:** fotos reales con mucha presencia, cada imagen
  claramente asociada a su título, fondos planos, información gráfica
  antes que listas de texto, movimiento atado al scroll. La creatividad
  está en la composición (escala, ritmo, animación), no en cambiar de
  tipografía.
- **Composición variada.** No repetir una plantilla homogénea (por
  ejemplo, capítulos iguales alternando izquierda y derecha).
- **Un solo lenguaje visual en todo el sitio.** Una página especial
  también reutiliza los recursos que el sitio ya tiene; no inventar una
  forma nueva de mostrar fotos para una sola sección.

## Texto en pantalla

- **Una voz por párrafo:** una familia, un tamaño y un color. La jerarquía
  sale de elementos separados (título y después texto), nunca de mezclar
  dentro de una frase. Como mucho una palabra o frase destacada, en un
  color que la paleta ya tenga. Nada de colores nuevos.
- **Nada ilegible en ningún tamaño:** ningún texto sobre otro, ninguno
  cortado por su caja, la página nunca más ancha que la pantalla. Si algo
  no entra, la sección crece; las palabras no se cortan.
- **Cortes de línea:** títulos con `text-wrap: balance`, párrafos con
  `text-wrap: pretty`, líneas de lectura de menos de unos 85 caracteres,
  nada por debajo de 11px.
- **Tarjetas siempre de la misma medida.** Un desborde se resuelve dentro
  de la tarjeta (achicar dentro de la escala, reubicar, acortar el texto),
  nunca agrandando una o dejando una fila despareja.
- **Cuando pida «volumen»,** proponer una o dos opciones contenidas, lado
  a lado, antes de aplicar nada.

## Celular y escritorio

- Se diseña primero para celular (~375px) y después se escala.
- Cada cambio se revisa en los dos formatos antes de mostrarlo.
- **Ninguna foto pierde parte de su sujeto por el recorte en celular.** Si
  algo no entra, se cambia el tamaño de letra o la distribución, no la
  foto.

## Movimiento y navegación

- **Nada mueve la página salvo la persona.** Sin scroll-snap, sin
  capturar la rueda o el gesto, sin avance automático. El relato por
  scroll se arma con una imagen fija y tarjetas que pasan con el scroll
  normal.
- Las animaciones dentro de una pantalla arrancan cuando la pantalla
  entra en vista, nunca moviendo la página.
- Antes de rehacer una página entera con movimiento, ofrecer una sección
  de prueba para que Cande la pruebe en su celular y su computadora.

## Antes de mostrarle algo a Cande

1. Releer este archivo y revisar el cambio regla por regla.
2. Mirarlo en celular y en escritorio.
3. Correr `npm run check`.

## Controles pendientes (para Gonzalo)

En el otro sitio, lo que sostiene estas reglas sin que Cande tenga que
vigilarlas son pruebas automáticas en el CI: una auditoría de diseño con
Playwright en varios tamaños de pantalla (texto encimado, cortado o
desbordado, fotos recortadas), contraste y accesibilidad con axe, y
revisión de estilos con stylelint. Acá todavía no existen; cuando se
sumen, se describen en esta sección.
