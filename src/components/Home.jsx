import React, { useState } from 'react';
import logo from '../assets/images/logo.jpeg';
import img6 from '../assets/images/img 6.jpeg';
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
import Contact from './Contact';

function Home() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactNotice, setContactNotice] = useState('');
  const [contactError, setContactError] = useState('');

  const sendViaMailto = () => {
    const to = 'effendishema02@gmail.com';
    const subject = encodeURIComponent(`New message from ${contactName || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactNotice('');
    setContactError('');
    try {
      const res = await fetch('http://localhost:4000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: contactName, email: contactEmail, message: contactMessage })
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to send');
      }
      setContactNotice('Your message was sent successfully. Thank you!');
      if (data.previewUrl) {
        setContactNotice(prev => `${prev} Preview (dev): ${data.previewUrl}`);
      }
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setTimeout(() => setContactNotice(''), 7000);
    } catch (err) {
      setContactError('Sending failed. Opening your email app instead.');
      setTimeout(() => setContactError(''), 6000);
      sendViaMailto();
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-logo">
            <img src={logo} alt="Company Logo" className="logo-image" />
          </div>
          <h1>Welcome to BNS&P</h1>
          <p>We are a team of professionals who are dedicated to providing the best possible service to our clients.</p>
          <div className="mt-3">
            <button>Get Started</button>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="section" id="events">
        <div className="container">
          <div className="bottom-image-container">
          
            <div className="inline-headings">
              <h3>Boss Niyomugabo</h3>
            </div>
            <img src={img6} alt="Barista training Event planer" className="bottom-image" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <h1>Our Services</h1>
          <div className="grid services-grid">
            <div className="card service-card">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 20h16M6 16h12l-1-4H7l-1 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12c0-2.209 2.239-4 5-4s5 1.791 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 8c.5-.6 1.667-1 3-1s2.5.4 3 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <h3>Wedding and birthday cakes</h3>
              <p className="service-description">Custom cakes, cupcakes, and pastries designed to match your theme and make every celebration sweet.</p>
            </div>
            <div className="card service-card">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 3h12l-1 6a5 5 0 0 1-5 4 5 5 0 0 1-5-4L6 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M7 19c0-1.657 2.239-3 5-3s5 1.343 5 3v1H7v-1Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 8h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <h3>Coffee and fresh juice in the events</h3>
              <p className="service-description">On-site specialty coffee bar and fresh-pressed juices to energize your guests throughout the event.</p>
            </div>
            <div className="card service-card">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Protocol&service</h3>
              <p className="service-description">Professional protocol, ushering, and guest hospitality to ensure a seamless and welcoming experience.</p>
            </div>
            <div className="card service-card">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 19h16M6 17l6-3 6 3M6 7l6-3 6 3M6 7v10M18 7v10M12 4v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>Barista training</h3>
              <p className="service-description">Hands-on barista coaching: espresso fundamentals, milk texturing, latte art, workflow, and service.</p>
            </div>
            <div className="card service-card">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 8h18M8 4v4M16 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="7" y="12" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <h3>Event planer</h3>
              <p className="service-description">End-to-end event planning: concept, coordination, vendors, timelines, and on-site setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
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
      </section>
      <section className="section" id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default Home; 