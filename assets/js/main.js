// ****새로고침
history.scrollRestoration = "manual";


// gsap.to('.sc-main .text-group',{
//   scrollTrigger:{
//     trigger:".sc-about",
//     start:"0% 100%",
//     end:"0% 100%",
//     markers:true,
//     scrub:1,
//   },
//   opacity:0,
//   visibility: 'hidden'
// })



// $(function () { 
//   var controller = new ScrollMagic.Controller({
//     globalSceneOptions: {
//       triggerHook: 'onLeave',
//       duration: "200%" 
//     }
//   });

//   var slides = document.querySelectorAll(".sc-main .img-slide .main-img");

 
//   for (var i=0; i<slides.length; i++) {
//     new ScrollMagic.Scene({

//         triggerElement: slides[i]
//       })
//       .setPin(slides[i], {pushFollowers: false})
//       .addIndicators() 
//       .addTo(controller);
//   }
// });













// ** 웹 좌/우 스와이퍼

var swiper = new Swiper("#mySwiper", {
  slidesPerView: 2.2,
  spaceBetween: 25,
  freeMode: true,
  
});



