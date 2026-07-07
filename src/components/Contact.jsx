import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    subject: '',
    message: '',
    method: 'email' // 'email' or 'sms'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodChange = (method) => {
    setFormData((prev) => ({ ...prev, method }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contactInfo, subject, message, method } = formData;
    
    // Construct the message text
    const emailBody = `Name: ${name}\nContact Info: ${contactInfo}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const smsBody = `From: ${name} (${contactInfo})\nSubj: ${subject}\nMsg: ${message}`;

    // Display instant visual success state on screen
    setSubmitted(true);

    // Trigger local application redirect
    if (method === 'email') {
      const mailtoUrl = `mailto:kelvinmainahh@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    } else {
      const smsUrl = `sms:+254758297857?body=${encodeURIComponent(smsBody)}`;
      window.location.href = smsUrl;
    }

    // Reset success state after a few seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        contactInfo: '',
        subject: '',
        message: '',
        method: 'email'
      });
    }, 5000);
  };

  return (
    <div className="content-section" id="contact" style={{ maxWidth: '700px' }}>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', textAlign: 'center', marginBottom: '2.5rem' }}>
        Fill out the form below and choose how you would like to connect. Submitting will open your default email client or SMS application directly.
      </p>

      {submitted ? (
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          border: '1px solid var(--border-card)',
          padding: '2.5rem',
          textAlign: 'center',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          animation: 'fade-in 0.5s ease'
        }}>
          <CheckCircle size={48} color="#2e3531" />
          <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Message Prepared!</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
            We've opened your device's native <strong>{formData.method === 'email' ? 'Email client' : 'SMS client'}</strong> to complete the delivery.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', margin: '0.5rem 0 0 0' }}>
            (Note: If no app opened, make sure you have a default mail or messaging client configured on your system).
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Contact Method Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <button
              type="button"
              onClick={() => handleMethodChange('email')}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: formData.method === 'email' ? 'var(--button-dark)' : 'rgba(255, 255, 255, 0.4)',
                color: formData.method === 'email' ? '#ffffff' : 'var(--text-primary)',
                border: '1px solid var(--button-dark)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
            >
              <Mail size={16} /> Email Direct
            </button>
            <button
              type="button"
              onClick={() => handleMethodChange('sms')}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: formData.method === 'sms' ? 'var(--button-dark)' : 'rgba(255, 255, 255, 0.4)',
                color: formData.method === 'sms' ? '#ffffff' : 'var(--text-primary)',
                border: '1px solid var(--button-dark)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }}
            >
              <MessageSquare size={16} /> SMS Direct (+254...)
            </button>
          </div>

          {/* Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              style={{
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Your Email or Phone Number</label>
            <input
              type="text"
              name="contactInfo"
              required
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="email@example.com or +123456789"
              style={{
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration"
              style={{
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              style={{
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            className="read-more-btn"
            style={{
              padding: '0.8rem',
              fontSize: '1rem',
              marginTop: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <Send size={16} /> Send {formData.method === 'email' ? 'Email' : 'SMS'}
          </button>
        </form>
      )}

      {/* Social Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem' }}>
        <a href="https://linkedin.com/in/kelvin-maina" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
