import Layout from '../components/Layout';
import Head from 'next/head';

export default function Legal() {
  return (
    <Layout>
      <Head>
        <title>Aviso Legal – Wholepieceworld</title>
      </Head>
      <h2 style={{ marginTop: '1rem' }}>Aviso Legal y Política de Privacidad</h2>
      <h3>Aviso Legal</h3>
      <p>
        Este sitio es un proyecto de fans no oficial basado en el universo de <em>One Piece</em>. No
        está afiliado de ninguna manera con los titulares de derechos de <em>One Piece</em>, y no utiliza
        imágenes oficiales ni materiales con copyright. Todos los nombres de lugares y referencias
        son utilizados con fines informativos y educativos.
      </p>
      <p>
        Los datos geográficos, descripciones y referencias provienen de la comunidad de fans y
        fuentes libres como wikis y artículos. Se citan las referencias a los capítulos y
        volúmenes en la medida de lo posible.
      </p>
      <h3>Política de Privacidad</h3>
      <p>
        Wholepieceworld respeta tu privacidad. No utilizamos cookies de rastreo ni recopilamos datos
        personales identificables. Empleamos un servicio de analítica libre y respetuoso con la
        privacidad (Umami) para conocer el número de visitas y mejorar el sitio. Esta analítica
        recoge datos de forma anónima y no se comparte con terceros.
      </p>
      <h3>Licencias</h3>
      <p>
        El código del proyecto se publica bajo la licencia MIT. Los datos y aportes de la comunidad
        también se comparten bajo la misma licencia, salvo que se indique lo contrario.
      </p>
    </Layout>
  );
}