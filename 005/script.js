let tl = gsap.timeline();

tl.to("#loader span", {
  delay: 0.5,
  duration: 1,
  onStart: loader(),
});

tl.to("#loader", {
  top: "-100%",
  duration: 1,
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

function loader() {
  let progress = 0;
  let progressHolder = document.querySelector("#progressBar");
  function loader() {
    progress = progress + Math.floor(Math.random() * 15);
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressTimer);
    }
    progressHolder.innerHTML = progress + "%";
  }

  let progressTimer = setInterval(loader, 50);
}
