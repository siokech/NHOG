// Initialize Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": { "value": "#211e1d" }, // Particle color
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "211e1d",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // Speed of movement
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "repulse" }, // Move particles when hovered
            "onclick": { "enable": true, "mode": "push" } // More particles on click
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 },
            "push": { "particles_nb": 4 }
        }
    }
});
