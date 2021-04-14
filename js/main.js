const myChannelSlider = new Swiper('.my-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '#my-channel-button-next',
      prevEl: '#my-channel-button-prev',
    },
  
  });
// *! /myChannelSlider

  const recommendedSlider = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '#recommended-button-next',
      prevEl: '#recommended-button-prev',
    },
  
  });
// *! /recommendedSlider

  const recommendedChannelSlider = new Swiper('.recommended-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '#recommended-channel-button-next',
      prevEl: '#recommended-channel-button-prev',
    },
  
  });
 // *! /recommendedChannelSlider