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
  })
  .to(
    "#svgcontainer",
    {
      opacity: 1,
      delay: -1,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    ".dotted",
    {
      opacity: 1,
      delay: -1.2,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .from(
    "#sammy-s,#sammy-a,#sammy-m,#sammy-m2 ,#sammy-y",
    {
      opacity: 0,
      duration: 1.3,
      scale: 0,
      top: "40%",
      left: "47%",
    },
    "up"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  );
//   .from("#explore", {
//     scale: 0,
//     opacity: 0,
//     delay: -1.5,
//   });

//   After Click Expoler

var tl2 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function () {
    tl2
      .to(
        "#sammy-s",
        {
          left: "-15%",
          top: "-15%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#sammy-a",
        {
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#sammy-m",
        {
          left: "115%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#sammy-m2",
        {
          left: "115%",
          top: "110%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#sammy-y",
        {
          left: "35%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to("#donut", {
        width: "80vw",
        top: "-10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        ".dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to("#svgcontainer", {
        opacity: 0,
      });
  });
});
