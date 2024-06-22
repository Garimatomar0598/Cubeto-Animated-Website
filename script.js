
Shery.mouseFollower();
Shery.makeMagnet(".magnet",".fheading");
Shery.hoverWithMediaCircle(".hvr",{
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

Shery.hoverWithMediaCircle(".gst",{
  videos: ["", "", ""],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});


Shery.imageMasker(".img" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Shery",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});






