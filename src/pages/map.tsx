import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import type { FeatureCollection, Feature } from 'geojson';

// Dynamically import maplibre-gl to avoid SSR issues
const Maplibre = dynamic(() => import('maplibre-gl'), { ssr: false });

interface Location {
  name: string;
  coordinates: [number, number];
}

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    async function initMap() {
      // Load GeoJSON data
      const res = await fetch('/data/locations.geojson');
      const data: FeatureCollection = await res.json();
      const locs: Location[] = data.features.map((feature: Feature) => {
        const coords = feature.geometry?.coordinates as [number, number];
        const name = feature.properties?.name as string;
        return { name, coordinates: coords };
      });
      setLocations(locs);

      const maplibre = (await import('maplibre-gl')).default;
      const map = new maplibre.Map({
        container: mapContainer.current!,
        style: {
          version: 8,
          sources: {
            // A raster source for our custom world map image
            world: {
              type: 'image',
              url: '/map-base.png',
              coordinates: [
                [-180, 90],
                [-180, -90],
                [180, -90],
                [180, 90]
              ]
            },
            locations: {
              type: 'geojson',
              data: data
            }
          },
          layers: [
            {
              id: 'world-layer',
              type: 'raster',
              source: 'world'
            },
            {
              id: 'location-layer',
              type: 'circle',
              source: 'locations',
              paint: {
                'circle-color': '#F5A623',
                'circle-radius': 6,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#0E3E61'
              }
            }
          ]
        },
        center: [0, 0],
        zoom: 1.5,
        maxZoom: 5
      });
      mapRef.current = map;

      // Show popup on click
      map.on('click', 'location-layer', (e: any) => {
        const feature = e.features[0];
        const props = feature.properties;
        const coordinates = feature.geometry.coordinates.slice();
        const popupHTML = `
          <strong>${props.name}</strong><br />
          ${props.description}<br />
          <em>Capítulos: ${props.chapter}</em>
        `;
        new maplibre.Popup().setLngLat(coordinates).setHTML(popupHTML).addTo(map);
      });

      // Change cursor on hover
      map.on('mouseenter', 'location-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'location-layer', () => {
        map.getCanvas().style.cursor = '';
      });
    }
    initMap();
    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const handleSelect = (loc: Location) => {
    if (mapRef.current) {
      mapRef.current.flyTo({ center: loc.coordinates, zoom: 3 });
    }
  };

  return (
    <Layout>
      <h2 style={{ marginTop: '1rem' }}>Mapa Interactivo</h2>
      <p>Busca una isla o haz clic en los marcadores para conocer más.</p>
      <SearchBar locations={locations} onSelect={handleSelect} />
      <div
        ref={mapContainer}
        style={{ width: '100%', height: '60vh', border: '1px solid #ccc' }}
      />
    </Layout>
  );
}