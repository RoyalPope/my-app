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
          <h1>Welcome to Big &P</h1>
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

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="mb-3">Have a question or feedback? Send us a message.</p>
          <div className="card">
            {contactNotice ? (
              <div className="alert alert-success" role="status" aria-live="polite">{contactNotice}</div>
            ) : null}
            {contactError ? (
              <div className="alert alert-error" role="alert" aria-live="assertive">{contactError}</div>
            ) : null}
            <form className="grid" style={{ gridTemplateColumns: '1fr 1fr' }} onSubmit={handleContactSubmit}>
              <div>
                <label className="mb-1" htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="John Doe" className="mt-1" value={contactName} onChange={(e) => setContactName(e.target.value)} />
              </div>
              <div>
                <label className="mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="john@example.com" className="mt-1" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="mb-1" htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help?" className="mt-1" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home; 