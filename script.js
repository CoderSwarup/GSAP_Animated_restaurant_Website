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

// Change The Page

const example = () => {
  window.location.href = "/again.html";
};

// Section 3 Main Page

let t3 = gsap.timeline();

t3.from("#main", {
  opacity: "0",
  ease: "expo.inout",
  duration: 1,
})
  .from(".hero-main", {
    delay: -1,
    opacity: 0,
    ease: "expo.inout",
  })
  .from(
    "#line-effect-1",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 2,
    },
    "anim1"
  )
  .from(
    "#line-effect-2 , #line-effect-3",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  )
  .from(
    ".img-one",
    {
      y: "50%",
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit",
    {
      width: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit-2",
    {
      height: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".main-text",
    {
      opacity: 0,
      ease: "expo.inout",
      delay: -0.5,
      duration: 1,
    },
    "anim2"
  )
  .from("#nav", {
    y: -100,
    duration: 1,
  });

// Upper Nav

let NavOpen = document.querySelector("#nav-open");
let upperNav = document.querySelector(".upper-menu");
let NavClose = document.querySelector("#nav-close");
NavOpen.addEventListener("click", (e) => {
  upperNav.style.top = "0";
});

NavClose.addEventListener("click", (e) => {
  upperNav.style.top = "-100%";
});

let UpperMenuLists = document.querySelectorAll(".upper-nav-links");
let sliderupper = document.querySelector("#slider-upper-wala");

UpperMenuLists.forEach((ele, i) => {
  ele.addEventListener("mouseover", (e) => {
    sliderupper.style.transform = `translateY(-${i * 25}%)`;
  });
  // ele.addEventListener("mouseout", (e) => {
  //   sliderupper.style.transform = `translateY(-0%)`;
  // });
});
