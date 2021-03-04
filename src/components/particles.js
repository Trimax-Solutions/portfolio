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
                "value": "#cecccc"
              }
            },
            "number": {
              "value": 100
            },
            "size": {
              "value": 3
            },
            "color": {
              "value": "#cecccc"
            }
          },
          "interactivity": {
            "color": {
              "value": "#cecccc"
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
