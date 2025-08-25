import { useState } from 'react';

interface Location {
  name: string;
  coordinates: [number, number];
}

interface Props {
  locations: Location[];
  onSelect: (location: Location) => void;
}

export default function SearchBar({ locations, onSelect }: Props) {
  const [query, setQuery] = useState('');

  const filtered = locations.filter((loc) =>
    loc.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Buscar lugar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      {query && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, background: '#fff', border: '1px solid #ccc' }}>
          {filtered.map((loc) => (
            <li
              key={loc.name}
              style={{ padding: '0.5rem', cursor: 'pointer' }}
              onClick={() => {
                onSelect(loc);
                setQuery('');
              }}
            >
              {loc.name}
            </li>
          ))}
          {filtered.length === 0 && (
            <li style={{ padding: '0.5rem', color: '#666' }}>No encontrado</li>
          )}
        </ul>
      )}
    </div>
  );
}