import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Link href="/"><h1 style={{margin:0, fontSize:'1.5rem'}}>Wholepieceworld</h1></Link>
        <div style={{display:'flex', gap:'1rem'}}>
          <Link href="/map">Mapa</Link>
          <Link href="/contribute">Contribuir</Link>
          <Link href="/legal">Legal</Link>
        </div>
      </nav>
    </header>
  );
}