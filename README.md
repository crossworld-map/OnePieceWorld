# Crossworld – Mapa Fan‑made de One Piece

Crossworld es un mapa web interactivo del mundo de **One Piece** creado por fans. El sitio permite explorar los mares, islas y regiones del universo de la serie, con referencias a capítulos y volúmenes. El proyecto es gratuito y se sostiene a través de donaciones de la comunidad.

## Características del MVP

- **Mapa interactivo**: utiliza MapLibre GL JS para renderizar un mapa 2D basado en una imagen estilizada del mundo de One Piece. Incluye marcadores con títulos, descripciones y referencias de capítulos/volúmenes.
- **Buscador**: permite buscar lugares e ir directamente a su ubicación en el mapa.
- **Capas**: cada lugar pertenece a una capa (por ejemplo, *Grand Line* o *New World*); en futuras versiones se podrán activar o desactivar.
- **Página principal**: incluye un resumen del proyecto y un llamado a la acción para apoyar mediante donaciones.
- **Guía de contribución**: explica cómo enviar correcciones y nuevas ubicaciones vía Pull Requests.
- **Aviso legal y política de privacidad**: declara la naturaleza fan‑made del proyecto y detalla que no se recogen datos personales.

## Instalación local

Requisitos: Node.js ≥ 18 y npm.

```bash
git clone https://github.com/crossworld-map/OnePieceWorld.git
cd OnePieceWorld
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

## Estructura del proyecto

- `src/pages` – Páginas de Next.js (`index.tsx`, `map.tsx`, `contribute.tsx`, `legal.tsx`).
- `src/components` – Componentes reutilizables (Layout, Header, Footer, SearchBar).
- `public` – Recursos estáticos como la imagen base del mapa.
- `data/locations.geojson` – Archivo con las ubicaciones (islas, ciudades) y sus propiedades.

## Despliegue en Vercel

El proyecto está configurado para desplegarse automáticamente en [Vercel](https://vercel.com/). Cada vez que se hace push a la rama `main`, Vercel construye y publica una nueva versión en producción.

Para desplegar manualmente:

1. Crea una cuenta en Vercel y autoriza el acceso a tu repositorio de GitHub.
2. Importa el repositorio **OnePieceWorld**. La configuración detectará Next.js automáticamente.
3. Haz clic en **Deploy**.

Consulta la documentación de Vercel para más detalles sobre variables de entorno y dominios personalizados.

## Contribuir

Las contribuciones son bienvenidas. Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para conocer el flujo de trabajo y las pautas.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

## Aviso legal

Crossworld es un proyecto de fans no oficial. No posee afiliación con los titulares de derechos de **One Piece**. No se utilizan materiales oficiales con copyright. El objetivo es educativo y transformativo.