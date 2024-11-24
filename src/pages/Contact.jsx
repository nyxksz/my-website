import React from 'react';
import './style.css'; // Ensure your CSS file is linked

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me through the following channels:</p>

      <div className="contact-info">
        <h2 className="homepage">Social Media</h2>
        <div className="social-links">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/800px-X_logo.jpg"
              alt="X"
              className="social-icon"
            />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
        </div>
      </div>

      <div className="message-section">
        <h2>Send a Message</h2>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Your Email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Your Message"></textarea>
          </label>
          <button className="cta-button" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
