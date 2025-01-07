import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './demo.css'; // Create this file for custom styles

const Demo = () => {
  useEffect(() => {
    window.addEventListener('scroll', rotateText);
    return () => window.removeEventListener('scroll', rotateText);
  }, []);

  const rotateText = () => {
    const text = document.querySelector('.rotating-text');
    if (text) {
      const scrollPosition = window.scrollY;
      text.style.transform = `rotate(${scrollPosition / 5}deg)`;
    }
  };

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <img src="https://via.placeholder.com/200" alt="Circular" className="circular-image" />
          <div className="rotating-text">
            <p>This text rotates around the circular image as you scroll.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
