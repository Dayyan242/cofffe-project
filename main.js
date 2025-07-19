function placeOrder(item) {
  alert("You have ordered: " + item);
}

// Animate main title
gsap.from(".home__title", {
  duration: 1.2,
  y: 100,
  opacity: 0,
  ease: "power4.out",
});

// Animate description
gsap.from(".home__description", {
  duration: 1.2,
  y: 80,
  opacity: 0,
  delay: 0.4,
  ease: "power4.out",
});

// Animate button
gsap.from(".button", {
  duration: 1,
  scale: 0,
  opacity: 0,
  delay: 0.6,
  ease: "back.out(1.7)",
});

// Animate coffee image with rotation
gsap.from(".home__coffee", {
  duration: 1.5,
  x: 200,
  rotate: 40,
  opacity: 0,
  delay: 0.8,
  ease: "expo.out",
});

// Animate splash
gsap.from(".home__splash", {
  duration: 1.5,
  y: -200,
  opacity: 0,
  delay: 1,
  ease: "expo.out",
});

// Animate beans and ice one by one
gsap.from(
  [
    ".home__bean-1",
    ".home__bean-2",
    ".home__ice-1",
    ".home__ice-2",
    ".home__leaf",
  ],
  {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    delay: 1.2,
    ease: "back.out(1.7)",
  }
);

// Animate sticker bouncing
gsap.from(".home__sticker", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  delay: 1.5,
  ease: "bounce.out",
});
