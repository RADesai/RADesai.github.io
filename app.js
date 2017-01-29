particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 400
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
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 50,
      "color": "#BDB2FF",
      "opacity": 0.75,
      "width": 0.5
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 400,
        "rotateY": 400
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
        "mode": "push"
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
        "distance": 80,
        "size": 15,
        "duration": 1,
        "opacity": 0.75,
        "speed": 1.5
      },
      "repulse": {
        "distance": 75,
        "duration": 2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
}

);
