$(document).ready(function () {
  console.log("ready!");
  const mySwiper = new Swiper(".categories__swiper-container", {
    slidesPerView: "auto",
    loop: "true",
    // Navigation arrows
    navigation: {
      nextEl: ".categories__swiper-button-next",
      prevEl: ".categories__swiper-button-prev",
    },
  });

  const catalog = new Swiper(".catalog__swiper-container", {
    slidesPerView: "auto",
    loop: "true",
    // Navigation arrows
    navigation: {
      nextEl: ".catalog__swiper-button-next",
      prevEl: ".catalog__swiper-button-prev",
    },
    pagination: {
      el: ".catalog__swiper-pagination"
    }
  });

  const catalog2 = new Swiper(".catalog2__swiper-container", {
    slidesPerView: "auto",
    loop: "true",
    // Navigation arrows
    navigation: {
      nextEl: ".catalog2__swiper-button-next",
      prevEl: ".catalog2__swiper-button-prev",
    },
    pagination: {
      el: ".catalog2__swiper-pagination"
    }
  });

  // map
  const mymap = L.map("mapid", {
    zoom: 15,
    scrollWheelZoom: false,
    center: [51.5, -0.09]
});

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    zoomControl: false,
    scrollWheelZoom: false,
    accessToken: 'pk.eyJ1IjoiY2hhb3N1YS1kZWwiLCJhIjoiY2tkbjBqY3dqMGlmaDJxcW4xbnljb2V1aiJ9.lKJeJfZMCU8J2h9G8aMbVg'
}).addTo(mymap);

  
});
