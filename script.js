// --------- Text Animation using descramblejs ----------- https://github.com/cjbarnaby/text_descrambler/tree/master
$(document).ready(function () {
  var $scramble = $(".scramble");
  $scramble.scramble(3000, 20, "alphabet", true);
});

// Gsap Animation

let t1 = gsap.timeline();

t1.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(".loader", {
    y: "-100%",
    duration: 1,
  });
