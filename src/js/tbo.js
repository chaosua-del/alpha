$(document).ready(function () {
 
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: false,
    watchSlidesVisibility: false,
    watchSlidesProgress: true,
  });
  const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    slidesPerView: 1,
    effect: 'fade',
    thumbs: {
      swiper: galleryThumbs
    }
  });
    
  });
  