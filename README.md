# 3D Websites using

1. Gsap

   - duration
   - delay
   - rotate
   - scale
   - stagger
   - repeat
   - yoyo
   - onStart: function()

2. ScrollTrigger

   - scroller
   - trigger
   - scrub
   - pin
   - start
   - end
   - markers

3. Gsap Timeline
   - let tl = gsap.timeline()

```
tl.from("#heading", {
  y: -50,
  duration: 0.5,
  delay: 0,
  scale: 1,
  color: "red",
  repeat: 0,
});

gsap.to(".hero h1", {
  transform: "translateX(-140%)",
  scrollTrigger: {
    trigger: ".hero",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -200%",
    scrub: 2,
    pin: true,
  },
});
```
