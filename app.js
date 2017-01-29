particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#6C5E95"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#6C5E95"
      },
      "polygon": {
        "nb_sides": 6
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.4,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 40,
      "color": "#3BDE48",
      "opacity": 0.55,
      "width": 0.7
    },
    "move": {
      "enable": true,
      "speed": 0.75,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 50,
        "size": 10,
        "duration": 1,
        "opacity": 0.25,
        "speed": 1
      },
      "repulse": {
        "distance": 175,
        "duration": 2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);
