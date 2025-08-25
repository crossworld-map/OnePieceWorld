import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Wholepieceworld – Mapa de One Piece</title>
        <meta name="description" content="Explora el mundo de One Piece con este mapa interactivo fan-made." />
      </Head>
      <section style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bienvenido a Wholepieceworld</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Explora un mapa interactivo del universo de <em>One Piece</em> hecho por fans. Navega por
          las islas, descubre referencias y sigue la cronología de esta gran aventura.
        </p>
        <Link href="/map" style={{ display: 'inline-block', background: '#F5A623', color: '#0E3E61', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
          Ir al Mapa
        </Link>
      </section>
      <section style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem' }}>Apoya el proyecto</h3>
        <p style={{ marginBottom: '1rem' }}>Este mapa es gratuito y se sostiene gracias a donaciones. ¡Invítanos a un café!</p>
        {/* Enlace al perfil de Ko‑fi para recibir donaciones. Sustituye “crossworld” si cambias tu nombre de usuario en Ko‑fi. */}
        <a
          href="https://ko-fi.com/crossworld"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#29abe0', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 'bold' }}
        >
          Donar en Ko‑fi
        </a>
      </section>
    </Layout>
  );
}