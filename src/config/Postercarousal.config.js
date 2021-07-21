const settings = {
    infinity: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    reponsive: [{
        breakpoints: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
        },
    },
    {
       breakpoints: 480,
       settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           InitialSlide: 1,
       },
   },
   {
       breakpoints: 480,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           InitialSlide: 1,
       },
   },
 ],

};
export default settings;   //while importing this we can name it as anything hence default
