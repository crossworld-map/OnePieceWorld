import Layout from '../components/Layout';
import Head from 'next/head';

export default function Contribute() {
  return (
    <Layout>
      <Head>
        <title>Contribuir – Wholepieceworld</title>
      </Head>
      <h2 style={{ marginTop: '1rem' }}>Contribuir</h2>
      <p>¡Gracias por tu interés en colaborar! Este proyecto es open source y agradece las contribuciones de la comunidad.</p>
      <h3>Correcciones y nuevas ubicaciones</h3>
      <p>
        Para proponer una corrección o añadir una nueva ubicación al mapa, por favor envía un
        Pull Request modificando el archivo <code>data/locations.geojson</code>. Cada punto debe incluir
        un nombre, una descripción breve, la referencia de capítulo/volumen y pertenecer a una capa
        (por ejemplo <em>Grand Line</em> o <em>New World</em>).
      </p>
      <h3>Reportar problemas</h3>
      <p>
        Si encuentras un error o tienes una sugerencia, abre un issue en el
        repositorio de GitHub. Incluye toda la información necesaria para reproducir el problema y cualquier contexto adicional.
      </p>
      <h3>Licencia</h3>
      <p>
        Este proyecto está bajo licencia MIT. Al contribuir aceptas licenciar tu trabajo bajo esta misma licencia.
      </p>
    </Layout>
  );
}