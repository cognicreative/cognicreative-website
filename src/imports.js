import './main.jsx'

// Import folders
function importAll (r) {
  r.keys().forEach(r)
}

importAll(require.context('./html/', true, /\.html$/))
importAll(require.context('./assets/images/', true, /\.png$/))
importAll(require.context('./assets/stylesheets/', true, /\.s?css$/))
