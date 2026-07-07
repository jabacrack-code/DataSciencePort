import React from 'react';
import { Download, Github, MapPin, Mail, Link as LinkIcon } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-img-container">
        {/* Placeholder for the user's profile image */}
        <div style={{ fontSize: '4rem', color: 'var(--text-tertiary)' }}>👤</div>
      </div>
      
      <h1>John Doe</h1>
      <div className="title">
        I am a certified data scientist professional who loves building machine learning models and write blogs on AI technologies.
      </div>
      
      <div className="sidebar-buttons">
        <a href="#" className="btn">
          <Download size={16} className="btn-icon" />
          Resume
        </a>
        <a href="#" className="btn">
          <Github size={16} className="btn-icon" />
          GitHub
        </a>
      </div>
      
      <div className="sidebar-links">
        <div className="sidebar-link">
          <MapPin size={16} />
          <span>San Francisco, CA</span>
        </div>
        <a href="mailto:hello@example.com" className="sidebar-link">
          <Mail size={16} />
          <span>hello@example.com</span>
        </a>
        <a href="#" className="sidebar-link">
          <LinkIcon size={16} />
          <span>https://johndoe.work</span>
        </a>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)' }}><FaLinkedin size={20} /></a>
          <a href="#" style={{ color: 'var(--text-secondary)' }}><FaGithub size={20} /></a>
          <a href="#" style={{ color: 'var(--text-secondary)' }}><FaTwitter size={20} /></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
