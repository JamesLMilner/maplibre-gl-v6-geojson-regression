import './style.css'

// v5 
// import maplibregl from 'maplibre-gl'

// v6
import { Map } from 'maplibre-gl'

import 'maplibre-gl/dist/maplibre-gl.css'

document.querySelector('#app').innerHTML = '<div id="map"></div>'

const OSMStyle = {
  version: 8,
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
  },
  layers: [
    {
      id: "osm-tiles",
      type: "raster",
      source: "osm-tiles",
    },
  ],
};


const nycPoint = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-74.006, 40.7128],
      },
      properties: {
        name: 'New York, USA',
      },
    },
  ],
}

const map = new Map({
  container: 'map',
  style: OSMStyle,
  center: nycPoint.features[0].geometry.coordinates,
  zoom: 11,
})

map.on('load', () => {
  map.addSource('new-york-source', {
    type: 'geojson',
    data: nycPoint,
  })

  map.addLayer({
    id: 'new-york-point',
    type: 'circle',
    source: 'new-york-source',
    paint: {
      'circle-radius': 8,
      'circle-color': '#e64c3c',
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff',
    },
  })
})
