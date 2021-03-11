import React from 'react';
import './main.css';
import Particles from 'react-particles-js';

function Particle() {
  return (
    <div id="particles">
      <Particles
        params={{
          "particles": {
            line_linked: {
              "color": {
                "value": "#000000"
              }
            },
            "number": {
              "value": 30
            },
            "size": {
              "value": 3
            },
            "color": {
              "value": "#000000"
            }
          },
          "interactivity": {
            "color": {
              "value": "#000000"
            },
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            },
          }
        }}
      />
    </div>
  );
}

export default Particle;
