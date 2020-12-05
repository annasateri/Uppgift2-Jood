var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

  });