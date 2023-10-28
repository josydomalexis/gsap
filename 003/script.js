let tl = gsap.timeline();
tl.from("#heading", {
  y: -50,
  duration: 0.5,
  delay: 0,
  scale: 1,
  color: "red",
  repeat: 0,
});
tl.from("#box1", {
  x: window.innerWidth / 2,
  duration: 2,
  delay: 0.1,
  backgroundColor: "red",
  rotate: 360,
  scale: 0.0,
  stagger: 0.5,
  repeat: 1,
  yoyo: true,
});
