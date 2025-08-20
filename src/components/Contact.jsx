import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = 'effendishema02@gmail.com';
    const subject = encodeURIComponent(`New message from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="section">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="mb-3">Have a question or feedback? Send us a message.</p>
        <div className="card">
          <form className="grid" style={{ gridTemplateColumns: '1fr 1fr' }} action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="9cfeaf4e-1d1b-4647-9f38-793b2e32c098" />
            <div>
              <label className="mb-1" htmlFor="name">Names</label>
              <input id="name" type="text" placeholder="John Doe" className="mt-1" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="john@example.com" className="mt-1" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="mb-1" htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="How can we help?" className="mt-1" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact; 