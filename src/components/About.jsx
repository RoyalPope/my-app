import React from 'react';
import img1 from '../assets/images/img 1.jpeg';
import img2 from '../assets/images/img 2.jpeg';
import img3 from '../assets/images/img 3.jpeg';
import img4 from '../assets/images/img 4.jpeg';
import img5 from '../assets/images/img 5.jpeg';
import img7 from '../assets/images/img 7.jpeg';
import img8 from '../assets/images/img 8.jpeg';
import img9 from '../assets/images/img 9.jpeg';
import img10 from '../assets/images/img 10.jpeg';
import img11 from '../assets/images/img 11.jpeg';
import img12 from '../assets/images/img 12.jpeg';

function About() {
  return (
    <main className="section">
      <div className="container">
        <h1>About Us</h1>
        <p className="mb-3">We are a small team passionate about crafting delightful web experiences with React.</p>
        
        <div className="grid">
          <div className="card">
            <h3>Our Mission</h3>
            <p>To deliver elegent, create unforgettable and memorable moments for every event and train baristas to serve with passion and skill.</p>
          </div>
          
        </div>

        <div className="about-gallery">
          <h2 className="text-center mb-4">Our Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={img1} alt="Gallery Image 1" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img2} alt="Gallery Image 2" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img3} alt="Gallery Image 3" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img4} alt="Gallery Image 4" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img5} alt="Gallery Image 5" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img7} alt="Gallery Image 7" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img8} alt="Gallery Image 8" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img9} alt="Gallery Image 9" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img10} alt="Gallery Image 10" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img11} alt="Gallery Image 11" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={img12} alt="Gallery Image 12" className="gallery-image" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About; 