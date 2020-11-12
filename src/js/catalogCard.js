$(document).ready(function () {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: false,
    watchSlidesVisibility: false,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    thumbs: {
      swiper: galleryThumbs
    }
  });
 
    
  });
  