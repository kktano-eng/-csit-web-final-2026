
// MOBILE NAVIGATION
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.textContent = isOpen ? "CLOSE" : "MENU";
  });

  // Close menu after clicking a navigation link
  navigation.addEventListener("click", (event) => {

    if (event.target.closest("a")) {

      navigation.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");

      menuButton.textContent = "MENU";
    }
  });

  // Reset menu when returning to desktop size
  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

      navigation.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "MENU";
    }
  });
}


// ANIMATED STARFIELD BACKGROUND
const canvas = document.getElementById("stars");

if (canvas) {

  const context = canvas.getContext("2d");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let width = 0;
  let height = 0;

  let stars = [];
  let animationId = null;


  // SET CANVAS SIZE
  function resizeCanvas() {

    const pixelRatio = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);

    context.setTransform(
      pixelRatio,
      0,
      0,
      pixelRatio,
      0,
      0
    );

    const count = Math.min(
      220,
      Math.floor((width * height) / 6000)
    );

    stars = Array.from({ length: count }, () => ({

      x: Math.random() * width,
      y: Math.random() * height,

      radius: Math.random() * 1.4 + 0.2,

      phase: Math.random() * Math.PI * 2,

      speed: Math.random() * 0.02 + 0.005,

      warm: Math.random() < 0.2

    }));

    if (reduceMotion.matches) {
      draw(0);
    }
  }


  // DRAW STARS
  function draw(time) {

    context.clearRect(
      0,
      0,
      width,
      height
    );

    for (const star of stars) {

      const alpha =
        0.4 +
        0.6 * Math.abs(
          Math.sin(
            star.phase + time * star.speed * 0.1
          )
        );

      context.fillStyle = star.warm

        ? `rgba(255,190,100,${alpha})`

        : `rgba(220,225,255,${alpha})`;

      context.beginPath();

      context.arc(
        star.x,
        star.y,
        star.radius,
        0,
        Math.PI * 2
      );

      context.fill();


      // Move stars slowly
      if (!reduceMotion.matches) {

        star.y += star.radius * 0.03;

        if (star.y > height) {
          star.y = 0;
        }
      }
    }


    // Continue animation
    if (!reduceMotion.matches) {

      animationId = window.requestAnimationFrame(draw);
    }
  }


  // START ANIMATION
  function startAnimation() {

    if (animationId !== null) {

      window.cancelAnimationFrame(animationId);

      animationId = null;
    }

    if (reduceMotion.matches) {

      draw(0);

    } else {

      animationId = window.requestAnimationFrame(draw);
    }
  }


  // RESIZE EVENT
  window.addEventListener("resize", () => {

    resizeCanvas();

    startAnimation();
  });


  // Detect motion preference changes
  if (typeof reduceMotion.addEventListener === "function") {

    reduceMotion.addEventListener(
      "change",
      startAnimation
    );
  }


  // INITIALIZE
  resizeCanvas();

  startAnimation();
}
