/* @flow */
import React, { Component } from 'react'
import Particles from 'react-particles-js';

import './StarBackground.css'

export default class StarBackground extends Component {

  particlesConfig = (particleConfigSize: String) => {

    const particleData = {
      particleDensityValue: {
        big: 5000,
        medium: 4000,
        small: 800,
      },
      particleSpeed: {
        big: 0.6,
        medium: 0.3,
        small: 0.1,
      },
      particleSize: {
        big: 1.5,
        medium: 1.2,
        small: 0.6,
      },
    }

    return {
      "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": particleData.particleDensityValue[particleConfigSize]
          }
        },
        "color": {
          "value": "#f7efa4"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": particleData.particleSize[particleConfigSize],
          "random": false,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.20517838682439088,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": particleData.particleSpeed[particleConfigSize],
          "direction": "bottom-right",
          "random": false,
          "straight": true,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 0,
            "rotateY": 0
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
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
  }

  render() {
    return (
      <div className='StarBackground'>
        <Particles className="particles" params={this.particlesConfig('big')} />
        <Particles className="particles" params={this.particlesConfig('medium')} />
        <Particles className="particles" params={this.particlesConfig('small')} />
      </div>
    );
  }
}
