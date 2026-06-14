

This repository was created to demonstrate a regression in behaviour when rendering GeoJSON layers in MapLibre, between version 5 and version 6.

To see the regression simply run `npm install` then `npm run dev` to run the development server. The latest version 6 preview of MapLibre is installed by default.

In `src/main.js` you can flick between v5 and v6:

```javascript
// v5 
// import maplibregl from 'maplibre-gl'

// v6
import { Map } from 'maplibre-gl'
```


You will need to swap between v5 and v6 in `package.json`.