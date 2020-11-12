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
  

  plus.on('click', () => {
    let i = parseInt(value.val())
    i++;
    if(i>9)
    value.val(`${i}`);
    else
    value.val(`0${i}`);
  });

  minus.on('click', () => {
    let i = parseInt(value.val())
    if(i > 1 && i < 10) {
      i--;
      value.val(`0${i}`);
    }
    else if(i > 9) {
      i--;
      value.val(`${i}`);
    }
    else
    return;
  });
    
  });
  