$(document).ready(function () {
   // map
   const mymap2 = L.map("crmap", {
    zoom: 14,
    scrollWheelZoom: false,
    center: [52.5, -0.08]
});

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 511,
    zoomOffset: -1,
    zoomControl: false,
    scrollWheelZoom: false,
    accessToken: 'pk.eyJ1IjoiY2hhb3N1YS1kZWwiLCJhIjoiY2tkbjBqY3dqMGlmaDJxcW4xbnljb2V1aiJ9.lKJeJfZMCU8J2h9G8aMbVg'
}).addTo(mymap2);
    
  });

