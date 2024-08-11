import React, { useEffect } from 'react';
import '../src/App.css'; // Ensure to add your styles here

const nav = () => {
  useEffect(() => {
    const rocket = document.getElementById('rocket');
    const message = document.getElementById('message');

    // Initial Position of rocket
    rocket.style.top = '100%';
    rocket.style.left = '45%';

    // Function to create and animate smoke
    function createSmoke(x, y) {
      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      smoke.style.top = y + 'px';
      smoke.style.left = x + 'px';
      document.body.appendChild(smoke);

      // Remove smoke element after animation is complete
      setTimeout(() => {
        smoke.remove();
      }, 4000);
    }

    // Start rocket animation and smoke creation
    setTimeout(() => {
      rocket.style.top = '-40%';

      // Create smoke at intervals as rocket moves
      let rocketPosition = 100;
      const smokeInterval = setInterval(() => {
        rocketPosition -= 5;
        createSmoke(window.innerWidth * 0.45 + 40, rocketPosition + window.innerHeight);
        if (rocketPosition <= window.innerHeight * 0.3) {
          clearInterval(smokeInterval);
        }
      }, 100);
    }, 500);

    // Show message after rocket reaches its position
    setTimeout(() => {
      message.style.opacity = 1;
    }, 1000);

    setTimeout(() => {
      message.style.opacity = 0;
    }, 3500);

    setTimeout(() => {
      rocket.style.opacity = 0;
    }, 3000);

    setTimeout(() => {
      document.querySelector('.navbar').style.opacity = 1;
      document.querySelector('.container').style.opacity = 1;
    }, 4500);
  }, []);

  


};

export default nav;
