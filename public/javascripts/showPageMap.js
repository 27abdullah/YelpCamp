mapboxgl.accessToken = 'pk.eyJ1IjoiYm9icmVudDEyMTIiLCJhIjoiY2xkaDczY2g4MDRqZDNvbm93YzVxMm95dSJ9.7j5rVXtpfMs1jsDPWbHrtQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: campground.geometry.coordinates,
    zoom: 9,
});


new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(new mapboxgl.Popup().setHTML(`<h5>${campground.title}</h5>`)) // add popup
    .addTo(map)