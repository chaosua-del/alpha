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

  // counter
  const plus = $('.info__plus');
  const minus = $('.info__minus')
  const value = $('.info__counter-number');
  let i = 1;

  plus.on('click', () => {
    i++;
    if(i>9)
    value.text(`${i}`);
    else
    value.text(`0${i}`);
  });

  minus.on('click', () => {
    if(i > 1 && i < 10) {
      i--;
      value.text(`0${i}`);
    }
    else if(i > 9) {
      i--;
      value.text(`${i}`);
    }
    else
    return;
  });
    
  });
  