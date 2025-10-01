'use strict';

// Modal state
let zoomed = false;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
  const sertifikatItems = document.querySelectorAll('.sertifikasi-item');
  sertifikatItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-sertifikat');
      openSertifikatModal(imgSrc);
    });
  });

  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSertifikatModal);
  }
});

function openSertifikatModal(src) {
  const modal = document.getElementById('sertifikatModal');
  if (modal) {
    modal.style.display = 'flex';
    const img = document.getElementById('sertifikatModalImg');
    img.src = src;
    img.style.transform = 'scale(1)';
    zoomed = false;
  }
}

function closeSertifikatModal() {
  const modal = document.getElementById('sertifikatModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function zoomSertifikatImg(img) {
  zoomed = !zoomed;
  img.style.transform = zoomed ? 'scale(1.5)' : 'scale(1)';
  img.style.cursor = zoomed ? 'zoom-out' : 'zoom-in';
}

// Add animations on scroll and initialize Vanilla Tilt
document.addEventListener('DOMContentLoaded', function() {
  // tsParticles Fluid Background Animation
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#888888" // Changed to gray
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5, // Slightly transparent
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 8, // Smaller size
        random: true,
        anim: {
          enable: true,
          speed: 2, // Slower animation
          size_min: 4,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.5, // Slower speed
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 500,
          line_linked: {
            opacity: 0.1
          }
        }
      }
    },
    retina_detect: true
  });

  // Scroll Reveal Animation
  const animatedEls = document.querySelectorAll('.about-main, .timeline-item, .service-item, .content-card, .h2');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach(el => {
    el.classList.add('fade-in-init');
    observer.observe(el);
  });

  // Initialize Vanilla Tilt for cool 3D hover effect
  VanillaTilt.init(document.querySelectorAll(".content-card, .timeline-item, .service-item"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.1
  });
});
