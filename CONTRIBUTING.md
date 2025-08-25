# Guía de Contribución

¡Gracias por considerar contribuir a Wholepieceworld! Este proyecto es posible gracias a la comunidad de fans. A continuación se detallan las pautas para colaborar de forma efectiva.

## ¿Cómo contribuir?

1. **Fork** el repositorio y clona tu copia local.
2. Crea una rama para tu aporte: `git checkout -b nombre-de-la-rama`.
3. Realiza tus cambios y asegúrate de que el proyecto compile (`npm run build`).
4. Describe claramente tus cambios en el mensaje de commit.
5. Envía un **Pull Request** a la rama `main` explicando el problema que resuelves o la mejora que aportas.

## Añadir o corregir ubicaciones

Las ubicaciones se almacenan en `data/locations.geojson` como un [GeoJSON FeatureCollection](https://geojson.org/). Cada punto debe incluir:

- `name`: nombre del lugar.
- `description`: descripción breve del lugar.
- `chapter`: rango de capítulos o volumen donde aparece.
- `layer`: categoría (por ejemplo, `Grand Line`, `New World`, etc.).

Ejemplo de una entrada:

```json
{
  "type": "Feature",
  "geometry": { "type": "Point", "coordinates": [30, -15] },
  "properties": {
    "name": "Dressrosa",
    "description": "Isla gobernada por un rey carismático; arena de gladiadores.",
    "chapter": "700-801",
    "layer": "New World"
  }
}
```

Por favor, coloca las nuevas entradas en orden alfabético para facilitar la lectura.

## Reportar problemas

Si encuentras un bug o tienes una sugerencia, abre un **Issue** describiendo:

- Pasos para reproducir el problema o contexto de la sugerencia.
- Comportamiento actual y comportamiento esperado.
- Capturas de pantalla o códigos relevantes si aplica.

## Convenios de código

- Utilizamos **TypeScript** y **React**. Mantén tipado estricto y evita cualquier tipo `any` cuando sea posible.
- Sigue las reglas de linting configuradas con ESLint. Ejecuta `npm run lint` antes de subir tus cambios.
- Usa nombres de variables descriptivos y comentarios cuando sea necesario.

## Licencia

Al contribuir aceptas licenciar tu trabajo bajo la licencia MIT, con la que se distribuye este proyecto.