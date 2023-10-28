gsap.from(["#box1", "#box2"], {
  x: 700,
  duration: 2,
  delay: 0.1,
  backgroundColor: "red",
  rotate: 360,
  scale: 0.0,
  stagger: 0.5,
  repeat: -1,
  yoyo: true,
});

gsap.from("#heading", {
  y: -30,
  duration: 0.5,
  delay: 0,
  scale: 1,
  color: "red",
});
