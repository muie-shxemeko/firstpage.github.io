// Lenis Smooth Scroll function here
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// Lenis Smooth Scroll Code End