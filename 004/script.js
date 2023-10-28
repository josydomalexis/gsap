let tl = gsap.timeline();

tl.from(".logoImage, .menu a, .menu_CTA a", {
  duration: 0.4,
  scale: 1.5,
  y: -60,
  repeat: 0,
  opacity: 0,
  stagger: 0.15,
});

tl.from(".heroText span", {
  duration: 0.4,
  scale: 1.5,
  y: 60,
  repeat: 0,
  opacity: 0,
  stagger: 0.3,
});

tl.from(".scrollDown", {
  duration: 0.4,
  opacity: 0,
  y: -60,
});

tl.to(".scrollDown", {
  duration: 0.4,
  y: -60,
  repeat: -1,
  yoyo: true,
});

gsap.from("#page1 h2, #page1 p", {
  duration: 0.4,
  scale: 1.5,
  y: 60,
  repeat: 0,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 10%",
    scrub: 2,
  },
});

let tl2 = timeline();

let scrollDownText = document.querySelector(".scrollDown");
