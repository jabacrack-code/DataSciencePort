import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Projects Portfolio' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header-container">
      <div className="header-title-section">
        <h1>Kelvin Wang'ondu Maina</h1>
        <p className="header-subtitle">Data Analyst | Data Scientist</p>
        <p className="header-phd" style={{ margin: '0 0 1.5rem 0' }}>BSc Mathematics and Computer Science &nbsp;·&nbsp; Jomo Kenyatta University of Agriculture and Technology, 2023</p>
      </div>

      <nav className="nav-bar">
        <div className="nav-links">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              {index > 0 && <span className="nav-separator">|</span>}
              <button
                onClick={() => setActiveTab(tab.id)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  font: 'inherit',
                  textDecoration: activeTab === tab.id ? 'underline' : 'none',
                  fontWeight: activeTab === tab.id ? 'bold' : 'normal'
                }}
              >
                {tab.label}
              </button>
            </React.Fragment>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="mailto:kelvinmainahh@gmail.com" className="nav-email">
            kelvinmainahh@gmail.com
          </a>
          <span className="nav-separator">|</span>
          <a href="tel:+254758297857" className="nav-email">+254 758 297 857</a>
          <span className="nav-separator">|</span>
          <a href="tel:+254715113130" className="nav-email">0715 113 130</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
