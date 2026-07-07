import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    subject: '',
    message: '',
    method: 'email'
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodChange = (method) => {
    setFormData((prev) => ({ ...prev, method }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const { name, contactInfo, subject, message, method } = formData;

    try {
      // Send via Formspree — delivers straight to kelvinmainahh@gmail.com
      const response = await fetch('https://formspree.io/f/xdkownpg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          _replyto: contactInfo,
          subject: `[${method.toUpperCase()} via Portfolio] ${subject}`,
          message: `From: ${name}\nContact: ${contactInfo}\nPreferred Method: ${method}\n\n${message}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Also open native client as backup for SMS
        if (method === 'sms') {
          const smsBody = `From: ${name} (${contactInfo})\nSubj: ${subject}\nMsg: ${message}`;
          window.open(`sms:+254758297857?body=${encodeURIComponent(smsBody)}`, '_blank');
        }
        setTimeout(() => {
          setStatus('idle');
          setFormData({ name: '', contactInfo: '', subject: '', message: '', method: 'email' });
        }, 6000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid rgba(0,0,0,0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    fontSize: '1rem',
    color: 'var(--text-primary)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <div className="content-section" id="contact" style={{ maxWidth: '700px' }}>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', textAlign: 'center', marginBottom: '2.5rem' }}>
        Fill in the form and your message will be delivered directly to my inbox or phone.
      </p>

      {/* Success state */}
      {status === 'success' && (
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.6)', border: '1px solid var(--border-card)',
          padding: '2.5rem', textAlign: 'center', borderRadius: '4px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <CheckCircle size={48} color="#2e7d32" />
          <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Message Sent!</h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
            Your message has been delivered to <strong>kelvinmainahh@gmail.com</strong>.
            {formData.method === 'sms' && ' An SMS app has also been opened on your device.'}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0 }}>
            Kelvin will get back to you shortly.
          </p>
        </div>
      )}

      {/* Error state */}
      {status === 'error' && (
        <div style={{
          backgroundColor: 'rgba(255,235,235,0.8)', border: '1px solid #e57373',
          padding: '1rem 1.5rem', borderRadius: '4px', display: 'flex',
          alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'
        }}>
          <AlertCircle size={20} color="#c62828" />
          <p style={{ margin: 0, color: '#c62828', fontSize: '0.95rem' }}>
            Something went wrong. Please try again or email directly at{' '}
            <a href="mailto:kelvinmainahh@gmail.com" style={{ color: '#c62828' }}>kelvinmainahh@gmail.com</a>.
          </p>
        </div>
      )}

      {/* Form */}
      {status !== 'success' && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Method selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            {['email', 'sms'].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => handleMethodChange(m)}
                style={{
                  flex: 1, padding: '0.75rem',
                  backgroundColor: formData.method === m ? 'var(--button-dark)' : 'rgba(255,255,255,0.4)',
                  color: formData.method === m ? '#ffffff' : 'var(--text-primary)',
                  border: '1px solid var(--button-dark)', borderRadius: '4px',
                  cursor: 'pointer', fontWeight: '500',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  gap: '0.5rem', transition: 'all 0.2s'
                }}
              >
                {m === 'email' ? <><Mail size={16} /> Send Email</> : <><MessageSquare size={16} /> Send SMS</>}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Your Name</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Your Email or Phone</label>
            <input type="text" name="contactInfo" required value={formData.contactInfo} onChange={handleChange} placeholder="email@example.com or +254..." style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Subject</label>
            <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Project Collaboration" style={inputStyle} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Message</label>
            <textarea
              name="message" required rows={5} value={formData.message}
              onChange={handleChange} placeholder="Type your message here..."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="read-more-btn"
            style={{
              padding: '0.8rem', fontSize: '1rem', marginTop: '0.5rem',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.5rem', opacity: status === 'sending' ? 0.7 : 1,
              cursor: status === 'sending' ? 'wait' : 'pointer'
            }}
          >
            <Send size={16} />
            {status === 'sending' ? 'Sending...' : formData.method === 'email' ? 'Send Email' : 'Send SMS'}
          </button>
        </form>
      )}

      {/* Social Links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem' }}>
        <a href="https://linkedin.com/in/kelvin-maina" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a href="https://github.com/jabacrack-code" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
